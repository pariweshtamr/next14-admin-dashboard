import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md"
import MenuLink from "./menuLink/MenuLink"
import Image from "next/image"
import { auth, signOut } from "@/app/auth"
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Orders",
        path: "/dashboard/orders",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
]
const Sidebar = async () => {
  const { user } = await auth()
  return (
    <div className="sticky top-[40px]">
      <div className="flex items-center gap-[20px] mb-[20px]">
        <Image
          src={user?.photo || "/no-avatar.webp"}
          alt="user-img"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm font-[500]">Pariwesh Tamrakar</span>
          <span className="text-secondaryTxt text-[12px]">Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-secondaryTxt font-bold text-[13px] m-[10px_0]">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button className="flex items-center text-sm gap-[10px] p-[15px] m-[5px_0] cursor-pointer rounded-[10px] bg-none border-none w-full hover:bg-[#2e374a]">
          <MdLogout /> Logout
        </button>
      </form>
    </div>
  )
}
export default Sidebar
