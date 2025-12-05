import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { TableCell } from "@/components/ui/table"
import { ColumnDef } from "@tanstack/react-table"
import { CheckCheck, MoreHorizontal, X } from "lucide-react"
import React, { useId } from "react"

export type baseCourseType = {
  courseRegisterData: string[] | string
  courseId: string
  courseCode: string
  courseName: string
  credits: number
  day: string[] | string
  room: string[] | string
  instructor: string
}

export type extendedCourseType = baseCourseType & {
  isRegistered?: boolean
}

export function createBaseCourseColumns<T extends baseCourseType>(): ColumnDef<T>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "courseRegisterData",
      enableHiding: true,
    },
    {
      accessorKey: "courseId",
      header: "Course ID",
    },
    {
      accessorKey: "courseCode",
      header: "Course Code",
    },
    {
      accessorKey: "courseName",
      header: "Course Name",
    },
    {
      accessorKey: "credits",
      header: "Credits",
    },
    {
      accessorKey: "day",
      header: "Day",
      cell: ({ getValue }) => {
        const values = getValue() as string[]

        return (
          <TableCell className="flex flex-col gap-1 p-0">
            {values.map((value) => (
              <React.Fragment key={useId()}>
                <TableCell> {value || "N/A"}</TableCell>
                <Separator className="last:hidden" />
              </React.Fragment>
            ))}
          </TableCell>
        )
      },
    },
    {
      accessorKey: "room",
      header: "Room",
      cell: ({ getValue }) => {
        const values = getValue() as string[]

        return (
          <TableCell className="flex flex-col gap-1 p-0">
            {values.map((value) => (
              <React.Fragment key={useId()}>
                <TableCell> {value || "N/A"}</TableCell>
                <Separator className="last:hidden" />
              </React.Fragment>
            ))}
          </TableCell>
        )
      },
    },
    {
      accessorKey: "instructor",
      header: "Instructor",
      cell: ({ getValue }) => {
        const values = getValue() as string[]

        return (
          <TableCell className="flex flex-col gap-1 p-0">
            {values.map((value) => (
              <React.Fragment key={useId()}>
                <TableCell> {value || "N/A"}</TableCell>
                <Separator className="last:hidden" />
              </React.Fragment>
            ))}
          </TableCell>
        )
      },
    },
  ]
}

export function createActionCourseColumn<T extends baseCourseType>(): ColumnDef<T>[] {
  return [
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.original.courseId)}>
              Copy course ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ]
}

export const baseCourseColumns = createBaseCourseColumns<baseCourseType>()

export const extendedActionCourseColumn: ColumnDef<baseCourseType>[] = createActionCourseColumn<baseCourseType>()

export const extendedCourseColumns: ColumnDef<extendedCourseType>[] = [
  ...createBaseCourseColumns<extendedCourseType>(),
  {
    accessorKey: "isRegistered",
    header: "Registered",
    cell: ({ row }) => (row.original.isRegistered ? <CheckCheck className="size-4" /> : <X className="size-4" />),
  },
  ...createActionCourseColumn<extendedCourseType>(),
]
