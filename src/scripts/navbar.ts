const SELECTORS = {
  toggle: 'navbar-toggle',
  mobileMenu: 'navbar-mobile',
  hamburger: '.hamburger',
} as const;

function closeMenu(
  toggle: HTMLButtonElement,
  menu: HTMLElement,
  icon: HTMLElement,
): void {
  toggle.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');
  menu.setAttribute('aria-hidden', 'true');
  icon.classList.remove('is-active');
}

function openMenu(
  toggle: HTMLButtonElement,
  menu: HTMLElement,
  icon: HTMLElement,
): void {
  toggle.setAttribute('aria-expanded', 'true');
  menu.classList.add('is-open');
  menu.setAttribute('aria-hidden', 'false');
  icon.classList.add('is-active');
}

export function initNavbar(): void {
  const toggle = document.getElementById(SELECTORS.toggle) as HTMLButtonElement | null;
  const mobileMenu = document.getElementById(SELECTORS.mobileMenu) as HTMLElement | null;
  const hamburger = document.querySelector<HTMLElement>(SELECTORS.hamburger);

  if (!toggle || !mobileMenu || !hamburger) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      closeMenu(toggle, mobileMenu, hamburger);
    } else {
      openMenu(toggle, mobileMenu, hamburger);
    }
  });

  mobileMenu.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu(toggle, mobileMenu, hamburger);
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target as Node;
    const isInsideMenu = mobileMenu.contains(target);
    const isToggleButton = toggle.contains(target);

    if (!isInsideMenu && !isToggleButton) {
      closeMenu(toggle, mobileMenu, hamburger);
    }
  });
}
