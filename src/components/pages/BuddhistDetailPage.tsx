import { BuddhistJourneyScroll } from '../sections/BuddhistJourneyScroll';
import { BuddhistTimeline } from '../sections/BuddhistTimeline';
import { LongmenVideoDemo } from '../widgets/LongmenVideoDemo';
import { ScriptureExplain } from '../widgets/ScriptureExplain';
import { WishFortune } from '../widgets/WishFortune';

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
        <p className="eyebrow">莲开东土 · 梵音入山河</p>
        <h1>一念千年，佛光行旅</h1>
        <p className="hero-subtitle">
          驼铃渡关，石窟含光，寺塔与云水在岁月深处静静相望。
        </p>
      </section>

      <BuddhistJourneyScroll />

      <section className="journey-station" id="experience-center">
        <div className="station-index">01</div>
        <div className="station-copy">
          <p className="eyebrow">石窟生辉</p>
          <h2>龙门月照万龛明</h2>
          <p>岩壁沉默，佛面含光，千年刀痕在一帧帧影像中重新泛起金色回声。</p>
        </div>
        <LongmenVideoDemo />
      </section>

      <section className="journey-station two-up">
        <div className="station-index">02</div>
        <div className="station-copy">
          <p className="eyebrow">清风一签</p>
          <h2>愿随云起，语落心间</h2>
          <p>把一念心愿交给纸上清风，所得不过片语，却也足以照见当下。</p>
        </div>
        <WishFortune />
      </section>

      <section className="journey-station two-up">
        <div className="station-index">03</div>
        <div className="station-copy">
          <p className="eyebrow">经声如水</p>
          <h2>一句入心，万象澄明</h2>
          <p>古老文字在唇齿之外回旋，像清泉照见尘世，也照见人心。</p>
        </div>
        <ScriptureExplain />
      </section>

      <BuddhistTimeline />

      <section className="section-block compact">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">山门未启</p>
            <h2>别有烟霞待后来</h2>
          </div>
        </div>
        <div className="coming-theme-grid">
          {['道教云水行', '丝路驼铃行', '茶烟入梦行', '民族风物行'].map((theme) => (
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
