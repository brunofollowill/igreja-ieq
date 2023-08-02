import slide from "../../../public/img/slide-01.jpg";

function HandlePosition() {
  const positionImage = 23;
}

export default function Section() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-9x1 py-2 sm:px-2 sm:py-0 lg:px-5">
        <div className="relative isolate overflow-hidden bg-blue-800 px-6 pt-14 shadow-2xl rounded-b-lg sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#" />
                <stop offset={1} stopColor="#d946ef" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              IEQ RIACHÃO
            </h2>
            <h6 className="text-1xl font-bold  tracking-tight text-white sm:text-xl">
              Igreja do Evangelho Quadrangular do Riachão
            </h6>
            <p className="mt-1 text-lg leading-0 text-gray-300">
              A igreja da família...
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Atividades
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[32rem] lg:left-12 md:w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={slide}
              alt="Captura de tela do aplicativo"
              width={1820}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
