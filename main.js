import './src/scss/style.scss'; // 注意路徑是否正確
import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // 這一行非常重要

AOS.init({
  duration: 1000,
  once: false, // 讓動畫在每次捲動時都能重複觸發，視覺效果更強
});