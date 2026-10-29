"use client";

import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-8">
      <div className="mx-auto mb-10 max-w-5xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Aula 08 · SwiperJS
        </p>
        <h1 className="text-3xl font-bold sm:text-5xl">Meu Carousel</h1>
        <p className="mt-4 text-slate-300">
          Um carrossel responsivo feito com Next.js, TypeScript e Swiper.
        </p>
      </div>
      <Carousel />
    </main>
  );
}
