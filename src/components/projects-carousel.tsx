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
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description?: string;
  repo?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

function ProjectCard({
  title,
  description,
  repo,
  footer,
  children,
}: ProjectCardProps) {
  return (
    <CarouselItem>
      <Card className="flex h-110 w-80 flex-col md:h-150 md:w-256">
        <CardHeader className="shrink-o">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardAction>
            {repo && (
              <Button asChild>
                <a href={`https://github.com/${repo}`}>GitHub</a>
              </Button>
            )}
          </CardAction>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          {children}
        </CardContent>
        <CardFooter className="shrink-0">{footer}</CardFooter>
      </Card>
    </CarouselItem>
  );
}

export default function ProjectsCarousel() {
  return (
    <Carousel className="h-110 w-80 md:h-150 md:w-256">
      <CarouselContent>
        <ProjectCard
          title="ゆめあみ (yumeami)"
          description='"the dream web"'
          repo="c4patino/yumeami"
        >
          <div className="flex h-full flex-col items-center justify-between">
            <img
              src="/projects/yumeami.png"
              className="w-auto object-contain md:max-h-7/8"
              alt="yumeami demo showcase"
            />
            <p className="text-muted-foreground text-center text-sm leading-snug">
              My cross-machine NixOS config: one flake to rule workstations,
              laptops, and servers. Fast to spin up, super modular, and
              structured to keep things sane.
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          title="ゆめヴィム (yumevim)"
          description='"the dream vim"'
          repo="c4patino/nixvim"
        >
          <div className="flex h-full flex-col items-center justify-between">
            <img
              src="/projects/yumevim.png"
              className="w-auto object-contain md:max-h-7/8"
              alt="cpatino.com demo showcase"
            />
            <p className="text-muted-foreground text-center text-sm leading-snug">
              A fully declarative Neovim setup powered by Nix and Lua. Batteries
              included, but minimal by default - tuned for speed, efficiency,
              and daily driver use.
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          title="cpatino.com"
          description='"my personal website - portfolio, blog, and more"'
          repo="c4patino/cpatino.com"
        >
          <div className="flex h-full flex-col items-center justify-between">
            <img
              src="/projects/cpatino.com.png"
              className="w-auto object-contain md:max-h-7/8"
              alt="cpatino.com demo showcase"
            />
            <p className="text-muted-foreground text-center text-sm leading-snug">
              This site. Built with Astro. Mostly a digital notebook for
              projects, ideas, and the occasional blog post. Focused on fast
              loads and zero slog.
            </p>
          </div>
        </ProjectCard>
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselNext className="hidden md:inline-flex" />
    </Carousel>
  );
}
