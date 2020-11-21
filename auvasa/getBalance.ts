import Axios from "axios"
import { parse } from "postcss"
import { useEffect, useState } from "react"
import { ElementCompact, xml2js } from "xml-js"
import { baseUrl } from "."

const url = `http://2.139.171.116:3506/rsstarjeta.asp?codigo=`

export interface Trip {
  date: string
  amount: number
  remain: number
  type: "+" | "-"
}

export interface Balance {
  balance: number
  trips: Trip[]
}

export type GetBalanceType = null | Balance

const parseNumber = (number: string): number =>
  parseFloat(number.replace(",", "."))

export const mapDataToTrip = (data: any): Trip => ({
  date: data.fecha._cdata,
  amount: parseNumber(data.importe._cdata),
  remain: parseNumber(data.saldo._cdata),
  type: parseNumber(data.tipoop._cdata) === 9 ? "+" : "-",
})

export const mapDataToBalance = ({
  rss: { channel: data },
}: ElementCompact): Balance => ({
  balance: parseNumber(data.sMd._cdata),
  trips: data.item.map(mapDataToTrip),
})

const getBalance = async (code: number) => {
  const res = await Axios.get(`${baseUrl}${url}${code}`)

  const data: ElementCompact = xml2js(res.data, { compact: true })

  try {
    return mapDataToBalance(data)
  } catch (e) {
    return null
  }
}

export default getBalance
