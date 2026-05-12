import { useEffect, useMemo, useState } from 'react';
import { cultureAssets } from '../../data/assets';

const scenes = ['四川云海', '福建听雨', '山间风声', '海潮祈愿'];

export function CreativeShopPage() {
  const [seconds, setSeconds] = useState(300);
  const [running, setRunning] = useState(false);
  const [scene, setScene] = useState(scenes[0]);
  const [note, setNote] = useState('');
  const [savedNote, setSavedNote] = useState('今日尚未记录私密感悟。');

  useEffect(() => {
    if (!running) {
      return;
    }

    const timer = window.setInterval(() => {
      setSeconds((current) => {
        if (current <= 1) {
          setRunning(false);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [running]);

  const timeText = useMemo(() => {
    const minute = Math.floor(seconds / 60).toString().padStart(2, '0');
    const second = (seconds % 60).toString().padStart(2, '0');
    return `${minute}:${second}`;
  }, [seconds]);

  return (
    <div className="page nav-page page-fade meditation-page">
      <section className="nav-page-hero meditation-hero">
        <h1>禅修房</h1>
      </section>

      <section className="meditation-grid-redesign">
        <article className="meditation-card meditation-timer-card">
          <img src={cultureAssets.meditationCloudSea} alt="四川云海" loading="lazy" decoding="async" />
          <div className="meditation-card-body">
            <span>{scene}</span>
            <h2>{timeText}</h2>
            <p>选择声景并开始五分钟冥想，结束后生成一条个人修身记录。</p>
            <div className="scene-buttons meditation-actions">
              <button className="gold-button ritual-primary" type="button" onClick={() => setRunning((value) => !value)}>
                {running ? '暂停冥想' : '开始冥想'}
              </button>
              <button className="ghost-button" type="button" onClick={() => {
                setSeconds(300);
                setRunning(false);
              }}>
                重置
              </button>
            </div>
          </div>
        </article>

        <article className="meditation-card meditation-library-card">
          <img src={cultureAssets.meditationBookshelf} alt="个人书架" loading="lazy" decoding="async" />
          <div className="meditation-card-body">
            <span>个人书架</span>
            <h2>收藏的经典与卡片</h2>
            <p>从藏书阁收藏的书籍、段落和偈语卡片会进入个人书架，支持继续阅读和标注。</p>
            <div className="meditation-badges">
              <em>12 本藏书</em>
              <em>8 张卡片</em>
              <em>继续阅读</em>
            </div>
          </div>
        </article>

        <article className="meditation-card journal-panel meditation-journal-card">
          <div className="meditation-card-body">
            <span>私密感悟</span>
            <h2>写给自己的片刻</h2>
            <textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="写下今日读经心得或情绪随笔" rows={5} />
            <button className="gold-button ritual-primary" type="button" onClick={() => {
              setSavedNote(note.trim() || '今天选择安静坐一会儿，也是一条记录。');
              setNote('');
            }}>
              保存记录
            </button>
            <p>{savedNote}</p>
          </div>
        </article>

        <article className="meditation-card meditation-scene-card">
          <div className="meditation-card-body">
            <span>声景系统</span>
            <h2>按文化主题匹配氛围</h2>
            <div className="scene-buttons">
              {scenes.map((item) => (
                <button className={scene === item ? 'active' : ''} type="button" key={item} onClick={() => setScene(item)}>
                  {item}
                </button>
              ))}
            </div>
            <p>根据所选主题自动匹配白噪音与氛围声景。</p>
          </div>
        </article>

        <article className="meditation-card meditation-summary-card">
          <div className="meditation-card-body">
            <span>今日修身记录</span>
            <h2>静心数据一览</h2>
            <div className="meditation-summary-grid">
              <div><small>本周冥想</small><strong>4 次</strong></div>
              <div><small>连续记录</small><strong>3 天</strong></div>
              <div><small>收藏卡片</small><strong>8 张</strong></div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

