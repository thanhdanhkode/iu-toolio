import axios, { AxiosInstance } from "axios"
import { wrapper } from "axios-cookiejar-support"
import * as cheerio from "cheerio"
import { CookieJar } from "tough-cookie"

export class BaseInstance {
  /**
   * Create a pre-config Axios Instance
   * @param baseURL host
   * @returns AxiosInstance
   */
  protected static createClient(baseURL: string): AxiosInstance {
    const jar = new CookieJar()
    return wrapper(
      axios.create({
        baseURL,
        jar,
        withCredentials: true,
        timeout: 10000,
      })
    )
  }

  /**
   * Helper to load HTML string
   * @param html HTML string to load
   * @returns Cheerio
   */
  protected static htmlLoader(html: string) {
    return cheerio.load(html)
  }
}
