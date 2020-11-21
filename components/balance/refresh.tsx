import { ReactEventHandler, ReactNode } from "react"
import { AiOutlineReload } from "react-icons/ai"
import { PuffLoader } from "react-spinners"
import { GetBalanceType } from "../../auvasa/getBalance"
import Button from "../base/button"

const RefreshButton = ({ onClick }: { onClick: ReactEventHandler }) => (
  <Button
    onClick={onClick}
    icon
    disableRounded
    className="rounded-none rounded-br-lg p-2"
  >
    <AiOutlineReload size={20} />
  </Button>
)

export default RefreshButton
