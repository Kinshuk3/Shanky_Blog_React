import { Link } from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page can't be found.</p>
            <br />
            <br />
            <Link to="/">Go back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;