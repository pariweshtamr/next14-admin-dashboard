"use client"
import { authenticate } from "@/app/lib/actions"
import { useFormState } from "react-dom"

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined)
  return (
    <form
      action={formAction}
      className="bg-secondary p-[50px] rounded-[10px] w-[500px] h-[500px] flex flex-col justify-center gap-[10px]"
    >
      <h1 className="text-center text-[36px] font-bold mb-[20px]">Login</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        className="outline-none"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="outline-none"
      />
      {state && (
        <div className="text-center text-red-600 mb-[20px]">{state}</div>
      )}
      <button className="bg-[teal] p-[15px] text-txtColor cursor-pointer border-none rounded-[5px]">
        Login
      </button>
    </form>
  )
}
export default LoginForm
