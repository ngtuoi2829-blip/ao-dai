// Menu điện thoại
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Gallery: bấm ảnh nhỏ để đổi ảnh lớn

document.querySelectorAll('.thumbs img').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const target = document.getElementById(thumb.dataset.target);
    if (target) target.src = thumb.src;
    const parent = thumb.parentElement;
    parent.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
    thumb.classList.add('selected');
  });
});

// Năm hiện tại
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Form liên hệ chỉ mô phỏng, không gửi dữ liệu lên máy chủ
const form = document.getElementById('contactForm');
const notice = document.getElementById('formNotice');
if (form && notice) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    notice.hidden = false;
    notice.textContent = 'Đây là biểu mẫu mô phỏng. Chưa kết nối máy chủ gửi email.';
    form.reset();
  });
}
