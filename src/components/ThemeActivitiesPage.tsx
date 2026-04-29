interface ThemeActivitiesPageProps {
  onEnterBuddhism: () => void;
}

const activities = [
  {
    title: '佛教石窟数字导览周',
    status: '已开放',
    desc: '围绕龙门石窟、云冈石窟和敦煌莫高窟，组织线上导览与文化问答。',
  },
  {
    title: '丝路文明互鉴专题',
    status: '筹备中',
    desc: '以路线、人物、器物和信仰传播为线索，呈现丝绸之路中国篇。',
  },
  {
    title: '道教名山云游计划',
    status: '筹备中',
    desc: '从洞天福地、宫观建筑与修真文化切入，形成山水式线上活动。',
  },
];

export function ThemeActivitiesPage({ onEnterBuddhism }: ThemeActivitiesPageProps) {
  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">主题活动</p>
        <h1>把专题内容组织成活动现场</h1>
        <p className="hero-subtitle">
          这里用于承接线上导览、答题挑战、专题展映和文化活动。当前先完成活动页框架与佛教活动入口。
        </p>
      </section>

      <section className="activity-grid">
        {activities.map((activity) => (
          <article className="activity-card" key={activity.title}>
            <span>{activity.status}</span>
            <h2>{activity.title}</h2>
            <p>{activity.desc}</p>
            <button className={activity.status === '已开放' ? 'gold-button' : 'ghost-button'} type="button" onClick={activity.status === '已开放' ? onEnterBuddhism : undefined}>
              {activity.status === '已开放' ? '进入活动' : '敬请期待'}
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
