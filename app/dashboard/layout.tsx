import Footer from "../ui/dashboard/footer/Footer"
import Navbar from "../ui/dashboard/navbar/Navbar"
import Sidebar from "../ui/dashboard/sidebar/Sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="flex-[1] bg-secondary p-[20px] min-h-screen">
        <Sidebar />
      </div>
      <div className="flex-[4] p-[20px]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}
export default Layout
