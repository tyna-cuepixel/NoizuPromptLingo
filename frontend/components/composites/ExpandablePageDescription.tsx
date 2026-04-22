"use client";

import { useState } from "react";
import { PAGE_DESCRIPTIONS, type PageDescriptionConfig } from "@/lib/config/page-descriptions";

export interface ExpandableDescriptionProps {
  /** Key to lookup description in PAGE_DESCRIPTIONS config */
  pageKey: string;
  /** Optional custom class for the container */
  className?: string;
}

/**
 * Expandable page description component.
 *
 * Fetches description content from a centralized config file and renders
 * it with an expandable "Learn more / Show less" toggle.
 *
 * @example
 * <ExpandableDescription pageKey="npl_playground" />
 */
export function ExpandableDescription({
  pageKey,
  className = "",
}: ExpandableDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const config = PAGE_DESCRIPTIONS[pageKey];

  if (!config) {
    console.warn(`No page description found for key: ${pageKey}`);
    return null;
  }

  return (
    <>
      {/* Toggle button (rendered inline with title) */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-sm text-accent hover:text-accent/80 transition-colors focus:outline-none focus:underline"
        aria-expanded={isExpanded}
      >
        {isExpanded ? "Show less" : "Learn more"}
      </button>

      {/* Expandable content */}
      {isExpanded && (
        <div className={`rounded-lg border border-border bg-surface-1 px-4 py-4 ${className}`}>
          <DescriptionContent config={config} />
        </div>
      )}
    </>
  );
}

/**
 * Renders the description content from config.
 * Separated for potential reuse elsewhere.
 */
export function DescriptionContent({
  config,
}: {
  config: PageDescriptionConfig;
}) {
  return (
    <div className="space-y-4 text-sm text-muted">
      {config.sections.map((section, idx) => (
        <div key={idx} className="space-y-2">
          <h4 className="font-semibold text-foreground">{section.title}</h4>
          {section.content && <p className="leading-relaxed">{section.content}</p>}

          {section.items && section.items.length > 0 && (
            <ul className="ml-4 space-y-1 list-disc text-xs">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  {item.label && (
                    <strong className="text-foreground">
                      {item.label}
                      {" — "}
                    </strong>
                  )}
                  {item.description}
                </li>
              ))}
            </ul>
          )}

          {section.example && (
            <p className="leading-relaxed mt-2">
              Example:{" "}
              <code className="font-mono text-accent">{section.example}</code>
            </p>
          )}

          {section.additionalContent && (
            <p className="leading-relaxed mt-2">{section.additionalContent}</p>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Hook to get title with toggle for PageHeader.
 * Usage in PageHeader title prop:
 *
 * title={<ExpandableTitle pageKey="npl_playground" baseTitle="NPL Playground" />}
 *
 * Note: The expandable content renders inside the title component. To render
 * content below the PageHeader (like in the NPL page), create a custom component
 * that renders the title toggle inline and conditionally renders the description
 * in a separate container below PageHeader.
 */
export function ExpandableTitle({
  pageKey,
  baseTitle,
}: {
  pageKey: string;
  baseTitle: string;
}) {
  const config = PAGE_DESCRIPTIONS[pageKey];
  const [isExpanded, setIsExpanded] = useState(false);

  if (!config) {
    return <span>{baseTitle}</span>;
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <span>{baseTitle}</span>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-accent hover:text-accent/80 transition-colors focus:outline-none focus:underline"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Show less" : "Learn more"}
        </button>
      </div>
      {isExpanded && (
        <div className="rounded-lg border border-border bg-surface-1 px-4 py-4 mt-4">
          <DescriptionContent config={config} />
        </div>
      )}
    </>
  );
}
