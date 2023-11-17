import Image from "next/image"
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="relative bg-[linear-gradient(to_top,#182237,#253352)] p-[20px_10px] rounded-[10px] mb-[20px]">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
          <Image
            src={"/astronaut.png"}
            alt="right-bg"
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-[24px]">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="font-[500] text-sm text-secondaryTxt">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-[12px]">Takes 4 minutes to learn</span>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            illo corporis non minima exercitationem modi quis, accusamus
            eveniet, ea suscipit esse dignissimos ab tempora ducimus ratione quo
            nostrum quaerat ipsam!
          </p>
          <button className="p-[10px] w-max text-xs flex items-center gap-[10px] bg-[#5d57c9] text-txtColor rounded-[5px] cursor-pointer border-none ">
            <MdPlayCircleFilled /> Watch
          </button>
        </div>
      </div>

      <div className="relative bg-[linear-gradient(to_top,#182237,#253352)] p-[20px_10px] rounded-[10px] mb-[20px]">
        <div className="flex flex-col gap-[24px]">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3 className="font-[500] text-sm text-secondaryTxt">
            New server actions are available, partial pre-rendering is coming
            up!{" "}
          </h3>
          <span className="text-[12px]">Takes 4 minutes to learn</span>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ut
            aperiam fuga magnam maxime voluptate impedit numquam iste a nulla.
          </p>
          <button className="p-[10px] w-max text-xs flex items-center gap-[10px] bg-[#5d57c9] text-txtColor rounded-[5px] cursor-pointer border-none ">
            <MdReadMore /> Learn
          </button>
        </div>
      </div>
    </div>
  )
}
export default Rightbar
