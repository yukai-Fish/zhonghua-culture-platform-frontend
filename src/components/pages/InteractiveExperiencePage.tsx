import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';

const palettes = [
  { name: '朱砂金', colors: ['#9d3d27', '#d9ad66', '#2d1b10'] },
  { name: '青绿山水', colors: ['#2f6f67', '#8aa37b', '#1b2d2a'] },
  { name: '黛蓝月白', colors: ['#22324f', '#e8ddc4', '#111826'] },
];

const scenes = [
  {
    name: '山寺夜钟',
    verse: '钟声落入松风里，灯火沿着石阶慢慢上山。',
  },
  {
    name: '丝路晓行',
    verse: '沙色未醒，驼铃先至，远方在晨光里展开褶皱。',
  },
  {
    name: '海潮祈愿',
    verse: '潮声推开云影，船灯与香火在水面轻轻相认。',
  },
];

export function InteractiveExperiencePage() {
  const [sealText, setSealText] = useState('华夏');
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [sceneIndex, setSceneIndex] = useState(0);

  const activePalette = palettes[paletteIndex];
  const activeScene = scenes[sceneIndex];
  const sealLetters = useMemo(() => sealText.trim().slice(0, 4).split(''), [sealText]);

  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">交互体验</p>
        <h1>案上有风，指间生花</h1>
        <p className="hero-subtitle">
          以印、色、声与光影为引，让一缕古意在手边悄然醒来。
        </p>
      </section>

      <section className="workshop-grid">
        <article className="workshop-card seal-workshop">
          <div>
            <p className="eyebrow">印章小案</p>
            <h2>一方朱印，落纸成声</h2>
            <label className="field-label">
              <span>题字</span>
              <input value={sealText} maxLength={4} onChange={(event) => setSealText(event.target.value)} placeholder="华夏" />
            </label>
          </div>
          <div className="seal-preview" aria-label="印章预览">
            {sealLetters.length ? sealLetters.map((letter, index) => <span key={`${letter}-${index}`}>{letter}</span>) : <span>印</span>}
          </div>
        </article>

        <article className="workshop-card pattern-workshop">
          <div>
            <p className="eyebrow">纹样调色</p>
            <h2>取一抹旧色，染半幅山河</h2>
            <div className="palette-buttons">
              {palettes.map((palette, index) => (
                <button className={paletteIndex === index ? 'active' : ''} type="button" key={palette.name} onClick={() => setPaletteIndex(index)}>
                  {palette.name}
                </button>
              ))}
            </div>
          </div>
          <div className="pattern-board" style={{ '--tone-a': activePalette.colors[0], '--tone-b': activePalette.colors[1], '--tone-c': activePalette.colors[2] } as CSSProperties}>
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
        </article>

        <article className="workshop-card ambience-workshop">
          <div>
            <p className="eyebrow">灯影听风</p>
            <h2>换一处风景，听一段回声</h2>
            <div className="scene-buttons">
              {scenes.map((scene, index) => (
                <button className={sceneIndex === index ? 'active' : ''} type="button" key={scene.name} onClick={() => setSceneIndex(index)}>
                  {scene.name}
                </button>
              ))}
            </div>
          </div>
          <div className="ambience-stage">
            <span>{activeScene.name}</span>
            <p>{activeScene.verse}</p>
          </div>
        </article>
      </section>
    </div>
  );
}
