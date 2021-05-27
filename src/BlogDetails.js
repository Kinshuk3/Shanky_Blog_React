//--25----Route Parameters--------------
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { blogs,error,isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    //----31---DELETE request of blog---------
    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method:'DELETE',
        }).then(() =>{
            history.push('/');
        });
    }
    return ( 
        //---26-----Reusing cutom Hooks-----------
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div> }
            { blogs && (
                <article>
                    <h2>{ blogs.title }</h2>
                    <p>Written by { blogs.author }</p>
                    <div>
                        {blogs.body}
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;