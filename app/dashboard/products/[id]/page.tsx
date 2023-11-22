import { updateProduct } from "@/app/lib/actions"
import { fetchProduct } from "@/app/lib/data"
import Image from "next/image"

const SingleProductPage = async ({ params }) => {
  const { id } = params

  const product = await fetchProduct(id)
  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-1 bg-secondary p-[20px] rounded-[10px] font-bold text-secondaryTxt h-max">
        <div className="w-full h-[260px] relative rounded-[10px] overflow-hidden mb-[20px]">
          <Image src={"/no-avatar.webp"} alt="user-img" fill />
        </div>
        Nike Air Max
      </div>

      <div className="flex-[3] bg-secondary p-[20px] rounded-[10px]">
        <form action={updateProduct} className="flex flex-col">
          <input type="hidden" name="_id" value={product?._id.toString()} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product?.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product?.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product?.stock} />
          <label>Color</label>
          <input type="text" name="color" />
          <label>Size</label>
          <input type="text" name="size" placeholder="M" />
          <label>Category</label>
          <select name="cat" id="cat" defaultValue={product?.cat}>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={6}
            placeholder={product?.desc}
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
