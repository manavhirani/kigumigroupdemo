import { useTranslation } from "react-i18next";

const LanguageSelector = () => {

  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex flex-col gap-2 p-2">
      {/* <button id="languageSelector" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="inline-flex items-center text-sm font-medium text-center rounded-lg hover:bg-green-100 focus:ring-4" type="button">Language<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
      </svg>
      </button>

      <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div> */}
      <button className="text-center rounded-lg hover:bg-green-100 focus:ring-4" onClick={() => changeLanguage("en")}>English</button>
      <button className="text-center rounded-lg hover:bg-green-100 focus:ring-4" onClick={() => changeLanguage("zhhk")}>Chinese</button>
    </div>
  );
};

export default LanguageSelector;