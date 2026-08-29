"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "../_data/site-content";
import { ArrowDown, ArrowUpRight } from "./icons";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = reduceMotion ? { duration: 0 } : { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="hero" id="top">
      <motion.div className="hero-grid" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 0.16 }} transition={{ duration: 1.2 }} />
      <div className="shell hero-inner">
        <motion.div className="hero-meta" initial={reduceMotion ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ ...enter, delay: 0.1 }}>
          <p><span className="status-dot" /> Studio technique français</p>
          <p>Déploiement · Infrastructure · Automatisation</p>
        </motion.div>
        <div className="hero-copy">
          <motion.h1 initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.11, delayChildren: 0.18 } } }}>
            <motion.span variants={{ hidden: reduceMotion ? {} : { opacity: 0, y: 70 }, visible: { opacity: 1, y: 0, transition: enter } }}>Votre produit<span className="signal">.</span></motion.span>
            <motion.span variants={{ hidden: reduceMotion ? {} : { opacity: 0, y: 70 }, visible: { opacity: 1, y: 0, transition: enter } }}>En production<span className="signal">.</span></motion.span>
          </motion.h1>
          <motion.div className="hero-support" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ ...enter, delay: 0.48 }}>
            <p>MAELLA déploie, connecte et exploite les applications SaaS qui font avancer votre activité.</p>
            <div className="hero-actions">
              <motion.a className="button button-dark" href={site.contactHref} whileHover={reduceMotion ? undefined : { y: -3, scale: 1.015 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>Parler de votre projet <ArrowUpRight className="icon" /></motion.a>
              <a className="text-link" href="#approche">Découvrir notre approche <ArrowDown className="icon" /></a>
            </div>
          </motion.div>
        </div>
        <motion.div className="hero-rail" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.75 }}><span>CODE</span><i /><span>BUILD</span><i /><span>DEPLOY</span><i className="is-live" /><span>LIVE</span></motion.div>
      </div>
    </section>
  );
}
