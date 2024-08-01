import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Course from "../utils/courses";
import Plan from "./Plan";

const CourseRegistrationPricing = ({ studentData }) => {
  const [pricingPlan, setPricingPlan] = useState("special");
  const showFamily = () => setPricingPlan("family");
  const showSpecial = () => setPricingPlan("special");
  const showPremium = () => setPricingPlan("premium");
  const { t } = useTranslation();

  const courses = new Course();
  const currentCourses = courses.getCoursesByCategory(pricingPlan);

  return (
    <div className="my-10 space-y-10">
      <div>
        <h4 className="uppercase text-2xl text-center font-bold mb-8">
          Pricing
        </h4>
        <div className="mx-4 md:mx-auto mb-8 flex items-center justify-center space-x-4">
          <div
            className={`px-4 py-1 text-center ${pricingPlan === "special" ? "bg-indigo-500 text-white" : "bg-white text-gray-700"} text-white rounded-2xl cursor-pointer`}
            onClick={showSpecial}
          >
            {t("specialPackage")}
          </div>
          <div
            className={`px-4 py-1 text-center ${pricingPlan === "premium" ? "bg-indigo-500 text-white" : "bg-white text-gray-700"} text-white rounded-2xl cursor-pointer`}
            onClick={showPremium}
          >
            {t("premiumPackage")}
          </div>
          <div
            className={`px-4 py-1 text-center ${pricingPlan === "family" ? "bg-indigo-500 text-white" : "bg-white text-gray-700"} text-white rounded-2xl cursor-pointer`}
            onClick={showFamily}
          >
            {t("familyPackage")}
          </div>
        </div>
        <div className="w-10/12 mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
            {currentCourses.map((course, index) => (
              <Plan
                key={index}
                title={course.name}
                price={course.price}
                description={course.description || ""}
                items={[
                  course.noStudent ? `${course.noStudent} ${t("student")}` : `${course.duration} ${t("minutePerSession")}`,
                  `${course.totalMonthly} ${t("classes")}`,
                  `${course.perWeek} ${t("weeklyClass")}`,
                ]}
                studentData={studentData}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistrationPricing;
