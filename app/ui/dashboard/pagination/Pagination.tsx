const Pagination = () => {
  return (
    <div className="mt-[20px] flex justify-between">
      <button className="p-[5px_10px] cursor-pointer disabled:cursor-not-allowed bg-slate-700">
        Previous
      </button>
      <button className="p-[5px_10px] cursor-pointer disabled:cursor-not-allowed bg-slate-700">
        Next
      </button>
    </div>
  )
}
export default Pagination
