"use client";

import Loader from "@/components/common/Loader";
import { backendUrl } from "@/config";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function post() {
  const [content, setContent] = useState(<Loader />);
  const [nadpis, setNadpis] = useState("Načítání")
  const pathname = useSearchParams()

  useEffect(() => {
    const id = pathname.get("id")
    var full: JSX.Element;
    var pup = false;
    fetch(backendUrl + "/blog")
    .then(res => res.json())
    .then(response => {
        for (var i = 0; i < response.length; i++) {
            if (response[i][0] === id) {
                pup = true
                full = (
                    <div className="max-w-3xl mx-auto pb-12 md:pb-16">
                      <h1 className="h1 mb-4" data-aos="fade-up">{response[i][1]}</h1>
                      <p className="text-xl text-gray-400 mb-8 leading-8" data-aos="fade-up" data-aos-delay="200" dangerouslySetInnerHTML={{__html: response[i][2]}}></p>
                    </div>
                )
                setNadpis(response[i][1])
                break
            }
        }
        if (!pup) {
            full = <div className="max-w-3xl mx-auto pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">Tento příspěvek neexistuje!</h1>
            </div>
            setNadpis("Nenalezeno")
        }
        setContent(full)
    })
    .catch(() => {
        setContent(<div className="max-w-3xl mx-auto pb-12 md:pb-16">
          <h1 className="h1 mb-4" data-aos="fade-up">Nastala chyba při kontaktování serveru.</h1>
        </div>)
        setNadpis("Chyba!")
    })
  }, [pathname])
  return (
    <>
      <title>{nadpis + " - KLIND OS"}</title>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="relative pt-32 md:pt-40">
            {content}
          </div>
        </div>
      </section>
    </>
  )
}
