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
