import { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners"
import { useLocalStorage } from "react-use"
import getBalance, { GetBalanceType } from "../../auvasa/getBalance"
import Card from "../base/card"
import Code from "./code"
import History, { HistoryButton } from "./history"
import RefreshButton from "./refresh"

const Balance = () => {
  const [history, setHistory] = useState(false)

  const toggleHistory = () => setHistory((history) => !history)

  const [code, setCode] = useLocalStorage<undefined | number>("code")

  const [balance, setBalance] = useState<undefined | GetBalanceType>()

  const refreshBalance = () => {
    if (balance !== undefined) setBalance(undefined)

    if (code) getBalance(code).then(setBalance)
  }

  useEffect(() => {
    console.log(code)
    refreshBalance()
  }, [code])

  return (
    <Card
      className="w-full rounded-b-lg"
      header={<Code code={code} setCode={setCode} />}
    >
      <div className="flex flex-col justify-center items-center rounded-b-lg">
        {balance === null ? (
          <div className="py-4 text-xl">Invalid code</div>
        ) : (
          code &&
          !balance && (
            <div className="mt-6 mb-10">
              <PropagateLoader color="#B58EC7" />
            </div>
          )
        )}

        {balance && (
          <div className="w-full flex justify-between items-start rounded-b-lg bg-custom-primary">
            <div className="rounded-bl-lg bg-white">
              <RefreshButton history={history} onClick={refreshBalance} />
            </div>

            <div
              className="
              w-full h-full
              self-end flex justify-center items-center
              rounded-t-md bg-white
              text-center text-xl
            "
            >
              {`${balance.balance}€`}
            </div>

            <div className="rounded-br-lg bg-white">
              <HistoryButton history={history} onClick={toggleHistory} />
            </div>
          </div>
        )}

        {balance && history && <History balance={balance} />}
      </div>
    </Card>
  )
}

export default Balance
