import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function Greeting() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {language === "en" ? (
        <h1>Hello! Welcome to our website.</h1>
      ) : (
        <h1>¡Hola! Bienvenido a nuestro sitio web.</h1>
      )}
    </div>
  );
}

export default Greeting;