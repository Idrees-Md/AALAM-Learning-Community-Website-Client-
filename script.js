 // ── SLIDER ────────────────────────────────────────────
  let currentSlide = 0;
  const totalSlides = 3;
  let autoTimer;

  function goSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goSlide(currentSlide + 1);
  }

  function startAuto() {
    autoTimer = setInterval(nextSlide, 4500);
  }

  // Pause on hover
  document.querySelector('.hero-section').addEventListener('mouseenter', () => clearInterval(autoTimer));
  document.querySelector('.hero-section').addEventListener('mouseleave', startAuto);

  startAuto();

  // ── NAVBAR ACTIVE ─────────────────────────────────────
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.nav-links a').forEach(x => x.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ── TESTIMONIALS AUTO SCROLL ──────────────────────────
  const track = document.querySelector('.testimonials-track');
  let tScrolling = true;
  const tTimer = setInterval(() => {
    if (tScrolling) {
      track.scrollLeft += 0.8;
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth) track.scrollLeft = 0;
    }
  }, 16);
  track.addEventListener('mouseenter', () => tScrolling = false);
  track.addEventListener('mouseleave', () => tScrolling = true);

  // ── TOPBAR BUTTONS ────────────────────────────────────
  document.querySelectorAll('.topbar-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.textContent.includes('Register') || this.textContent.includes('Login')) {
        this.textContent = this.textContent.includes('Register') ? '✓ Registered!' : '✓ Logged In!';
        setTimeout(() => location.reload(), 1500);
      }
    });
  });
  