import { useMemo, useState } from 'react';
import { cultureAssets } from '../../data/assets';

interface LibraryItem {
  id: string;
  title: string;
  status: '可阅读' | '资料库';
  desc: string;
  image: string;
  action: string;
  pages: string[];
}

const libraryItems: LibraryItem[] = [
  {
    id: 'heart',
    title: '心经',
    status: '可阅读',
    desc: '以清澈短章照见般若智慧，原文、白话与关键词并读，于简净文字中体会会心的自在与明澈。',
    image: cultureAssets.libraryHeartSutra,
    action: '取书阅读',
    pages: [
      '观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。',
      '色不异空，空不异色；色即是空，空即是色。受想行识，亦复如是。',
      '心无罣碍，无罣碍故，无有恐怖，远离颠倒梦想，究竟涅槃。',
    ],
  },
  {
    id: 'diamond',
    title: '金刚经',
    status: '可阅读',
    desc: '从“不住于相”的句义进入，慢慢读出放下与观照，在字里行间安住当下。',
    image: cultureAssets.libraryDiamondSutra,
    action: '取书阅读',
    pages: [
      '应无所住，而生其心。于一切境，不取于相，如如不动。',
      '凡所有相，皆是虚妄。若见诸相非相，即见如来。',
      '一切有为法，如梦幻泡影，如露亦如电，应作如是观。',
    ],
  },
  {
    id: 'sichuan',
    title: '四川佛教地标札记',
    status: '资料库',
    desc: '串联峨眉山、乐山大佛与川西佛教胜迹，记录山水人文与信仰印记，翻阅一方佛教地景。',
    image: cultureAssets.librarySichuanNotes,
    action: '翻阅札记',
    pages: [
      '峨眉金顶云海，梵音与山色相映，朝山步道在晨雾中缓缓展开。',
      '乐山大佛临三江而坐，千年风雨与水声共同塑造庄严气象。',
      '川西古刹依山就势，山门、经幢与香火构成一方佛教地景记忆。',
    ],
  },
];

const recentNotes = [
  { id: 'n1', quote: '“色不异空，空不异色，色即是空，空即是色。”', from: '《心经》', time: '今天 08:32', image: cultureAssets.libraryHeartSutra },
  { id: 'n2', quote: '“不住于相，如如不动”，放下执着，回归清明的当下。', from: '《金刚经》', time: '昨天 21:16', image: cultureAssets.libraryDiamondSutra },
  { id: 'n3', quote: '峨眉金顶云海，梵音与山色相映，心生敬畏。', from: '地标札记', time: '5月18日 10:45', image: cultureAssets.librarySichuanNotes },
  { id: 'n4', quote: '乐山大佛的水与山，见证千年信仰的沉静。', from: '地标札记', time: '5月16日 16:20', image: cultureAssets.librarySichuanNotes },
];

export function ThemeActivitiesPage() {
  const [activeFilter, setActiveFilter] = useState('经典阅读');
  const [readerBookId, setReaderBookId] = useState<string | null>(null);
  const [readerPageIndex, setReaderPageIndex] = useState(0);
  const [turnClass, setTurnClass] = useState('');
  const displayItems = useMemo(() => libraryItems, []);
  const readerBook = displayItems.find((item) => item.id === readerBookId) ?? null;

  const openReader = (id: string) => {
    setReaderBookId(id);
    setReaderPageIndex(0);
  };

  const closeReader = () => {
    setReaderBookId(null);
    setReaderPageIndex(0);
    setTurnClass('');
  };

  const turnPage = (direction: 'next' | 'prev') => {
    if (!readerBook) {
      return;
    }
    if (direction === 'next' && readerPageIndex >= readerBook.pages.length - 1) {
      return;
    }
    if (direction === 'prev' && readerPageIndex <= 0) {
      return;
    }

    setTurnClass(direction === 'next' ? 'turn-next' : 'turn-prev');
    window.setTimeout(() => {
      setReaderPageIndex((current) => current + (direction === 'next' ? 1 : -1));
    }, 110);
    window.setTimeout(() => {
      setTurnClass('');
    }, 280);
  };

  return (
    <div className="page nav-page page-fade library-page-redesign">
      <section className="nav-page-hero library-hero">
        <h1>翻一卷清风，照见本心</h1>
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
                onClick={() => openReader(item.id)}
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
              <img src={item.image} alt={`${item.from}相关插图`} loading="lazy" decoding="async" />
              <div>
                <p>{item.quote}</p>
                <small>{item.from} · {item.time}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      {readerBook && (
        <div className="library-reader-modal" role="dialog" aria-modal="true" aria-label={`${readerBook.title}阅读弹窗`}>
          <div className="library-reader-modal-inner">
            <button className="close-button" type="button" onClick={closeReader}>关闭</button>
            <div className="library-reader-head">
              <h3>{readerBook.title}</h3>
              <span>第 {readerPageIndex + 1} / {readerBook.pages.length} 页</span>
            </div>
            <p className={`library-reader-text ${turnClass}`}>{readerBook.pages[readerPageIndex]}</p>
            <div className="library-reader-actions">
              <button
                className="ghost-button"
                type="button"
                onClick={() => turnPage('prev')}
                disabled={readerPageIndex === 0}
              >
                上一页
              </button>
              <button
                className="gold-button ritual-primary"
                type="button"
                onClick={() => turnPage('next')}
                disabled={readerPageIndex === readerBook.pages.length - 1}
              >
                下一页
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

