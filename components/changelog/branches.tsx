"use client";

import { useState, useEffect } from "react";
import { backendUrl } from "@/config"
import Link from "next/link";
import Loader from "../common/Loader";
type Subtitles = {
  [key: string]: string;
  main: string;
  test: string;
};
const subtitles: Subtitles = {
  main: "Doporučený branch. Tento branch je plně testovaný a je určený pro normální uživatele.",
  test: "Tento branch je doporučený pro vývojáře. Tento branch se používá na testování KLIND OS. Pokud chcete všechny novinky jako první, tento branch je pro Vás.",
}
export default function blogposts() {
  const [content, setContent] = useState(<Loader></Loader>);

  useEffect(() => {
    fetch(backendUrl + "/branches/getAll")
      .then((res) => res.json())
      .then((response) => {
        function capitalizeFirstLetter(str: string) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }
        var full = response.map((element: any[]) => {
          return (
            <Link
              href={"/changelog/changes/?branch=" + element}
              key={element}
            >
              <div className="max-w-3xl mx-auto pb-12 md:pb-16 cursor-pointer">
                <h2 className="h3 mb-4" data-aos="fade-up">
                  {capitalizeFirstLetter(element.toString())}
                </h2>
                <p
                  className="text-xl text-gray-400 mb-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {subtitles[element.toString()]}
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
          <h2 className="text-center h2 mb-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">Branch</h2>
          <p className="text-center max-w-3xl mx-auto text-xl text-gray-400 mb-20"
                  data-aos="fade-up"
                  data-aos-delay="500"
>Vyberte si branch ze kterého chcete zobrazit novinky</p>
          {content}
        </div>
      </div>
    </section>
  );
}
