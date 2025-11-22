import { IdeaCard } from "../components/IdeaCard";
import { ideas } from "../data/ideas";
import styles from "./page.module.css";

const quickWins = [
  {
    title: "Start with retained services",
    description:
      "Secure at least two SLA retainers with energy or municipal clients; this stabilizes cashflow while you build larger projects."
  },
  {
    title: "Bundle fiber + security",
    description:
      "Every FTTH deployment can upsell CCTV and remote monitoring — leverage your dual hardware background for higher margins."
  },
  {
    title: "Leverage local logistics",
    description:
      "Use In Salah’s central position to promise faster on-site response times than Algiers-based competitors."
  }
];

const metrics = [
  { label: "Average SLA retainer", value: "300k – 600k DZD / month" },
  { label: "Deployment payback", value: "8 – 12 months if bundling services" },
  { label: "Target margin", value: "35% gross with desert-ready premium" }
];

export default function Page() {
  return (
    <main className={styles.main}>
      <section className="container">
        <div className={styles.hero}>
          <span className={styles.badge}>In Salah • Algeria</span>
          <h1 className={styles.title}>Sahara Fiber Venture Playbook</h1>
          <p className={styles.tagline}>
            Turn your field expertise in FTTH, CCTV, and telecom hardware into
            high-impact ventures adapted to the Tidikelt region. Explore
            blueprints crafted for desert infrastructure, resilient connectivity
            and integrated security services.
          </p>
          <div className={styles.metricsRow}>
            {metrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <header className={styles.sectionHeader}>
          <h2>Launch priorities</h2>
          <p>
            Execute these quick wins in the first 90 days to build credibility,
            stabilize cashflow, and generate case studies for larger contracts.
          </p>
        </header>
        <div className={styles.quickWins}>
          {quickWins.map((item) => (
            <article key={item.title} className={styles.quickWinCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <header className={styles.sectionHeader}>
          <h2>Business models tailored to your strengths</h2>
          <p>
            Expand into scalable service lines that leverage your hands-on fiber
            installation, CCTV integration, and on-ground knowledge. Toggle each
            card to inspect the full go-to-market blueprint.
          </p>
        </header>
        <div className="grid">
          {ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <header className={styles.sectionHeader}>
          <h2>Execution roadmap for 2024</h2>
          <p>
            Focus on building trust with anchor clients, then reinvest into
            specialized equipment and training assets for long-term expansion.
          </p>
        </header>
        <div className={styles.timeline}>
          <div>
            <h3>Phase 1 · Q2-Q3</h3>
            <ul>
              <li>Secure two SLA retainers with oilfield or municipal clients</li>
              <li>
                Build reference FTTH + CCTV bundle for a housing cooperative
              </li>
              <li>
                Formalize supplier agreements for fiber, CCTV, and solar kits
              </li>
            </ul>
          </div>
          <div>
            <h3>Phase 2 · Q4</h3>
            <ul>
              <li>Launch mobile diagnostics van with spares inventory</li>
              <li>Prototype hybrid solar micro-mast and document performance</li>
              <li>Begin Fiber Skills Academy weekend bootcamps</li>
            </ul>
          </div>
          <div>
            <h3>Phase 3 · 2025</h3>
            <ul>
              <li>Scale subscription monitoring across 10+ sites</li>
              <li>Expand training to regional wilayas via mobile lab</li>
              <li>Develop partnership with tourism board for smart oasis pilots</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerCard}>
            <h2>Next actions</h2>
            <ol>
              <li>Validate demand with three anchor clients this month.</li>
              <li>
                Price your SLA tiers and prepare pitch decks highlighting desert
                reliability.
              </li>
              <li>
                Set up a lightweight CRM (Notion or Fibery) to track leads,
                assets, and maintenance SLAs.
              </li>
            </ol>
            <p>
              This playbook is designed for rapid execution. Customize pricing
              to local purchasing power, document every deployment, and grow
              through transparent service-level reporting.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
