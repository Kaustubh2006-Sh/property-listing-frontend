function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sample Cards */}
        <div className="border p-4 rounded shadow">Property 1</div>
        <div className="border p-4 rounded shadow">Property 2</div>
      </div>
    </div>
  )
}

export default Home
