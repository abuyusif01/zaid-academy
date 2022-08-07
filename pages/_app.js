import { Suspense } from "react";
import { useRouter } from "next/router";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthProvider from "../context/AuthContext";
import translationsEn from "../internationalization/translationsEn";
import translationsFr from "../internationalization/translationsFr";
import "../styles/globals.css";
import { interpolateAs } from "next/dist/shared/lib/router/router";

const authRequired = ["/", "/"];

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    fr: { translation: translationsFr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

function MyApp({ Component, pageProps }) {
  // const {t} = useTranslation()
  const router = useRouter();
  const authRequired = router.pathname.includes("dashboard");
  return (
    <Suspense fallback="Loading...">
      <AuthProvider>
        <div className="font-Poppins min-h-screen flex flex-col">
          <Navbar />
          {authRequired ? (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          ) : (
            <Component {...pageProps} />
          )}
          <div className="">
            <Footer />
          </div>
        </div>
      </AuthProvider>
    </Suspense>
  );
}

export default MyApp;
