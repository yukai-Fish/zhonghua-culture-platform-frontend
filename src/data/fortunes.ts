export interface Fortune {
  name: string;
  verse: string;
  explanation: string;
}

export const fortunes: Fortune[] = [
  {
    name: '清风签',
    verse: '四时有序，静待花开。',
    explanation: '你所期待的结果需要耐心准备，先稳住节奏，再迎来变化。',
  },
  {
    name: '明灯签',
    verse: '心灯若明，前路自清。',
    explanation: '方向并不遥远，关键在于先把当下的一步走稳。',
  },
  {
    name: '云开签',
    verse: '云散月明，水到渠成。',
    explanation: '短期或有起伏，但整体趋势向好，保持定力即可。',
  },
  {
    name: '松月签',
    verse: '松立寒山，月照归程。',
    explanation: '遇到压力时保持节奏和边界，真正重要的事情会慢慢清晰。',
  },
];

export const dharmaReplies = [
  '心若不动，风又奈何。先看清当下，再决定远方。',
  '烦恼多由执念起，放下一分，天地便宽一分。',
  '路不在远方，而在脚下。先做好眼前这一件事。',
  '若心散乱，先息其气；若心迷惘，先定其神。',
  '万念纷至时，不必急着裁断；先让心安静，答案自会浮现。',
];
