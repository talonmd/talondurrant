fetch("/js/projects.json")
  .then((res) => res.json())
  .then((projects) => {
    projects.forEach((project) => {
      const { title, description, tags, liveUrl, repoUrl, imagePath } = project

      document.querySelector("#projects").innerHTML += `
    
      <div class="project-div">
    
                            <div class="project-div__description">
    
                                <h2>${title}</h2>
    
                                ${description.map((paragraph) => `<p>${paragraph}</p>`).join(" ")}
    
                                <p class="project-div__tags">
                                ${tags.map((tag) => `<span>|</span> ${tag}`).join(" ")}
                                </p>
    
                            </div>
    
                            <div class="project-div__card">
                                <div class="card">
                                    <div class="card__inner">
                                        <div class="card__front">
                                            <a href="${liveUrl}" target="_blank">
                                                <img src="images/${imagePath}">
                                            </a>
                                        </div>
                                        <div class="card__back">
                                            <div class="flexbox-column">
                                            
                                            <a href="${liveUrl}" target="_blank"
                                            class="project-div__links">View Live</a>
                                            
                                                <a href="${repoUrl}" target="_blank"
                                                    class="project-div__links">GitHub Repo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
      `
    })
  })
  .catch((err) => console.log(err))

// this is an extra project not ready to be added into the projects.json file yet
//   {
//     "title": "Coops n Sheds Co.",
//     "description": [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     ],
//     "tags": [
//       "React",
//       "Node",
//       "Express",
//       "Docker",
//       "Kubernetes",
//       "Microservices-based Architecture"
//     ],
//     "liveUrl": "",
//     "repoUrl": "https://github.com/talonmd/coops-n-sheds-co",
//     "imagePath": "/coops-n-sheds-co.png"
//   },
