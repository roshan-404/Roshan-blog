import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const { _id } = useParams();
    const { data: blog ,error , isPending } =  useFetch("https://blogs-backend-roshan.herokuapp.com/blogs/"+ _id)
    const history = useHistory()

    console.log(_id);
    const handleClick = () => {
        fetch('https://blogs-backend-roshan.herokuapp.com/blogs/'+ blog._id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    return (  
        <div className='blog-details'>
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick} >Delete</button>
                </article>
            ) }
        </div>
    );
}
 
export default BlogDetail;