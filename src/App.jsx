import axios from 'axios'
import './App.css'
import { useState } from 'react'

const apiUrl = 'https://api.adviceslip.com/advice'

function App() {
const [advice,setAdvice] = useState(
  "Please click to see your advice!!"
)
const handleQuoteGenerator = async () =>{
const response = await axios.get(apiUrl);
setAdvice(response.data.slip.advice)

// console.log(response.data.slip.advice);

}

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <section className='quote-container'>
        <p>{advice}</p>
      </section>
      <button className='default-btn' onClick={handleQuoteGenerator}>Give me Advice</button>
    </div>
      
  )
}

export default App
