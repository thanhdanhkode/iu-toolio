// cSpell:ignore  aspnet viewstate eventargument eventtarget viewstategenerator lbtn ajaxpro ashx fline

import { BaseInstance } from "./base"

interface CourseDataType {
  courseRegisterData: string[] | string | undefined
  courseId: string
  courseCode: string
  courseName: string
  credits: number
  day: string[]
  room: string[]
  instructor: string[]
}

interface AspNetState {
  __EVENTTARGET: string
  __EVENTARGUMENT: string
  __VIEWSTATE?: string
  __VIEWSTATEGENERATOR: string
}

export class EdusoftWebInstance extends BaseInstance {
  private static readonly baseAspNetDataTemplate: AspNetState = {
    __EVENTTARGET: "",
    __EVENTARGUMENT: "",
    __VIEWSTATEGENERATOR: "CA0B0334",
  }

  protected static request = this.createClient("https://edusoftweb.hcmiu.edu.vn")

  private static checkLogin = async (): Promise<boolean> => {
    try {
      const response = await this.request.get("/default.aspx")

      const $ = this.htmlLoader(response.data)

      return $("a[id='Header1_Logout1_lbtnChangePass']").length > 0
    } catch (_) {
      console.error(_)
      return false
    }
  }

  public static login = async (username: string, password: string): Promise<boolean> => {
    try {
      const isLoggedIn = await this.checkLogin()
      if (isLoggedIn) return true

      await this.request.postForm("/default.aspx", {
        ...this.baseAspNetDataTemplate,
        ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$txtTaiKhoa: username,
        ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$txtMatKhau: password,
        ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$btnDangNhap: "Đăng Nhập",
      })

      return await this.checkLogin()
    } catch (_) {
      console.error(_)
      return false
    }
  }

  public static logout = async (): Promise<boolean> => {
    try {
      const isLoggedIn = await this.checkLogin()
      if (isLoggedIn) return true

      await this.request.postForm("/default.aspx", {
        ...this.baseAspNetDataTemplate,
        __EVENTTARGET: "ctl00$Header1$Logout1$lbtnLogOut",
      })

      return !(await this.checkLogin())
    } catch (_) {
      console.error(_)
      return false
    }
  }

  public static getCourse = async (filter: string = ""): Promise<CourseDataType[]> => {
    const courses: CourseDataType[] = []

    try {
      if (!(await this.checkLogin())) throw new Error("Not logged in")
      if (!filter) throw new Error("Filter is required")

      const payload = JSON.stringify({ dkLoc: filter })

      const response = await this.request.post("/ajaxpro/EduSoft.Web.UC.DangKyMonHoc,EduSoft.Web.ashx", payload, {
        headers: { "Content-Type": "text/plain; charset=UTF-8", "X-AjaxPro-Method": "LocTheoMonHoc" },
      })

      if (response.data.error) throw new Error("AjaxPro Error: " + response.data.error.Message)

      const $ = this.htmlLoader(response.data.value)

      $("table").each((_, table) => {
        // console.log($(table).html())

        // const $row = $(table).find("tr").eq(0)
        const $cols = $(table).find("td")
        console.log($($cols).html())

        const getList = (idx: number) => {
          return $cols
            .eq(idx)
            .find("div[class*='top-fline']")
            .map((_, el) => $(el).text().trim())
            .get()
        }

        courses.push({
          courseRegisterData: $cols.eq(0).find("input").val() || "",
          courseId: $cols.eq(1).text().trim() || "",
          courseCode: $cols.eq(2).text().trim() || "",
          courseName: $cols.eq(3).text().trim() || "",
          credits: Number($cols.eq(6).text().trim()) || 0,
          day: getList(12),
          room: getList(15),
          instructor: getList(16),
        })
      })

      return courses
    } catch (_) {
      console.error(_)
      return []
    }
  }

  public static registerCourse = async () => {}
}
