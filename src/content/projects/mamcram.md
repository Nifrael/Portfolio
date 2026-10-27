---
title: "MAM'CRAM"
description: "Site vitrine d'un atelier artisanal de macramé et bois flotté, avec un CMS permettant aux artisans de publier eux-mêmes leurs créations."
publishDate: "2026-10"
featured: true
shape: "cross"
tags: ["Astro", "TypeScript", "SCSS", "Keystatic", "Cloudflare"]
cover:
  src: "../../assets/projects/MamCram.jpg"
  alt: "Création MAM'CRAM : attrape-rêves en macramé à motif de fleur bleue et jaune, sur fond bleu canard."
links:
  live: "https://mamcram.fr/"
  repository: "https://github.com/Nifrael/Mam-Cram"
---

## Présentation du Projet

MAM'CRAM est un atelier artisanal qui réalise des pièces uniques en macramé, bois flotté et matériaux naturels, le plus souvent sur commande. Le site présente les créations par gammes et transforme les visiteurs, venus en majorité d'Instagram sur mobile, en demandes de création sur mesure.

### Caractéristiques techniques :

- **Autonomie des clients** : contenus (gammes, créations, actualités) gérés par les artisans via Keystatic, sans passer par un développeur.
- **Mobile d'abord** : conception pensée pour le téléphone, score Lighthouse mobile maximal en production.
- **Respect du RGPD** : polices auto-hébergées au build, aucun appel à Google Fonts, formulaire de contact via Web3Forms.
- **Évolutif** : architecture prête à accueillir des boutons d'achat Stripe sans refonte.
- **Hébergement** : déploiement statique sur Cloudflare.
