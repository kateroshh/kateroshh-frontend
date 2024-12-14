"use client";
import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import "@/scss/index.scss";

import Image from "next/image";
import Img404 from "@/img/404.png";

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
        <main className="main">
          <div className="container">
            <div className="not-found">
              {/* <h1 className="not-found__title">Error 404</h1> */}
              <Image
                width={490}
                height={398}
                className="not-found__img"
                src={Img404}
                alt="404 not found"
              />
              <a className="not-found__link" href="/">
                Home
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default NotFound;
