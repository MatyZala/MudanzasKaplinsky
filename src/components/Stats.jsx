import { useTranslation } from "react-i18next";
import styles from "../style";
import AOS from 'aos'
import  'aos/dist/aos.css'
import { useEffect } from "react";


const Stats = () => {
  const [t] = useTranslation('global');

  useEffect(() => {
    AOS.init({duration: 1700})
  }, [])
  

  return (
    <section 
    data-aos='fade-up' 
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      <div key='stats-1' className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          100%
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {t('stats.security')}
        </p>
      </div>
      <div key='stats-2' className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          100%
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {t('stats.adaptability')}
        </p>
      </div>
      <div key='stats-3' className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          100%
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {t('stats.comunication')}
        </p>
      </div>
    </section>
  )
};

export default Stats;
