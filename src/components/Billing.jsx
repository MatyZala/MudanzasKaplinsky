import { useTranslation } from "react-i18next";
import bill from '../assets/robot.png'
import styles, { layout } from "../style";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Billing = () => {

  const [t] = useTranslation('global')

  useEffect(() => {
    AOS.init({ duration: 1700 })
  }, [])

  return (
    <section id="product" className={layout.sectionReverse}>
      <div data-aos='zoom-in' className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[85%] h-[85%] relative z-[5] rounded" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div data-aos='zoom-in-left' className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {t('billing.prod')} <br className="sm:block hidden" /> <span className="text-gradient">{t('billing.inn')}</span> {t('billing.and')} <span className="text-gradient">{t('billing.pers')}</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('billing.paragraph')}
        </p>

      </div>
    </section>
  )
};

export default Billing;
