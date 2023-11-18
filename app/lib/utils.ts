import mongoose from "mongoose"

interface ConnectionInfo {
  isConnected?: number
}

export const connectToDB = async () => {
  const connection: ConnectionInfo = {}

  try {
    if (connection?.isConnected) return
    const db = await mongoose.connect(process.env.MONGO_URI!)
    connection.isConnected = db.connections[0].readyState
  } catch (error: any) {
    throw new Error(error.message || "Failed to connect to database!")
  }
}
