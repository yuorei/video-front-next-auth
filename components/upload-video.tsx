import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import CustomLink from "./custom-link"
import Image from "next/image"

export default function UploadVideoButton() {
  return (
      <CustomLink href="/video/upload">
          <Button variant="ghost" className="p-0">
              <Image src="/logo.png" alt="Home" width="32" height="32" />
          </Button>
      </CustomLink>
  )
}