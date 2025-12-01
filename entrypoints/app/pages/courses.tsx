import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"
import { LoaderCircle, Search } from "lucide-react"
import React, { useId } from "react"

const CoursesPage = () => {
  const [isSearching, setIsSearching] = React.useState(false)

  const table_titles = ["Course ID", "Course Code", "Course Name", "Credits", "Day", "Room", "Lecturer"]
  const list_courses = [
    {
      id: useId(),
      courseId: "BM060IU",
      courseCode: "BM060IU",
      courseName: "Digital Systems",
      credits: 3,
      day: "Năm",
      room: "A1.203",
      lecturer: "P.T.T.Hiền",
    },
    {
      id: useId(),
      courseId: "BM061IU",
      courseCode: "BM061IU",
      courseName: "Digital Systems Lab",
      credits: 1,
      day: "Tư",
      room: "LA2.108",
      lecturer: "P.T.T.Hiền",
    },
  ]

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
        <div className="select-none">
          <div className="grid grid-cols-8 grid-rows-1 gap-1 rounded-lg p-4 text-sm font-medium dark:bg-neutral-900">
            {table_titles.map((title) => (
              <div
                key={useId()}
                className={cn(title === "Course Name" && "col-span-2", title === "Credits" && "text-center")}>
                {title}
              </div>
            ))}
          </div>
          <div
            className={cn(
              "my-3 min-h-[40vh] divide-y-2 divide-neutral-950 overflow-x-hidden rounded-lg dark:bg-neutral-900",
              isSearching && "flex items-center justify-center"
            )}>
            {isSearching && <Spinner />}
            {!isSearching &&
              list_courses.map((course) => (
                <div
                  key={course.id}
                  className="grid grid-cols-8 grid-rows-1 gap-1 p-3 px-4 text-sm font-medium">
                  <div>{course.courseId}</div>
                  <div>{course.courseCode}</div>
                  <div className="col-span-2">{course.courseName}</div>
                  <div className="text-center">{course.credits}</div>
                  <div>{course.day}</div>
                  <div>{course.room}</div>
                  <div>{course.lecturer}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="my-5 mt-24">
        <div className="p-2 text-base font-medium select-none">
          <span className="normal-case">List of automatically registered courses</span>
        </div>
        <div className="select-none">
          <div className="grid grid-cols-8 grid-rows-1 gap-1 rounded-lg p-4 text-sm font-medium dark:bg-neutral-900">
            {table_titles.map((title) => (
              <div
                key={useId()}
                className={cn(title === "Course Name" && "col-span-2", title === "Credits" && "text-center")}>
                {title}
              </div>
            ))}
          </div>
          <div className="my-3 divide-y-2 divide-neutral-950 overflow-x-hidden rounded-lg dark:bg-neutral-900">
            {list_courses.map((course) => (
              <div
                key={course.id}
                className="grid grid-cols-8 grid-rows-1 gap-1 p-3 px-4 text-sm font-medium">
                <div>{course.courseId}</div>
                <div>{course.courseCode}</div>
                <div className="col-span-2">{course.courseName}</div>
                <div className="text-center">{course.credits}</div>
                <div>{course.day}</div>
                <div>{course.room}</div>
                <div>{course.lecturer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesPage
