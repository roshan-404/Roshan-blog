
import BlogList from "./BlogList"
import useFetch from './useFetch'


export default function Home() {
    const {data: blogs , isPending , error} = useFetch("https://blogs-backend-roshan.herokuapp.com/blogs")

    return (
        <div className="home">
            { error && <div>{error}</div> }
            { isPending && <div>Loading......</div>  }
            { blogs  && <BlogList blogs={blogs} title="All Blogs"  />}
        </div>
    )
}
