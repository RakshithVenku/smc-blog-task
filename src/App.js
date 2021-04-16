import React, {useState, useEffect} from 'react'
import axios from 'axios'


const App = (props) => {
  const [blogData, setBlogData] = useState({})

  const url = 'https://dct-cors.herokuapp.com/https://www.feedforall.com/blog-feed.xml'

  let parseString = require('xml2js').parseString

  useEffect(() => {
    axios.get(url)
         .then((response) => {
           const data = response.data
           parseString(data, function (err, result) {
            console.log(result)
            setBlogData(result)
           });
         })
         .catch((err) => {
           console.log(err.message)
         })
  },[])

  return (
    <div>
      <h1 style={{textAlign : 'center'}}>Hello world</h1>
    </div>
  )
}

export default App