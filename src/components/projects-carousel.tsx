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
  repos?: Link[];
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

interface Link {
  href: string;
  text?: string;
}

export default function ProjectsCarousel() {
  return (
    <Carousel className="h-110 w-full md:h-150 md:max-w-[1024px]">
      <CarouselContent className="px-0 md:px-4">
        <ProjectCard
          title="ゆめあみ (yumeami)"
          description='"the dream web"'
          repos={[{ href: "c4patino/yumeami" }]}
        >
          <div className="flex h-full flex-col items-center justify-between">
            <div className="flex h-3/4 w-full items-center justify-center px-2 md:h-4/5 md:px-6">
              <img
                src="/projects/yumeami.webp"
                className="h-auto max-h-full w-auto max-w-full object-contain"
                alt="yumeami demo showcase"
              />
            </div>
            <p className="text-muted-foreground mt-2 text-center text-xs leading-tight md:mt-3 md:text-sm md:leading-snug">
              <span className="md:hidden">
                NixOS config: one flake for workstations, laptops, and servers.
              </span>
              <span className="hidden md:inline">
                My cross-machine NixOS config: one flake to rule workstations,
                laptops, and servers. Fast to spin up, super modular, and
                structured to keep things sane.
              </span>
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          title="ゆめヴィム (yumevim)"
          description='"the dream vim"'
          repos={[
            { text: "NixVim GitHub", href: "c4patino/nixvim" },
            { text: "NeoVim GitHub", href: "c4patino/neovim" },
          ]}
        >
          <div className="flex h-full flex-col items-center justify-between">
            <div className="flex h-3/4 w-full items-center justify-center px-2 md:h-4/5 md:px-6">
              <img
                src="/projects/yumevim.webp"
                className="h-auto max-h-full w-auto max-w-full object-contain"
                alt="yumevim demo showcase"
              />
            </div>
            <p className="text-muted-foreground mt-2 text-center text-xs leading-tight md:mt-3 md:text-sm md:leading-snug">
              A fully declarative Neovim setup powered by Nix and Lua. Batteries
              included, but minimal by default - tuned for speed, efficiency,
              and daily driver use.
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          title="cpatino.com"
          description='"my personal website - portfolio, blog, and more"'
          repos={[{ href: "c4patino/cpatino.com" }]}
        >
          <div className="flex h-full flex-col items-center justify-between">
            <div className="flex h-3/4 w-full items-center justify-center px-2 md:h-4/5 md:px-6">
              <img
                src="/projects/cpatino.com.webp"
                className="h-auto max-h-full w-auto max-w-full object-contain"
                alt="cpatino.com demo showcase"
              />
            </div>
            <p className="text-muted-foreground mt-2 text-center text-xs leading-tight md:mt-3 md:text-sm md:leading-snug">
              This site. Built with Astro. Mostly a digital notebook for
              projects, ideas, and the occasional blog post. Focused on fast
              loads and zero slog.
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          title="free-range-zoo"
          description="OASYS Lab - University of Nebraska - Lincoln"
          repos={[{ href: "oasys-mas/free-range-zoo" }]}
        >
          <div className="flex h-full flex-col items-center justify-between">
            <div className="flex h-3/4 w-full items-center justify-center px-2 md:h-4/5 md:px-6">
              <img
                src="/projects/free-range-zoo.dark.webp"
                className="h-auto max-h-full w-auto max-w-full object-contain dark:hidden"
                alt="free-range-zoo showcase light mode"
              />
              <img
                src="/projects/free-range-zoo.light.webp"
                className="hidden h-auto max-h-full w-auto max-w-full object-contain dark:block"
                alt="free-range-zoo showcase dark mode"
              />
            </div>
            <p className="text-muted-foreground mt-2 text-center text-xs leading-tight md:mt-3 md:text-sm md:leading-snug">
              <span className="md:hidden">
                Multi-agent RL benchmark supporting MADDPG, COMA and GNNs with
                dynamic agent adaptation.
              </span>
              <span className="hidden md:inline">
                An open-environment multi-agent reinforcement learning benchmark
                suite with support for MADDPG, COMA, and GNN-based policies.
                Enables dynamic agent/task/frame adaptation for open-system
                evaluation.
              </span>
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          title="free-range-rust"
          description="OASYS Lab - University of Nebraska - Lincoln"
          repos={[{ href: "oasys-mas/free-range-rust" }]}
        >
          <div className="flex h-full flex-col items-center justify-between">
            <div className="flex h-3/4 w-full items-center justify-center px-2 md:h-4/5 md:px-6">
              <img
                src="/projects/free-range-zoo.dark.webp"
                className="h-auto max-h-full w-auto max-w-full object-contain dark:hidden"
                alt="free-range-zoo showcase light mode"
              />
              <img
                src="/projects/free-range-zoo.light.webp"
                className="h-auto max-h-full w-auto max-w-full object-contain"
                alt="free-range-zoo showcase dark mode"
              />
            </div>
            <p className="text-muted-foreground mt-2 text-center text-xs leading-tight md:mt-3 md:text-sm md:leading-snug">
              <span className="md:hidden">
                Rust+CUDA backend with Python bindings that doubled benchmark
                performance.
              </span>
              <span className="hidden md:inline">
                A Rust+CUDA backend to accelerate the free-range-zoo benchmark,
                doubling environment performance. Integrates Python bindings
                with Maturin to expose custom CUDA logic for seamless use in RL
                workflows.
              </span>
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          title="3D Volumetric Microscope"
          description="Raman Lab - Washington University"
        >
          <div className="flex h-full flex-col items-center justify-between">
            <div className="flex h-3/4 w-full items-center justify-center px-2 md:h-4/5 md:px-6">
              <div className="flex items-center justify-center rounded-md bg-gray-200 p-8 md:p-16 dark:bg-gray-800">
                <span className="text-5xl md:text-6xl">🔬 📸</span>
              </div>
            </div>
            <p className="text-muted-foreground mt-2 text-center text-xs leading-tight md:mt-3 md:text-sm md:leading-snug">
              <span className="md:hidden">
                Real-time 3D microscopy software processing 20GB/s using
                MPI/HDF5 and OpenCV.
              </span>
              <span className="hidden md:inline">
                Real-time imaging software for a 3D 2-photon lightsheet
                microscope processing 20 GB/s of image data. Built with parallel
                MPI/HDF5 data acquisition and OpenCV pipelines for volumetric
                dataset processing.
              </span>
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          title="SubTerra.ai"
          description="Danforth Plant Science Center"
        >
          <div className="flex h-full flex-col items-center justify-between">
            <div className="flex h-3/4 w-full items-center justify-center px-2 md:h-4/5 md:px-6">
              <img
                src="/projects/subterra.ai.webp"
                className="h-auto max-h-full w-auto max-w-full object-contain"
                alt="subterra.ai ui showcase"
              />
            </div>
            <p className="text-muted-foreground mt-2 text-center text-xs leading-tight md:mt-3 md:text-sm md:leading-snug">
              <span className="md:hidden">
                Django interface with PyTorch models for agricultural root
                analysis (97% accuracy).
              </span>
              <span className="hidden md:inline">
                Django interface for root segmentation and volume extrapolation.
                Built root segmentation models using PyTorch for high-resolution
                root image data, with OpenCV processing for volumetric estimates
                achieving 97% accuracy.
              </span>
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          title="Fonio Seed Computer Vision Models"
          description="Danforth Plant Science Center"
        >
          <div className="flex h-full flex-col items-center justify-between">
            <div className="flex h-3/4 w-full items-center justify-center px-2 md:h-4/5 md:px-6">
              <img
                src="/projects/fonio-seed-cv.webp"
                className="h-auto max-h-full w-auto max-w-full object-contain"
                alt="fonio seed computer vision showcase"
              />
            </div>
            <p className="text-muted-foreground mt-2 text-center text-xs leading-tight md:mt-3 md:text-sm md:leading-snug">
              <span className="md:hidden">
                Computer vision system with 99% accuracy for counting
                overlapping fonio seeds.
              </span>
              <span className="hidden md:inline">
                Compiled and labeled a dataset of over 8,000 fonio seed images
                for robust model training. Implemented a neural network
                achieving 99% accuracy in detecting overlapping seeds and
                providing precise counts.
              </span>
            </p>
          </div>
        </ProjectCard>
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselNext className="hidden md:inline-flex" />
    </Carousel>
  );
}

