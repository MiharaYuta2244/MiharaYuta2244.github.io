/**
 * Main Application Logic
 * Implements Hash Routing, Project Modals, Filtering, Lightbox, and Video Previews.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initFilters();
  initModals();
  initHashRouter();
  initLightbox();
});

// ============================================================================
// NAVIGATION & SMOOTH SCROLL
// ============================================================================
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
  }

  // Active state on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}` || link.getAttribute('href') === `/#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Close mobile menu on click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('mobile-open');
    });
  });
}

// ============================================================================
// FILTERING SYSTEM
// ============================================================================
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');

        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = '';
          card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ============================================================================
// HASH ROUTER
// ============================================================================
function initHashRouter() {
  window.addEventListener('hashchange', handleHash);
  handleHash();
}

function handleHash() {
  const hash = window.location.hash;

  if (!hash) return;

  // Check if project detail route: #/project/:id
  if (hash.startsWith('#/project/')) {
    const projectId = hash.replace('#/project/', '');
    openProjectModal(projectId);
  } else if (hash === '#/game-projects' || hash === '#projects') {
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  } else if (hash.startsWith('#')) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// ============================================================================
// MODAL SYSTEM
// ============================================================================
function initModals() {
  const overlay = document.getElementById('project-modal');
  const closeBtn = document.querySelector('.modal-close-btn');

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => {
      closeProjectModal();
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeProjectModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeProjectModal();
      }
    });
  }

  // Bind project cards view buttons
  document.querySelectorAll('[data-open-project]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-open-project');
      window.location.hash = `#/project/${projectId}`;
    });
  });
}

function openProjectModal(projectId) {
  const overlay = document.getElementById('project-modal');
  const contentBody = document.getElementById('modal-content');
  if (!overlay || !contentBody || !window.PORTFOLIO_DATA) return;

  let project = null;

  if (PORTFOLIO_DATA.featuredProject.id === projectId) {
    project = PORTFOLIO_DATA.featuredProject;
  } else {
    project = PORTFOLIO_DATA.teamProjects.find(p => p.id === projectId);
  }

  if (!project) return;

  // Build Modal Content
  let html = `
    <div class="modal-project-header">
      <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
        <span class="role-pill">${project.role}</span>
        <span class="pill" style="color: var(--accent-cyan);">${project.engine}</span>
        <span class="pill">${project.genre}</span>
        <span class="pill">${project.period}</span>
      </div>
      <h2 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 8px; color: #fff;">${project.title}</h2>
      ${project.catchphrase ? `<p style="font-size: 1.1rem; color: var(--accent-blue); margin-bottom: 16px; font-weight: 600;">${project.catchphrase}</p>` : ''}
    </div>

    <!-- Media Carousel / Main View -->
    <div style="margin: 20px 0; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); background: #000;">
      <img src="${project.thumbnail}" alt="${project.title}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
    </div>

    <!-- Overview -->
    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 8px;">📖 作品概要</h4>
      <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">${project.overview || project.summary}</p>
    </div>
  `;

  // If Featured Project, show technical highlights
  if (project.highlights && project.highlights.length > 0) {
    html += `
      <div style="margin-bottom: 28px;">
        <h4 style="font-size: 1.25rem; font-weight: 800; color: #fff; margin-bottom: 16px;">⚡ こだわりの実装ポイント・技術解説</h4>
        <div style="display: flex; flex-direction: column; gap: 20px;">
          ${project.highlights.map((h, i) => `
            <div style="background: var(--bg-card-alt); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px;">
              <h5 style="font-size: 1.1rem; font-weight: 800; color: var(--accent-cyan); margin-bottom: 4px;">${i + 1}. ${h.title}</h5>
              <p style="font-size: 0.82rem; color: var(--accent-blue); margin-bottom: 10px;">${h.subtitle}</p>
              ${h.image ? `
                <div style="width: 100%; border-radius: 8px; overflow: hidden; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.08); background: #000;">
                  <img src="${h.image}" alt="${h.title}" style="width: 100%; height: auto; display: block;">
                </div>
              ` : ''}
              <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 12px;">${h.description}</p>
              <ul style="list-style: none; background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 6px;">
                ${h.techPoints.map(tp => `<li style="font-size: 0.82rem; color: #cbd5e1; padding: 3px 0 3px 18px; position: relative;">▹ ${tp}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // If Team Project, show responsibilities
  if (project.responsibilities && project.responsibilities.length > 0) {
    html += `
      <div style="margin-bottom: 24px; background: var(--bg-card-alt); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px;">
        <h4 style="font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 12px;">🛠 担当業務・実装内容（${project.role}）</h4>
        <ul style="list-style: none;">
          ${project.responsibilities.map(r => `
            <li style="font-size: 0.9rem; color: var(--text-muted); padding: 6px 0 6px 20px; position: relative;">
              <span style="position: absolute; left: 0; color: var(--accent-cyan);">✔</span>
              ${r}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  // Screenshots Gallery
  if (project.screenshots && project.screenshots.length > 0) {
    html += `
      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 12px;">📸 スクリーンショット一覧</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
          ${project.screenshots.map(s => `
            <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); background: #000; cursor: pointer;" onclick="openLightboxImage('${s.url}', '${s.caption}')">
              <img src="${s.url}" alt="${s.caption}" style="width: 100%; aspect-ratio: 16/10; object-fit: cover;">
              <div style="padding: 8px 10px; font-size: 0.78rem; color: var(--text-muted); background: rgba(0,0,0,0.6);">${s.caption}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Action Buttons
  html += `
    <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 24px; border-top: 1px solid var(--border-color); padding-top: 20px;">
      <button class="btn-secondary" onclick="closeProjectModal()">閉じる</button>
      <button class="btn-primary" onclick="triggerPlayVideo('${project.title}')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        プレイ動画を視聴
      </button>
    </div>
  `;

  contentBody.innerHTML = html;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const overlay = document.getElementById('project-modal');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // Restore hash to root or projects
    if (window.location.hash.startsWith('#/project/')) {
      history.pushState(null, '', '#projects');
    }
  }
}

// ============================================================================
// LIGHTBOX FOR IMAGES & DIAGRAMS
// ============================================================================
function initLightbox() {
  // Bind all clickable images with data-lightbox
  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('src') || el.getAttribute('data-src');
      const caption = el.getAttribute('alt') || el.getAttribute('data-caption') || '';
      openLightboxImage(src, caption);
    });
  });
}

window.openLightboxImage = function(src, caption) {
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (lightboxModal && lightboxImg) {
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption;
    lightboxModal.classList.add('active');
  }
};

window.closeLightbox = function() {
  const lightboxModal = document.getElementById('lightbox-modal');
  if (lightboxModal) {
    lightboxModal.classList.remove('active');
  }
};

// ============================================================================
// VIDEO PLAYER / DEMO MODAL
// ============================================================================
window.triggerPlayVideo = function(projectTitle) {
  const videoModal = document.getElementById('video-modal');
  const videoTitle = document.getElementById('video-modal-title');
  if (videoModal && videoTitle) {
    videoTitle.textContent = `${projectTitle} - プレイ動画`;
    videoModal.classList.add('active');
  }
};

window.closeVideoModal = function() {
  const videoModal = document.getElementById('video-modal');
  if (videoModal) {
    videoModal.classList.remove('active');
  }
};
