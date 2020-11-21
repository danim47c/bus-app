import { ReactEventHandler, ReactNode } from "react"
import { AiOutlineReload } from "react-icons/ai"
import { PuffLoader } from "react-spinners"
import { GetBalanceType } from "../../auvasa/getBalance"
import Button from "../base/button"

const RefreshButton = ({
  history,
  onClick,
}: {
  history: boolean
  onClick: ReactEventHandler
}) => (
  <Button
    onClick={onClick}
    icon
    disableShadow
    disableRounded
    className={`rounded-none ${history ? "rounded-br-lg" : "rounded-b-lg"} p-2`}
  >
    <AiOutlineReload size={20} />
  </Button>
)

export default RefreshButton
