![](/ga_cog.png)

# The Mini-Project: Your first application

## Attendance

There are no in person lecture classes during project weeks unless it's listed on the schedule, but we do expect you to be working on your project daily and be available during the usual class times for any meetings and check-ins with instructors as needed. Additionally, an instructor will usually have the classroom open for you to join if you wish to work with your peers or ask for help from instructors.
_Please note: There are guidelines regarding how you go about asking for instructor help and joining the classroom during this time will not excuse you from following them._

Let's take a moment to review [How to Ask a Question](https://git.generalassemb.ly/seirfx-foxglove/mini-project/blob/main/How-To-Ask-A-Question.md) for more detailed information on the policies around asking for help.

There are **daily attendance checks at the start of each class period**. A thread will be posted in the classroom channel at 6:30pm EST on Tuesday and Wednesday and at 10am EST on Saturdays and you must respond to it within 2 hours or you will be marked absent.
_Failure to make an attendance check will result in an unexcused absence_.

We will also be doing weekly stand ups on Saturday afternoons at 1 pm EST and you must be present for the stand up. 
_Failure to be present for a stand up will result in an unexcused absence for that afternoon_

ALSO PLEASE NOTE: You will have outcomes as usual during project weeks.

**Important Dates to Remember:**

- **Wednesday July 26th**: Mini-Project Approvals and Intro to the Internet lecture. Please come prepared to present your idea to your instructor and make sure you're on Zoom at 6:30 EST.
- **Wednesday August 2nd**: Mini-Project presentation day! You're required to be in the class zoom starting at 5:00 PM Eastern
  - NOTE: You must have your project finished, pushed to Github and deployed by 6:30 PM so that you can give your fellow classmates full attention during their presentations



## Project Details

### &#x1F534; Mandatory To Pass:

#### MVP - Minimum Viable Product

#### Your application must meet these requirements:

1. Built with HTML, CSS and JavaScript
2. Hosted on Netlify<br>
3. Commits to Github every class day<br>
4. A `README.md` file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.

#### The app must:

1. Use fetch to make a request to an external API (e.g. OMDBapi) and insert some of the data retrieved into the DOM
1. Implement responsive design (i.e. it should be fully functional on desktop, tablet, mobile, etc)
1. Have one or more complex user interface modules such as a carousel, a modal, a sticky nav, tooltips, css animations etc

** Note regarding your complex UI module: you should build this from scratch using Javascript or CSS Animations. The point is to test your ability to combine HTML/CSS with some basic interactivity. If you’re shaky on how to do this, you can reference the CSS Animations morning exercises (or anything else we covered in class). **DO NOT** use libraries like jQueryUI. Build it from scratch. Also, **_DO NOT_ simply google “javascript carousel” and then just copy and paste the code.**

### 📋 List of API's

Below is a non-exhaustive list of some free API's you can use. There are _many_ API's out there, however, so if you find one not on this list that you'd like to use, feel free! Please note that some may require signing up for an API key

1. Star Wars: https://swapi.dev/
1. Weather: https://openweathermap.org/api
1. Giphy: https://developers.giphy.com/
1. Pokemon: http://pokeapi.co/
1. Card Deck: https://deckofcardsapi.com/
1. Google Books: https://developers.google.com/books/
1. City of Chicago: https://data.cityofchicago.org/
1. Rick and Morty: https://rickandmortyapi.com/documentation/#rest

Lastly, the following sites congregates a bunch of API's together, so you can take a look through their libraries and try to find an API that interests you!

1. https://github.com/toddmotto/public-apis
1. https://rapidapi.com/

Note, however, that not all API's are free and many listed may require payment. We **highly highly recommend** to use a completely free API for your first project dealing with one. If the API is "free" but requires your credit card information, we highly recommend that you do NOT use it. Please check with your instructor first before using an API.

#### Test Your Chosen API and Make Sure You Can Fetch Data

Before you submit your Github Issue Project Proposal, make a request to the API by placing the URL in the browser and validating you can get back data. Once you can get that to work, take a screenshot of the data so you can include it in the Github Issue.

### &#x1F535; Stretch Goals (Not Mandatory):

#### Recommended Features

