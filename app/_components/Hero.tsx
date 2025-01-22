import React from "react";

function Hero() {
  return (
    <section className="bg-black h-screen">
      <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-sky-300 font-extrabold sm:text-5xl">
            Documents & diagrams
            <strong className="font-extrabold text-white sm:block">
              for engineering teams.
            </strong>
          </h1>

          <p className="mt-4 text-slate-200 sm:text-xl sm:leading-relaxed">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-white text-black px-12 py-3 text-sm font-medium shadow transition hover:bg-slate-600 hover:text-white focus:outline-none focus:ring focus:ring-sky-500 active:bg-sky-700 sm:w-auto"
              href="#"
              aria-label="Learn more about the tools for engineering teams"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
