const audio = document.getElementById("audio");
const musicBtn = document.getElementById("musicBtn");
const musicText = document.getElementById("musicText");

musicBtn.addEventListener("click", async () => {
  try {
    if (audio.paused) {
      await audio.play();
      musicBtn.classList.add("playing");
      musicText.textContent = "musik menyala";
    } else {
      audio.pause();
      musicBtn.classList.remove("playing");
      musicText.textContent = "putar musik";
    }
  } catch (err) {
    musicText.textContent = "masukkan file musik";
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
