import Image from "next/image"

const SingleProductPage = () => {
  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-1 bg-secondary p-[20px] rounded-[10px] font-bold text-secondaryTxt h-max">
        <div className="w-full h-[260px] relative rounded-[10px] overflow-hidden mb-[20px]">
          <Image src={"/no-avatar.webp"} alt="user-img" fill />
        </div>
        Nike Air Max
      </div>

      <div className="flex-[3] bg-secondary p-[20px] rounded-[10px]">
        <form className="flex flex-col">
          <label>Title</label>
          <input type="text" name="title" placeholder="Pariwesh" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$$$" />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <input type="text" name="size" placeholder="M" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value=""></option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={6}
            placeholder="description"
          ></textarea>
          <button className="bg-[teal] w-full p-[15px] border-none rounded-[5px] cursor-pointer text-txtColor mt-[20px]">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}
export default SingleProductPage
