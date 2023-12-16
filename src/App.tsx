import { I18nProvider } from "models/providers/i18n";
import "./App.css";
import { useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import router from "configs/routes";

function App() {
  const [t] = useTranslation(["general"]);
  return (
    <I18nProvider i18n={t}>
      <RouterProvider router={router} />
    </I18nProvider>
  );
}

export default App;
