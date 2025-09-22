const projects = [
  {
    id: 1,
    name: "Elzero Template 1",
    liveLink: "https://amargelila.github.io/elzero-template-1/",
    githubLink: "https://github.com/AmarGelila/elzero-template-1",
    previewImage: "images/elzero-template-1.png",
    skills: ["html", "css"],
  },
  {
    id: 2,
    name: "Elzero Template 2",
    liveLink: "https://amargelila.github.io/elzero-template-2/",
    githubLink: "https://github.com/AmarGelila/elzero-template-2",
    previewImage: "images/elzero-template-2.png",
    skills: ["html", "css"],
  },
  {
    id: 3,
    name: "To Do List",
    liveLink: "https://amargelila.github.io/to-do-list/",
    githubLink: "https://github.com/AmarGelila/to-do-list",
    previewImage: "./images/to-do-list.png",
    skills: ["html", "css", "javascript"],
  },
  {
    id: 4,
    name: "Weather Web",
    liveLink: "https://amargelila.github.io/weather-web-app/",
    githubLink: "https://github.com/AmarGelila/weather-web-app",
    previewImage: "images/weather.png",
    skills: ["html", "css", "javascript"],
  },
  {
    id: 5,
    name: "Memory Blocks Game",
    liveLink: "https://amargelila.github.io/memory-blocks-game/",
    githubLink: "https://github.com/AmarGelila/memory-blocks-game",
    previewImage: "images/memory-blocks.png",
    skills: ["html", "css", "javascript"],
  },
  {
    id: 6,
    name: "Tic Tac Toe Game",
    liveLink: "https://tic-tac-toe-amargelila.vercel.app/",
    githubLink: "https://github.com/AmarGelila/tic-tac-toe-web-game",
    previewImage: "images/tic-tac.png",
    skills: ["html", "css", "react"],
  },
  {
    id: 7,
    name: "Snkr Ecommerce Website",
    liveLink: "https://snkr-indol.vercel.app/",
    githubLink: "https://github.com/AmarGelila/snkr",
    previewImage: "images/snkr.png",
    skills: ["html", "css", "react", "tailwind", "zustand"],
  },
  {
    id: 8,
    name: "Bondi Template",
    liveLink: "https://amargelila.github.io/-Bondi-bootstrap-template/",
    githubLink: "https://github.com/AmarGelila/-Bondi-bootstrap-template",
    previewImage: "images/bondi.png",
    skills: ["html", "css", "bootstrap"],
  },
];

document.addEventListener("DOMContentLoaded", processprojects);

function processprojects() {
  const projectsGrid = document.getElementById("projects-grid");

  projects.forEach((project) => {
    const projectSkills = project.skills;

    // Create project card
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.dataset.skills = projectSkills.join(" ");

    // Create project image placeholder
    const projectImg = document.createElement("div");
    projectImg.innerHTML = `<img src=${project.previewImage} alt=${project.name}/>`;
    projectImg.className = "project-img";
    // projectImg.textContent = project.name;

    // Create project content
    const projectContent = document.createElement("div");
    projectContent.className = "project-content";

    const projectTitle = document.createElement("h3");
    projectTitle.className = "project-title";
    projectTitle.textContent = project.name;

    const projectSkillsEle = document.createElement("div");
    projectSkillsEle.className = "project-skills";

    projectSkills.forEach((skill) => {
      const skillSpan = document.createElement("span");
      skillSpan.className = "project-skill";
      skillSpan.textContent = skill;
      projectSkillsEle.appendChild(skillSpan);
    });

    const projectLinks = document.createElement("div");
    projectLinks.className = "project-links";

    const demoLink = document.createElement("a");
    demoLink.href = project.liveLink;
    demoLink.target = "_blank";
    demoLink.className = "btn btn-primary";
    demoLink.textContent = "Live Demo";
    projectLinks.appendChild(demoLink);

    const githubLink = document.createElement("a");
    githubLink.href = project.githubLink;
    githubLink.target = "_blank";
    githubLink.className = "btn btn-secondary";
    githubLink.textContent = "GitHub";
    projectLinks.appendChild(githubLink);

    // Assemble the project card
    projectContent.appendChild(projectTitle);
    projectContent.appendChild(projectSkillsEle);
    projectContent.appendChild(projectLinks);
    projectCard.appendChild(projectImg);
    projectCard.appendChild(projectContent);
    projectsGrid.appendChild(projectCard);
  });

  // Initialize filtering
  initFiltering();
}
function initFiltering() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.dataset.filter;

      // Filter projects
      const projectsEles = document.querySelectorAll(".project-card");

      projectsEles.forEach((project) => {
        if (filterValue === "all") {
          project.style.display = "block";
        } else {
          const projectSkills = project.dataset.skills.split(" ");
          if (projectSkills.includes(filterValue)) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        }
      });
    });
  });
}
