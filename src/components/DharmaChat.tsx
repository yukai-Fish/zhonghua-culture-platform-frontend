import { useState } from 'react';
import { dharmaReplies } from '../data/fortunes';

export function DharmaChat() {
  const [question, setQuestion] = useState('');
  const [reply, setReply] = useState(dharmaReplies[0]);

  const askDharma = () => {
    const seed = question.trim().length + Math.floor(Math.random() * dharmaReplies.length);
    setReply(dharmaReplies[seed % dharmaReplies.length]);
  };

  return (
    <section className="experience-module">
      <h3>与达摩智慧对话</h3>
      <label className="field-label">
        <span>写下你的问题</span>
        <textarea
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="我最近很迷茫怎么办？"
          rows={3}
        />
      </label>
      <button className="gold-button" type="button" onClick={askDharma}>
        请达摩作答
      </button>
      <div className="chat-bubble">
        <span>达摩</span>
        <p>{reply}</p>
      </div>
    </section>
  );
}
