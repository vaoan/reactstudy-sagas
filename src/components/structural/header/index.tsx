import { useI18n } from "models/providers/i18n";

const Header = () => {
  const { t } = useI18n();
  return (
    <div className="bg-gray-800 text-white py-4 px-6">
      <h1 className="text-2xl font-bold">{t("header.label.message")}</h1>
    </div>
  );
};

export default Header;
