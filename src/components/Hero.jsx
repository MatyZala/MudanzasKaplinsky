import styles from "../style";
import robot from "../assets/robot.jpeg";
import GetStarted from "./GetStarted";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"

const Hero = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }

  }

  const [t] = useTranslation("global")

  return (
    <motion.section
      variants={container}
      initial='hidden'
      animate="show"
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <motion.div
          variants={item}
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">{t('hero.quality')} </span> {t('hero.and')} {" "}
            <span className="text-white">{t('hero.timeliness')}</span>
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Mudanzas <br className="sm:block hidden" />{" "}
            <span className="text-gradient">La Moderna</span>{" "}
          </h1>
          <motion.div
            viewport={{ once: true }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            variants={item}
            className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          {t('hero.solutions')}
        </motion.h1>
        <motion.p
          variants={item}
          className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('hero.paragraph')}
        </motion.p>
      </div>

      <motion.div
        variants={item}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>
      <motion.div
        className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
