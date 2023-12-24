import React from 'react'
import Link from 'next/link'
import logo from "@/public/logo/logo.png"
import Image from "next/image"

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <Image alt="KLIND OS logo" src={logo} height={50} width={50}></Image>
                </Link>
              </div>
              <div className="text-gray-400">Operační systém napsaný s GUI napsaným v JavaScriptu.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Stránky</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/download" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Stáhnout</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/blog" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Blog</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/changelog" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Changelog</Link>
                  </li>
                  <li className="mb-1">
                    <a target='_blank' href="https://klind-os-docs.onrender.com/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Dokumentace</a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            
            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Jakub Žitník. Všechna práva vyhrazena.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
