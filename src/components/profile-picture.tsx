import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function ProfilePicture() {
  return (
    <Avatar className="h-full w-full">
      <AvatarImage src="/profile.jpg" alt="Ceferino Patino profile photo" />
      <AvatarFallback>CP</AvatarFallback>
    </Avatar>
  );
}
