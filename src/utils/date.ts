const monthYearFormatter = new Intl.DateTimeFormat('fr-FR', {
  year: 'numeric',
  month: 'long',
});

/** Formate une date en « mois année » (ex. « janvier 2026 »). */
export function formatMonthYear(date: Date): string {
  return monthYearFormatter.format(date);
}
