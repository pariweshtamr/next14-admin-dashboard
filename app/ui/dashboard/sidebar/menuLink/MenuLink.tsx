"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MenuLink = ({ item }: MenuLinkType) => {
  const pathname = usePathname()
  return (
    <Link
      href={item.path}
      className={`flex items-center text-sm gap-[10px] p-[15px] hover:bg-[#2e374a] my-[5px] rounded-[10px] ${
        pathname === item.path && "bg-[#2e374a]"
      }`}
    >
      {item.icon} {item.title}
    </Link>
  )
}
export default MenuLink
