angular.module('portfolio')
.factory('sites', [function() {
  var obj = {
    sites: [
      {
        name: "Mother Foucault's Bookshop",
        type: "Angular with Rails",
        website_url: "http://www.motherfoucaultsbookshop.com/",
        github_url: "https://github.com/jklmaynard/mother-foucaults",
        image: "img/mother-foucaults.jpg",
        details: [
          {text: "Provide single page application to display events and calendar"},
          {text: "Installed calendar-ui dependencies with angular front end capabilities"},
          {text: "Wrote app-specific domNode to create elements out of back-end data string"},
          {text: "Implemented photo upload with Paperclip gem and base64 bower dependencies"},
        ],
        improvements: [
          {text: "Could always use better style and displays"}
        ]
      },
      {
        name: "Tavern Books",
        type: "Ruby on Rails",
        website_url: "http://www.tavernbooks.org",
        github_url: "https://github.com/ceciliaxyang/tavern-books",
        image: "img/tavernbooks.jpg",
        details: [
          {text: ""}
        ],
        improvements: [
          {text: ""}
        ]
      },
      {
        name: "Poetry Website",
        type: "jQuery, HTML, node.js",
        website_url: "http://www.jamesmaynardpoetry.com",
        github_url: "https://github.com/jklmaynard/poetry_site",
        image: "img/jamesmaynardpoetry.jpg",
        details: [
          {text: ""}
        ],
        improvements: [
          {text: ""}
        ]
      },
      {
        name: "Fun with Numbers",
        type: "jQuery and Javascript",
        website_url: "https://jklmaynard.github.io/fun-with-numbers",
        github_url: "https://github.com/jklmaynard/fun-with-numbers",
        image: "img/funwithnumbers.jpg",
        details: [
          {text: ""}
        ],
        improvements: [
          {text: ""}
        ]
      },
      {
        name: "Trinity United Methodist Church",
        type: "Angular with Rails",
        website_url: "http://warsawtrinityumc.com",
        github_url: "https://github.com/jklmaynard/trinity-church",
        image: "img/trinityunitedmethodist.jpg",
        details: [
          {text: ""}
        ],
        improvements: [
          {text: ""}
        ]
      },
      {
        name: "Book List",
        type: "Ruby on Rails",
        website_url: "https://fast-atoll-17293.herokuapp.com/",
        github_url: "https://github.com/jklmaynard/book-list",
        image: "img/booklist.jpg",
        details: [
          {text: ""}
        ],
        improvements: [
          {text: ""}
        ]
      },
      {
        name: "This Portfolio",
        type: "Angular, all front end",
        website_url: "https://jklmaynard.github.io/portfolio/",
        github_url: "https://jklmaynard.github.io/portfolio/",
        image: "img/portfolio.png",
        details: [
          {text: ""}
        ],
        improvements: [
          {text: ""}
        ]
      },
    ]
  }
  return obj;
}])
