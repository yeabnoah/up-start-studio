// BentoDemo Component with Animated Beam and Animated List Fixed
"use client";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { AnimatedBeam } from "../../components/ui/animated-beam";
import { AnimatedList } from "../../components/ui/animated-list";
import { BentoCard, BentoGrid } from "../../components/ui/bento-grid";
import Marquee from "../../components/ui/marquee";
import { useEffect, useState } from "react";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    // href: "#",
    // cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    // href: "#",
    // cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedList className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        {files.map((f, idx) => (
          <div
            key={idx}
            className=" max-w-2xl border-white/5 border bg-white/5 mx-auto p-4 rounded-md shadow-md"
          >
            <h4 className="text-sm font-medium">{f.name}</h4>
            <p className="text-xs text-gray-500">{f.body}</p>
          </div>
        ))}
      </AnimatedList>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    // href: "#",
    // cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeam
        containerRef={{ current: document?.body }}
        fromRef={{ current: document?.body }}
        toRef={{ current: document?.body }}
        className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    // href: "#",
    // cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function BentoDemo() {
  const [index, setIndex] = useState(0);
  const [containerElement, setContainerElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      setContainerElement(document.body);
      console.log(containerElement);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex < features.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000); // Increased duration

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <BentoGrid className="max-w-6xl mx-auto">
      {features.map((feature, idx) => (
        // <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
