import { execSync } from "node:child_process";

const MAX_SIZE_BYTES = 8 * 1024 * 1024;
const blockedExt = new Set([".zip", ".7z", ".rar", ".psd", ".ai", ".sketch", ".xcf"]);
const blockedNamePattern = /(^|\/)(source|raw)(\/|$)|-source\./i;

function run(cmd) {
  return execSync(cmd, { encoding: "utf8" }).trim();
}

function fail(lines) {
  console.error("\n[repo-guard] Commit blocked:\n");
  for (const line of lines) console.error(`- ${line}`);
  console.error("\nMove raw assets to design-assets/raw/ and keep deployable files in public/assets/.\n");
  process.exit(1);
}

let files = [];
const staged = run("git diff --cached --name-only --diff-filter=ACMR");
if (staged) {
  files = staged.split(/\r?\n/).filter(Boolean);
  console.log(`[repo-guard] Checking ${files.length} staged file(s).`);
} else {
  const tracked = run("git ls-files");
  files = tracked ? tracked.split(/\r?\n/).filter(Boolean) : [];
  console.log(`[repo-guard] No staged files found, checking ${files.length} tracked file(s).`);
}

const violations = [];
for (const file of files) {
  const normalized = file.replace(/\\/g, "/");
  const lower = normalized.toLowerCase();
  const dot = lower.lastIndexOf(".");
  const ext = dot >= 0 ? lower.slice(dot) : "";

  if (blockedExt.has(ext)) {
    violations.push(`${normalized}: blocked file extension ${ext}`);
  }

  if (blockedNamePattern.test(lower) && lower.startsWith("public/assets/")) {
    violations.push(`${normalized}: looks like raw/source asset under public/assets`);
  }

  try {
    const sizeRaw = run(`git cat-file -s :"${normalized}"`);
    const size = Number(sizeRaw);
    if (Number.isFinite(size) && size > MAX_SIZE_BYTES) {
      violations.push(`${normalized}: ${Math.round(size / 1024 / 1024)}MB exceeds 8MB limit`);
    }
  } catch {
    violations.push(`${normalized}: unable to inspect staged blob size`);
  }
}

if (violations.length) fail(violations);
console.log("[repo-guard] OK");
