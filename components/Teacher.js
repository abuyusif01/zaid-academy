import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Teacher = ({ teacher }) => {
  const router = useRouter();
  const goToDetails = () => {
    router.push({
      pathname: `/instructors/${teacher.uid}`,
      query: { id: teacher.uid },
    });
  };
  return (
    <div className="w-full">
      <div className="cursor-pointer" onClick={goToDetails}>
        <div className="border border-gray-50 rounded-lg shadow hover:shadow-xl p-4 cursor-pointer transition duration-300 ease-in">
          <div className="h-[250px] w-[250px] relative mb-6 mx-auto">
            <Image
              src={teacher.profile}
              alt="teacher"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="rounded-lg hover:scale-125 transition duration-300 ease-in"
            />
          </div>
          <div className="text-center">
            <h4 className="text-xl text-center tracking-wide font-semibold leading-relaxed text-gray-700">
              {teacher.fullName}
            </h4>
            <h6 className="text-gray-500 text-center">
              {teacher.qualification}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
