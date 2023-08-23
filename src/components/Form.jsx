import React from 'react'
import { useTranslation } from 'react-i18next'
/* classNameName={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} */

const Form = () => {

  const [t] = useTranslation('global')

  return (
    <div className="flex-1 flex flex-col border border-teal-200 rounded bg-black-gradient-2">
      <div className="p-5 space-y-5 shadow-xl">
        <h4 className="text-center text-3xl">{t('form.contact')}</h4>

        <form action="https://formsubmit.co/simonkapli4@gmail.com" method="POST">
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              name='first name'
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-teal-200"
              placeholder={t('form.name')}
            />
            <input
              name='last name'
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-teal-200"
              placeholder={t('form.surname')}
            />
            <input
              name='email'
              type="email"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-teal-200 col-span-2"
              placeholder="Email"
            />
            <input
              type="tel"
              name='phone'
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-teal-200 col-span-2"
              placeholder={t('form.phone')}
            />
            <textarea
              name='paragraph'
              cols="10"
              rows="5"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-teal-200 col-span-2"
              placeholder={t('form.paragraph')}
            ></textarea>
          </div>
          <input
            type="submit"
            value={t('form.send')}
            className="focus:outline-none mt-5 bg-black-gradient-2 px-4 py-2 cursor-pointer text-white font-bold w-full"
          />
          <input type="hidden" name="_next" value="https://mudanzas-cristal.vercel.app/" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_autoresponse" value="Gracias por comunicarse con Mudanzas Kaplinsky, en breve sera contactado. Muchas Gracias!" />
        </form>
      </div>

    </div>
  )
}

export default Form