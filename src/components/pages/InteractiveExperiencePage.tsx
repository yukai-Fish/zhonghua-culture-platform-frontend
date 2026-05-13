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
  const [fortuneIndex, setFortuneIndex] = useState(0);
  const [quizResult, setQuizResult] = useState('');
  const [quizOpen, setQuizOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState('学业');
  const activeVerse = verses[verseIndex];
  const activeFortune = verses[fortuneIndex];

  const drawVerse = () => {
    setVerseIndex((current) => (current + 1) % verses.length);
  };

  const drawFortune = () => {
    setFortuneIndex((current) => (current + 1) % verses.length);
  };

  const answerQuiz = (option: string) => {
    setQuizResult(option === quiz.answer ? '答对了，已生成一张文化知识卡。' : `再想想：${quiz.answer}`);
  };

  return (
    <div className="page nav-page page-fade ritual-page">
      <section className="nav-page-hero ritual-hero">
        <h1>一念起处，万象有回应</h1>
      </section>

      <section className="ritual-grid">
        <article className="ritual-card ritual-card-woodfish">
          <h2>电子木鱼</h2>
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
          <h2>每日偈语</h2>
          <div className="ritual-verse-paper">
            <blockquote>{activeVerse.text}</blockquote>
          </div>
          <div className="ritual-actions">
            <button className="gold-button ritual-primary" type="button" onClick={drawVerse}>
              换一句
            </button>
            <button className="ghost-button ritual-secondary" type="button">
              收藏
            </button>
          </div>
          <img className="ritual-asset ritual-scroll-image" src={cultureAssets.ritualCalendar} alt="每日偈语日历" loading="lazy" decoding="async" />
        </article>

        <article className="ritual-card ritual-card-fortune">
          <h2>愿望摇签</h2>
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
          <button className="gold-button ritual-primary" type="button" onClick={drawFortune}>
            摇一支签
          </button>
          <div className="fortune-card ritual-fortune-result">
            <span>{selectedTag}</span>
            <p>{activeFortune.meaning}</p>
          </div>
          <img className="ritual-asset ritual-fortune-image" src={cultureAssets.ritualFortuneTube} alt="摇签签筒" loading="lazy" decoding="async" />
        </article>

        <article className="ritual-card ritual-card-merit">
          <h2>功德林</h2>
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
            <h2>文化小游戏</h2>
            <div className="ritual-actions">
              <button className="gold-button ritual-primary" type="button" onClick={() => setQuizOpen(true)}>开始答题</button>
              <button className="ghost-button" type="button">排行榜</button>
            </div>
            {!!quizResult && <p className="ritual-quiz-feedback">{quizResult}</p>}
          </div>
        </article>
      </section>

      {quizOpen && (
        <div className="library-reader-modal" role="dialog" aria-modal="true" aria-label="文化小游戏答题弹窗">
          <div className="library-reader-modal-inner ritual-quiz-modal">
            <button className="close-button" type="button" onClick={() => setQuizOpen(false)}>关闭</button>
            <div className="ritual-quiz-panel">
              <h3>{quiz.question}</h3>
              {quiz.options.map((option, index) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => {
                    answerQuiz(option);
                    setQuizOpen(false);
                  }}
                >
                  <strong>{String.fromCharCode(65 + index)}</strong>
                  <span>{option.replace('文脉长图、文化地图、地点展示', '佛教')}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

