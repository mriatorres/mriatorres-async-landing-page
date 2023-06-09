var url = "https://api.github.com/users/mriatorres/repos?per_page=100";

$.get(url, function(data) {
  var sortedRepos = data.sort((a,b) => parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count));
  
  var reponames = [];
  for (let i = 0; i < sortedRepos.length; i++) {
    reponames.push([sortedRepos[i].name]);
  }
  console.log("n", reponames);

  var repoDescription = [];
  for (let i = 0; i < sortedRepos.length; i++) {
    repoDescription.push([sortedRepos[i].description]);
  }
  console.log("d", repoDescription);

  var repoLink = [];
    for (let i = 0; i < sortedRepos.length; i++) {
      repoLink.push([sortedRepos[i].html_url]);
    }
    console.log("l", repoLink);

    let div = document.getElementById("projects-cards");
    let divContain = document.getElementById("contain");

    for (let i = 0; i < sortedRepos.length; i++) {
    
    let title = document.createElement("h1");
    title.classList.add('text-white', 'text-xl','font-extrabold','pb-4');
    title.textContent = reponames[i];
    let text = document.createElement("p");
     text.textContent = repoDescription[i];
     text.classList.add("text-white",)
     var a = document.createElement('a'); 
     var link = document.createElement("p");
     link.textContent = "Repositorio";
     link.classList.add("font-bold", "pt-4", "text-gray-400");
     a.appendChild(link); 
     a.title = "Repo"; 
     a.href = repoLink[i]; 
     let divText = document.createElement("div");
     divText.appendChild(title);
     divText.appendChild(text);
     divText.appendChild(a);
     divContain.appendChild(divText)
     divText.classList.add("bg-gray-800", "p-4", "w-80", "h-60", "rounded-md")
    div.appendChild(divContain); 
    
    
    let linkIcon = document.createElement("i");
  }
  
  var repoStars = sortedRepos[0].stargazers_count;
  
  
})

