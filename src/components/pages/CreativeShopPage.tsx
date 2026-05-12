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
    <div className="page nav-page page-fade">
      <section className="nav-page-hero">
        <p className="eyebrow">禅修房</p>
        <h1>私域个人修身空间</h1>
        <p className="hero-subtitle">
          点一段声景，坐一会儿，写下一点心中所感。这里安静、克制，也只属于你。
        </p>
      </section>

      <section className="shop-grid meditation-grid">
        <article className="shop-card meditation-timer-card">
          <img src={cultureAssets.longmenCover} alt="禅修氛围" loading="lazy" decoding="async" />
          <div>
            <span>{scene}</span>
            <h2>{timeText}</h2>
            <p>选择声景并开始五分钟冥想，结束后生成一条个人禅修记录。</p>
            <div className="scene-buttons">
              <button type="button" onClick={() => setRunning((value) => !value)}>
                {running ? '暂停冥想' : '开始冥想'}
              </button>
              <button type="button" onClick={() => {
                setSeconds(300);
                setRunning(false);
              }}>
                重置
              </button>
            </div>
          </div>
        </article>

        <article className="shop-card">
          <img src={cultureAssets.shopScroll} alt="个人书架" loading="lazy" decoding="async" />
          <div>
            <span>个人书架</span>
            <h2>收藏的经典与卡片</h2>
            <p>从藏书阁收藏的书籍、段落和偈语卡片会进入个人书架，支持继续阅读和标注。</p>
          </div>
        </article>

        <article className="shop-card journal-panel">
          <div>
            <span>私密感悟</span>
            <h2>写给自己的片刻</h2>
            <textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="写下今日读经心得或情绪随笔" rows={5} />
            <button className="gold-button" type="button" onClick={() => {
              setSavedNote(note.trim() || '今天选择安静坐一会儿，也是一条记录。');
              setNote('');
            }}>
              保存记录
            </button>
            <p>{savedNote}</p>
          </div>
        </article>

        <article className="shop-card">
          <div>
            <span>声景系统</span>
            <h2>按文化主题匹配氛围</h2>
            <div className="scene-buttons">
              {scenes.map((item) => (
                <button className={scene === item ? 'active' : ''} type="button" key={item} onClick={() => setScene(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
