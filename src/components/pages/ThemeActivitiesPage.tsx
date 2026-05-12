interface ThemeActivitiesPageProps {
  onEnterBuddhism: () => void;
}

const books = [
  {
    title: '心经',
    status: '可阅读',
    desc: '以清澈短章照见般若智慧，原文、白话与关键词并读。',
  },
  {
    title: '金刚经',
    status: '可阅读',
    desc: '从“不住于相”的句义进入，慢慢读出放下与观照。',
  },
  {
    title: '四川佛教地标札记',
    status: '资料库',
    desc: '峨眉山、乐山大佛与山水行旅相连，翻阅一方佛教地景。',
  },
];

export function ThemeActivitiesPage({ onEnterBuddhism }: ThemeActivitiesPageProps) {
  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">藏书阁</p>
        <h1>取一卷经典，慢慢读懂</h1>
        <p className="hero-subtitle">
          经典、注释、地标札记陈列于此。选一段原文，对照白话释义，把当下的理解轻轻记下。
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