function ProjectCard({
  title,
  description,
  repos,
  footer,
  children,
}: ProjectCardProps) {
  return (
    <CarouselItem>
      <Card className="flex h-[28rem] w-full flex-col md:h-150 md:max-w-[1024px]">
        <CardHeader className="shrink-o">
          <div className="flex w-full flex-col md:flex-row md:justify-between">
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="mt-1">{description}</CardDescription>
            </div>
            <CardAction className="hidden md:block">
              <div className="flex w-full flex-wrap justify-end gap-2">
                {repos &&
                  repos.map((repo) => (
                    <Button
                      key={repo.text ? `${repo.href}-${repo.text}` : repo.href}
                      asChild
                      size="sm"
                      className="text-sm"
                    >
                      <a href={`https://github.com/${repo.href}`}>
                        {repo.text || "GitHub"}
                      </a>
                    </Button>
                  ))}
              </div>
            </CardAction>
          </div>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          {children}
        </CardContent>
        <CardFooter className="flex w-full shrink-0 flex-col md:hidden">
          {repos && (
            <div className="flex w-full flex-col gap-2">
              {repos.map((repo) => (
                <Button
                  key={repo.text ? `${repo.href}-${repo.text}` : repo.href}
                  asChild
                  className="w-full text-xs"
                >
                  <a href={`https://github.com/${repo.href}`}>
                    {repo.text || "GitHub"}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {footer}
        </CardFooter>
        {footer && (
          <CardFooter className="hidden shrink-0 md:flex">{footer}</CardFooter>
        )}
      </Card>
    </CarouselItem>
  );
}
