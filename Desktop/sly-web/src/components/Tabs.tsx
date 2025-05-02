export default function Tabs() {
  return (
    <div className="flex justify-between border-b mb-4">
      <button className="py-2 px-4 border-b-2 border-blue-500 font-semibold">AI 입찰</button>
      <button className="py-2 px-4">결과</button>
      <button className="py-2 px-4">보관함</button>
      <button className="py-2 px-4">설정</button>
    </div>
  );
}
