"use client";

import { useState, useEffect } from "react";
import { backendUrl } from "@/config"
import Link from "next/link";
import Loader from "../common/Loader";

export default function blogposts() {
  const [content, setContent] = useState(<Loader></Loader>);

  useEffect(() => {
    fetch(backendUrl + "/blog")
      .then((res) => res.json())
      .then((response) => {
        response.reverse();
        var full = response.map((element: any[]) => {
          return (
          
            <Link
              href={"/blog/post?id=" + element[0]}
            >
              <div className="max-w-3xl mx-auto pb-12 md:pb-16 cursor-pointer">
                <h2 className="h2 mb-4" data-aos="fade-up">
                  {element[1]}
                </h2>
                <p
                  className="text-xl text-gray-400 mb-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {
                    element[2].split(" ").length > 50 ?
                    element[2]
                    .replace(/<[^>]+>/g, " ")
                    .split(" ", 50)
                    .join(" ")
                    .trim() + "..."
                    : element[2].replace(/<[^>]+>/g, " ")
                  }
                </p>
              </div>
             </Link>
          );
        });
        setContent(full);
      })
      .catch((e) => {
        console.log(e);
        setContent(<h1>nastala chyba při kontaktování serveru.</h1>);
      });
  }, []);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pb-10">
          {content}
        </div>
      </div>
    </section>
  );
}
