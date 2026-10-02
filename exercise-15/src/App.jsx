import { LanguageProvider } from "./LanguageContext";
import Greeting from "./components/Greeting";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <LanguageProvider>
      <div>
        <Greeting />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;