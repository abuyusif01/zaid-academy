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
import InstructorProvider from "../context/InstructorContext";
import AdminRoute from "../components/AdminRoute";

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
  const adminRequired = router.pathname.split("/").includes("dash");
  const adminLogin = router.pathname.split("/").includes("admin");

  // console.log(router.pathname.split("/"));
  return (
    <Suspense fallback="Loading...">
      <AuthProvider>
        <StudentProvider>
          <CourseProvider>
            <InstructorProvider>
              <div className="font-Poppins min-h-screen flex flex-col justify-between">
                {!adminLogin && <Navbar />}
                {authRequired ? (
                  <ProtectedRoute>
                    <Component {...pageProps} />
                  </ProtectedRoute>
                ) : null}
                {adminRequired ? (
                  <AdminRoute>
                    <Component {...pageProps} />
                  </AdminRoute>
                ) : null}
                {!authRequired && !adminRequired ? (
                  <Component {...pageProps} />
                ) : null}
                <div className="">{!adminLogin && <Footer />}</div>
              </div>
            </InstructorProvider>
          </CourseProvider>
        </StudentProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default MyApp;
