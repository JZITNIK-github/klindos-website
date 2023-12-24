"use client";

import { useState, useEffect } from "react";
import { backendUrl } from "@/config"
import Link from "next/link";
import Loader from "../common/Loader";
import { useSearchParams } from "next/navigation";

export default function blogposts() {
  const [content, setContent] = useState(<Loader></Loader>);
  const [nadpis, setTitle] = useState("Načítání")
  const pathname = useSearchParams()

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    const branchName = pathname.get("branch")
    fetch(backendUrl + "/changelog")
      .then((res) => res.json())
      .then((response) => {
        const data = response[branchName || ""]
        if (!data) {
          setTitle("Nenalezeno!")
          setContent(<></>)
          return
        }

        data.reverse();
        var full = data.map((element: any) => {
          return (
            <Link
              href={`/changelog/change?branch=${branchName}&id=${element.id}`}
              key={element.id}
            >
              <div className="max-w-3xl mx-auto pb-12 md:pb-16 cursor-pointer">
                <h2 className="h3 mb-4" data-aos="fade-up">
                  {element.title}
                </h2>
                <p
                  className="text-xl text-gray-400 mb-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {
                    element.content.split(" ").length > 50 ?
                    element.content
                    .replace(/<[^>]+>/g, " ")
                    .split(" ", 50)
                    .join(" ")
                    .trim() + "..."
                    : element.content.replace(/<[^>]+>/g, " ")
                  }
                </p>
              </div>
             </Link>
          );
        });
        setContent(full);
        setTitle(capitalizeFirstLetter(branchName || ""))
      })
      .catch((e) => {
        console.log(e);
        setContent(<h1>Nastala chyba při kontaktování serveru.</h1>);
        setTitle("Chyba!")
      });
  }, []);
  return (
    <section>
      <title>{nadpis + " - KLIND OS"}</title>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pb-10">
          <h2 className="text-center h2 mb-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">{capitalizeFirstLetter(pathname.get("branch") || "Nenalezeno")}</h2>
          <p className="text-center max-w-3xl mx-auto text-xl text-gray-400 mb-20"
                  data-aos="fade-up"
                  data-aos-delay="500"
          >
            {
              pathname.get("branch") ?
              "Poslední změny z "+pathname.get("branch") + " branch." :
              "Branch " + pathname.get("branch") + " nebyl nalezen!"
            }
          </p>
          {content}
        </div>
      </div>
    </section>
  );
}
