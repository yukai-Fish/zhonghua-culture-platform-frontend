import { BuddhistJourneyScroll } from './BuddhistJourneyScroll';
import { BuddhistTimeline } from './BuddhistTimeline';
import { LongmenVideoDemo } from './LongmenVideoDemo';
import { ScriptureExplain } from './ScriptureExplain';
import { WishFortune } from './WishFortune';

interface BuddhistDetailPageProps {
  onHome: () => void;
}

export function BuddhistDetailPage({ onHome }: BuddhistDetailPageProps) {
  return (
    <div className="page buddhist-page journey-page page-fade">
      <section className="journey-hero">
        <button className="back-link" type="button" onClick={onHome}>
          返回首页
        </button>
        <p className="eyebrow">第二层 · 中华文化专题之旅</p>
        <h1>中 · 佛教文化之旅</h1>
        <p className="hero-subtitle">
          以佛教文脉长图为主线，点击图上点位查看文化简介，并沿着页面向下进入龙门石窟影像、求签解语与经文释义体验。
        </p>
      </section>

      <BuddhistJourneyScroll />

      <section className="journey-station" id="experience-center">
        <div className="station-index">01</div>
        <div className="station-copy">
          <p className="eyebrow">沉浸体验</p>
          <h2>龙门石窟影像驿站</h2>
          <p>从长图中的石窟节点进入影像空间，感受佛教造像、山水空间与东方审美的融合。</p>
        </div>
        <LongmenVideoDemo />
      </section>

      <section className="journey-station two-up">
        <div className="station-index">02</div>
        <div className="station-copy">
          <p className="eyebrow">互动体验</p>
          <h2>求签解语</h2>
          <p>写下愿望，生成一张本地签文卡片。此模块仅作文化互动演示，不含真实预测或宗教占卜含义。</p>
        </div>
        <WishFortune />
      </section>

      <section className="journey-station two-up">
        <div className="station-index">03</div>
        <div className="station-copy">
          <p className="eyebrow">经文结缘</p>
          <h2>经文释义</h2>
          <p>在经典语句与白话解释之间切换，以更轻的方式理解佛教思想进入日常生活的文化表达。</p>
        </div>
        <ScriptureExplain />
      </section>

      <BuddhistTimeline />

      <section className="section-block compact">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">第三层预告</p>
            <h2>更多专题旅程正在建设</h2>
          </div>
        </div>
        <div className="coming-theme-grid">
          {['道教文化之旅', '丝绸之路文化之旅', '茶文化之旅', '民族文化之旅'].map((theme) => (
            <button className="coming-chip" type="button" key={theme}>
              <span>{theme}</span>
              <small>敬请期待</small>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
