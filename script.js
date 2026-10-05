
const enter = document.getElementById("enter");
const enterButton = document.getElementById("enterButton");
const music = document.getElementById("music");
const sound = document.getElementById("sound");
const bg = document.getElementById("bg");

let musicOn = false;

if (enterButton) {
  enterButton.addEventListener("click", async () => {
    enter.classList.add("hidden");
    try {
      await music.play();
      musicOn = true;
    } catch (_) {}
    if (bg) bg.play().catch(() => {});
    if (sound) sound.textContent = musicOn ? "♪" : "×";
  });
}

if (sound) {
  sound.addEventListener("click", async () => {
    if (music.paused) {
      try {
        await music.play();
        musicOn = true;
      } catch (_) {}
    } else {
      music.pause();
      musicOn = false;
    }
    sound.textContent = musicOn ? "♪" : "×";
  });
}
