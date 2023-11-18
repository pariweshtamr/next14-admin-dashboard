"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Pagination = ({ count }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const page = searchParams.get("page") || 1

  const params = new URLSearchParams(searchParams)
  const ITEM_PER_PAGE = 5

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1)
    replace(`${pathname}?${params}`)
  }

  return (
    <div className="mt-[20px] flex justify-between">
      <button
        className="p-[5px_10px] cursor-pointer disabled:cursor-not-allowed disabled:text-slate-400 bg-slate-700"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className="p-[5px_10px] cursor-pointer disabled:cursor-not-allowed disabled:text-slate-400 bg-slate-700"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  )
}
export default Pagination
