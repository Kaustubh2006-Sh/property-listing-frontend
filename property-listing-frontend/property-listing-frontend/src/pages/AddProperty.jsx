function AddProperty() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Add New Property</h1>
      <form className="grid gap-4 max-w-md">
        <input className="border p-2" placeholder="Owner Name" />
        <input className="border p-2" placeholder="Location" />
        <input className="border p-2" placeholder="Price" />
        <textarea className="border p-2" placeholder="Description"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  )
}

export default AddProperty
