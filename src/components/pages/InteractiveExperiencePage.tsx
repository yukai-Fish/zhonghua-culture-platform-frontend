import { useState } from 'react';

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
  question: '一期万象图的三个核心区域是什么？',
  answer: '文脉长图、文化地图、地点展示',
  options: ['文脉长图、文化地图、地点展示', '商城、排行、抽奖', '新闻流、直播间、积分榜'],
};

export function InteractiveExperiencePage() {
  const [woodfishCount, setWoodfishCount] = useState(0);
  const [verseIndex, setVerseIndex] = useState(0);
  const [quizResult, setQuizResult] = useState('');
  const activeVerse = verses[verseIndex];

  const drawVerse = () => {
    setVerseIndex((current) => (current + 1) % verses.length);
  };

  const answerQuiz = (option: string) => {
    setQuizResult(option === quiz.answer ? '答对了，已生成一张文化知识卡。' : `再想想：${quiz.answer}`);
  };

  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">感应场</p>
        <h1>仪式感与轻量互动</h1>
        <p className="hero-subtitle">
          按产品文档要求，互动功能服务文化理解和情绪舒缓，不做迷信承诺，也不引入强排名。
        </p>
      </section>

      <section className="workshop-grid ritual-workshop-grid">
        <article className="workshop-card seal-workshop">
          <div>
            <p className="eyebrow">电子木鱼</p>
            <h2>轻敲一次，烦恼少一分</h2>
            <p>点击木鱼产生轻反馈，记录为今日修心次数。</p>
            <button className="woodfish-button" type="button" onClick={() => setWoodfishCount((count) => count + 1)}>
              木鱼
            </button>
          </div>
          <div className="seal-preview merit-preview" aria-label="功德计数">
            <span>+{woodfishCount}</span>
          </div>
        </article>

        <article className="workshop-card ambience-workshop">
          <div>
            <p className="eyebrow">每日偈语</p>
            <h2>{activeVerse.text}</h2>
            <p>{activeVerse.meaning}</p>
            <button className="gold-button" type="button" onClick={drawVerse}>
              转动偈语轮
            </button>
          </div>
          <div className="ambience-stage">
            <span>可收藏分享</span>
            <p>偈语卡片后续可进入禅修房个人书架。</p>
          </div>
        </article>

        <article className="workshop-card pattern-workshop">
          <div>
            <p className="eyebrow">愿望摇签</p>
            <h2>给一个温和的今日提醒</h2>
            <p>摇签只提供鼓励性文化解读，不进行命运断言。</p>
            <button className="gold-button" type="button" onClick={drawVerse}>
              摇一支鼓励签
            </button>
          </div>
          <div className="fortune-card">
            <span>今日提醒</span>
            <p>{activeVerse.meaning}</p>
          </div>
        </article>

        <article className="workshop-card ambience-workshop">
          <div>
            <p className="eyebrow">文化小游戏</p>
            <h2>{quiz.question}</h2>
            <div className="scene-buttons">
              {quiz.options.map((option) => (
                <button type="button" key={option} onClick={() => answerQuiz(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="ambience-stage">
            <span>学习反馈</span>
            <p>{quizResult || '选择一个答案，系统给出知识反馈。'}</p>
          </div>
        </article>
      </section>
    </div>
  );
}
