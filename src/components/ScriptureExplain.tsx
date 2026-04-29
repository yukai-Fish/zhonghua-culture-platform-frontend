import { useState } from 'react';
import { scriptures } from '../data/scriptures';

export function ScriptureExplain() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const scripture = scriptures[index];

  const nextScripture = () => {
    setIndex((current) => (current + 1) % scriptures.length);
    setExpanded(false);
  };

  return (
    <section className="experience-module">
      <h3>经文释义</h3>
      <div className="scripture-card">
        <blockquote>{scripture.text}</blockquote>
        {expanded && <p>{scripture.meaning}</p>}
      </div>
      <div className="button-row">
        <button className="gold-button" type="button" onClick={() => setExpanded((value) => !value)}>
          {expanded ? '收起释义' : '查看释义'}
        </button>
        <button className="ghost-button" type="button" onClick={nextScripture}>
          换一句
        </button>
      </div>
    </section>
  );
}
