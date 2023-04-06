import { useRouter } from "next/router";
import React from "react";

const InstructorDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default InstructorDetails;
