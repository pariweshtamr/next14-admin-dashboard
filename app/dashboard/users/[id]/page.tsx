import { updateUser } from "@/app/lib/actions"
import { fetchUser } from "@/app/lib/data"
import Image from "next/image"

const SingleUserPage = async ({ params }) => {
  const { id } = params

  const user = await fetchUser(id)
  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-1 bg-secondary p-[20px] rounded-[10px] font-bold text-secondaryTxt h-max">
        <div className="w-full h-[260px] relative rounded-[10px] overflow-hidden mb-[20px]">
          <Image src={user?.photo || "/no-avatar.webp"} alt="user-img" fill />
        </div>
        {user?.username}
      </div>

      <div className="flex-[3] bg-secondary p-[20px] rounded-[10px]">
        <form action={updateUser} className="flex flex-col">
          <input type="hidden" name="_id" value={user?._id.toString()} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user?.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user?.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user?.phone} />
          <label>Address</label>
          <input type="text" name="address" placeholder={user?.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="yes" selected={user.isAdmin}>
              Yes
            </option>
            <option value="no" selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="yes" selected={user.isActive}>
              Yes
            </option>
            <option value="no" selected={!user.isActive}>
              No
            </option>
          </select>
          <button className="bg-[teal] w-full p-[15px] border-none rounded-[5px] cursor-pointer text-txtColor mt-[20px]">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}
export default SingleUserPage
