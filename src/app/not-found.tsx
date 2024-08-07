"use client";
import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const NotFound: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <html>
      <body>
        <div className="not">
          <Head>
            <title>Ошибка</title>
          </Head>
          <h1>Ошибка</h1>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
