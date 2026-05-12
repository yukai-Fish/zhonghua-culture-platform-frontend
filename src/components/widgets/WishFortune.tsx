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
    <section className="experience-module wish-module">
      <div className="module-heading">
        <h3>愿望摇签</h3>
      </div>
      <label className="field-label">
        <span>写下一个愿望或想问的问题</span>
        <textarea
          value={wish}
          onChange={(event) => setWish(event.target.value)}
          placeholder="在此输入您的愿望或问题..."
          maxLength={100}
          rows={3}
        />
        <small className="wish-count">{wish.length}/100</small>
      </label>
      <button className="gold-button ritual-primary wish-submit" type="button" onClick={drawFortune}>
        摇一签
      </button>
      <div className="fortune-card wish-result-card" key={`${fortune?.name ?? 'none'}-${wish.length}`}>
        <span>此签结果</span>
        {fortune ? (
          <>
            <h4>{fortune.name}</h4>
            <p>偈语：{fortune.verse}</p>
            <p>解签：{fortune.explanation}</p>
          </>
        ) : (
          <p>此签结果将在您摇签后显示</p>
        )}
      </div>
      <div className="wish-mode-tabs" aria-label="祈愿步骤">
        <button type="button">写愿</button>
        <button type="button" className="active">抽签</button>
        <button type="button">读句</button>
        <button type="button">观影</button>
      </div>
    </section>
  );
}
