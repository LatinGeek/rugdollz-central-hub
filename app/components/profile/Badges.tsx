"use client";

import { useState } from "react";
import { BadgeDetailsComponent } from "./BadgeDetailsComponent";
import { BadgeDetails } from "@/types/FormattedData/badge-details";

interface BadgesProps {
  badges: BadgeDetails[];
  title?: string;
}

export function Badges({ badges, title = "BADGES" }: BadgesProps) {
  const [selectedBadge, setSelectedBadge] = useState<BadgeDetails | null>(null);

  // Sort badges: active first, then inactive
  const sortedBadges = [...badges].sort((a, b) => {
    if (a.badge.isActive === b.badge.isActive) return 0;
    return a.badge.isActive ? -1 : 1;
  });

  const maxVisible = 8;
  const visibleBadges = sortedBadges.slice(0, maxVisible);
  const hiddenCount =
    sortedBadges.length > maxVisible ? sortedBadges.length - maxVisible : 0;

  return (
    <>
      <div className="bg-[rgb(var(--bg-dark))] rounded-xl p-6">
        <h2 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-4">
          {title}
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-4">
          {visibleBadges.map((badge) => (
            <div
              key={badge.badge.id}
              className="relative group aspect-square rounded-lg overflow-visible transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedBadge(badge)}
            >
              <div
                className={`w-full h-full flex items-center justify-center rounded-lg transition-all duration-300 ${
                  badge.badge.isActive
                    ? "bg-[rgb(var(--accent))] bg-opacity-20 hover:bg-opacity-30"
                    : "bg-[rgb(var(--bg-darker))] grayscale hover:grayscale-0"
                }`}
              >
                <div
                  className={`w-full h-full flex items-center justify-center transition-all duration-300 ${
                    badge.badge.isActive
                      ? "opacity-100"
                      : "opacity-30 group-hover:opacity-50"
                  }`}
                  dangerouslySetInnerHTML={{ __html: badge.badge.icon }}
                  style={{
                    filter: (() => {
                      const completedRequirements =
                        badge.userBadgeRequirements.filter(
                          (req) => req.isCompleted
                        ).length;
                      const totalRequirements =
                        badge.userBadgeRequirements.length;

                      if (completedRequirements === 0)
                        return "brightness(0) invert(0.3)"; // Dark gray
                      if (completedRequirements === totalRequirements)
                        return "invert(84%) sepia(44%) saturate(850%) hue-rotate(359deg) brightness(105%) contrast(107%)"; // Gold
                      return "brightness(0) invert(0.9)"; // Light gray, almost white
                    })(),
                  }}
                />

                {/* Status indicator */}
                <div
                  className={`absolute top-1 right-1 w-2 h-2 rounded-full transition-all duration-300 ${
                    badge.badge.isActive
                      ? "bg-[rgb(var(--accent))]"
                      : "bg-[rgb(var(--text-secondary))] opacity-50"
                  }`}
                />
              </div>

              {/* Enhanced Tooltip */}
              <div className="hidden sm:group-hover:block absolute z-[100] bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 sm:group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                <div className="bg-[rgb(var(--bg-darker))] p-2.5 rounded-lg shadow-lg border border-[rgb(var(--border-dark))] w-[250px]">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-medium text-[rgb(var(--text-primary))] truncate flex-1">
                        {badge.badge.name}
                      </div>
                      {!badge.badge.isActive && (
                        <span className="text-xs px-1.5 py-0.5 rounded bg-[rgb(var(--bg-light))] text-[rgb(var(--text-secondary))] whitespace-nowrap">
                          Locked
                        </span>
                      )}
                    </div>
                    {badge.badge.description && (
                      <p className="text-xs text-[rgb(var(--text-secondary))] break-words leading-relaxed">
                        {badge.badge.description}
                      </p>
                    )}
                    {/* Icon based on ID */}
                    {badge.badge.id === "9" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-[rgb(var(--text-secondary))]"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    )}
                  </div>
                </div>
                {/* Tooltip Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-[rgb(var(--bg-darker))] border-r border-b border-[rgb(var(--border-dark))] transform rotate-45" />
              </div>
            </div>
          ))}
          {hiddenCount > 0 && (
            <button
              type="button"
              className="z-10 aspect-square rounded-lg bg-[rgb(var(--bg-darker))] flex items-center justify-center text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                const firstHiddenBadge = sortedBadges[maxVisible];
                if (firstHiddenBadge) {
                  setSelectedBadge(firstHiddenBadge);
                }
              }}
            >
              <span className="text-lg">+{hiddenCount}</span>
            </button>
          )}
        </div>
      </div>

      {/* Badge Details Modal */}
      {selectedBadge && (
        <BadgeDetailsComponent
          badges={badges}
          selectedBadge={selectedBadge}
          onClose={() => setSelectedBadge(null)}
          onSelect={(badge) => setSelectedBadge(badge)}
        />
      )}
    </>
  );
}
