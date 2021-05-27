//-20------Custom hook which is reusable------------

import {useState, useEffect } from 'react'
const useFetch = (url) => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() =>{

        //-24-----Cleanup Function---------
        const abortController = new AbortController();
        setTimeout(() =>{
            fetch(url, { signal: abortController.signal })
        .then(res =>{
            // console.log(res);
            //-19----catching error from server-----
            if(!res.ok){
                throw Error('Data cant be fetched ');
            }
            return res.json();
        })
        .then((data) =>{
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            // console.log(err.message);
            if(err.name === 'AbortError'){
                console.log('Fetch aborted.')
            }
            else{
                setError(err.message);
                setIsPending(false);
            }
        })
        }, 1000);

        return () => abortController.abort();
    }, [url]);

    return {blogs, isPending, error };
}

export default useFetch;