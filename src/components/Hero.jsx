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
      className={`my-10 mx-6 grid md:grid-flow-col md:grid-cols-2 gap-2`}
    >
      <motion.div
        className={`flex-col md:mx-4`}
      >
        <motion.p>
          <motion.span className="text-slate-100 justify-center md:justify-start ">{t('hero.quality')} </motion.span> {t('hero.and')} {" "}
          <motion.span className="text-slate-100 justify-center md:justify-start ">{t('hero.timeliness')}</motion.span>
        </motion.p>
        <motion.h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Mudanzas <br className="sm:block hidden" />{" "}
            <motion.span className="text-gradient">La Moderna</motion.span>{" "}
        </motion.h1>
        <motion.p
          variants={item}
          className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('hero.paragraph')}
        </motion.p>
        <motion.p className="py-5 items-center lg:items-start">
          <span>{t('buton.prev')}</span>
          <GetStarted />
        </motion.p>
      </motion.div>

      <motion.div
        variants={item}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] rounded" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
