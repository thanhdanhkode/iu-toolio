import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeClosed } from "lucide-react"

const LockScreen = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950">
      <div className="flex flex-col items-center justify-center gap-5">
        <Avatar className="size-24 rounded-xl">
          <AvatarImage
            src="https://heucollege.edu.vn/upload/2025/02/avatar-nam-ngau-anime-8.webp"
            alt="user.name"
          />
        </Avatar>
        <div className="flex items-center justify-center gap-1">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Eye /> : <EyeClosed />}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LockScreen
