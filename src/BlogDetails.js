import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import ReactQuill from 'react-quill'

const BlogDetail = () => {
    // const { _id } = useParams();
    const id = useParams();
    // Object.keys(id)[0];
    const key = Object.keys(id)[0];
    const _id = id[key];

    //   var a = { a1: 'hello' };
    //   Object.keys(a)[0];
    //   var key = Object.keys(a)[0];
    //   a[key];
    // const { data: blog ,error , isPending } =  useFetch("https://blogs-backend-roshan.herokuapp.com/blogs/"+ 'ObjectId(60a69cc754886932849153c3)')
    const { data: blog ,error , isPending } =  useFetch("https://blogs-backend-roshan.herokuapp.com/blogs/"+ _id)
    const history = useHistory()

    console.log(_id);
    const handleClick = () => {
        if(window.confirm(`Are you sure you want to delete : ${blog.title}`)) {
            fetch('https://blogs-backend-roshan.herokuapp.com/blogs/'+ blog._id, {
                method: 'DELETE'
            }).then(() => {
                history.push('/')
            })
        }
    }
    return (  
        <div className='blog-details'>
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    {/* <div>{blog.body}</div> */}
                    <div>
                        <ReactQuill
                        value={blog.body}
                        readOnly={true}
                        theme={"bubble"}
                        />
                    </div>
                    <button onClick={handleClick} >Delete</button>
                </article>
            ) }
        </div>
    );
}
 
export default BlogDetail;