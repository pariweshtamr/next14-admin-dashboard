"use server"
import { revalidatePath } from "next/cache"
import { Product, User } from "./models"
import { connectToDB } from "./utils"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"
import { signIn } from "../auth"

export const addUser = async (formData: addUserFormData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData)

  try {
    connectToDB()

    // check if user already exists
    const userExists = await User.findOne({ email })

    if (userExists?._id) {
      return {
        status: "error",
        message:
          "An account with this email address already exists! Please log in.",
      }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    })
  } catch (error) {
    console.log(error)
    throw new Error("Failed to add user!")
  }

  revalidatePath("/dashboard/users/add")
  redirect("/dashboard/users")
}

export const deleteUser = async (formData: deleUserData) => {
  const { _id } = Object.fromEntries(formData)

  try {
    connectToDB()

    await User.findByIdAndDelete(_id)
  } catch (error) {
    console.log(error)
    throw new Error("Failed to delete product!")
  }

  revalidatePath("/dashboard/products/add")
}

export const updateUser = async (formData) => {
  const { _id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData)

  try {
    connectToDB()
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    }
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    )

    await User.findByIdAndUpdate(_id, updateFields)
  } catch (error) {
    console.log(error)
    throw new Error("Failed to update user!")
  }

  revalidatePath("/dashboard/users/add")
  redirect("/dashboard/users")
}

export const addProduct = async (formData) => {
  const { title, desc, price, stock, img, color, size } =
    Object.fromEntries(formData)

  try {
    connectToDB()

    await Product.create({
      title,
      desc,
      price,
      stock,
      img,
      color,
      size,
    })
  } catch (error) {
    console.log(error)
    throw new Error("Failed to add product!")
  }

  revalidatePath("/dashboard/products/add")
  redirect("/dashboard/products")
}
export const deleteProduct = async (formData) => {
  const { _id } = Object.fromEntries(formData)

  try {
    connectToDB()

    await Product.findByIdAndDelete(_id)
  } catch (error) {
    console.log(error)
    throw new Error("Failed to delete product!")
  }

  revalidatePath("/dashboard/products/add")
}

export const updateProduct = async (formData) => {
  const { _id, title, desc, price, stock, img, color, size } =
    Object.fromEntries(formData)

  try {
    connectToDB()
    const updateFields = {
      title,
      desc,
      price,
      stock,
      img,
      color,
      size,
    }
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    )

    await Product.findByIdAndUpdate(_id, updateFields)
  } catch (error) {
    console.log(error)
    throw new Error("Failed to update product!")
  }

  revalidatePath("/dashboard/products/add")
  redirect("/dashboard/products")
}

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn("credentials", { username, password })
  } catch (error) {
    return "Wrong credentials!"
  }
}
