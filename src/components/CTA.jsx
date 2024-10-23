import { useTranslation } from "react-i18next";
import styles from "../style";
import Button from "./Button";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { motion } from 'framer-motion'
import GetStarted from "./GetStarted";


const CTA = () => {

  const [t] = useTranslation('global')

  useEffect(() => {
    AOS.init({ duration: 1700 })
  }, [])

  return (
    <section data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>{t('cta.pr')}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('cta.paragraph')}
        </p>
      </div>

      <motion.div
        viewport={{ once: true }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <GetStarted/>
      </motion.div>      
    </section>
  )
};

export default CTA;
