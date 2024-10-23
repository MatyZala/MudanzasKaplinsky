import { useState } from "react";

import { close, logo, menu } from "../assets";
import es from '../assets/es.png';
import en from '../assets/en.png'
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const [t, i18n] = useTranslation("global");

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="MiZt-Software" className="w-32 h-32" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          onClick={() => setActive('home')}
          key='home'
          className={`font-poppins font-normal cursor-pointer text-[16px] mr-5 ${active === 'home' ? "text-white" : "text-dimWhite"
            } `} >
          <a href="#home">{t('navLinks.home')}</a>
        </li>
        <li
          onClick={() => setActive('business')}
          key='business'
          className={`font-poppins font-normal cursor-pointer text-[16px] mr-5 ${active === 'business' ? "text-white" : "text-dimWhite"
            } `} >
          <a href="#business">{t('navLinks.business')}</a>
        </li>
        <li
          onClick={() => setActive('quote')}
          key='quote'
          className={`font-poppins font-normal cursor-pointer text-[16px] mr-5 ${active === 'quote' ? "text-white" : "text-dimWhite"
            } `} >
          <a href="#quote">{t('navLinks.quote')}</a>
        </li>
        <li
          onClick={() => setActive('product')}
          key='product'
          className={`font-poppins font-normal cursor-pointer text-[16px] mr-5 ${active === 'product' ? "text-white" : "text-dimWhite"
            } `} >
          <a href="#product">{t('navLinks.product')}</a>
        </li>
        <li
          onClick={() => setActive('clients')}
          key='clients'
          className={`font-poppins font-normal cursor-pointer text-[16px] ${active === 'clients' ? "text-white" : "text-dimWhite"
            } `} >
          <a href="#clients">{t('navLinks.clients')}</a>
        </li>
      </ul>
      <div className='grid grid-flow-col grid-cols-2 mx-1 gap-1'>
        <button onClick={() => i18n.changeLanguage('es')}>
          <img src={es} alt="es" className="w-8 h-8"/>
        </button>
        <button onClick={() => i18n.changeLanguage('en')}>
          <img src={en} alt="en" className="w-8 h-8"/>
        </button>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li
              key={'home'}
              className={`font-poppins font-medium cursor-pointer text-[16px] mt-2 ${active === 'home' ? "text-white" : "text-dimWhite"
                } `}
              onClick={() => setActive('home')}
            >
              <a href='#home'>{t('navLinks.home')}</a>
            </li>
            <li
              key={'business'}
              className={`font-poppins font-medium cursor-pointer text-[16px] mt-2 ${active === 'business' ? "text-white" : "text-dimWhite"
                } `}
              onClick={() => setActive('business')}
            >
              <a href='#business'>{t('navLinks.business')}</a>
            </li>
            <li
              key={'product'}
              className={`font-poppins font-medium cursor-pointer text-[16px] mt-2 ${active === 'product' ? "text-white" : "text-dimWhite"
                } `}
              onClick={() => setActive('product')}
            >
              <a href='#product'>{t('navLinks.product')}</a>
            </li>
            <li
              key={'clients'}
              className={`font-poppins font-medium cursor-pointer text-[16px] mt-2 ${active === 'clients' ? "text-white" : "text-dimWhite"
                } `}
              onClick={() => setActive('clients')}
            >
              <a href='#clients'>{t('navLinks.clients')}</a>
            </li>
            <div className="grid grid-flow-col grid-cols-2 mx-1 gap-1">
              <button onClick={() => i18n.changeLanguage('es')}>
                <img src={es} alt="es" className="w-8 h-8" />
              </button>
              <button onClick={() => i18n.changeLanguage('en')}>
                <img src={en} alt="en" className="w-8 h-8 " ></img>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
