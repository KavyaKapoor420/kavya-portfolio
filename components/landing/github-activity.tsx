"use client";

import dynamic from "next/dynamic";

const GhActivityCard = dynamic(
  () => import("gh-activity-card/components/gh-activity-card"),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-2xl border border-gray-200 px-4 py-6 text-sm text-gray-500 dark:border-neutral-800 dark:text-gray-400">
        Loading GitHub activity...
      </div>
    ),
  }
);

export default function GitHubActivity() {
  return (
    <GhActivityCard
      username="kavyakapoor420"
      className="text-black dark:text-white"
    />
  );
}
