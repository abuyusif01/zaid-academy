import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Teacher = ({ teacher, image }) => {
  const router = useRouter();
  const goToDetails = () => {
    router.push({
      pathname: `/instructors/${teacher.id}`,
      query: { id: teacher.id },
    });
  };
  return (
    <div className="w-1/3 p-4">
      <div className="cursor-pointer" onClick={goToDetails}>
        <div className="p-4 border border-gray-50 rounded-lg shadow hover:shadow-xl cursor-pointer transition duration-300 ease-in">
          <div className="h-[250px] w-[250px] relative mb-6 mx-auto">
            <Image
              src={image}
              alt="teacher"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="rounded-lg hover:scale-125 transition duration-300 ease-in"
            />
          </div>
          <div className="text-center w-[250px] mx-auto">
            <h4 className="text-xl tracking-wide font-semibold leading-relaxed text-gray-700">
              {teacher.name}
            </h4>
            <h6 className="text-gray-500">{teacher.role}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
