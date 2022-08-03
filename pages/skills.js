import styles from "../styles/Skills.module.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <div className="snap-center w-full flex flex-col justify-center mt-36">
        <div className=" hidden xl:block w-[50vw] self-center">
          <Marquee
            className={`h-[100px] mb-3 self-center ` + styles.logos}
            gradient={false}
            speed={12 * 10}
          >
            <img src="/assets/html-5.webp" alt="" width={50} height={50} />
            <img src="/assets/css.webp" alt="" width={50} height={50} />
            <img
              src="/assets/icons8-google-firebase-console-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img
              src="/assets/icons8-flutter-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img
              src="/assets/icons8-python-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img src="/assets/angular.svg" alt="" width={50} height={50} />
            <img
              src="/assets/icons8-java-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img src="/assets/js-format.webp" alt="" width={50} height={50} />
            <img
              src="/assets/icons8-c-programming-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img
              src="/assets/icons8-nodejs-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img
              src="/assets/icons8-react-native-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img src="/assets/vue.png" alt="" width={50} height={50} />
          </Marquee>
        </div>

        <div className=" block xl:hidden w-[100vw] self-center mt-[24px]">
          <Marquee
            className={`h-[100px] mb-3 self-center ` + styles.logos}
            gradient={false}
            speed={12 * 15}
          >
            <img src="/assets/html-5.webp" alt="" width={50} height={50} />
            <img src="/assets/css.webp" alt="" width={50} height={50} />
            <img
              src="/assets/icons8-google-firebase-console-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img
              src="/assets/icons8-flutter-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img
              src="/assets/icons8-python-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img src="/assets/angular.svg" alt="" width={50} height={50} />
          </Marquee>
          <Marquee
            className={`h-[100px] mb-3 self-center ` + styles.logos}
            gradient={false}
            speed={12 * 15}
            delay={1}
          >
            <img
              src="/assets/icons8-java-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img src="/assets/js-format.webp" alt="" width={50} height={50} />
            <img
              src="/assets/icons8-c-programming-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img
              src="/assets/icons8-nodejs-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img
              src="/assets/icons8-react-native-96.webp"
              alt=""
              width={50}
              height={50}
              title=""
            />
            <img src="/assets/vue.png" alt="" width={50} height={50} />
          </Marquee>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 0.8 }}
          transition={{ type: "spring", ease: "easeInOut" }}
          className="w-[50vw] self-center text-justify"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-1xl lg:text-2xl 2xl:text-5xl">
            I&apos;m always constantly learning new technologies to broaden my
            skill set! Here are some of the technologies I&apos;ve been working
            with!
          </span>
        </motion.div>
      </div>
    </>
  );
}
