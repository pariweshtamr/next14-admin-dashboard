import { Product, User } from "./models"
import { connectToDB } from "./utils"

export const fetchUsers = async (q: string, page: number) => {
  const regex = new RegExp(q, "i")

  const ITEM_PER_PAGE = 5
  try {
    connectToDB()
    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments()
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
    return { count, users }
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch users!")
  }
}
export const fetchUser = async (_id: string) => {
  try {
    connectToDB()
    const user = await User.findById(_id)
    return user
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch user!")
  }
}

export const fetchProducts = async (q: string, page: number) => {
  const regex = new RegExp(q, "i")

  const ITEM_PER_PAGE = 5
  try {
    connectToDB()
    const count = await Product.find({
      title: { $regex: regex },
    }).countDocuments()
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
    return { count, products }
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch users!")
  }
}

export const fetchProduct = async (_id: string) => {
  try {
    connectToDB()
    const product = await Product.findById(_id)
    return product
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch user!")
  }
}
