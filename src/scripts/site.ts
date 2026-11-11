import { siteConfig } from '../config/site';

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
  nav?.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Ouvrir le menu');
    document.body.classList.remove('menu-open');
  });
});

const header = document.querySelector<HTMLElement>('.site-header');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const delay = Number(element.dataset.delay ?? 0);
          element.style.setProperty('--reveal-delay', `${delay}ms`);
          element.classList.add('is-visible');
          currentObserver.unobserve(element);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealItems.forEach((element) => observer.observe(element));
} else {
  revealItems.forEach((element) => element.classList.add('is-visible'));
}

// Préremplit le sujet du formulaire depuis les liens de partenariat / services.
document.querySelectorAll<HTMLAnchorElement>('[data-contact-topic]').forEach((link) => {
  link.addEventListener('click', () => {
    const select = document.querySelector<HTMLSelectElement>('#contact-topic');
    if (select) select.value = link.dataset.contactTopic ?? '';
  });
});

// Les coordonnées restent centralisées dans src/config/site.ts.
const emailTarget = document.querySelector<HTMLElement>('[data-config-email]');
const phoneTarget = document.querySelector<HTMLElement>('[data-config-phone]');
if (emailTarget && !siteConfig.email) emailTarget.closest('.contact-details > div')?.classList.add('is-unconfigured');
if (phoneTarget && !siteConfig.phone) phoneTarget.closest('.contact-details > div')?.classList.add('is-unconfigured');

if (emailTarget && siteConfig.email) {
  emailTarget.innerHTML = '';
  const emailLink = document.createElement('a');
  emailLink.href = `mailto:${siteConfig.email}`;
  emailLink.textContent = siteConfig.email;
  emailTarget.append(emailLink);
}

if (phoneTarget && siteConfig.phone) {
  phoneTarget.innerHTML = '';
  const phone1 = document.createElement('a');
  phone1.href = `tel:${siteConfig.phone.replace(/\s/g, '')}`;
  phone1.textContent = siteConfig.phone;
  phoneTarget.append(phone1);

  if (siteConfig.secondaryPhone) {
    phoneTarget.append(document.createTextNode(' · '));
    const phone2 = document.createElement('a');
    phone2.href = `tel:${siteConfig.secondaryPhone.replace(/\s/g, '')}`;
    phone2.textContent = siteConfig.secondaryPhone;
    phoneTarget.append(phone2);
  }
}

// Soumission asynchrone du formulaire vers l'API interne /api/contact
const contactForm = document.querySelector<HTMLFormElement>('#contact-form');
const feedback = document.querySelector<HTMLElement>('#form-feedback');
const submitBtn = contactForm?.querySelector<HTMLButtonElement>('button[type="submit"]');

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!contactForm || !feedback) return;

  feedback.className = 'form-feedback';
  feedback.textContent = '';

  const formData = new FormData(contactForm);
  const name = String(formData.get('name') ?? '').trim();
  const organisation = String(formData.get('organisation') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const topic = String(formData.get('topic') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();
  const lang = String(formData.get('lang') ?? document.documentElement.lang ?? 'fr').trim();
  const isEn = lang.startsWith('en');

  if (!name || !email || !topic || !message) {
    feedback.textContent = isEn
      ? 'Please fill in all required fields (name, email, topic, and message).'
      : 'Veuillez renseigner tous les champs obligatoires (nom, e-mail, besoin et message).';
    feedback.classList.add('is-visible', 'is-warning');
    return;
  }

  const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    submitBtn.innerHTML = submitBtn.dataset.submitting || (isEn ? 'Sending inquiry...' : 'Envoi en cours...');
  }

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ name, organisation, email, phone, topic, message, lang }),
    });

    const result = await res.json().catch(() => null);

    if (res.ok && result?.success) {
      contactForm.reset();
      feedback.textContent =
        result.message ||
        feedback.dataset.successFallback ||
        (isEn
          ? 'Thank you! Your inquiry has been saved successfully. Our team will get back to you promptly.'
          : 'Merci ! Votre demande a été enregistrée avec succès. Notre équipe vous recontactera rapidement.');
      feedback.classList.add('is-visible', 'is-success');
    } else {
      const errMsg =
        result?.message ||
        feedback.dataset.errorFallback ||
        (isEn
          ? 'An error occurred while sending. You can reach us directly via WhatsApp or email.'
          : 'Une erreur est survenue lors de l’envoi. Vous pouvez nous contacter directement par WhatsApp ou e-mail.');
      feedback.textContent = errMsg;
      feedback.classList.add('is-visible', 'is-warning');
    }
  } catch (err) {
    console.error('Erreur réseau / API :', err);
    feedback.textContent = isEn
      ? 'Unable to connect to the server. You can reach us directly by phone or WhatsApp.'
      : 'Impossible de joindre le serveur. Vous pouvez nous contacter directement au +237 683 511 935 ou par e-mail.';
    feedback.classList.add('is-visible', 'is-warning');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '';
      submitBtn.innerHTML = originalBtnContent;
    }
  }
});

// Bouton "Retour en haut" avec défilement fluide garanti vers le sommet absolu
const topButtons = document.querySelectorAll<HTMLElement>('.footer-top, a[href="#top"]');
topButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    if (window.history.pushState) {
      window.history.pushState(null, '', '#top');
    }
  });
});

// Année automatique si le pied de page est déplacé dans un composant réutilisable.
const year = document.querySelector<HTMLElement>('[data-current-year]');
if (year) year.textContent = String(new Date().getFullYear());

if (siteConfig.whatsapp) {
  const whatsappLink = document.createElement('a');
  whatsappLink.className = 'whatsapp-fab';
  whatsappLink.href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Bonjour SRE, je souhaite obtenir des informations sur vos services.'
  )}`;
  whatsappLink.target = '_blank';
  whatsappLink.rel = 'noopener noreferrer';
  whatsappLink.setAttribute('aria-label', 'Contacter SRE sur WhatsApp');
  whatsappLink.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.3 11.7a8.3 8.3 0 0 1-12.2 7.4L3 20l.9-4.8a8.3 8.3 0 1 1 16.4-3.5Z"/><path d="M8.6 8.2c.2-.5.5-.5.8-.5h.4c.2 0 .3.1.4.4l.6 1.4c.1.2.1.4 0 .5l-.4.6c-.1.2-.2.3 0 .5.2.4.8 1.1 1.6 1.6.9.6 1.2.5 1.5.3l.6-.7c.2-.2.3-.2.6-.1l1.3.6c.3.1.4.2.4.4 0 .2-.1 1-.7 1.4-.5.4-1.1.6-1.8.4-.7-.2-1.5-.5-2.6-1.3-1.3-1-2.2-2.3-2.4-2.7-.3-.4-.6-1.2-.3-1.8Z"/></svg><span>WhatsApp SRE</span>';
  document.body.append(whatsappLink);
}
