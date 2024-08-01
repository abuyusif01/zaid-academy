
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CheckoutDisplay from '../components/checkout';

const Checkout = () => {
  const router = useRouter();
  const { query } = router;

  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    if (query) {
      setStudentData(query);
    }
  }, [query]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 bg-opacity-50 py-6">
      <Head>
        <title>Zaid | Home</title>
        <meta name="description" content="Zaid Academy, Learning Quran" />
        <meta
          name="keywords"
          content="Learn Quran, Teach Quran, Help me learn quran, Quran class, Quran class online"
        />
      </Head>
      <div className="w-full max-w-3xl mx-auto">
        <CheckoutDisplay studentData={studentData} />
      </div>
    </div>
  );
};

export default Checkout;
