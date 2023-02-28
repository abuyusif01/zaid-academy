import Head from "next/head";
import React from "react";
import { GrCheckmark } from "react-icons/gr";

const refunds = [
  "All refund requests for the 3-day money back guarantee must be made within 3 days of the start date of the course, and can only be used for the first subscription or one-time payment.",
  "Refund requests must be made in writing via email to our support team.",
  "The refund will be issued to the same payment method used for the initial payment.",
  "Refunds will be issued within 14 days of the request.",
  "No refund will be issued if a student has completed more than 50% of the course.",
  "No refund will be issued if a student has violated our code of conduct or terms of service.",
];

const Policies = () => {
  return (
    <div>
      <Head>
        <title>Policies</title>
      </Head>
      <div className="w-11/12 md:w-8/12 xl:w-6/12 py-16 mx-auto space-y-16 text-justify">
        <div className="space-y-8">
          <h1 className="text-center text-2xl font-semibold">Refund Policy</h1>
          <p className="leading-10 text-lg">
            We want our students to be satisfied with our courses. If for any
            reason you are not satisfied with a course you have enrolled in, you
            may be eligible for a refund. The following conditions apply to our
            refund policy:
          </p>
          <div className="px-8 text-justify">
            <ul className="space-y-5">
              {refunds.map((refund, index) => (
                <li className="text-lg flex items-center space-x-8" key={index}>
                  <GrCheckmark className="text-lg" />
                  <span>{refund}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="leading-10 text-lg">
            Please note that refunds are at the discretion of Zaid Academy and
            will be reviewed on a case-by-case basis. We reserve the right to
            deny a refund request if we believe that a student has not made a
            good faith effort to complete the course or has violated our
            policies.
          </p>
        </div>
        <div className="space-y-8">
          <h1 className="text-center text-2xl font-semibold">Privacy Policy</h1>
          <p className="leading-10 text-lg">
            At Zaid Academy, we value your privacy and we are committed to
            protecting your personal information. This privacy policy outlines
            what information we collect, how we use it, and how we protect it.
          </p>
          <p className="leading-10 text-lg">
            Information we collect: We collect personal information such as
            name, email address, phone number, and payment information when you
            sign up for our courses.
          </p>
          <p className="leading-10 text-lg">
            How we use the information: We use the personal information we
            collect to provide you with our courses and services, to communicate
            with you about your account, and to improve our courses and
            services.
          </p>
          <p className="leading-10 text-lg">
            Protection of information: We take the security of your personal
            information seriously and use reasonable security measures to
            protect your personal information from unauthorized access,
            disclosure, or misuse.
          </p>
          <p className="leading-10 text-lg">
            Sharing of information: We do not sell or share your personal
            information with third parties for marketing purposes. However, we
            may share your personal information with service providers who help
            us operate our business, such as payment processors or cloud storage
            providers.
          </p>
          <p className="leading-10 text-lg">
            Changes to this policy: We may update this privacy policy from time
            to time. We will notify you of any changes by posting the updated
            policy on our website.
          </p>
          <p className="leading-10 text-lg">
            If you have any questions about our privacy policy, please contact
            us at Zaidacademy22@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policies;
