import styles from "../style";
import { arrowUp } from "../assets";
import { useTranslation } from "react-i18next";

const GetStarted = () => {

  const [t] = useTranslation('global')

  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">{t('button.st')}</span>
          </p>
          <a href="https://api.whatsapp.com/send?phone=+5493517656103&text=Hola!%20Me%20comunico%20desde%20la%20web.%20Quisiera%20realizar%20un%20presupuesto%20para%20una%20mudanza!" target='_blank'>
            <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
          </a>
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient"><a href="https://api.whatsapp.com/send?phone=+5493517656103&text=Hola!%20Me%20comunico%20desde%20la%20web.%20Quisiera%20realizar%20un%20presupuesto%20para%20una%20mudanza!" target='_blank'>{t('button.str')}</a></span>
        </p>
      </div>
    </div>
  )
};

export default GetStarted;
