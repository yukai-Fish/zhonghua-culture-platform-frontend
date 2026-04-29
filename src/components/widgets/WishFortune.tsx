import { useState } from 'react';
import { fortunes, type Fortune } from '../../data/fortunes';

export function WishFortune() {
  const [wish, setWish] = useState('');
  const [fortune, setFortune] = useState<Fortune | null>(null);

  const drawFortune = () => {
    const seed = wish.trim().length + Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[seed % fortunes.length]);
  };

  return (
    <section className="experience-module">
      <h3>愿望摇签</h3>
      <label className="field-label">
        <span>写下一个愿望</span>
        <input
          value={wish}
          onChange={(event) => setWish(event.target.value)}
          placeholder="希望项目成功"
        />
      </label>
      <button className="gold-button" type="button" onClick={drawFortune}>
        摇一签
      </button>
      {fortune && (
        <div className="fortune-card" key={`${fortune.name}-${wish.length}`}>
          <span>签文</span>
          <h4>{fortune.name}</h4>
          <p>偈语：{fortune.verse}</p>
          <p>解签：{fortune.explanation}</p>
        </div>
      )}
      <small className="disclaimer">本功能仅为文化互动体验，不具有真实预测或宗教占卜含义。</small>
    </section>
  );
}
