import { useState } from "react";
import  { useHistory } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author} 

        setIsPending(true)    
    
        fetch('https://blogs-backend-roshan.herokuapp.com/blogs', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog done')
            setIsPending(false)
            history.push('/')
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                    <ReactQuill
                    className="quill"
                    theme="snow" 
                    value={body} 
                    onChange={setBody}
                    >
                </ReactQuill>
                <label>Blog Author</label>
                <input 
                    type="text" 
                    required 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
        // export function removeHTMLTags (str) {
        //     return str.replace(/<[^>]*>?/gm, '');
        //   };
     );
}
 
export default Create;