import Image from "next/image"

const transacs = [
  {
    name: "Pariwesh Tamrakar",
    img: "/no-avatar.webp",
    status: "pending",
    date: "14/11/2023",
    amount: 300,
    id: 1,
  },
  {
    name: "Prerana Tamrakar",
    img: "/no-avatar.webp",
    status: "complete",
    date: "23/05/2023",
    amount: 200,
    id: 2,
  },
  {
    name: "Rashud Shrestha",
    img: "/no-avatar.webp",
    status: "pending",
    date: "20/09/2023",
    amount: 150,
    id: 3,
  },
  {
    name: "Rahul Shakya",
    img: "/no-avatar.webp",
    status: "pending",
    date: "14/12/2022",
    amount: 700,
    id: 4,
  },
  {
    name: "John Doe",
    img: "/no-avatar.webp",
    status: "cancelled",
    date: "19/08/2023",
    amount: 1000,
    id: 5,
  },
]

const Transactions = () => {
  return (
    <div className="bg-secondary p-[20px] rounded-[10px]">
      <h2 className="mb-[20px] font-[200] text-2xl text-secondaryTxt">
        Latest Transactions
      </h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transacs.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <div className="flex gap-[10px] items-center">
                  <Image
                    src={transaction.img}
                    alt="no-avatar"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {transaction.name}
                </div>
              </td>
              <td>
                <span
                  className={`rounded-[5px] p-[5px] text-sm text-txtColor ${
                    transaction.status === "complete"
                      ? "bg-[#afd6ee75]"
                      : "bg-[#f7737375]"
                  } ${transaction.status === "pending" && "bg-[#f7cb7375]"}`}
                >
                  {transaction.status}
                </span>
              </td>
              <td>{transaction.date}</td>
              <td>${transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Transactions
