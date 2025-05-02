export default function FilterBar() {
  return (
    <div className="flex gap-2 mb-4">
      <button className="border px-3 py-1 rounded">전기</button>
      <button className="border px-3 py-1 rounded">실내건축</button>
      <button className="border px-3 py-1 rounded">경북</button>
      <button className="border px-3 py-1 rounded">경주</button>
      <button className="ml-auto text-blue-500">🔄 새로고침</button>
    </div>
  );
}
