import { ReactEventHandler } from "react"
import { AiOutlineHistory } from "react-icons/ai"
import { GetBalanceType } from "../../auvasa/getBalance"
import Button from "../base/button"

export const HistoryButton = ({ onClick }: { onClick: ReactEventHandler }) => (
  <Button onClick={onClick} icon disableRounded className="rounded-bl-lg p-2">
    <AiOutlineHistory size={20} />
  </Button>
)

const History = ({ balance }: { balance: GetBalanceType }) => (
  <div className="w-full px-3">
    <table className="w-full rounded-md">
      <thead>
        <tr>
          {["Date", "Amount", "Remain"].map((text) => (
            <th className="px-3 border-custom-primary border-2">{text}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {balance.trips.map((trip) => (
          <tr>
            {["date", "amount", "remain"].map((key) => (
              <th className="px-3 border-custom-primary border-2 text-center font-normal">
                {trip[key]}
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default History
