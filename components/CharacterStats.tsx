"use client";

import { useSyncExternalStore } from "react";
import { getCharacterStats, getToday } from "@/lib/characterStats";

type CharacterStatsProps = {
  builtOn: string;
};

// The date never needs to notify React of changes, so there is nothing to subscribe to
function subscribe() {
  return () => {};
}

export default function CharacterStats({ builtOn }: CharacterStatsProps) {
  // The static HTML shows the stats from build day; the browser then
  // switches to the visitor's current date, so it is never out of date.
  const day = useSyncExternalStore(subscribe, getToday, () => builtOn);
  const { level, expProgress } = getCharacterStats(day);

  const totalExpBlocks = 12;
  const filledExpBlocks = Math.floor(expProgress * totalExpBlocks);
  const expPercent = (expProgress * 100).toFixed(1);

  return(
    <>
      <div className="mt-6 flex gap-8">
        <div>
          <p className="text-sm text-gray-500">
            Level
          </p>

          <p className="text-xl font-semibold">
            {level}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Class
          </p>

          <p className="text-xl font-semibold">
            Engineer
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">
            Experience{" "}
            <span className="text-gray-500">
              {expPercent}%
            </span>
          </p>

          <p className="text-sm text-gray-500">
            Level {level + 1}
          </p>
        </div>

        <div className="mt-3 flex gap-1">
          {Array.from({ length: totalExpBlocks }).map((_, index) => (
            <div
              key={index}
              className={`h-4 flex-1 rounded-sm ${
                index < filledExpBlocks
                  ? "bg-[var(--accent-green)]"
                  : "bg-gray-200"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
