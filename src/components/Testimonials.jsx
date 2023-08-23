import { useTranslation } from "react-i18next";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { people02 } from "../assets";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Testimonials = () => {

  const [t] = useTranslation('global')

  useEffect(() => {
    AOS.init({ duration: 1700 })
  }, [])

  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 data-aos='zoom-in-right' className={styles.heading2}>
          <span className="text-gradient">{t('testimonials.test')}</span> <br className="sm:block hidden" /> {t('testimonials.client')}
        </h2>
        <div data-aos='zoom-in-left' className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            {t('testimonials.paragraph')}
          </p>
        </div>
      </div>

      <div data-aos='zoom-out-up' className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        <FeedbackCard key='feedback-1' content={t('testimonials.content1')} name='John Doe' title={t('testimonials.title1')} img={people02} />

      </div>
    </section>
  )
};

export default Testimonials;
