import { useState } from 'react';
import { cultureAssets } from '../data/assets';
import { buddhistSites } from '../data/buddhistSites';

export function BuddhistMapPanel() {
  const [activeSiteId, setActiveSiteId] = useState(buddhistSites[1].id);
  const activeSite = buddhistSites.find((site) => site.id === activeSiteId) ?? buddhistSites[0];

  return (
    <section className="ornate-panel map-panel">
      <div className="panel-heading">
        <p className="eyebrow">核心地图</p>
        <h2>佛教文化地图</h2>
      </div>
      <p className="panel-intro">点击重点文化节点，查看佛教传播与艺术演化的代表地点。</p>

      <div className="map-stage">
        <img src={cultureAssets.buddhistMap} alt="中国佛教地图" />
        {buddhistSites.map((site) => (
          <button
            className={`map-hotspot ${site.id === activeSiteId ? 'active' : ''}`}
            type="button"
            key={site.id}
            style={{ left: `${site.x}%`, top: `${site.y}%` }}
            onClick={() => setActiveSiteId(site.id)}
            aria-label={`查看${site.name}`}
          >
            <span>{site.name}</span>
          </button>
        ))}
      </div>

      <div className="site-inspector">
        <div>
          <span>{activeSite.location}</span>
          <h3>{activeSite.name}</h3>
          <p>{activeSite.description}</p>
        </div>
        <div className="site-list">
          {buddhistSites.map((site) => (
            <button
              className={site.id === activeSiteId ? 'active' : ''}
              type="button"
              key={site.id}
              onClick={() => setActiveSiteId(site.id)}
            >
              {site.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
