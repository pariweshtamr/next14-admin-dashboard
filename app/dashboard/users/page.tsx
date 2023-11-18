import Pagination from "@/app/ui/dashboard/pagination/Pagination"
import Search from "@/app/ui/dashboard/search/Search"
import Image from "next/image"
import Link from "next/link"

const UsersPage = () => {
  return (
    <div className="bg-secondary p-[20px] rounded-[10px] mt-[20px]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href={"/dashboard/users/add"}>
          <button className="p-[6px_10px] text-sm bg-[#5d57c9] text-txtColor border-none rounded-[5px] cursor-pointer">
            Add New
          </button>
        </Link>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex gap-[10px] items-center">
                <Image
                  src={"/no-avatar.webp"}
                  alt="user-img"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                Pariwesh Tamrakar
              </div>
            </td>
            <td>pariwesh@gmail.com</td>
            <td>13/01/2023</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className="flex gap-[10px]">
                <Link href={"/dashboard/users/id"}>
                  <button
                    className={`p-[5px_10px] rounded-[5px] text-textColor border-none cursor-pointer bg-[teal]`}
                  >
                    View
                  </button>
                </Link>
                <button
                  className={`p-[5px_10px] rounded-[5px] text-textColor border-none cursor-pointer bg-[crimson]`}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
export default UsersPage
