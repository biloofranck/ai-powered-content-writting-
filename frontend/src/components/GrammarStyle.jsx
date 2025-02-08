import { useState } from 'react';
import axios from 'axios';

function GrammarStyle() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/content/grammar-style', { text });
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Grammar and Style Suggestion</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <div>{result}</div>
    </div>
  );
}

export default GrammarStyle;
