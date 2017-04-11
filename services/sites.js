angular.module('portfolio')
.factory('sites', [function() {
  var obj = {
    sites: [
      {
        name: "Mother Foucault's",
        type: "Angular with Rails",
        website_url: "http://www.motherfoucaultsbookshop.com/",
        github_url: "https://github.com/jklmaynard/mother-foucaults",
        image: "img/mother-foucaults.jpg",
        tile_background_color: ""
      },
      {
        name: "Tavern Books",
        type: "Ruby on Rails",
        website_url: "http://www.tavernbooks.org",
        github_url: "https://github.com/ceciliaxyang/tavern-books",
        image: "img/tavernbooks.jpg",
        tile_background_color: ""
      },
      {
        name: "Poetry Website",
        type: "jQuery, HTML, node.js",
        website_url: "http://www.jamesmaynardpoetry.com",
        github_url: "https://github.com/jklmaynard/poetry_site",
        image: "img/jamesmaynardpoetry.jpg",
        tile_background_color: ""
      },
      {
        name: "Fun with Numbers",
        type: "jQuery and Javascript",
        website_url: "https://jklmaynard.github.io/fun-with-numbers",
        github_url: "https://github.com/jklmaynard/fun-with-numbers",
        image: "img/funwithnumbers.jpg",
        tile_background_color: ""
      },
      {
        name: "Trinity United Methodist Church",
        type: "Angular with Rails",
        website_url: "http://warsawtrinityumc.com",
        github_url: "https://github.com/jklmaynard/trinity-church",
        image: "img/trinityunitedmethodist.jpg",
        tile_background_color: ""
      },
      {
        name: "Book List",
        type: "Ruby on Rails",
        website_url: "https://fast-atoll-17293.herokuapp.com/",
        github_url: "https://github.com/jklmaynard/book-list",
        image: "img/booklist.jpg",
        tile_background_color: ""
      },
      {
        name: "This Portfolio",
        type: "Angular, all front end",
        website_url: "https://jklmaynard.github.io/portfolio/",
        github_url: "https://jklmaynard.github.io/portfolio/",
        image: "img/portfolio.png",
        tile_background_color: ""
      },
    ]
  }
  return obj;
}])
