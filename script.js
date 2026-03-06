function toggleDetails(id) {
  const detail = document.getElementById(id);
  if (detail.style.display === "block") {
    detail.style.display = "none";
  } else {
    detail.style.display = "block";
  }
}

function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else if (card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
