import { I18nProvider } from "models/providers/i18n";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const [t] = useTranslation(["general"]);
  return (
    <I18nProvider i18n={t}>
      <div className="flex h-screen">
        <div className="w-1/4 bg-gray-200">{/* Sidebar */}</div>
        <div className="w-3/4 bg-white">{/* Main Content */}</div>
      </div>
    </I18nProvider>
  );
}

export default App;
