import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./i18n"; // Import the i18n configuration
import LegalPages from "./pages/LegalPages";
import Test from "./pages/Test";

const App = () => (

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/test" element={<Test />} />
            <Route path="/legal" element={<LegalPages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

);

export default App;
