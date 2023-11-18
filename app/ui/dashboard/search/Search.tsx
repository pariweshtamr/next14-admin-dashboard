"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { MdSearch } from "react-icons/md"
import { useDebouncedCallback } from "use-debounce"

const Search = ({ placeholder }: SearchProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((e) => {
    const { value } = e.target
    const params = new URLSearchParams(searchParams)

    params.set("page", 1)

    if (value) {
      value.length > 2 && params.set("q", value)
    } else {
      params.delete("q")
    }
    replace(`${pathname}?${params}`)
  }, 600)

  return (
    <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-[10px] text-sm">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none outline-none text-txtColor"
        onChange={handleSearch}
      />
    </div>
  )
}
export default Search
