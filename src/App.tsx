import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./i18n"; // Import the i18n configuration
import LegalPages from "./pages/LegalPages";
const App = () => (

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/legal" element={<LegalPages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

);

export default App;
