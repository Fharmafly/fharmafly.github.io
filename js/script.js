
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const reviews = [
  {
    name: "Farzana Khatun",
    img: "images/farzana.jpg",
    text: "খুব দ্রুত ও বিশ্বস্ত সার্ভিস। প্রেসক্রিপশন পাঠানোর পর খুব দ্রুত ওষুধ পৌঁছে দিয়েছে। অসাধারণ অভিজ্ঞতা পেলাম ফার্মাফ্লাই থেকে।",
    stars: "★★★★★"
  },
  {
    name: "Monir Ali",
    img: "images/monir.jpg",
    text: "অনেক সময় বাঁচিয়েছে। ঘরে বসেই প্রেসক্রিপশন দিয়ে ওষুধ পেয়েছি। খুবই সহজ আর ঝামেলাহীন। এবং ডেলিভারি ম্যানের আচরণ ছিলো অসাধারণ ভালো, খুশি হয়ে আমি এক্সট্রা টিপ দিয়েছি ডেলিভারি ম্যানকে।",
    stars: "★★★★★"
  },
  {
    name: "Faisal Khan",
    img: "images/faisal.jpg",
    text: "রাতে যখন ফার্মেসি বন্ধ, তখন ফার্মাফ্লাইয়ের সার্ভিস আমাকে অনেক সাহায্য করেছে। এদের সার্ভিসে আমি সত্যিই মুগ্ধ।",
    stars: "★★★★★"
  }
];

const container = document.getElementById('review-container');
let currentIndex = 0;

function showReview(index) {
  container.innerHTML = '';
  const review = reviews[index];
  const div = document.createElement('div');
  div.className = 'review-card active';
  div.innerHTML = `
    <div class="reviewer">
      <img src="${review.img}" alt="${review.name}"/>
      <div class="reviewer-details">
        <h4>${review.name}</h4>
        <div class="stars">${review.stars}</div>
      </div>
    </div>
    <p class="review-text">${review.text}</p>
  `;
  container.appendChild(div);
}

function startReviewRotation() {
  showReview(currentIndex);
  setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  }, 10000); 
}

startReviewRotation();


setTimeout(() => {
    const tawkWidget = document.getElementById('drmj82tktdvk1752981226451');
    if (tawkWidget) {
        tawkWidget.remove();
    }
}, 3000);

const observer = new MutationObserver(() => {
    const tawkWidget = document.getElementById('drmj82tktdvk1752981226451');
    if (tawkWidget) {
        tawkWidget.remove();
    }
});
observer.observe(document.body, { childList: true, subtree: true });
