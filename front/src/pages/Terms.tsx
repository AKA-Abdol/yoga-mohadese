import Header from "../components/Header";
import styles from "./styles/Terms.module.css";
import { useTranslation } from "react-i18next";
export default function Terms() {
  const { t } = useTranslation();
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.terms}>
        <h1 className="text-2xl">{t(["pagesTerms1"])}</h1>
        <ul>
          <li className="text-lg mt-6">{t(["pagesTerms2"])}</li>
          <li className="text-lg mt-6">{t(["pagesTerms3"])}</li>
          <li className="text-lg mt-6">{t(["pagesTerms4"])}</li>
          <li className="text-lg mt-6">{t(["pagesTerms5"])}</li>
          <li className="text-lg mt-6">{t(["pagesTerms6"])}</li>
          <li className="text-lg mt-6">{t(["pagesTerms7"])}</li>
        </ul>
      </div>
    </div>
  );
}
