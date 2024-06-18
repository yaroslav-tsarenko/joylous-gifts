import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import CartDetailsPage from "./pages/CartDetailsPage";
import ProductPage from "./pages/ProductPage";
import ProductListingsPage from "./pages/ProductListingsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/accountpage":
        title = "";
        metaDescription = "";
        break;
      case "/cartdetailspage":
        title = "";
        metaDescription = "";
        break;
      case "/productpage":
        title = "";
        metaDescription = "";
        break;
      case "/productlistingspage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/accountpage" element={<AccountPage />} />
      <Route path="/cartdetailspage" element={<CartDetailsPage />} />
      <Route path="/productpage" element={<ProductPage />} />
      <Route path="/productlistingspage" element={<ProductListingsPage />} />
    </Routes>
  );
}
export default App;