- Game functionality (e.g. a quiz)
- Look into [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so you can save data to the user's browser

## Make A New Repo

:heavy_exclamation_mark: Make your new repo on [GitHub](https://github.com/), **not** GitHub Enterprise!
  - This is so that anyone can see your repo, not just people signed up to GA's Enterprise instance of Github
  - We recommend that you name your repo appropriately (make it your app's name, for example `omdb-app`, and _**not**_ something like `unit-one-project`).

:heavy_exclamation_mark: **Do not** begin your project within the class repo.

:heavy_exclamation_mark: **Do not** clone your project into the class repo.

1. After your project has been approved, [make a new github repo for your project](https://help.github.com/articles/create-a-repo/).

## Deploying your Project

For anyone to be able to see and use your project, you must deploy it online somewhere. For this project, you will be deploying it onto Netlify.


#### Netlify!
  - Directions for deploying to Netlify can be found in this [markdown](netlifydeploy.md)). It's very simple so we won't be walking through this live, but if you need extra help, please set up office hours or post in debugging!


## Technical Demonstration

All projects will be presented to the class. Your presentation should:

- Be approximately 5 minutes in length. Keeping your presentation sweet and succinct is key -- consider practicing your presentation beforehand.
- Show off all features of the app itself
- Explain the technical details
- Explain the technical challenges
- Explain which improvements you might make

You will be sharing your app and your code. Be prepared to answer questions from the instructors and other students.

## Meetings with instructors

_An instructor will contact you to setup a meeting time to approve your project._

**Wednesday July 26th @ 6:30 EST - Mandatory Proposals are due. Submit an issue on this repo for this.**<br>

You will meet with an instructor for ~15 minutes to get your app idea approved.

_How to prepare for your project approval_

- Pick a project idea
- Pick an API
- Write user stories
- what should people be able to do on your website?
- Draw wireframes
  - at least one wireframe of how your site will look
  - (draw more for multiple views)
- Make a schedule for yourself of what you want to accomplish
  - First day most details
  - Second day less details broader strokes of what you want to accomplish
  - Further: try to pick 'milestones' (check with the project markdown that you are building what you need for MVP) and determine the order of importance, be sure to have a separate list for stretch goals
  - This takes practice so be ready to adjust your schedule
- You will have to make changes and adjust/adapt as you build
- **Once you have all of this, open an issue on this repository with the above information included**

## How to Submit Your Project

Your project is due on Wednesday Aug 2nd at 6:30 pm EST. You will not be allowed to push any changes or make any deployments after this time.

:heavy_check_mark: Add your project to [this google sheet](https://docs.google.com/spreadsheets/d/1g1rxXobWemkhqs4p1jDncqZw5fGEVgQCj1RoX-r545A/edit?usp=sharing). Note that this will be the order you present your projects!

## Where to go for help during project week

1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA
4. After all other avenues have been exhausted, seek help from your assigned instructor. Please refer to [How to Ask a Question](https://git.generalassemb.ly/seirfx-foxglove/mini-project/blob/main/How-To-Ask-A-Question.md) before you reach out.
_**Please note that we will be limiting the amount of help we offer on this project as you should be fostering a sense of self-sufficiency and practicing finding solutions through the resources you have available to you before you reach out to a more senior developer. This isn't to be mean or because we're lazy. It's because we want you to succeed post-course in your future career.**_


## Suggested Ways to Get Started

- **Wireframe** Make a drawing of what your app will look like in all of its stages (what does it look like as soon as you log on to the site? What does it look like once data is retrieved?).

- **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

- **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

- **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

### Think about...

- **Creativity**  
  Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
  Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
  Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

## Example Project Idea

Below is a very simple project idea using OMDB and jQuery (please note, your project should include more styling and functionality):

![](https://i.imgur.com/L6hwHMR.gif)

Consider framing your project around a problem. For example, if I were to create an app similar to the one above, maybe the problem is my friends and I always have weekly movie nights and we're starting to run out of movies to watch. So, I thought about creating an app where I can search for movies and see their summaries. Or just thought about creating an app to help schedule the movie nights with what movie we'll be watching, etc.

## Past Student Examples

- [The Joke Store](https://benjaminpitts.github.io/thejokestore/)
- [Hero Selector]( https://banutryon.github.io/SuperHero-Project-1/)
- [Jacket Horoscope](https://kblanck.github.io/jacket-horoscope/)
- [FlashNewz](https://boring-booth-b430fc.netlify.app/)

## Useful Resources

- **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**
- **[Trello](https://www.trello.com)**
- **[Figma](https://www.figma.com/)**

## Ready to Request Approval? Submit a Github Issue [here](https://git.generalassemb.ly/seirfx-foxglove/mini-project/issues/new?assignees=&labels=&template=project-approval-issue.md&title=%7BYour+Name+Here%7D+-+Project+1)

Create the issue and fill out all of the sections. If all sections aren't filled out, you won't be approved.

You must fill in the issue template completely in order for your project to be considered for approval. 

<hr>
