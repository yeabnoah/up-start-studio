import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { MarqueeDemo } from "./_components/bento-grid";
import CardScroll from "@/components/ui/scroll-element";
// import FoldedImageCard from "./_components/fold-image";

export default function Page() {
  return (
    <div>
      <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white overflow-hidden">
        <div className="relative h-full w-full bg-transparent">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:16px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>

          <nav className="relative z-10 flex items-center justify-between p-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">Upstart</span>
              <span className="text-xl font-semibold text-[#51FF00]">
                Studio
              </span>
            </div>
            <Button
              variant="secondary"
              className="rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
            >
              Previous Works
            </Button>
          </nav>

          {/* Hero Section */}

          <main
            className="relative z-10 before:absolute before:top-0 before:left-0 before:w-full

     before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none

     before:bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')]"
          >
            <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-zinc-300/10 to-transparent opacity-20 blur-2xl"></div>
                <h1 className="relative mb-6 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
                  Boost your startup
                  <br />
                  Upstart <span className=" text-appPrimary">Studio</span>
                </h1>
              </div>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
                All-in-one startup solutions—branding, websites, business cards,
                and more.
                <br />
                Everything you need to launch and grow your business.
              </p>
              <div className="flex flex-col items-center gap-4">
                <Button className="rounded-full bg-appPrimary px-8 py-6 text-lg font-semibold text-black hover:bg-[#4AE600] shadow-[0_0_20px_rgba(81,255,0,0.5)] hover:shadow-[0_0_30px_rgba(81,255,0,0.8)] transition-all duration-300">
                  See Plans
                </Button>
                <Link
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  Book a call now
                </Link>
              </div>
            </div>

            <Card className="absolute hidden md:block left-20 top-52 rounded-2xl bg-zinc-800/80 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-zinc-700 p-2">
                  <div className="h-4 w-4 rounded-full bg-[#51FF00]" />
                </div>
                <span className="font-medium">
                  Landing page <span className=" text-appPrimary">Design</span>
                </span>
              </div>
            </Card>

            <Card className="absolute hidden md:block right-20 top-80 rounded-2xl bg-zinc-800/80 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-zinc-700 p-2">
                  <div className="h-4 w-4 rounded-full bg-[#51FF00]" />
                </div>
                <span className="font-medium">Brand Design</span>
              </div>
            </Card>

            <MarqueeDemo />
          </main>
        </div>
      </div>
      <CardScroll />
      {/* <FoldedImageCard /> */}
    </div>
  );
}
