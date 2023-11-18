import { fetchUsers } from "@/app/lib/data"
import Pagination from "@/app/ui/dashboard/pagination/Pagination"
import Search from "@/app/ui/dashboard/search/Search"
import Image from "next/image"
import Link from "next/link"

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || ""
  const page = searchParams?.page || 1
  const { count, users } = await fetchUsers(q, page)

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
          {users?.map((user) => (
            <tr key={user?._id}>
              <td>
                <div className="flex gap-[10px] items-center">
                  <Image
                    src={user?.photo || "/no-avatar.webp"}
                    alt="user-img"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {user?.username}
                </div>
              </td>
              <td>{user?.email}</td>
              <td>{user?.createdAt?.toString().slice(4, 16)}</td>
              <td>{user?.isAdmin ? "Admin" : "Staff"}</td>
              <td>{user?.isActive ? "active" : "inactive"}</td>
              <td>
                <div className="flex gap-[10px]">
                  <Link href={`/dashboard/users/${user?._id}`}>
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
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}
export default UsersPage
