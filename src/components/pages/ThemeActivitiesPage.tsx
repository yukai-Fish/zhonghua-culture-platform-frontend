interface ThemeActivitiesPageProps {
  onEnterBuddhism: () => void;
}

const activities = [
  {
    title: '石窟灯影夜游',
    status: '已开放',
    desc: '龙门、云冈与敦煌的岩壁之间，佛光、线刻与壁画余音一同苏醒。',
  },
  {
    title: '丝路驼铃入梦',
    status: '筹备中',
    desc: '大漠风声穿过关塞，商旅、器物与信仰在古道上彼此相认。',
  },
  {
    title: '洞天云水雅集',
    status: '筹备中',
    desc: '名山深处有松风鹤影，宫观灯火与修真旧闻隐入烟霞。',
  },
];

export function ThemeActivitiesPage({ onEnterBuddhism }: ThemeActivitiesPageProps) {
  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">主题活动</p>
        <h1>良辰有约，古意成席</h1>
        <p className="hero-subtitle">
          当山河、器物与传说再度相逢，一场场雅集便在云烟深处亮起灯火。
        </p>
      </section>

      <section className="activity-grid">
        {activities.map((activity) => (
          <article className="activity-card" key={activity.title}>
            <span>{activity.status}</span>
            <h2>{activity.title}</h2>
            <p>{activity.desc}</p>
            <button className={activity.status === '已开放' ? 'gold-button' : 'ghost-button'} type="button" onClick={activity.status === '已开放' ? onEnterBuddhism : undefined}>
              {activity.status === '已开放' ? '入席' : '候启'}
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
