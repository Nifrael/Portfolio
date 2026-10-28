const SELECTORS = {
  form: 'contact-form',
  output: 'contact-output',
  submit: 'button[type="submit"]',
} as const;

const MESSAGES = {
  pending: '> envoi en cours…',
  success: '✓ message envoyé. Merci, je vous réponds dès que possible.',
  error: "✗ l'envoi a échoué. Réessayez, ou écrivez-moi directement par email.",
  mailto: '> ouverture de votre messagerie avec le message pré-rempli…',
} as const;

type OutputState = 'pending' | 'success' | 'error' | 'info';

function setOutput(output: HTMLElement, state: OutputState, text: string): void {
  output.dataset.state = state;
  output.textContent = text;
}

/** Ouvre la messagerie du visiteur avec le message pré-rempli. */
function openMailto(email: string, data: FormData): void {
  const nom = String(data.get('nom') ?? '');
  const subject = `Nouveau projet — ${nom}`;
  const body = `Nom : ${nom}\nEmail : ${data.get('email') ?? ''}\n\n${data.get('message') ?? ''}`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function sendToEndpoint(endpoint: string, data: FormData): Promise<void> {
  const response = await fetch(endpoint, {
    method: 'POST',
    body: data,
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
}

/**
 * Formulaire de contact façon terminal : envoi sans rechargement et retour
 * affiché comme une sortie de commande. Sans JS, le formulaire reste
 * fonctionnel via son attribut `action`.
 */
export function initContactForm(): void {
  const form = document.getElementById(SELECTORS.form) as HTMLFormElement | null;
  const output = document.getElementById(SELECTORS.output);
  if (!form || !output) return;

  const submit = form.querySelector<HTMLButtonElement>(SELECTORS.submit);
  const { endpoint, email = '' } = form.dataset;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);

    // Champ piège rempli : robot, on ignore silencieusement
    if (data.get('_gotcha')) return;

    if (!endpoint) {
      setOutput(output, 'info', MESSAGES.mailto);
      openMailto(email, data);
      return;
    }

    setOutput(output, 'pending', MESSAGES.pending);
    if (submit) submit.disabled = true;

    try {
      await sendToEndpoint(endpoint, data);
      form.reset();
      setOutput(output, 'success', MESSAGES.success);
    } catch {
      setOutput(output, 'error', MESSAGES.error);
    } finally {
      if (submit) submit.disabled = false;
    }
  });
}
