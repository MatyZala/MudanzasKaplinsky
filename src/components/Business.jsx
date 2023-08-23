import { useTranslation } from "react-i18next";
import styles, { layout } from "../style";
import Button from "./Button";
import { star, shield, send } from '../assets'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const FeatureCard = ({ icon, title, content }) => (
  <div className={`flex flex-row p-6 rounded-[20px] mb-12 feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {

  const [t] = useTranslation('global')

  useEffect(() => {
    AOS.init({ duration: 1700 })
  }, [])

  return (
    <section id="business" className={layout.section}>
      <div className={layout.sectionInfo} data-aos='fade-right' >
        <h2 className={styles.heading2}>
          {t('business.t1')}<br className="sm:block hidden" /> {t('business.t2')} {' '}
          <span className="text-gradient">{t('business.t4')}</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('business.t3')}
        </p>
        <motion.div
          viewport={{ once: true }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button styles={`mt-10`} />
        </motion.div>
      </div>

      <motion.div
        data-aos='fade-left'
        className={`${layout.sectionImg} flex-col`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <FeatureCard key='feature-1' title={t('business.start')} icon={star} content={t('business.stard')} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}> 
          <FeatureCard key='feature-2' title={t('business.shieldt')} icon={shield} content={t('business.shieldd')} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <FeatureCard key='feature-3' title={t('business.sendt')} icon={send} content={t('business.sendd')} />
        </motion.div>
      </motion.div>
    </section>
  )
};

export default Business;
