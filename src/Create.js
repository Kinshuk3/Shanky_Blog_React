import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {

    //---27-----controlled inputs-------------------
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Mario');
    const [isPending,setIsPending] = useState(false);
    //----30-----redirecting using history
    const history = useHistory();

    //--28---submit the blog event-------
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newBlog = { title,body,author };

        setIsPending(true);
       
        //---29-----POST request---------
        fetch('http://localhost:8000/blogs', {
            method: 'POST' ,
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(newBlog)
        }).then(() =>{
            console.log("new Blog is added!");
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        });

        
    };

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                 type="text" 
                 required
                 value={ title }
                 onChange={(e) => setTitle(e.target.value)}
                 />
                 <label>Blog Body:</label>
                <textarea
                required
                value={ body }
                 onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Blog Author:</label>
                <select
                value= { author }
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;