import { useTranslation } from "react-i18next"

export default function SignIn() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center justify-center p-48 w-svw h-svh">
      <h1 className="text-4xl text-center">{t("UC")}</h1>
    </div>
  )
}