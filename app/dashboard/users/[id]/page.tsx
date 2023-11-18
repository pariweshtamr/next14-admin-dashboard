import Image from "next/image"

const SingleUserPage = () => {
  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-1 bg-secondary p-[20px] rounded-[10px] font-bold text-secondaryTxt h-max">
        <div className="w-full h-[260px] relative rounded-[10px] overflow-hidden mb-[20px]">
          <Image src={"/no-avatar.webp"} alt="user-img" fill />
        </div>
        Pariwesh Tamrakar
      </div>

      <div className="flex-[3] bg-secondary p-[20px] rounded-[10px]">
        <form className="flex flex-col">
          <label>Username</label>
          <input type="text" name="username" placeholder="Pariwesh" />
          <label>Email</label>
          <input type="email" name="email" placeholder="pariwesh@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="0999999999" />
          <label>Address</label>
          <input type="text" name="address" placeholder="Sydney, Australia" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
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
