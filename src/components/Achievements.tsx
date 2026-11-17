import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/constants";

export default function Achievements() {

  return (
    <section id="achievements" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Achievements & Certifications</h2>
        <p className="section-subtitle">
          Certifications, hackathons, and wins along the way
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="glass-card group flex flex-col p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="rounded-full bg-muted/70 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                {item.category}
              </span>
            </div>
            <h3 className="mt-4 font-semibold transition-colors group-hover:text-accent">
              {item.title}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-accent/80">{item.issuer}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
