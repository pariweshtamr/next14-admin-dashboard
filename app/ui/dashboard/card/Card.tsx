import { MdSupervisedUserCircle } from "react-icons/md"

const Card = () => {
  return (
    <div className="flex bg-secondary p-[15px] rounded-[10px] gap-[15px] cursor-pointer w-full hover:bg-lightBg">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-[20px]">
        <span className="">Total Users</span>
        <span className="text-[24px] font-[500]">10.928</span>
        <span className="text-sm font-[200]">
          <span className="text-positive">12%</span> more than previous week
        </span>
      </div>
    </div>
  )
}
export default Card
