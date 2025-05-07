
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ 업종: '전기', 금액: '', 경쟁자수: '', 발주처: '', 키워드: '' });
  const [result, setResult] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setResult(data.predicted_rate);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>경북 경주 입찰 예측기</h1>
      <form onSubmit={handleSubmit}>
        <select name="업종" value={form.업종} onChange={handleChange}>
          <option value="전기">전기</option>
          <option value="실내건축">실내건축</option>
        </select><br/>
        <input name="금액" type="number" placeholder="금액" value={form.금액} onChange={handleChange} required /><br/>
        <input name="경쟁자수" type="number" placeholder="경쟁자 수" value={form.경쟁자수} onChange={handleChange} required /><br/>
        <input name="발주처" type="text" placeholder="발주처" value={form.발주처} onChange={handleChange} required /><br/>
        <input name="키워드" type="text" placeholder="공고 키워드" value={form.키워드} onChange={handleChange} required /><br/>
        <button type="submit">예측하기</button>
      </form>
      {result !== null && <h2>예측 사정률: {result}</h2>}
    </div>
  );
}
