---
title: "SafePills"
description: "Application web d'aide à l'automédication : elle vérifie la compatibilité d'un médicament sans ordonnance avec le profil de santé de l'utilisateur, avec des explications générées par IA."
publishDate: "2026-02"
featured: true
shape: "square"
tags: ["Astro", "React", "SCSS", "FastAPI", "Python", "Gemini"]
cover:
  src: "../../assets/projects/SafePills.jpg"
  alt: "Plaquettes de comprimés et gélules sur fond sombre, visuel d'accueil de l'application SafePills."
links:
  live: "https://safe-pills-ten.vercel.app/"
  repository: "https://github.com/Nifrael/Pharma-Tools"
---

## Présentation du Projet

SafePills aide à vérifier si un médicament en accès direct est adapté à son profil de santé. L'utilisateur recherche un médicament, répond à un questionnaire généré selon les substances actives, puis obtient un niveau de risque (vert, orange, rouge) accompagné d'une explication vulgarisée.

### Caractéristiques techniques :

- **Recherche hybride** : par marque ou par molécule, à partir des données officielles de la Base de Données Publique des Médicaments (BDPM).
- **Questionnaire dynamique** : questions de santé générées selon les substances actives du médicament choisi.
- **Score de risque déterministe** : évaluation par une logique algorithmique stricte, indépendante de l'IA.
- **Explications par IA (RAG)** : synthèse générée par Gemini Flash, appuyée sur une base de connaissances médicale vérifiée.
- **Architecture découplée** : front Astro avec des îlots React (Nano Stores), API FastAPI en Python validée par Pydantic.
- **Bilingue** : interface et logique médicale disponibles en français et en espagnol.
