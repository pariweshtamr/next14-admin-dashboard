const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="bg-secondary p-[50px] rounded-[10px] w-[500px] h-[500px] flex flex-col justify-center gap-[10px]">
        <h1 className="text-center text-[36px] font-bold mb-[20px]">Login</h1>
        <input type="text" placeholder="username" className="outline-none" />
        <input
          type="password"
          placeholder="password"
          className="outline-none"
        />
        <button className="bg-[teal] p-[15px] text-txtColor cursor-pointer border-none rounded-[5px]">
          Login
        </button>
      </form>
    </div>
  )
}
export default LoginPage
