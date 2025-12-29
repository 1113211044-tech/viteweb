import './scss/all.scss';
import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 初始化 AOS 動態效果
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// 簡單的表單驗證 (範例)
const form = document.querySelector('form');
if(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('感謝您的報名，我們將儘速與您聯繫！');
  });
}