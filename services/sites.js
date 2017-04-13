angular.module('portfolio')
.factory('sites', [function() {
  var obj = {
    sites: [
      {
        name: "Nike Experiment & Optimization",
        type: "A/B/n Testing and Analytics Script",
        website_url: "http://www.nike.com/",
        github_url: "http://web.nike.com/neo/main/neo.js",
        image: "img/nike-experiments.jpg",
        summary: "On a continuous delivery Kanban model, I worked on a small team delivering a light-weight client side analytics and A/B testing script called NEO.js, 'Nike Experimentation and Optimization'.  NEO.js utilized browser cookies to offer different eCommerce experiences based on consumer knowledge strategy, to understand and lift conversion rates.  NEO.js also was the hub for remarketing pixels, and analytics scripts such as Adobe Omniture and ClickTale.",
        details: [
          {text: "Light-weight client side script provided ease for experimentation"},
          {text: "Continuous delivery and automated unit testing (nightwatch)"},
          {text: "DOM manipulation usually based on event listeners"}
        ],
        improvements: [
          {text: "No back end: data either remained in the browser or was networked to analytics hubs (such as Adobe)"},
          {text: "Although NEO.js was fast, it is lower on the stack so an experiment would 'flicker' between the control to the variant (sometimes noticeable)"}
        ]
      },
      {
        name: "Mother Foucault's Bookshop",
        type: "Angular with Rails",
        website_url: "http://www.motherfoucaultsbookshop.com/",
        github_url: "https://github.com/jklmaynard/mother-foucaults",
        image: "img/mother-foucaults.jpg",
        summary: "A single page app for Mother Foucault's Books.  Allow capability for administrators to add events and post photos, which included a standard out-of-the-box calendar of events (WIP).  The UI conceit was to break from the usual 'navbar' of many sites, and have a central ui-view for the application, with a navigation bar on the right and the logo on the left.",
        details: [
          {text: "Angular front end; Rails API; PostgreSQL database"},
          {text: "Bower dependencies, ui-router, $http, calendar-ui"},
          {text: "App specific createDOMNode() function to decode URI data-string into paragraph and break HTML elements"},
          {text: "Photo upload dependencies, using Paperclip gem and base64 bower dependency"},
          {text: "Admin access for stakeholder-specific users to add events and upload photos for events"},
          {text: "Center ui-view element, with two set 'columns' for logo (on left) and navigation (on right).  This was to accomodate a very small navigation on a desktop view."},
          {text: "Deployed on Heroku"}
        ],
        improvements: [
          {text: "Tailor bootstrap calendar according to stakeholders params"},
          {text: "Include gulp builds modifications for faster load time"},
          {text: "Make styles less drab"}
        ]
      },
      {
        name: "Tavern Books",
        type: "Ruby on Rails",
        website_url: "http://www.tavernbooks.org",
        github_url: "https://github.com/ceciliaxyang/tavern-books",
        image: "img/tavernbooks.jpg",
        summary: "I inherited this site from Cecilia Yang's initial work, and retailored it, mostly from a UX perspective.  A general eCommerce platform for Tavern Books, in Portland, OR.  Administrators can add books from their desktops; general custodial work every once in a while demanded",
        details: [
          {text: "Ruby on Rails app; PostgreSQL database"},
          {text: "Admin access for stakeholder-specific users to add books"}
        ],
        improvements: [
          {text: "Use paperclip gem to allow stakeholders to upload book images (currently manually added)"},
          {text: "Work with stakeholders to create a more dynamic site with jQuery and have a more engaging user experience (allow easter eggs, literary snippets, &c.)"},
          {text: "Rewrite how books are displayed in Living Library page, so that users are not always scrolling to see older material"}
        ]
      },
      {
        name: "Poetry Website",
        type: "jQuery, HTML, node.js",
        website_url: "http://www.jamesmaynardpoetry.com",
        github_url: "https://github.com/jklmaynard/poetry_site",
        image: "img/jamesmaynardpoetry.jpg",
        summary: "Site to display and promote my other passion, poetry.  The joke about this site is it becomes my experimental site for anything new I'm trying.  Currently, the site uses express middleware to deliver . . . an app that really only needs jQuery to operate.  The fun part for me is using gulp and nightwatch scripts to play around with QA and script builds, on a site that is generally OK.",
        details: [
          {text: "Node app scripts to play around with Express middleware for an Angular front end (no backend)"},
          {text: "Nightwatch and gulp scripts for my local machine (that are ugly, super ugly)"},
          {text: "Links to recent online poetry, which is not ugly"},
          {text: "Heavy lifting done by jQuery, for more dynamic work"}
        ],
        improvements: [
          {text: "Overhaul the site adding a back end with Django and Python (for experince) and emphasizing on unit tests and builds, including automation (e.g., TravisCI).  Or whatever else sounds like fun."}
        ]
      },
      {
        name: "Fun with Numbers",
        type: "jQuery and Javascript",
        website_url: "https://jklmaynard.github.io/fun-with-numbers",
        github_url: "https://github.com/jklmaynard/fun-with-numbers",
        image: "img/funwithnumbers.jpg",
        summary: "My interests are many and varied.  At the time of this build, I am reading 'The Decline and Fall of the Roman Empire'.  I write poetry at 5 A.M. every morning.  I have been playing the piano since I was five, the drums since I was nine, the guitar since I was eighteen; I recently bought a concertina.  I also love to spend an afternoon in the kitchen, or a morning in the garden.  This little site satisfies the weird fixations I get when thinking about particular math problems, and then want to write quick javascript to automate solutions to math problems; then write jQuery to give a little UX experience to those solutions — before moving on to the next thing that interests me.  This site is where those little obsessions have an output.",
        details: [
          {text: "Basic javascript running, with jQuery tailored for UX"},
          {text: "Weird math problems and sudden solutions to them"}
        ],
        improvements: [
          {text: "The UX is always the weakest part of this site.  Animations could make for a more fluid and enjoyable experience, especially for 'Binary Cocktail', which I think is fascinating, but the experience is . . . meh."}
        ]
      },
      {
        name: "Trinity United Methodist Church",
        type: "Angular with Rails",
        website_url: "http://warsawtrinityumc.com",
        github_url: "https://github.com/jklmaynard/trinity-church",
        image: "img/trinityunitedmethodist.jpg",
        summary: "Freelance work done for my in-law's Church in Warsaw, Indiana.  The site is an Angular front end tailored to a Rails back end, bower depdencies, much like Mother Foucault's Bookstore.  Administrators have ability to write messages and post events, including upload photos for those events",
        details: [
          {text: "Angular front-end servies; Rails API; PostgreSQL database; Heroku deployment"},
          {text: "Auth and $http bower dependencies for sinlge-user sign on (for admins); paperclip and base64 for uploading photos in the front and converting them to the back"}
        ],
        improvements: [
          {text: "About page needs copy, and carousel for church event photos can be added"},
          {text: "A more obvious UI for administrators, who seem to be having difficulty accessing the site to add content.  Since the static page for admins is not a link on the site (since there are no users, except admind), it is not so obvious how to add content at the get-go"},
          {text: "Currently very slow to load at first"}
        ]
      },
      {
        name: "Book List",
        type: "Ruby on Rails",
        website_url: "https://fast-atoll-17293.herokuapp.com/",
        github_url: "https://github.com/jklmaynard/book-list",
        image: "img/booklist.jpg",
        summary: "Since 2000 I have kept a list of all the books I've read.  At first it was in a .txt file, then a google doc.  As the world became more digitalized, it seems I stopped being able to quickly access this list, and forgot to add a book once I was finished with it.  My solution was to whip up a Ruby on Rails app, deployed on Heroku, so I can access my book list.  This is very basic since it is mostly for myself; it didn't even seem important to buy a domain name for it.",
        details: [
          {text: "Ruby on Rails API system; PostgreSQL database; Heroku deployment"},
          {text: "has_many belongs_to dependencies on parade"},
        ],
        improvements: [
          {text: "Reapply styles to accomodate mobile view (currently only desktop)"},
          {text: "Currently the Notes class is not functional.  Was ambitious, then moved on to other projects."}
        ]
      },
      {
        name: "This Portfolio",
        type: "Angular, all front end",
        website_url: "https://jklmaynard.github.io/portfolio/",
        github_url: "https://jklmaynard.github.io/portfolio/",
        image: "img/portfolio.png",
        summary: "A general overview of apps and websites I've been working on for the past year.  Access to site and to github code for each, plus a general (and glib) overview of details and necessary improvements.  Version 1.0 was a single page with links and little copy.  Version 2.0 has opened it to an angular service to allow for partial HTML and a more interesting user experience",
        details: [
          {text: "Angular and angular-ui dev tools"}
        ],
        improvements: [
          {text: "Adding more photos for the site"},
          {text: "Is it worth to try some gulp build tools?"}
        ]
      },
    ]
  }
  return obj;
}])
