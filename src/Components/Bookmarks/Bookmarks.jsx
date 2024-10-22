
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
        <div className="md:w-1/3  rounded-2xl ml-6 mr-6 ">
            <div className='p-4 mb-7 text-center border bg-[#6047ec1a] border-[#6047ec] text-[#6047ec] rounded-2xl'>
                <h3 className='text-2xl font-bold'>Reading Time spent: {readingTime} min</h3>
            </div>
        <div className=" bg-slate-200 rounded-2xl p-4 ">
            <h2 className='text-2xl mt-2 ml-2 mb-2'><b>Bookmarked Blogs:</b> {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks
