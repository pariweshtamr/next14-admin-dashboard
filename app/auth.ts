import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"
import { connectToDB } from "./lib/utils"
import { User } from "./lib/models"
import bcrypt from "bcrypt"

const login = async (credentials) => {
  try {
    connectToDB()
    const user = await User.findOne({ username: credentials.username })

    if (!user?._id) throw new Error("Wrong credentials!")

    const isPasswordMatch = await bcrypt.compare(
      credentials.password,
      user.password
    )

    if (!isPasswordMatch) throw new Error("Wrong credentials!")

    return user
  } catch (error) {
    console.log(error)
    throw new Error("Failed to Login!")
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          return user
        } catch (error) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username
        token.photo = user.photo
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username
        session.user.photo = token.photo
      }
      return session
    },
  },
})
