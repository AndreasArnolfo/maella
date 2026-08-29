export const site = {
  name: "MAELLA",
  url: "https://maella.fr",
  contactHref: "mailto:contact@maella.fr",
  contactLabel: "contact@maella.fr",
} as const;

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "À propos", href: "#a-propos" },
] as const;

export const services = [
  { index: "01", title: "Déploiement SaaS", description: "Un passage en production propre, documenté et adapté à votre application.", items: ["Dockerisation", "CI / CD", "Domaines & HTTPS", "Reverse proxy"] },
  { index: "02", title: "Infrastructure", description: "Une base technique lisible pour héberger, observer et faire évoluer votre produit.", items: ["Serveurs & cloud", "Bases de données", "Monitoring", "Sauvegardes"] },
  { index: "03", title: "Automatisation", description: "Les tâches répétitives deviennent des workflows fiables, connectés à vos outils.", items: ["Workflows", "n8n", "API & webhooks", "Processus métier"] },
  { index: "04", title: "Produit & intégrations", description: "Le lien technique entre votre interface, votre logique métier et les services externes.", items: ["Frontend / backend", "API", "Fonctionnalités métier", "Conseil technique"] },
] as const;

export const pipeline = [
  { step: "Code", detail: "Versionné" },
  { step: "Build", detail: "Reproductible" },
  { step: "Deploy", detail: "Automatisé" },
  { step: "Infra", detail: "Configurée" },
  { step: "Production", detail: "Opérationnelle" },
] as const;

export const method = [
  { index: "01", title: "Comprendre", text: "Le produit, ses usages, ses contraintes et ce qui bloque son passage à l’échelle réelle." },
  { index: "02", title: "Adapter", text: "L’application et son environnement sont préparés sans complexité superflue." },
  { index: "03", title: "Déployer", text: "Le chemin vers la production devient clair, sécurisé et reproductible." },
  { index: "04", title: "Exploiter", text: "L’infrastructure est observée, maintenue et prête à accompagner le produit." },
] as const;

export const principles = [
  { title: "Simple par conception", text: "Chaque outil doit avoir une raison d’être. Nous limitons les couches et les dépendances inutiles." },
  { title: "Reproductible", text: "Configurations, déploiements et environnements sont pensés pour ne pas dépendre d’une manipulation fragile." },
  { title: "Automatisé avec mesure", text: "Nous automatisons ce qui réduit les erreurs et libère du temps, sans masquer le fonctionnement du système." },
  { title: "Adapté au produit", text: "L’infrastructure sert votre application, son stade et vos usages — jamais l’inverse." },
] as const;
