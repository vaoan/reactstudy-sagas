import { useI18n } from "models/providers/i18n";

const Footer = () => {
  const { t } = useI18n();
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>{t("footer.label.message")}</p>
      </div>
    </div>
  );
};

export default Footer;
