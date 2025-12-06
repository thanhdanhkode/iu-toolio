export interface Course {
  id: string
  key: string
  code: string
  name: string
  credits: number
  day: string[]
  room: string[]
  instructor: string[]
}

export interface ExtendedCourse extends Course {
  isRegistered?: boolean
}
