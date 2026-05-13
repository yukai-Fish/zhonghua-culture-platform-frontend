# Design Assets Governance

- `public/assets/` is for deployable files only.
- Put editable source files (PSD/AI/high-res PNG exports) in `design-assets/raw/`.
- Files under `design-assets/raw/` are ignored by Git to prevent accidental deployment.
- When promoting an asset to production, export an optimized version (prefer `webp`/`mp4`) into `public/assets/`.
