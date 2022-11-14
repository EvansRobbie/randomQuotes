import './App.css';
import {useEffect, useState} from 'react'
import {FaQuoteLeft, FaTwitterSquare, FaTumblrSquare} from 'react-icons/fa'
import Colors from './Colors';


function App() {
  const [color, setColor] = useState('#e74c3c')

  const [allQuotes, setAllQuotes] = useState([])
  const [getQuote, setGetQuote] = useState({
    randomAuthor:"Kevin Kruse",
    randomQuote:'Life isn’t about getting and having, it’s about giving and being.'
  })

  useEffect(() =>{
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res => res.json())
    .then(data => setAllQuotes(data.quotes))
  })

const newQuote = () =>{
  const randomQuote = Math.floor(Math.random() * allQuotes.length)
  const url = allQuotes[randomQuote].quote
  const author = allQuotes[randomQuote].author
  setGetQuote(prevQuote => ({...prevQuote, randomQuote:url, randomAuthor:author}))
  // console.log(allQuotes[randomQuote].quote)
  // console.log(quoteArray )
  // console.log('clicked')
}
  // let color
const newColor =() =>{
  const colorsArr = Colors.colors
  const randomColor = Math.floor(Math.random() * colorsArr.length)
  // console.log(randomColor)
  setColor (colorsArr[randomColor].color)
  // console.log(color)
  newQuote()
}
const styles = {
  backgroundColor: color,
  
}
  return (
    <div className=" relative  w-full h-screen flex transition-all ease-in duration-1000 delay-1000" style={styles}>
      <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center ">
        <div className=' h-auto w-1/2 bg-white outline-none rounded-md border-none '>
          <div className='flex text-3xl indent-10 flex-wrap ml-4 mt-10 p-1 break-words'> 
          <span className='indent-10' style={{color:color}}><FaQuoteLeft className=' text-2xl'/></span>
          <span className=' text-2xl font-sans font-medium italic' style={{color:color}}>{getQuote.randomQuote}</span>
          </div>
          <span className='flex justify-end mr-5 font-thin text-base ' style={{color:color}}>- {getQuote.randomAuthor}</span>
          <div className='flex m-5 justify-between '>
            <div className='flex text-3xl cursor-pointer ' style={{color:color}}>
          <span className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><FaTwitterSquare/></span>
          <span className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><FaTumblrSquare/></span>
          </div>
          <button className='flex items-end p-2 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md text-sm font-medium' style={styles} onClick={newColor}>New Quote</button>
          </div>
          <footer className='absolute flex text-white sm:ml-auto text-sm mt-2 md:ml-72'>by Robbievans</footer>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
