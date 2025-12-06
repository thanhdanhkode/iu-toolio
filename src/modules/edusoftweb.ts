import { BaseInstance } from "./base"
import { Course } from "@/types/course"

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

  public static getCourse = async (filter: string = ""): Promise<Course[]> => {
    const courses: Course[] = []

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
        const $cols = $(table).find("td")

        const getList = (idx: number) => {
          return $cols
            .eq(idx)
            .find("div[class*='top-fline']")
            .map((_, el) => $(el).text().trim())
            .get()
        }

        const normalizeVal = (v: unknown) => (Array.isArray(v) ? String(v[0] ?? "") : String(v ?? ""))

        courses.push({
          id: normalizeVal($cols.eq(0).find("input").val()) || "",
          key: $($cols.eq(0).find("input")).attr("id") || "",
          code: $cols.eq(1).text().trim() || "",
          name: $cols.eq(3).text().trim() || "",
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

  public static registerCourse = async (courseId: string) => {
    try {
      if (!(await this.checkLogin())) throw new Error("Not logged in")

      const splitCourseId = courseId.split("|")

      const payload = {
        IsValidCoso: false,
        IsValidTKB: false,
        MaDK: splitCourseId[0],
        MaMH: splitCourseId[1],
        Sotc: splitCourseId[4],
        TenMH: splitCourseId[2],
        MaNh: splitCourseId[3],
        StrsoTCHP: "0",
        IsCheck: "true",
        OldMaDK: splitCourseId[10],
        StrngayThi: splitCourseId[6],
        TietBD: splitCourseId[8],
        SoTiet: splitCourseId[9],
        IsMHDangKyCungKhoiSV: "0",
      }

      await this.request.post("/ajaxpro/EduSoft.Web.UC.DangKyMonHoc,EduSoft.Web.ashx", payload, {
        headers: { "Content-Type": "text/plain; charset=UTF-8", "X-AjaxPro-Method": "LuuVaoKetQuaDangKy" },
      })
    } catch (_) {
      console.error(_)
    }
  }

  public static unregisterCourse = async (courseId: string) => {}

  public static saveRegistration = async () => {
    try {
      if (!(await this.checkLogin())) throw new Error("Not logged in")
    } catch (_) {
      console.error(_)
    }
  }
}
