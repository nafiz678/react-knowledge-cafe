import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

    const { title, cover, reading_time, posted_date, author, author_img, hashtags } = blog

    // console.log(blog)
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8 rounded-2xl' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-12' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
                }
            </p>
            <button className='text-blue-600 underline' onClick={() => handleMarkAsRead(blog.reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;