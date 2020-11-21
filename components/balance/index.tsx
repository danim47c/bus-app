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
    <Card className="w-full" header={<Code code={code} setCode={setCode} />}>
      <div className="flex flex-col justify-center items-center pb-3">
        {balance === null ? (
          <div className="py-4 text-xl">Invalid code</div>
        ) : (
          !balance && (
            <div className="m-2 my-6">
              <PropagateLoader color="#B58EC7" />
            </div>
          )
        )}

        {balance && (
          <div className="w-full flex justify-between mb-3">
            <RefreshButton onClick={refreshBalance} />

            <div className="w-full self-center flex justify-center items-center text-center text-xl">
              {`${balance.balance}€`}
            </div>

            <HistoryButton onClick={toggleHistory} />
          </div>
        )}

        {balance && history && <History balance={balance} />}
      </div>
    </Card>
  )
}

export default Balance
