import React from "react";
import { useTranslation } from "react-i18next";

const Button = ({ styles }) => {

  const [t] = useTranslation('global')

  return (
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      <a href="https://api.whatsapp.com/send?phone=+5493517656103&text=Hola!%20Me%20comunico%20desde%20la%20web.%20Quisiera%20realizar%20un%20presupuesto%20para%20una%20mudanza!" target='_blank'>{t('button.start')}</a>
    </button>
  )
};

export default Button;
