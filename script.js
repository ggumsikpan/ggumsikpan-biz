/* 자영업자 성장형 구독 플랫폼 — 소개 페이지 interactions */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    /* Smooth scroll */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });

    /* FAQ accordion */
    document.querySelectorAll('.faq-item').forEach(function (item) {
      item.addEventListener('click', function () {
        item.classList.toggle('is-open');
      });
    });
  });
})();
