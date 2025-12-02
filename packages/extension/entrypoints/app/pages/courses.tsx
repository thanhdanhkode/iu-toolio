import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import React, { useId } from "react"
import { CourseDataTable } from "../components/data-table"
import { baseCourseColumns, extendedCourseColumns } from "../definitions/columns"

const CoursesPage = () => {
  const [isSearching, setIsSearching] = React.useState(false)

  const list_courses = [
    {
      id: useId(),
      courseId: "BM060IU",
      courseCode: "BM060IU",
      courseName: "Digital Systems",
      credits: 3,
      day: "Năm",
      room: "A1.203",
      instructor: "P.T.T.Hiền",
    },
    {
      id: useId(),
      courseId: "BM061IU",
      courseCode: "BM061IU",
      courseName: "Digital Systems Lab",
      credits: 1,
      day: "Tư",
      room: "LA2.108",
      instructor: "P.T.T.Hiền",
    },
  ]
  const empty_courses: typeof list_courses = []

  return (
    <>
      <div className="mt-24 mb-10">
        <div className="flex flex-col items-center justify-center gap-7">
          <div className="text-3xl font-bold">Search courses</div>
          <div className="relative w-md">
            <input
              type="text"
              name="search"
              id="search-inp"
              placeholder=" "
              className="peer z-2 w-full cursor-text rounded-full p-5 px-7 duration-200 dark:bg-neutral-900"
            />
            <label
              htmlFor="search-inp"
              className="absolute top-0 bottom-0 left-7 z-1 flex h-full cursor-text items-center text-center text-base font-medium text-neutral-500 duration-200 peer-focus:opacity-0">
              Course name or code...
            </label>
            <div className="absolute top-0 right-0 bottom-0 h-full p-3">
              <Button
                size={"icon"}
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
          {isSearching && <Spinner />}
          {!isSearching && (
            <CourseDataTable
              columns={baseCourseColumns}
              data={empty_courses}
            />
          )}
        </div>
      </div>
      <div className="my-5">
        <div className="p-2 text-base font-medium select-none">
          <span className="normal-case">Your courses</span>
        </div>
        <div className={cn("my-3 w-full space-y-3", isSearching && "flex items-center justify-center")}>
          {isSearching && <Spinner />}
          {!isSearching && (
            <CourseDataTable
              columns={extendedCourseColumns}
              data={list_courses.map((c) => ({ ...c, isRegistered: false }))}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default CoursesPage
