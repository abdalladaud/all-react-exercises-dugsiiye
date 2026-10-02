import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>
        Current language: {language === "en" ? "English" : "Spanish"}
      </p>

      <button onClick={toggleLanguage}>
        Switch to {language === "en" ? "Spanish" : "English"}
      </button>
    </div>
  );
}

export default LanguageSwitcher;