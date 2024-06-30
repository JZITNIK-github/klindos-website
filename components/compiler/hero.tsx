export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 md:pt-40">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Vytváření aplikací
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              KLIND OS podporuje externí aplikace. Můžete si jednoduše vytvořit aplikace pro KLIND OS v jazyce JavaScript.
              <br />
              Následně si aplikaci vykompilujete promocí KLIND OS Packager.
            </p>
          </div>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                target="_blank"
                className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                href="/downloads/KLIND-OS-Packager.mjs"
                download
              >
                Stáhnout packager
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <a
                className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                href="https://docs.klindos.jzitnik.dev/vyvoj-aplikaci/"
                target="_blank"
              >
                Dokumentace
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
