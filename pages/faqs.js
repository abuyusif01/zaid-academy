import Head from "next/head";
import React from "react";
import FAQ from "../components/FAQ";
import { useTranslation } from "react-i18next";

const FAQs = () => {
  const { t } = useTranslation();
  const faqs = t("faqs", { returnObjects: true });
  const faqintro = t("faqintro");
  return (
    <div>
      <Head>
        <title>Frequently Asked Questions</title>
      </Head>
      <div className="mx-auto w-11/12 md:w-8/12 xl:w-6/12 space-y-24 py-16">
        <div className="space-y-6 text-center">
          <h3 className="text-xl">FAQs</h3>
          <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
          <p className="text-xl">{faqintro}</p>
        </div>
        <div className="space-y-6">
          {faqs.map((item) => (
            <FAQ
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
