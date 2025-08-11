import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select name="language-switcher" className='w-[fit-content] bg-transparent' id="LanguageSwitcher" onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
};

export default LanguageSwitcher;
