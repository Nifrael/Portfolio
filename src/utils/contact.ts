// TODO: remplacer les placeholders ci-dessous par les vraies coordonnées

export const CONTACT_EMAIL = "contact@nifradev.fr";

/** Numéro affiché, et sa version internationale pour le lien `tel:`. */
export const CONTACT_PHONE = {
  display: "06 00 00 00 00",
  international: "+33600000000",
};

export const CV_URL = "https://cv.example.com";

export const LINKEDIN_URL = "https://www.linkedin.com/in/votre-profil";

export const GITHUB_URL = "https://github.com/Nifrael";

/**
 * URL du service d'envoi du formulaire (Formspree, Cloudflare Worker…),
 * définie dans `.env`. Absente : le formulaire ouvre la messagerie du
 * visiteur avec le message pré-rempli.
 */
export const CONTACT_ENDPOINT: string | undefined =
  import.meta.env.PUBLIC_CONTACT_ENDPOINT || undefined;
