export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 md:pt-40">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Developers
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Verze KLIND OS kterou si můžete stáhnout na Váš operační systém.
              <br />
              Tato verze je pro programátory kteří se chcou podílet na vývoji
              KLIND OS nebo pro lidi kteří si chcou KLIND OS jenom vyzkoušet a
              ne instalovat na VirtualBox nebo na počítač.
            </p>
          </div>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                target="_blank"
                className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                href="/downloads/KLIND-OS-Dev.mjs"
                download
              >
                Stáhnout instalační soubor
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <a
                className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                href="https://docs.klindos.jzitnik.dev/developers/"
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
