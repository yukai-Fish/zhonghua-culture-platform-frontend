import { useState } from 'react';
import { scriptures } from '../../data/scriptures';

export function ScriptureExplain() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const scripture = scriptures[index];

  const nextScripture = () => {
    setIndex((current) => (current + 1) % scriptures.length);
    setExpanded(false);
  };

  return (
    <section className="experience-module scripture-module">
      <div className="module-heading">
        <h3>经文释义</h3>
      </div>
      <div className="scripture-card scripture-card-paper">
        <blockquote>{scripture.text}</blockquote>
        {expanded && <p>{scripture.meaning}</p>}
      </div>
      <div className="button-row scripture-actions">
        <button className="gold-button ritual-primary" type="button" onClick={() => setExpanded((value) => !value)}>
          {expanded ? '收起释义' : '查看释义'}
        </button>
        <button className="ghost-button ritual-secondary" type="button" onClick={nextScripture}>
          换一句
        </button>
      </div>
      {expanded && (
        <p className="scripture-extended-copy">
          世间万物皆由因缘和合而生，瞬息万变，终将归于无常。放下执念，回归本心，方能见性成佛，得大自在。
        </p>
      )}
    </section>
  );
}
