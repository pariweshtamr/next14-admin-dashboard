const AddUserPage = () => {
  return (
    <div className="bg-secondary p-[20px] rounded-[10px] mt-[20px]">
      <form className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          className="w-[48%]"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="w-[48%]"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="w-[48%]"
        />
        <input
          type="phone"
          placeholder="phone"
          name="phone"
          className="w-[48%]"
        />
        <select name="isAdmin" id="isAdmin" className="w-[48%]">
          <option value="">Is Admin?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select name="isActive" id="isActive" className="w-[48%]">
          <option value="">Is Active?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <input
          type="text"
          placeholder="address"
          name="address"
          className="w-full"
        />
        <button
          type="submit"
          className="w-full p-[20px] bg-[teal] text-txtColor border-none rounded-[5px] cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
export default AddUserPage
