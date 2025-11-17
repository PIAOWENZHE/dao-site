/* =========================
   移动端菜单展开/收起
========================= */
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileBtn && mobileNav) {
  mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });
}


/* =========================
      顶部轮播功能
========================= */
const slider = document.getElementById('heroSlider');

if (slider) {
  const slides = Array.from(slider.querySelectorAll('.hero-slide'));
  const dots = Array.from(document.querySelectorAll('.hero-dot'));
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');

  let current = 0;   // 当前幻灯片
  let timer = null;  // 自动轮播计时器

  /* 切换到指定幻灯片 */
  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });

    current = index;
  }

  /* 下一张 */
  function next() {
    const nextIndex = (current + 1) % slides.length;
    showSlide(nextIndex);
  }

  /* 上一张 */
  function prev() {
    const prevIndex = (current - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  /* 启动自动轮播 */
  function startAuto() {
    timer = setInterval(next, 5000); // 自动切换间隔：5秒
  }

  /* 停止自动轮播（用于手动切换） */
  function stopAuto() {
    if (timer) clearInterval(timer);
  }

  /* 左右按钮事件 */
  if (nextBtn) nextBtn.addEventListener('click', () => {
    stopAuto();
    next();
    startAuto();
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    stopAuto();
    prev();
    startAuto();
  });

  /* 小圆点切换 */
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = Number(dot.dataset.index || 0);
      stopAuto();
      showSlide(index);
      startAuto();
    });
  });

  /* 页面加载后启动 */
  showSlide(0);
  startAuto();
}
