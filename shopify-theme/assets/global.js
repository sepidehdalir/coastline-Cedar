/* ============================================================
   COASTLINE CEDAR — Global JavaScript (Phase 2)
   Minimal vanilla JS. No frameworks.
   ============================================================ */

'use strict';

/* ── Utilities ───────────────────────────────────────────── */
const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── 1. Scroll reveal (IntersectionObserver) ──────────────── */
function initReveal() {
  if (prefersReducedMotion()) return;
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
  );
  items.forEach((el) => io.observe(el));
}

/* ── 2. Transparent-to-solid sticky header ────────────────── */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  function onScroll() {
    const threshold = heroSection.offsetHeight * 0.15;
    if (window.scrollY > threshold) {
      header.classList.remove('is-transparent');
      header.classList.add('is-scrolled');
    } else {
      header.classList.add('is-transparent');
      header.classList.remove('is-scrolled');
    }
  }

  // Only transparent on homepage
  if (document.body.classList.contains('template-index')) {
    header.classList.add('is-transparent');
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
}

/* ── 3. Mobile nav drawer ─────────────────────────────────── */
class CCMobileNav {
  constructor() {
    this.toggle = document.querySelector('[data-nav-toggle]');
    this.drawer = document.querySelector('[data-nav-drawer]');
    this.overlay = document.querySelector('[data-nav-overlay]');
    this.closeBtn = document.querySelector('[data-nav-close]');
    if (!this.toggle || !this.drawer) return;
    this.toggle.addEventListener('click', () => this.open());
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.overlay) this.overlay.addEventListener('click', () => this.close());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.close(); });
  }
  open() {
    this.drawer.setAttribute('aria-hidden', 'false');
    this.drawer.classList.add('is-open');
    if (this.overlay) this.overlay.classList.add('is-visible');
    this.toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const first = this.drawer.querySelector('a, button');
    if (first) first.focus();
  }
  close() {
    this.drawer.setAttribute('aria-hidden', 'true');
    this.drawer.classList.remove('is-open');
    if (this.overlay) this.overlay.classList.remove('is-visible');
    this.toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    this.toggle.focus();
  }
}

/* ── 4. Desktop dropdown navigation ──────────────────────── */
class CCDropdown {
  constructor(el) {
    this.el = el;
    this.trigger = el.querySelector('[data-dropdown-trigger]');
    this.panel = el.querySelector('[data-dropdown-panel]');
    if (!this.trigger || !this.panel) return;
    el.addEventListener('mouseenter', () => this.show());
    el.addEventListener('mouseleave', () => this.hide());
    this.trigger.addEventListener('click', () => {
      this.panel.getAttribute('aria-hidden') === 'false' ? this.hide() : this.show();
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { this.hide(); this.trigger.focus(); }
    });
  }
  show() {
    this.panel.setAttribute('aria-hidden', 'false');
    this.panel.classList.add('is-visible');
    this.trigger.setAttribute('aria-expanded', 'true');
  }
  hide() {
    this.panel.setAttribute('aria-hidden', 'true');
    this.panel.classList.remove('is-visible');
    this.trigger.setAttribute('aria-expanded', 'false');
  }
}

/* ── 5. Accordion (FAQ) ───────────────────────────────────── */
class CCAccordion {
  constructor(el) {
    this.el = el;
    this.triggers = Array.from(el.querySelectorAll('.accordion__trigger'));
    this.triggers.forEach((t, i) => t.addEventListener('click', () => this.toggle(i)));
    if (this.triggers.length) this.open(0);
  }
  open(i) {
    const t = this.triggers[i]; if (!t) return;
    t.setAttribute('aria-expanded', 'true');
    const b = t.nextElementSibling;
    if (b) b.classList.add('accordion__body--open');
  }
  close(i) {
    const t = this.triggers[i]; if (!t) return;
    t.setAttribute('aria-expanded', 'false');
    const b = t.nextElementSibling;
    if (b) b.classList.remove('accordion__body--open');
  }
  toggle(i) {
    const isOpen = this.triggers[i].getAttribute('aria-expanded') === 'true';
    this.triggers.forEach((_, j) => this.close(j));
    if (!isOpen) this.open(i);
  }
}

/* ── 6. Cart drawer ──────────────────────────────────────── */
class CCCartDrawer {
  constructor() {
    this.drawer = document.querySelector('[data-cart-drawer]');
    this.overlay = document.querySelector('[data-cart-overlay]');
    this.openBtns = document.querySelectorAll('[data-cart-open]');
    this.closeBtns = document.querySelectorAll('[data-cart-close]');
    if (!this.drawer) return;
    this.openBtns.forEach((b) => b.addEventListener('click', () => this.open()));
    this.closeBtns.forEach((b) => b.addEventListener('click', () => this.close()));
    if (this.overlay) this.overlay.addEventListener('click', () => this.close());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.close(); });
  }
  open() {
    this.drawer.classList.add('is-open');
    if (this.overlay) this.overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    this.drawer.setAttribute('aria-hidden', 'false');
    const first = this.drawer.querySelector('button, a');
    if (first) first.focus();
  }
  close() {
    this.drawer.classList.remove('is-open');
    if (this.overlay) this.overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    this.drawer.setAttribute('aria-hidden', 'true');
  }
}

/* ── 7. Quantity selector ────────────────────────────────── */
function initQuantitySelectors() {
  document.querySelectorAll('.quantity-selector').forEach((wrap) => {
    const input = wrap.querySelector('.quantity-selector__input');
    const dec = wrap.querySelector('[data-qty-dec]');
    const inc = wrap.querySelector('[data-qty-inc]');
    if (!input) return;
    if (dec) dec.addEventListener('click', () => {
      const v = parseInt(input.value, 10);
      if (v > 1) input.value = v - 1;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
    if (inc) inc.addEventListener('click', () => {
      input.value = parseInt(input.value, 10) + 1;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
}

/* ── 8. Smooth scroll anchor links ───────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    });
  });
}

/* ── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initHeader();
  new CCMobileNav();
  document.querySelectorAll('[data-dropdown]').forEach((el) => new CCDropdown(el));
  document.querySelectorAll('.accordion').forEach((el) => new CCAccordion(el));
  new CCCartDrawer();
  initQuantitySelectors();
  initSmoothScroll();
});
