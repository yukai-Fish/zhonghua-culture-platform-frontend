import { DharmaChat } from './DharmaChat';
import { LongmenVideoDemo } from './LongmenVideoDemo';
import { ScriptureExplain } from './ScriptureExplain';
import { WishFortune } from './WishFortune';

interface InteractiveExperiencePageProps {
  onEnterBuddhism: () => void;
}

export function InteractiveExperiencePage({ onEnterBuddhism }: InteractiveExperiencePageProps) {
  return (
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">交互体验</p>
        <h1>让文化内容可以被参与</h1>
        <p className="hero-subtitle">
          汇集影像、对话、签文和经文释义等本地互动 demo，作为主题文化旅程中的体验节点。
        </p>
      </section>

      <section className="experience-page-grid">
        <article className="experience-showcase wide">
          <LongmenVideoDemo />
        </article>
        <article className="experience-showcase">
          <DharmaChat />
        </article>
        <article className="experience-showcase">
          <WishFortune />
        </article>
        <article className="experience-showcase">
          <ScriptureExplain />
        </article>
      </section>

      <section className="section-block compact nav-cta">
        <div>
          <p className="eyebrow">推荐路径</p>
          <h2>先看佛教长图，再进入体验节点</h2>
        </div>
        <button className="gold-button" type="button" onClick={onEnterBuddhism}>
          前往佛教文化之旅
        </button>
      </section>
    </div>
  );
}
