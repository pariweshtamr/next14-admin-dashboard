import { MdSearch } from "react-icons/md"

const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-[10px] text-sm">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none outline-none text-txtColor"
      />
    </div>
  )
}
export default Search
