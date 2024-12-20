"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BorderBeam } from "./border-beam";

const projects = [
  {
    title: "UI/UX Design",
    description:
      "In today's digital world, a seamless and visually appealing user interface is critical to capturing user attention and ensuring a smooth experience. Our team of expert UI/UX designers focuses on creating intuitive, user-friendly, and aesthetically pleasing designs that reflect your brand's identity and meet user needs. We employ modern design principles and user research to develop wireframes, prototypes, and high-fidelity designs tailored for web and mobile applications.\n\nFrom concept to implementation, we ensure that every element of the design contributes to an engaging and accessible user experience. Whether it's designing mobile apps, websites, or enterprise software, we aim to strike the perfect balance between beauty and functionality.",
    src: "#",
    link: "/ui1.jpg",
    color: "#5196fd",
  },
  {
    title: "Branding",
    description:
      "Your brand is your story, and we're here to help you tell it effectively. Our branding services are focused on developing a cohesive and compelling identity that resonates with your audience. We take the time to understand your values, mission, and goals to create logos, color palettes, typography, and brand guidelines that reflect your essence.\n\nA strong brand helps you stand out in a crowded market. From startups to established enterprises, we provide comprehensive branding solutions, including strategy development, visual identity design, and messaging frameworks. Let us help you make a lasting impression.",
    src: "#",
    link: "/branding.jpg",
    color: "#8f89ff",
  },
  {
    title: "Web & Mobile Development",
    description:
      "We specialize in crafting responsive, high-performance websites and mobile applications that drive user engagement and deliver results. Our development process blends cutting-edge technologies with best practices to create applications that are fast, secure, and scalable. Whether you need an e-commerce platform, a corporate website, or a mobile app, our team ensures the final product aligns with your business objectives.\n\nWe prioritize clean code, robust architecture, and seamless user experiences. From front-end development using modern frameworks like React and Next.js to back-end development with Node.js and cloud services, we bring your ideas to life with precision and efficiency.",
    src: "#",
    link: "/web.jpg",
    color: "#13006c",
  },
  {
    title: "SAAS Development",
    description:
      "Our team specializes in building Software as a Service (SaaS) products that are robust, user-friendly, and tailored to solve real-world problems. We offer end-to-end SaaS development services, from ideation and MVP development to full-scale deployment and maintenance. Our solutions are designed to be scalable, secure, and adaptable to evolving business needs.\n\nWe leverage cloud infrastructure, microservices architecture, and the latest development practices to ensure your SaaS product performs optimally. Whether you're looking to launch a new tool or modernize an existing application, we have the expertise to make it happen efficiently and effectively.",
    src: "#",
    link: "/saas1.jpg",
    color: "#ed649e",
  },
  {
    title: "Consulting",
    description:
      "Navigating the digital landscape can be complex, but our consulting services are designed to simplify the process and help you achieve your goals. We offer strategic guidance across various domains, including technology, digital transformation, and process optimization. Our consultants bring years of industry experience to help you identify challenges, develop solutions, and implement best practices.\n\nFrom assessing your current digital infrastructure to recommending new technologies and processes, we provide actionable insights and hands-on support. Whether you're looking to enhance productivity, reduce costs, or drive innovation, our consulting services are tailored to your unique needs.",
    src: "#",
    link: "/consulting.jpg",
    color: "#fd521a",
  },
];

export default function CardScroll(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="" ref={container}>
        <section className="text-white h-[20vh] mt-40 w-full grid place-content-center relative">
          <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            Some Of The Services
            <span className=" text-appPrimary"> We Provide</span> ✨
          </h1>
          <p className=" text-xl font-light px-8 ">
            We deliver quality products with in short amount of time{" "}
          </p>
        </section>

        <section className="text-white w-full ">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                src={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  // src,
  url,
  // color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          // backgroundColor: color,
          scale,
          top: `calc(${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[450px] w-[70%] bg-zinc-950 border-white/5 border rounded-md p-10 origin-top"
      >
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        <div className="flex h-full mt-5 gap-10">
          <div className="w-[40%] relative top-[10%]">
            <p className="text-sm">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <a
                href={url}
                target="_blank"
                className="underline cursor-pointer"
                rel="noopener noreferrer"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-[60%] h-full rounded-lg overflow-hidden">
            <motion.div
              className="w-full h-full hover:scale-115 transition-all"
              style={{ scale: imageScale }}
            >
              <Image fill src={url} alt={title} className="object-cover" />
            </motion.div>
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
