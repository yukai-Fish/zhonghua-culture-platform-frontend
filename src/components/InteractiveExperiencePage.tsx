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
        <h1>一念入境，万籁有声</h1>
        <p className="hero-subtitle">
          石窟光影、禅语回声与签文清风，在屏息之间化作可亲近的文化余韵。
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
          <p className="eyebrow">循光而行</p>
          <h2>石窟在前，云水在后</h2>
        </div>
        <button className="gold-button" type="button" onClick={onEnterBuddhism}>
          入佛教文化之旅
        </button>
      </section>
    </div>
  );
}
