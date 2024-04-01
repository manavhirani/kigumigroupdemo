import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="flex w-full p-5 bg-gray-100">
      <div className="min-w-48 max-w-min">
        <Link className="flex items-center justify-center h-full" to="/" >
          <img className="w-full" src={logo} alt="KigumiGroup"></img>
        </Link>
      </div>
      <span className="flex-grow"></span>
      <div className="flex items-center justify-between gap-10">
        <Link id="trainings" to="/trainings" className="p-5 rounded-full hover:bg-green-200 active:bg-green-400">{t("Browse Trainings")}</Link>
        <Link id="about" to="/about" className="p-5 rounded-full hover:bg-green-200">{t("About")}</Link>
        <Link id="signin" to="/signin" className="p-5 rounded-full hover:bg-green-200">{t("Sign In")}</Link>
        <LanguageSelector />
      </div>
    </nav>
  )
}