import { Button } from "@/components/ui/button"
import { sendMessage } from "@/lib/messaging"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { useCallback, useState } from "react"
import { SearchCourseDataTable } from "../components/data-table"
import { baseCourseColumns } from "../definitions/columns"

const CoursesPage = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [data, setData] = useState<
    {
      courseRegisterData: string[] | string
      courseId: string
      courseCode: string
      courseName: string
      credits: number
      day: string
      room: string
      instructor: string
    }[]
  >([])
  const inputSearchRef = useRef<HTMLInputElement>(null)

  const searchCourses = useCallback(async () => {
    console.log("Searching " + inputSearchRef.current?.value + " courses...")
    setData([])
    const query = inputSearchRef.current?.value
    if (!query || query.trim() === "") {
      console.log("Empty search query, aborting.")
      return
    }
    setIsSearching(true)
    const response = await sendMessage("getCourseList", query)
    if (response) {
      setData(response)
      setIsSearching(false)
    }
  }, [])

  return (
    <>
      <div className="mt-24 mb-10">
        <div className="flex flex-col items-center justify-center gap-7">
          <div className="text-3xl font-bold">Search courses</div>
          <div className="relative w-md">
            <input
              ref={inputSearchRef}
              required
              type="text"
              name="search"
              id="search-inp"
              placeholder=" "
              className="peer z-2 w-full cursor-text rounded-full bg-neutral-100 p-4 px-5 text-base duration-200 dark:bg-neutral-900"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  searchCourses()
                }
              }}
            />
            <label
              htmlFor="search-inp"
              className="absolute top-0 bottom-0 left-5 z-1 flex h-full cursor-text items-center text-center text-base text-neutral-500 duration-200 peer-not-placeholder-shown:opacity-0 peer-focus:opacity-0">
              Course name or code...
            </label>
            <div className="absolute top-0 right-0 bottom-0 h-full p-2.5">
              <Button
                size={"icon"}
                onClick={() => searchCourses()}
                className="group flex aspect-square h-full cursor-pointer items-center gap-0 overflow-hidden rounded-full transition-all duration-300 hover:w-24 hover:gap-2">
                <Search />
                <span className="w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:inline group-hover:w-12">
                  Search
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="p-2 text-base font-medium select-none">
          <span className="normal-case"></span>
        </div>
        <div className={cn("my-3 w-full space-y-3", isSearching && "flex items-center justify-center")}>
          <SearchCourseDataTable
            columns={baseCourseColumns}
            data={data}
            isLoading={isSearching}
            bodyClassName="h-160"
          />
        </div>
      </div>
      <div className="my-5">
        <div className="p-2 text-base font-medium select-none">
          <span className="normal-case">Your courses</span>
        </div>
        <div className={cn("my-3 w-full space-y-3", isSearching && "flex items-center justify-center")}>
          {/* <CourseDataTable
            columns={extendedCourseColumns}
            data={data.map((c) => ({ ...c, isRegistered: false }))}
          /> */}
        </div>
      </div>
    </>
  )
}

export default CoursesPage
