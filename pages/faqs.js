import Head from "next/head";
import React from "react";
import FAQ from "../components/FAQ";

const data = [
  {
    title: "What is Zaid Academy",
    description:
      "Zaid Academy is an online Quranic academy that offers courses in Quranic studies and Islamic education. Our mission is to provide a high-quality learning experience for students of all ages and backgrounds",
  },
  {
    title: "Why is the platform named Zaid Academy",
    description:
      "Zaid Academy is named after Zaid ibn Thabit, a companion of the Prophet Muhammad (peace be upon him) who was known for his expertise in writing and recording the revelations of the Quran. We chose the name Zaid Academy to honor his legacy and to emphasize the importance of the Quran as the foundation of our learning platform.",
  },
  {
    title: "What courses do we offer",
    description:
      "We offer a wide range of courses, including offer a range of Quranic courses, including letter pronunciation (Noorani Qaeda), recitation (Tilawah), memorization (Hifz), Tajwid and Qiraat courses, revision (Muradja'), and certification (Ijazah bi sanad).",
  },
  {
    title: "Do you offer Arabic and Islamic courses",
    description:
      "We do not currently offer Arabic and Islamic courses, but we can customize courses for students who are interested in these subjects. Simply let us know your learning goals, and we will work with you to create a personalized course plan.",
  },
  {
    title: "Who are the teachers at Zaid Academy",
    description:
      "Our teachers are highly qualified and experienced in Quranic studies and Islamic education. They have a deep understanding of the Quran and its teachings, and are passionate about sharing their knowledge with students.",
  },
  {
    title: "How are the classes conducted? Are they online or in-person",
    description:
      "All of our classes are conducted online, which allows students to learn from anywhere in the world. Our online classes are conducted through video conferencing software such as Zoom, Google Meet, Google Teams and use interactive teaching methods to keep students engaged and motivated.",
  },
  {
    title: "What is the class schedule like? Can I choose my own schedule",
    description:
      "We offer flexible scheduling options to accommodate the needs of our students. You can choose from a variety of class times and durations that work best for you.",
  },
  {
    title: "What is the cost of the courses",
    description:
      "The cost of our courses varies depending . We strive to keep our fees affordable and offer payment plans to make our courses accessible to everyone. Go through our price list to find out more about our fees.   https://www.zaidacademy.org/pricing",
  },
  {
    title: "How can I enroll in a course at Zaid Academy",
    description:
      "You can enroll in our courses by filling out the registration form on our website or by contacting us directly via gmail or Whatsapp. We will guide you through the enrollment process and help you select the right course for your needs.",
  },
  {
    title:
      "Is there any age requirement for enrolling in a course at Zaid Academy",
    description:
      "No, there is no age requirement for enrolling in our courses. We welcome students of all ages and backgrounds.",
  },
  {
    title:
      "Is there any age requirement for enrolling in a course at Zaid Academy",
    description:
      "No, there is no age requirement for enrolling in our courses. We welcome students of all ages and backgrounds.",
  },
  {
    title: "How can I pay for the courses",
    description:
      "We accept payments through a variety of methods. We will provide you with detailed payment instructions after you enroll in a course.",
  },
  {
    title: "What is your refund policy",
    description:
      "We offer a refund policy for students who are not satisfied with their course. Please see our website for detailed information on our refund policy.",
  },
  {
    title: "Can I cancel or reschedule a class if I have an emergency",
    description:
      "Yes, we understand that emergencies can happen. We offer flexible scheduling options and will work with you to reschedule any missed classes.",
  },
  {
    title: "Can I attend a trial class before enrolling in a course",
    description:
      "Yes, we offer trial classes to give students a chance to experience our teaching methods and interact with our teachers before enrolling in a course. Please contact us to schedule a trial class.",
  },
];

const FAQs = () => {
  return (
    <div>
      <Head>
        <title>Frequently Asked Questions</title>
      </Head>
      <div className="mx-auto w-11/12 md:w-8/12 xl:w-6/12 space-y-24 py-16">
        <div className="space-y-6 text-center">
          <h3 className="text-xl">FAQs</h3>
          <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
          <p className="text-xl">Have some questions? We are here to help</p>
        </div>
        <div className="space-y-6">
          {data.map((item) => (
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
