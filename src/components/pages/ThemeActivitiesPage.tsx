interface ThemeActivitiesPageProps {
  onEnterBuddhism: () => void;
}

const books = [
  {
    title: '心经',
    status: '可阅读',
    desc: '展示原文、现代汉语翻译、关键词解释和段落释义，适合一期经典译解演示。',
  },
  {
    title: '金刚经',
    status: '可阅读',
    desc: '用于演示选段解释、收藏批注和公域阅读到私域感悟的路径闭环。',
  },
  {
    title: '四川佛教地标札记',
    status: '资料库',
    desc: '围绕峨眉山、乐山大佛等试点资源，补充历史介绍、文化内涵和游览向导。',
  },
];

export function ThemeActivitiesPage({ onEnterBuddhism }: ThemeActivitiesPageProps) {
  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">藏书阁</p>
        <h1>公域经典阅读与智能释义</h1>
        <p className="hero-subtitle">
          藏书阁只展示当前佛教主题相关书籍，区分原文、翻译、释义和用户感悟，保持权威内容边界。
        </p>
      </section>

      <section className="activity-grid library-grid">
        {books.map((book) => (
          <article className="activity-card" key={book.title}>
            <span>{book.status}</span>
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <button className="gold-button" type="button" onClick={onEnterBuddhism}>
              取书阅读
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
