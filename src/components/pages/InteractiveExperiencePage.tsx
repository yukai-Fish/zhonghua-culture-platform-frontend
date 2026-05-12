import { useState } from 'react';
import { cultureAssets } from '../../data/assets';

const verses = [
  {
    text: '诸行无常，是生灭法。',
    meaning: '承认变化，把注意力放回当下能完成的一小步。',
  },
  {
    text: '一切有为法，如梦幻泡影。',
    meaning: '把执着稍稍放轻，给情绪和判断留出余地。',
  },
  {
    text: '心如工画师，能画诸世间。',
    meaning: '心念会影响我们理解世界的方式，修心从觉察开始。',
  },
];

const quiz = {
  question: '万象图中可以看到哪些内容？',
  answer: '文脉长图、文化地图、地点展示',
  options: ['文脉长图、文化地图、地点展示', '商城、排行、抽奖', '新闻流、直播间、积分榜'],
};

export function InteractiveExperiencePage() {
  const [woodfishCount, setWoodfishCount] = useState(0);
  const [verseIndex, setVerseIndex] = useState(0);
  const [quizResult, setQuizResult] = useState('');
  const [selectedTag, setSelectedTag] = useState('学业');
  const activeVerse = verses[verseIndex];

  const drawVerse = () => {
    setVerseIndex((current) => (current + 1) % verses.length);
  };

  const answerQuiz = (option: string) => {
    setQuizResult(option === quiz.answer ? '答对了，已生成一张文化知识卡。' : `再想想：${quiz.answer}`);
  };

  return (
    <div className="page nav-page page-fade ritual-page">
      <section className="nav-page-hero ritual-hero">
        <p className="eyebrow">感应场</p>
        <h1>仪式感与轻量互动</h1>
        <p className="hero-subtitle">
          轻敲木鱼，转动偈语，抽取一张今日提醒，在温和互动里安顿片刻心绪。
        </p>
      </section>

      <section className="ritual-grid">
        <article className="ritual-card ritual-card-woodfish">
          <p className="eyebrow">电子木鱼</p>
          <h2>轻敲一下，留一分静心</h2>
          <p>点击木鱼，记录今日静心次数。</p>
          <div className="ritual-count-ring">
            <span>今日</span>
            <strong>{String(woodfishCount).padStart(2, '0')}</strong>
            <small>次</small>
          </div>
          <button className="gold-button ritual-primary" type="button" onClick={() => setWoodfishCount((count) => count + 1)}>
            开始敲木鱼
          </button>
          <img className="ritual-asset ritual-woodfish-image" src={cultureAssets.ritualWoodfish} alt="木鱼互动" loading="lazy" decoding="async" />
        </article>

        <article className="ritual-card ritual-card-verse">
          <p className="eyebrow">每日偈语</p>
          <h2>今日一句，安放心绪</h2>
          <div className="ritual-verse-paper">
            <blockquote>{activeVerse.text}</blockquote>
            <p>{activeVerse.meaning}</p>
          </div>
          <div className="ritual-actions">
            <button className="gold-button ritual-primary" type="button" onClick={drawVerse}>
              换一句
            </button>
            <button className="ghost-button" type="button">
              收藏
            </button>
          </div>
          <img className="ritual-asset ritual-scroll-image" src={cultureAssets.ritualScroll} alt="偈语卷轴" loading="lazy" decoding="async" />
        </article>

        <article className="ritual-card ritual-card-fortune">
          <p className="eyebrow">愿望摇签</p>
          <h2>给今天一个温和提醒</h2>
          <p>把心愿写给自己，也把答案留给时间。</p>
          <div className="ritual-tag-row">
            {['学业', '家庭', '事业', '心绪'].map((tag) => (
              <button
                className={selectedTag === tag ? 'active' : ''}
                type="button"
                key={tag}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <button className="gold-button ritual-primary" type="button" onClick={drawVerse}>
            摇一支签
          </button>
          <div className="fortune-card ritual-fortune-result">
            <span>{selectedTag}</span>
            <p>{activeVerse.meaning}</p>
          </div>
          <img className="ritual-asset ritual-fortune-image" src={cultureAssets.ritualFortuneTube} alt="摇签签筒" loading="lazy" decoding="async" />
        </article>

        <article className="ritual-card ritual-card-merit">
          <p className="eyebrow">功德林 / 今日记录</p>
          <h2>一点积累，慢慢生长</h2>
          <p>每一次善意与坚持，都是向上的力量。</p>
          <button className="gold-button ritual-primary" type="button">
            查看记录
          </button>
          <div className="ritual-metrics">
            <span>连续签到 12 天</span>
            <span>今日灵水 +3 滴</span>
            <span>静心记录 {String(woodfishCount).padStart(2, '0')} 次</span>
          </div>
          <img className="ritual-asset ritual-tree-image" src={cultureAssets.ritualMeritTree} alt="功德树" loading="lazy" decoding="async" />
        </article>

        <article className="ritual-card ritual-card-quiz">
          <div className="ritual-quiz-main">
            <p className="eyebrow">文化小游戏</p>
            <h2>今日一题，轻松知文化</h2>
            <p>趣味答题，了解文化，收获新知。</p>
            <div className="ritual-actions">
              <button className="gold-button ritual-primary" type="button">开始答题</button>
              <button className="ghost-button" type="button">排行榜</button>
            </div>
            <p className="ritual-quiz-feedback">{quizResult || '选择右侧答案，查看反馈。'}</p>
          </div>
          <div className="ritual-quiz-panel">
            <h3>{quiz.question}</h3>
            {quiz.options.map((option, index) => (
              <button type="button" key={option} onClick={() => answerQuiz(option)}>
                <strong>{String.fromCharCode(65 + index)}</strong>
                <span>{option.replace('文脉长图、文化地图、地点展示', '佛教')}</span>
              </button>
            ))}
          </div>
          <img className="ritual-asset ritual-quiz-bg" src={cultureAssets.ritualQuizBackground} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        </article>
      </section>
    </div>
  );
}
