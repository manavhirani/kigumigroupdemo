import { useState } from 'react';
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="flex flex-row items-center justify-center gap-16 px-8 py-5 bg-white border-2 border-green-400 rounded-3xl" onClick={handleButtonClick}>
        <p className="text-center">{t("Language")}</p>
        {isOpen ?
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.53366 0.685678L0.193175 5.8191C-0.0643917 6.06665 -0.0643917 6.46804 0.193175 6.71559L0.816057 7.31432C1.07318 7.56148 1.48991 7.56195 1.74765 7.31538L6.00001 3.24706L10.2524 7.31538C10.5101 7.56195 10.9268 7.56148 11.1839 7.31432L11.8068 6.71559C12.0644 6.46802 12.0644 6.06663 11.8068 5.81908L6.46637 0.685678C6.2088 0.438122 5.79122 0.438122 5.53366 0.685678Z" fill="black" />
          </svg> :
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.53366 7.31434L0.193175 2.18092C-0.0643917 1.93335 -0.0643917 1.53196 0.193175 1.28441L0.816057 0.685678C1.07318 0.438522 1.48991 0.438046 1.74765 0.684621L6.00001 4.75294L10.2524 0.684621C10.5101 0.438046 10.9268 0.438522 11.1839 0.685678L11.8068 1.28441C12.0644 1.53198 12.0644 1.93337 11.8068 2.18092L6.46637 7.31434C6.2088 7.56189 5.79122 7.56189 5.53366 7.31434Z" fill="black" />
          </svg>
        }
      </button>
      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] flex flex-col w-full overflow-hidden bg-white border-2 border-green-400 rounded-3xl">
          <button className="px-8 py-5 text-left border-b-2 hover:bg-green-200 border-inherit" onClick={() => changeLanguage("en")}>
            {i18n.t("L", { lng: "en" })}
          </button>
          <button className="px-8 py-5 text-left border-b-2 hover:bg-green-200 border-inherit" onClick={() => changeLanguage("zhhk")}>{
            i18n.t("L", { lng: "zhhk" })}
          </button>
          <button className="px-8 py-5 text-left hover:bg-green-200" onClick={() => changeLanguage("fr")}>{
            i18n.t("L", { lng: "fr" })}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;