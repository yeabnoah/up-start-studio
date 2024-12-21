import HeroVideoDialog from "../../components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative w-[80vw] mx-auto mt-20 ">
      <h1 className=" text-5xl font-bold py-5 text-center mb-20">
        <span className=" text-appPrimary">Wanna know </span> more about us ?
      </h1>
      {/* <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      /> */}
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
