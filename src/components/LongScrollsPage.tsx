import { useState } from 'react';
import { cultureAssets } from '../data/assets';

const chapters = [
  {
    era: '汉唐',
    title: '关河初开，万里同风',
    text: '驼铃与经卷越过关塞，寺塔、商旅与异域器物在长安灯火里相遇。',
    image: cultureAssets.silkRoadMap,
  },
  {
    era: '魏晋',
    title: '山林清谈，云水生心',
    text: '名士寄情山水，玄风与佛理互相照映，清峻的精神气象渐入画卷。',
    image: cultureAssets.buddhistScroll,
  },
  {
    era: '宋元',
    title: '市井烟火，雅意入器',
    text: '茶烟、书画、寺钟与海潮汇入日常，文明不只在庙堂，也在灯市与舟楫之间。',
    image: cultureAssets.oceanScroll,
  },
  {
    era: '明清',
    title: '宫观深处，旧梦仍温',
    text: '山门、祠庙与民间信愿彼此交织，古老风物在岁时节令中延续余香。',
    image: cultureAssets.daoScroll,
  },
];

export function LongScrollsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = chapters[activeIndex];

  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">文脉长图</p>
        <h1>岁月成轴，风物有序</h1>
        <p className="hero-subtitle">
          让朝代、山川与人间器物彼此牵连，像一条暗金丝线穿过千年。
        </p>
      </section>

      <section className="scroll-archive">
        <aside className="archive-era-list">
          <p className="eyebrow">岁时刻度</p>
          {chapters.map((chapter, index) => (
            <button
              className={activeIndex === index ? 'active' : ''}
              type="button"
              key={chapter.era}
              onClick={() => setActiveIndex(index)}
            >
              <span>{chapter.era}</span>
              <strong>{chapter.title}</strong>
            </button>
          ))}
        </aside>

        <article className="archive-reader">
          <div className="archive-image-window">
            <img src={active.image} alt={active.title} />
          </div>
          <div className="archive-copy">
            <span>{active.era}</span>
            <h2>{active.title}</h2>
            <p>{active.text}</p>
          </div>
        </article>

        <aside className="archive-side-scrolls">
          <p className="eyebrow">卷影余香</p>
          {[cultureAssets.buddhistScroll, cultureAssets.daoScroll, cultureAssets.oceanScroll].map((image, index) => (
            <div className="archive-scroll-slice" key={image}>
              <img src={image} alt={`长卷局部 ${index + 1}`} />
            </div>
          ))}
        </aside>
      </section>
    </div>
  );
}
