import { Link } from 'react-router-dom';

// ----5---Multiple components-------
const Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>A Shanky's Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create" 
                // 6----Inline styling in JSX is done via 2 curly brackets one for telling its dynamic other for object
                // style={{
                //     color: "white",
                //     backgroundColor: "#cf9090",
                //     borderRadius: '6px'
                // }}
                >New Blog</a> */}

                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;