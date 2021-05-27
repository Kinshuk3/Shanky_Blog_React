# BLOG Creating App


Simple Blog application created with React.JS, Javascript, HTML, CSS, JSON server, JSON format(For data storage)

## Table of Contents

  - Features
  - Installation 
  - Technologies
  - Screenshots

There are 4 main features of this application as shown below:
  - View Blogs: The user can see all Blogs fetched from database on the homepage and even the body of the blog by clicking on them.
  - Add Blogs: The user can add a new Blog which will be updated in the database and also reflect in Homepage along with previous Blogs.
  - Delete Blogs: The user can delete Blog when they are viewing each Blog and they will be rerouted to Homepage with blog no longer present.
  - Error Handling: The user if makes requests any wrong request to a page which does not exists, they will get an error page, with option to go back home.

## Installation 

    This app requires you have Node.Js / npm installed on your local computer.
    Then cd to the directory where this folder is via terminal.
   
#### Running the Development Server(put following commands in the terminal): 

   ```sh
   npm run start
   npx json-server --watch data/db.json --port 8000
   ```
## Technologies 

  - npm run start installs the required node Modules having all dependencies for the program
  - json-server will run on port 8000 due to below command, user can choose port of their own but will have to change commands
  - ReactJS, Hooks, EJX were used to build this application
  - 'Loading' text used to display user when they make different requests to show the next page is loading

## Screenshots

   - GET The Blogs 
   <img src="/screenshots/img1.png" alt= "Display all blogs on homepage" width="600" height="300" />
   - ADD the Blogs
   <img src="/screenshots/img2.png" alt= "Display all blogs on homepage" width="600" height="300" />
   - LOADING Page for User when Blog is Added
    <img src="/screenshots/img3.png" alt= "Display all blogs on homepage" width="600" height="300" />
   - UPDATED Page with new blog added
    <img src="/screenshots/img4.png" alt= "Display all blogs on homepage" width="600" height="300" />
   - VIEW the body of Blogs
    <img src="/screenshots/img5.png" alt= "Display all blogs on homepage" width="600" height="300" />
   - DELETE the Blogs so its no longer on Homepage
    <img src="/screenshots/img6.png" alt= "Display all blogs on homepage" width="600" height="300" />
   - Displaying 404 error page
    <img src="/screenshots/img7.png" alt= "Display all blogs on homepage" width="600" height="300" />
