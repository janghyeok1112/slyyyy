interface Props {
  title: string;
  rate: number;
}

export default function BidCard({ title, rate }: Props) {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">AI 추천 사정률: {rate.toFixed(5)}</p>
      <div className="flex justify-between mt-2">
        <button className="text-blue-600 text-sm">입찰하러 가기</button>
        <button className="text-gray-500 text-sm">분석 자세히 보기</button>
      </div>
    </div>
  );
}
