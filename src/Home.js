import BlogList from './BlogList'
import useFetch from './useFetch';
// ----5---Multiple components-------
// const Home  = () => {
//     //let name = "Carlos";

//     //----8----UseStae hook------
//     const [name, setName] = useState('Carlos');
//     const [age, setAge] = useState(21);
//     //---7----click events in component-----------
//     const handleClickMe = (e) => {
//         //console.log("hello people", e);
//       setName('Lungi');
//       setAge(60);
//     };

//     // const handleClickAgain = (name, e) =>{
//     //     console.log('Hello ' + name, e.target);
//     // }

//     return ( 
//         <div className="home">
//             <h2>Home Page</h2>
//             <p>{name} is {age} years old.</p>
//             <button onClick={handleClickMe}>Click Me</button>
//             {/* <button onClick={(e) =>{
//                 // console.log("hello");
//                 handleClickAgain('Gucci', e);
//             }}>Click me once more</button> */}
//         </div>
//      );
// }

//---10-----Lists--------------
const Home = () => {
    
    // const [blogs,setBlogs] = useState([
    //     { title: 'My Cool website', body:'lorem  ipsum', author:'Carlos', id:1},
    //     { title: 'Homecoming party!', body:'lorem  ipsum', author:'Lungi', id:2},
    //     { title: 'how to be successful top 5 tips', body:'lorem  ipsum', author:'Carlos', id:3}
    // ]);


    //---12---passing function as props
    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    //-15----------useeffect dependencies, the second arguement is a dependency array and it rerenders only when there is a
    //change in the state passed to it
    // const [name, setName] = useState('Carlos');
    // //--14--useEffect this runs every time there is a re render
    // useEffect(() =>{
    //     console.log('use effect success');
    //     console.log(name);
    // }, [name]);

    //---17 fetching data via useEffect
    // const [name, setName] = useState('Carlos');
    //--14--useEffect this runs every time there is a re render
    // useEffect(() =>{
    //     fetch('http://localhost:8000/blogs')
    //     .then(res =>{
    //         return res.json();
    //     })
    //     .then((data) =>{
    //         setBlogs(data);
    //         setIsPending(false);
    //     })
    // }, []);

    

    //------16-----JSON server setup
    //npx json-server --watch data/db.json --port 8000
    
    const { blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return ( 
        // <div className="home">
        //     {blogs.map((blog) => (
        //         <div className="blog-preview" key={blog.id}>
        //             <h2>{ blog.title }</h2>
        //             <p>Written by: {blog.author}</p>
        //         </div>
        //     ))}
        // </div>

        // 11-------------calling props here-----------
        <div className="home">
           {/* <BlogList blogs={blogs} title="All Blogs..." handleDelete={handleDelete}/> */}
           {error && <div>{ error }</div>} 
           {isPending && <div>Loading....</div>}
           {blogs &&  <BlogList blogs={blogs} title="All Blogs..." />}
          
            {/* ---12----Resuing the above prop */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Carlos')} title="Carlos's Blogs"/> */}
            {/* <button onClick={() => setName('Gucci')}>Change Name</button>
            <p>{ name }</p> */}
        </div>
     );
}
 
export default Home;