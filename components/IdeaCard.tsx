"use client";

import { useState } from "react";
import type { BusinessIdea } from "../data/ideas";

type Props = {
  idea: BusinessIdea;
};

export function IdeaCard({ idea }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <article className="card">
      <div className="card-header">
        <div>
          <h2>{idea.title}</h2>
          <p className="subtitle">{idea.subtitle}</p>
        </div>
        <button
          type="button"
          className="toggle"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Hide plan" : "Explore idea"}
        </button>
      </div>
      <p className="summary">{idea.summary}</p>
      {open ? (
        <div className="details">
          <DetailList title="Value Proposition" items={idea.valueProposition} />
          <DetailList title="Revenue Streams" items={idea.revenueStreams} />
          <DetailList
            title="Startup Requirements"
            items={idea.startupRequirements}
          />
          <DetailList title="Target Segments" items={idea.targetSegments} />
          <DetailList title="Launch Steps" items={idea.launchSteps} />
          <DetailList
            title="Differentiation"
            items={idea.differentiation}
          />
          <DetailList title="Strategic Partners" items={idea.partners} />
          <p className="region-fit">
            <strong>Why it fits In Salah:</strong> {idea.regionFit}
          </p>
        </div>
      ) : null}
    </article>
  );
}

type DetailListProps = {
  title: string;
  items: string[];
};

function DetailList({ title, items }: DetailListProps) {
  return (
    <section className="detail-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={`${title}-${item.slice(0, 42)}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
