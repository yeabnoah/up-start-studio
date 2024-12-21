"use client";
import { motion, useInView } from "framer-motion";
import { FormEvent, useRef, useState } from "react";

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  // const [Send, cilentData] = useNewsLetter()
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  console.log(openPopup);

  const variants = {
    visible: (i: number) => ({
      translateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),

    hidden: { translateY: 200 },
  };
  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const clientEmail = formData.get("newsletter_email")!;

    console.log(clientEmail);
    // const data: ClientData = {
    //   email: clientEmail.toString(),
    // }

    // Send(data)
    setOpenPopUp(true);
    target.reset();
    if (setOpenPopUp) {
      setTimeout(() => {
        setOpenPopUp(false);
      }, 2000);
    }
  };

  return (
    <>
      {/* <Toast.Provider>
        <Toast.Provider swipeDirection="right">
          <Toast.Root
            className="ToastRoot"
            open={openPopup}
            onOpenChange={setOpenPopUp}
          >
            <Toast.Title className="ToastTitle">
              We Received Your Message, Thanks
            </Toast.Title>
            <Toast.Action
              className="ToastAction"
              asChild
              altText="Goto schedule to undo"
            >
              <button className="bg-white text-black px-3 py-1 rounded-lg">
                ok
              </button>
            </Toast.Action>
          </Toast.Root>
          <Toast.Viewport className="ToastViewport" />
        </Toast.Provider>
        <Toast.Viewport />
      </Toast.Provider> */}

      <div
        className="relative h-full bg-transparent text-white"
        ref={container}
      >
        <div className="sm:container  px-4 mx-auto">
          <div className="md:flex justify-between w-full">
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold">
                Let&lsquo;s do great{" "}
                <span className=" text-appPrimary">work together</span>
              </h1>
              <div className="pt-2 pb-6 md:w-99  ">
                <p className="md:text-2xl text-xl  py-4">
                  Send us Email and Lets chat about your project
                </p>
                <div className=" hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden  border-black   text-white hover:text-black md:text-2xl">
                  <form
                    onSubmit={(e) => handleNewsLetterData(e)}
                    className="relative z-2 grid grid-cols-6  w-full h-full"
                  >
                    <input
                      type="email"
                      name="newsletter_email"
                      className="border bg-transparent border-white border-r-0 text-white  py-3 px-6  col-span-5"
                      placeholder="Your Email * "
                    />{" "}
                    <button
                      type="submit"
                      className="cursor-pointer w-full hover:bg-primaryColor bg-appPrimary text-white h-full cols-span-1"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        className="w-full h-[80%] "
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="#000"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <ul>
                <li className="text-2xl pb-2 text-black font-semibold">
                  SOCIAL
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.linkedin.com/company/next-codez/"
                    target="_blank"
                    className=" hover:text-appPrimary hover:underline hover:scale-110 transition-all"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://twitter.com/NextCodez"
                    target="_blank"
                    className=" hover:text-appPrimary hover:underline hover:scale-110 transition-all"
                  >
                    Twitter
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.instagram.com/nextcodez/"
                    target="_blank"
                    className=" hover:text-appPrimary hover:underline hover:scale-110 transition-all"
                  >
                    Instagram
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.facebook.com/nextcodezz"
                    target="_blank"
                    className=" hover:text-appPrimary hover:underline hover:scale-110 transition-all"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-y-2 md:py-4 border-white/90">
            <motion.svg
              width="776"
              ref={ref}
              height="137"
              viewBox="0 0 776 137"
              fill="none"
              className="sm:h-fit h-20 md:px-8 px-2 footer-logo w-full"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#51ff00"
                fontSize="48"
                fontFamily="Arial, sans-serif"
                variants={variants}
                className="text-appPrimary font-extrabold text-[200px]"
              >
                upstart
              </motion.text>
            </motion.svg>
          </div>

          <div className="flex md:flex-row flex-col-reverse gap-3 justify-between py-2">
            <span className="font-medium">
              &copy; 2024 UpStart. All Rights Reserved.
            </span>
            {/* <a href="#" className="font-semibold">
              Privacy Policy
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
