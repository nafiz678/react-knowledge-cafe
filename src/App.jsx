
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
     const newBookmarks = [...bookmarks, blog]
     setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id,time) =>{
    const newTime = readingTime + time;
    setReadingTime(newTime)

    //remove the read from bookmark
    // console.log("remove data from id", id)
    const remainingBookmarks = bookmarks.filter(bookmark=> bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto mt-10'>
      <Blogs 
      handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks
      bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>
      </div>

    </>
  )
}

export default App
