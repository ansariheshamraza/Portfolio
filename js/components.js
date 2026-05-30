// Reusable component functions

// Project Card Component
function createProjectCard(project) {
  return `
    <article class="card project-card fade-up">
      <div class="card__header">
        <div class="project-card__meta">
          <span class="project-card__number">${project.number.toString().padStart(2, '0')}</span>
          <div class="tags">
            ${project.tags.map(tag => `<span class="tag tag--accent">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="card__body">
        <h3 class="heading-sm project-card__title">
          <a href="${project.link}" class="link">${project.title}</a>
        </h3>
        <p class="text-muted project-card__description">${project.description}</p>
      </div>
      <div class="card__footer">
        <a href="${project.link}" class="link--arrow">
          View Project <span>→</span>
        </a>
      </div>
    </article>
  `;
}

// Certificate Card Component
function createCertificateCard(certificate) {
  return `
    <article class="card certificate-card fade-up">
      <div class="card__header">
        <img src="${certificate.image}" alt="${certificate.title}" class="certificate-card__image">
      </div>
      <div class="card__body">
        <h3 class="heading-sm certificate-card__title">${certificate.title}</h3>
        <p class="text-muted certificate-card__issuer">${certificate.issuer}</p>
        <p class="text-sm certificate-card__date">${utils.formatDate(certificate.date)}</p>
        <p class="certificate-card__description">${certificate.description}</p>
      </div>
      <div class="card__footer">
        <a href="${certificate.link}" class="btn btn--outline" target="_blank">
          View Certificate
        </a>
      </div>
    </article>
  `;
}

// Skill Card Component
function createSkillCard(skill) {
  return `
    <article class="card skill-card fade-up">
      <div class="card__body">
        <div class="skill-card__number">${skill.number.toString().padStart(2, '0')}</div>
        <h3 class="heading-accent skill-card__title">${skill.title}</h3>
        <p class="text-muted skill-card__description">${skill.description}</p>
        <div class="tags skill-card__tags">
          ${skill.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}

// Social Link Component
function createSocialLink(social) {
  return `
    <a href="${social.url}" target="_blank" class="social-link">
      <span class="social-link__platform">${social.platform}</span>
      <span class="social-link__handle">${social.handle}</span>
      <span class="social-link__arrow">→</span>
    </a>
  `;
}

// Stats Component
function createStatsGrid(stats) {
  return `
    <div class="grid grid--3 stats-grid">
      ${stats.map(stat => `
        <div class="stat fade-up">
          <span class="stat__number">${stat.number}</span>
          <span class="stat__label">${stat.label}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// Navigation Component
function createNavigation(links) {
  return `
    <nav class="nav">
      <div class="container nav__container">
        <a href="/" class="nav__logo">Hesham Raza</a>
        <ul class="nav__menu">
          ${links.map(link => `
            <li><a href="${link.href}" class="nav__link">${link.text}</a></li>
          `).join('')}
        </ul>
        <button class="nav__toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;
}

// Page Header Component
function createPageHeader(title, subtitle, breadcrumb = null) {
  return `
    <header class="page-header section">
      <div class="container">
        ${breadcrumb ? `
          <nav class="breadcrumb fade-up">
            <a href="/" class="breadcrumb__link">Home</a>
            <span class="breadcrumb__separator">/</span>
            <span class="breadcrumb__current">${breadcrumb}</span>
          </nav>
        ` : ''}
        <h1 class="heading-display heading-xl page-header__title fade-up">${title}</h1>
        ${subtitle ? `<p class="text-lg text-muted page-header__subtitle fade-up fade-up--delay-1">${subtitle}</p>` : ''}
      </div>
    </header>
  `;
}

// Export components
window.components = {
  createProjectCard,
  createCertificateCard,
  createSkillCard,
  createSocialLink,
  createStatsGrid,
  createNavigation,
  createPageHeader
};