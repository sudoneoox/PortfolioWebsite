import { cn } from "../utils/cn.ts";
import React from "react";
import "../../index.css"


import { BentoGrid, BentoGridItem } from "../utils/bentogrid.tsx"
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


interface ImageProps {
  src: string;
  alt: string;
}

function Image({ src, alt }: ImageProps) {
  return <img src={src} alt={alt} className="mx-auto" />;
}

export function Projects({ className }: { className?: string }) {
  return (
    // mx-auto max-4xl
    <BentoGrid className="containerForProjects mx-auto md:auto-rows-[20rem] z-20">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image src="https://placehold.co/600x400/png" alt="background"/>

  </div>
);
const items = [
  {
    title: "Project 1",
    description: "A brief overview of Project 1's goals and achievements.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project 2",
    description: "Insight into the development and impact of Project 2.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project 3",
    description: "An overview of Project 3, showcasing its design and functionality.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project 4",
    description: "Exploring the objectives and outcomes of Project 4.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
