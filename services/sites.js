angular.module('portfolio')
.factory('sites', [function() {
  var obj = {
    sites: [
      {
        name: "Mother Foucault's",
        type: "Angular with Rails",
        website_url: "http://www.motherfoucaultsbookshop.com/",
        github_url: "https://github.com/jklmaynard/mother-foucaults"
      },
      {
        name: "Tavern Books",
        type: "Ruby on Rails",
        website_url: "http://www.tavernbooks.org",
        github_url: "https://github.com/ceciliaxyang/tavern-books"
      },
      {
        name: "Poetry Website",
        type: "jQuery, HTML, node.js",
        website_url: "http://www.jamesmaynardpoetry.com",
        github_url: "https://github.com/jklmaynard/poetry_site"
      },
      {
        name: "Fun with Numbers",
        type: "jQuery and Javascript",
        website_url: "https://jklmaynard.github.io/fun-with-numbers",
        github_url: "https://github.com/jklmaynard/fun-with-numbers"
      },
      {
        name: "Trinity United Methodist Church",
        type: "Angular with Rails",
        website_url: "http://warsawtrinityumc.com",
        github_url: "https://github.com/jklmaynard/trinity-church"
      },
      {
        name: "Book List",
        type: "Ruby on Rails",
        website_url: "https://fast-atoll-17293.herokuapp.com/",
        github_url: "https://github.com/jklmaynard/book-list"
      },
      {
        name: "This Portfolio",
        type: "Angular, all front end",
        website_url: "https://jklmaynard.github.io/portfolio/",
        github_url: "https://jklmaynard.github.io/portfolio/"
      },
    ]
  }
  return obj;
}])
