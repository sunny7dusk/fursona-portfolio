import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="w-[50vw] self-center">
        <span className="decoration-solid bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 text-sm sm:text-1xl lg:text-2xl 2xl:text-5xl underline-light-100">
          Come take a look at{" "}
          <Link href="/projects" prefetch>
            <span className=" underline decoration-solid decoration-[#F2CC85]/70 underline-offset-8 hover:font-bold font-normal animation ease-in-out">
              projects
            </span>
          </Link>{" "}
          I&apos;ve done!
          {/* Woah, 123 commits on GitHub! */}
        </span>
      </div>
    </>
  );
}
