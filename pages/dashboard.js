import Router from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import Course from "../components/Course";
import { UseAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = UseAuth();
  const { t } = useTranslation();
  return (
    <div className="px-24 my-10">
      <h1
        className="text-center text-2xl font-semibold mb-6 cursor-pointer"
        onClick={logout}
      >
        Choose any of this courses
      </h1>
      <div className="flex justify-center flex-wrap gap-6">
        <Course name={t("Beginners")} description={t("family")} price={110} />
        <Course
          name={t("BeginnersIntensive")}
          description={t("oneOnOne")}
          price={180}
        />
        <Course name="Hifz" description={t("family")} price={110} />
        <Course name="Hifz Intensive" description={t("oneOnOne")} price={180} />
        <Course name="Tilawah" description={t("family")} price={110} />
        <Course
          name="Tilawah Intensive"
          description={t("oneOnOne")}
          price={180}
        />
        <Course
          name={`Murajah (${t("revision")})`}
          description={t("family")}
          price={110}
        />
        <Course
          name={`Murajah Intensive (${t("revisionIntensive")})`}
          description={t("oneOnOne")}
          price={180}
        />
      </div>
    </div>
  );
};

export default Dashboard;
