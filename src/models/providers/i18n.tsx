import { TFunction } from "i18next";
import { FC, PropsWithChildren, createContext, useContext } from "react";

// Define the context
interface I18nContextProps {
  t: TFunction;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

// Define the provider component
interface I18nProviderProps extends I18nContextProps, PropsWithChildren {}

export const I18nProvider: FC<I18nProviderProps> = ({ t, children }) => {
  return <I18nContext.Provider value={{ t }}>{children}</I18nContext.Provider>;
};

// Custom hook to access the i18n function
export const useI18n = (): I18nContextProps => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
