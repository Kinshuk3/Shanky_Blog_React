import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  /* 4----templates */
 // const title = `Welcome to the new blog`;
  // const likes = 50;
  // const link = "https://www.google.com";
  //const person = {name: "Shanky", age: 30};
  return (
    <Router>
        <div className="App">
          {/* This adds the component here */}
          <Navbar />
          <div className="content">
            {/* <h1>{title}</h1> */}
            {/* <p>Liked {likes} times.</p>
            <p>{10}</p>
            <p>{"Hello World"}</p>
            <p>{[1,2,3,4,5]}</p>
            <p>{Math.random() * 10}</p>

            <a href={link}>Google site</a> */}

            {/* <Home /> */}
            {/* ---21--React router------ */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            {/* ----22----Exact router matches-------- */}
              <Route exact path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
