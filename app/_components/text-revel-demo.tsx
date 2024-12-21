import TextReveal from "../../components/ui/text-reveal";

export function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-64 items-center text-right rounded-lg border-y border border-white/5 bg-white dark:bg-black">
      <TextReveal
        text="We will help you Bring your ideas to life, Build, Launch and Scale your startup"
        className=" text-7xl font-bold w-full text-start md:text-7xl lg:text-7xl"
      />

      {/* <div className=" sticky">
        <GlobeCard />
      </div> */}
    </div>
  );
}
