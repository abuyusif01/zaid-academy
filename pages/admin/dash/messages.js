import Head from "next/head";
import React, { useEffect } from "react";
import Message from "../../../components/Messages";
import { useCourse } from "../../../context/CourseContext";
import { doc } from "firebase/firestore";

const Messages = () => {
  const {
    getOldMessages,
    getNewMessages,
    oldMessages,
    newMessages,
    undoMessage,
  } = useCourse();
  useEffect(() => {
    getOldMessages();
    getNewMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Head>
        <title>Admin Messages</title>
      </Head>
    </div>
  );
};

export default Messages;
