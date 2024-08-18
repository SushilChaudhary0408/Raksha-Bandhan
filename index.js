let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(e, page) {
  const video = document.getElementById("rakshaVideo");

  // Pause video if the user is turning the page
  if (video && !video.paused) {
    video.pause();
  }

  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  } else if (page == currentPage - 1) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
}

document.getElementById("botao1").addEventListener("click", function () {
  alert("YAYY THANK U 😍❤️ , Drop a Message when you are Free ..");
});
