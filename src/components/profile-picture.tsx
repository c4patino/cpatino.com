import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function ProfilePicture() {
  return (
    <Avatar className="h-full w-full">
      <AvatarImage src="/profile.jpg" />
      <AvatarFallback>CP</AvatarFallback>
    </Avatar>
  );
}
