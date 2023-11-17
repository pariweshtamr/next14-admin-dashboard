import Card from "../ui/dashboard/card/Card"
import Chart from "../ui/dashboard/chart/Chart"
import Rightbar from "../ui/dashboard/rightbar/Rightbar"
import Transactions from "../ui/dashboard/transactions/Transactions"

const DashboardPage = () => {
  return (
    <div className="flex gap-[20px] mt-[20px]">
      <div className="flex-[3] flex flex-col gap-[20px]">
        <div className="flex justify-between gap-[10px]">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  )
}
export default DashboardPage
