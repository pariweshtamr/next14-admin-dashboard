"use client"
import { usePathname } from "next/navigation"
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="p-[20px] rounded-[10px] bg-secondary flex items-center justify-between">
      <div className="text-secondaryTxt capitalize font-bold">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-[10px]">
          <MdSearch />
          <input
            type="text"
            placeholder="...Search"
            className="bg-transparent border-none outline-none text-txtColor"
          />
        </div>
        <div className="flex gap-[20px]">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}
export default Navbar
