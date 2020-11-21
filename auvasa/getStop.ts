import Axios from "axios"
import { baseUrl } from "."
import cheerio from "cheerio"

const url = `http://www.auvasa.es/parada.asp?codigo=`

const getStop = async (stopNumber: number) => {
  const res = await Axios.get(`${baseUrl}${url}${stopNumber}`)

  const doc = cheerio.load(res.data)

  return doc(".col_two_fifth")
}

export default getStop
