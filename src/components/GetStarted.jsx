import styles from "../style";
import {  } from "../assets";
import { useTranslation } from "react-i18next";

const GetStarted = () => {

  const [t] = useTranslation('global')

  return (
      <a 
        className="font-poppins flex text-lg bg-green-600 text-slate-200 hover:bg-slate-200 hover:text-green-600 px-4 py-2 rounded-md gap-2 w-48 h-12 hover:animate-pulse" 
        href="https://api.whatsapp.com/send?phone=+5493518567123&text=Hola!%20Me%20comunico%20desde%20la%20web.%20Quisiera%20realizar%20un%20presupuesto%20para%20una%20mudanza!" 
        target='_blank'>
        <span className="justify-center">{t('button.start')}</span>
        <span className="justify-center"><i class="fa fa-whatsapp"></i></span>
      </a>
  )
};

export default GetStarted;
