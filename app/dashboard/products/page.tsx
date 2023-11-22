import { deleteProduct } from "@/app/lib/actions"
import { fetchProducts } from "@/app/lib/data"
import Pagination from "@/app/ui/dashboard/pagination/Pagination"
import Search from "@/app/ui/dashboard/search/Search"
import Image from "next/image"
import Link from "next/link"

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>
}) => {
  const q = searchParams?.q ?? ""
  console.log(q)
  const page = parseInt(searchParams?.page ?? "1")
  const { count, products } = await fetchProducts(q, page)

  return (
    <div className="bg-secondary p-[20px] rounded-[10px] mt-[20px]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a product..." />
        <Link href={"/dashboard/products/add"}>
          <button className="p-[6px_10px] text-sm bg-[#5d57c9] text-txtColor border-none rounded-[5px] cursor-pointer">
            Add New
          </button>
        </Link>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>
                <div className="flex gap-[10px] items-center">
                  <Image
                    src={product?.img || "/noproduct.jpg"}
                    alt="user-img"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {product?.title}
                </div>
              </td>
              <td>{product?.desc?.slice(0, 35)}...</td>
              <td>${product?.price}</td>
              <td>{product?.createdAt?.toString().slice(4, 16)}</td>
              <td>{product?.stock}</td>
              <td>
                <div className="flex gap-[10px]">
                  <Link href={`/dashboard/products/${product?._id}`}>
                    <button
                      className={`p-[5px_10px] rounded-[5px] text-textColor border-none cursor-pointer bg-[teal]`}
                    >
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input
                      type="hidden"
                      name="_id"
                      value={product._id.toString()}
                    />
                    <button
                      className={`p-[5px_10px] rounded-[5px] text-textColor border-none cursor-pointer bg-[crimson]`}
                    >
                      Delete
                    </button>
                  </form>
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
export default ProductsPage
