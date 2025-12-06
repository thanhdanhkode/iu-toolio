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
import { Course, ExtendedCourse } from "@/types/course"
import { ColumnDef } from "@tanstack/react-table"
import { CheckCheck, MoreHorizontal, X } from "lucide-react"
import React, { useId } from "react"

export function createBaseCourseColumns<T extends Course>(): ColumnDef<T>[] {
  return [
    {
      accessorKey: "key",
      header: "Course Key",
    },
    {
      accessorKey: "id",
      header: "Course ID",
    },
    {
      accessorKey: "code",
      header: "Course Code",
    },
    {
      accessorKey: "name",
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
        const values = (getValue() as unknown as string[]) || []

        return (
          <div className="flex flex-col gap-1 p-0">
            {values.map((value) => (
              <React.Fragment key={useId()}>
                <div className="flex h-8 w-full items-center px-2">{value || "N/A"}</div>
                <Separator className="last:hidden" />
              </React.Fragment>
            ))}
          </div>
        )
      },
    },
    {
      accessorKey: "room",
      header: "Room",
      cell: ({ getValue }) => {
        const values = (getValue() as unknown as string[]) || []

        return (
          <div className="flex flex-col gap-1 p-0">
            {values.map((value) => (
              <React.Fragment key={useId()}>
                <div className="flex h-8 w-full items-center px-2">{value || "N/A"}</div>
                <Separator className="last:hidden" />
              </React.Fragment>
            ))}
          </div>
        )
      },
    },
    {
      accessorKey: "instructor",
      header: "Instructor",
      cell: ({ getValue }) => {
        const values = (getValue() as unknown as string[]) || []

        return (
          <div className="flex flex-col gap-1 p-0">
            {values.map((value) => (
              <React.Fragment key={useId()}>
                <div className="flex h-8 w-full items-center px-2">{value || "N/A"}</div>
                <Separator className="last:hidden" />
              </React.Fragment>
            ))}
          </div>
        )
      },
    },
  ]
}

export function createSearchCourseColumns<T extends Course>(
  onRegister?: (row: T, state: boolean) => void
): ColumnDef<T>[] {
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
          onCheckedChange={(value) => {
            row.toggleSelected(!!value)
            onRegister?.(row.original as T, !!value)
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ]
}

export const studentCourseColumns: ColumnDef<ExtendedCourse>[] = [
  ...createBaseCourseColumns<Course>(),
  {
    accessorKey: "isRegistered",
    header: "Registered",
    cell: ({ row }) => (row.original.isRegistered ? <CheckCheck className="size-4" /> : <X className="size-4" />),
  },
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
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.original.id)}>
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
