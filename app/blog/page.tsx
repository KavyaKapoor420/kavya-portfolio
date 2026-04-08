import { gabarito, hanken } from "@/public/font";

export default function BlogPage() {
  return (
    <div className="mx-auto mb-24 pt-6 text-black md:pt-12">
      <p
        className={`${gabarito.className} text-lg sm:text-2xl text-black dark:text-white font-semibold bg-gray-200 dark:bg-titleBg p-2 border-l-8 border-black dark:border-gray-200`}
      >
        Blog
      </p>

      <div className="mt-12 rounded-3xl border border-neutral-300 bg-white/70 p-8 dark:border-neutral-800 dark:bg-neutral-950/60">
        <p className={`${gabarito.className} text-2xl text-black dark:text-white`}>
          Blogs coming soon
        </p>
        <p className={`${hanken.className} mt-3 text-sm text-gray-500`}>
          This route is ready. You can add your blogs here later without
          changing the navbar again.
        </p>
      </div>
    </div>
  );
}
