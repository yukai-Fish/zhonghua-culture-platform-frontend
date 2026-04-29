import { useState } from 'react';
import { DharmaChat } from './DharmaChat';
import { LongmenVideoDemo } from './LongmenVideoDemo';
import { ScriptureExplain } from './ScriptureExplain';
import { WishFortune } from './WishFortune';

type ExperienceTab = 'dharma' | 'scripture' | 'fortune' | 'longmen';

const tabs: Array<{ id: ExperienceTab; label: string }> = [
  { id: 'dharma', label: '与达摩交流' },
  { id: 'scripture', label: '经文释义' },
  { id: 'fortune', label: '愿望摇签' },
  { id: 'longmen', label: '龙门石窟' },
];

export function ExperienceCenterPanel() {
  const [activeTab, setActiveTab] = useState<ExperienceTab>('dharma');

  return (
    <aside className="ornate-panel experience-panel" id="experience-center">
      <div className="panel-heading">
        <p className="eyebrow">沉浸互动</p>
        <h2>佛教文化体验中心</h2>
      </div>
      <div className="experience-tabs" role="tablist" aria-label="佛教文化体验功能">
        {tabs.map((tab) => (
          <button
            className={activeTab === tab.id ? 'active' : ''}
            type="button"
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="experience-body">
        {activeTab === 'dharma' && <DharmaChat />}
        {activeTab === 'scripture' && <ScriptureExplain />}
        {activeTab === 'fortune' && <WishFortune />}
        {activeTab === 'longmen' && <LongmenVideoDemo />}
      </div>
    </aside>
  );
}
