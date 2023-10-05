document.documentElement.style.scrollBehavior = "smooth";
let sectionButtons = document.getElementById("section-buttons").children;
let resumeSections = document.querySelectorAll(".resume-section");

setButtons();

function setButtons() {
  for (let button of sectionButtons) {
    let section;
    for (let resume of resumeSections) {
      if (resume.id == button.id) {
        section = resume;
        break;
      }
    }

    button.addEventListener("click", () => {
      section.scrollIntoView();
    });
  }
}
