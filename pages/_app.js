import { Suspense } from "react";
import { useRouter } from "next/router";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";
import translationsEn from "../internationalization/translationsEn";
import translationsFr from "../internationalization/translationsFr";
import CourseProvider from "../context/CourseContext";
import StudentProvider from "../context/StudentContext";
import AuthProvider from "../context/AuthContext";
import "../styles/globals.css";

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
        <StudentProvider>
          <CourseProvider>
            <div className="font-Poppins min-h-screen flex flex-col justify-between">
              <Navbar />
              {authRequired ? (
                <ProtectedRoute>
                  <Component {...pageProps} />
                </ProtectedRoute>
              ) : (
                <Component {...pageProps} />
              )}
              <div className="">{/* <Footer /> */}</div>
            </div>
          </CourseProvider>
        </StudentProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default MyApp;
