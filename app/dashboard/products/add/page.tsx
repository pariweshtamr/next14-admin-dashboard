import { addProduct } from "@/app/lib/actions"

const AddProductPage = () => {
  return (
    <div className="bg-secondary p-[20px] rounded-[10px] mt-[20px]">
      <form action={addProduct} className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className="w-[45%]"
        />
        <select name="cat" id="cat" className="w-[45%]">
          <option value="">-- Select Category --</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          className="w-[45%]"
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          className="w-[45%]"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="w-[45%]"
        />
        <input type="text" placeholder="size" name="size" className="w-[45%]" />
        <textarea
          name="desc"
          id="desc"
          rows={16}
          placeholder="Description"
          className="w-full"
        ></textarea>
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
export default AddProductPage
