import FilterBar from '@/components/FilterBar'
import Tabs from '@/components/Tabs'
import BidCard from '@/components/BidCard'

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Bidding Main</h1>
      <FilterBar />
      <Tabs />
      <div className="mt-6 space-y-4">
        <BidCard title="경주시 교육청" rate={0.29551} />
        <BidCard title="경북 공공기관" rate={0.21242} />
      </div>
    </main>
  )
}
