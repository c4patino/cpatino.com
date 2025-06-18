import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProjectCard({
  title,
  description = "default",
  action = "default",
  content = "default",
  footer = "default",
}: {
  title: string;
  description?: string;
  action?: string;
  content?: string;
  footer?: string;
}) {
  return (
    <CarouselItem>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardAction>{action}</CardAction>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}

export default function ProjectsCarousel() {
  return (
    <Carousel className="h-full w-full">
      <CarouselContent>
        <ProjectCard title={"..."} />
        <ProjectCard title={"...."} />
        <ProjectCard title={"....."} />
        <ProjectCard title={"......"} />
        <ProjectCard title={"......."} />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
