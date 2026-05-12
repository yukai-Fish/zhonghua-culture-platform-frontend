import { useMemo, useState } from 'react';
import { cultureAssets } from '../../data/assets';

interface ThemeActivitiesPageProps {
  onEnterBuddhism: () => void;
}

interface LibraryItem {
  id: string;
  title: string;
  status: '可阅读' | '资料库';
  desc: string;
  image: string;
  action: string;
}

const libraryItems: LibraryItem[] = [
  {
    id: 'heart',
    title: '心经',
    status: '可阅读',
    desc: '以清澈短章照见般若智慧，原文、白话与关键词并读，于简净文字中体会会心的自在与明澈。',
    image: cultureAssets.libraryHeartSutra,
    action: '取书阅读',
  },
  {
    id: 'diamond',
    title: '金刚经',
    status: '可阅读',
    desc: '从“不住于相”的句义进入，慢慢读出放下与观照，在字里行间安住当下。',
    image: cultureAssets.libraryDiamondSutra,
    action: '取书阅读',
  },
  {
    id: 'sichuan',
    title: '四川佛教地标札记',
    status: '资料库',
    desc: '串联峨眉山、乐山大佛与川西佛教胜迹，记录山水人文与信仰印记，翻阅一方佛教地景。',
    image: cultureAssets.librarySichuanNotes,
    action: '翻阅札记',
  },
];

const recentNotes = [
  { id: 'n1', quote: '“色不异空，空不异色，色即是空，空即是色。”', from: '《心经》', time: '今天 08:32', image: cultureAssets.libraryHeartSutra },
  { id: 'n2', quote: '“不住于相，如如不动”，放下执着，回归清明的当下。', from: '《金刚经》', time: '昨天 21:16', image: cultureAssets.libraryDiamondSutra },
  { id: 'n3', quote: '峨眉金顶云海，梵音与山色相映，心生敬畏。', from: '地标札记', time: '5月18日 10:45', image: cultureAssets.librarySichuanNotes },
  { id: 'n4', quote: '乐山大佛的水与山，见证千年信仰的沉静。', from: '地标札记', time: '5月16日 16:20', image: cultureAssets.librarySichuanNotes },
];

export function ThemeActivitiesPage({ onEnterBuddhism }: ThemeActivitiesPageProps) {
  const [activeFilter, setActiveFilter] = useState('经典阅读');
  const displayItems = useMemo(() => libraryItems, []);

  return (
    <div className="page nav-page page-fade library-page-redesign">
      <section className="nav-page-hero library-hero">
        <p className="eyebrow">藏书阁</p>
        <h1>取一卷经典，慢慢读懂</h1>
        <p className="hero-subtitle">经典、注释、地标札记陈列于此。选一段原文，对照白话释义，把当下的理解轻记下。</p>
      </section>

      <section className="library-filter-row" aria-label="藏书阁功能筛选">
        {['经典阅读', '白话释义', '地标札记', '我的书签'].map((item) => (
          <button
            className={activeFilter === item ? 'active' : ''}
            type="button"
            key={item}
            onClick={() => setActiveFilter(item)}
          >
            {item}
          </button>
        ))}
        <label className="library-search-box">
          <input type="search" placeholder="搜索经典、注释、札记" />
        </label>
      </section>

      <section className="library-main-grid">
        {displayItems.map((item) => (
          <article className="library-feature-card" key={item.id}>
            <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
            <div className="library-feature-body">
              <span>{item.status}</span>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button
                className="ghost-button"
                type="button"
                onClick={() => onEnterBuddhism()}
              >
                {item.action}
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="library-notes-section" aria-label="最近批注与继续阅读">
        <div className="library-notes-header">
          <h2>最近批注 / 继续阅读</h2>
          <button type="button">查看全部</button>
        </div>
        <div className="library-note-list">
          {recentNotes.map((item) => (
            <article className="library-note-card" key={item.id}>
              <img src={item.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              <div>
                <p>{item.quote}</p>
                <small>{item.from} · {item.time}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

