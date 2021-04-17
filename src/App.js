import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import AccordianList from './Components/AccordianList'


const App = (props) => {
  const [blogData, setBlogData] = useState([])
  const [blogItems, setBlogItems] = useState([])

  const url = 'https://dct-cors.herokuapp.com/https://www.feedforall.com/blog-feed.xml'

  let parseString = require('xml2js').parseString

  useEffect(() => {
    axios.get(url)
         .then((response) => {
           const data = response.data
           parseString(data, function (err, result) {   // to convert xml json to js object
           
           // fetching the items array from the data
           setBlogData(result?.rss?.channel[0]?.item)
         });
         })
         .catch((err) => {
           console.log(err.message)
         })
  },[])

  

  return (
    <Container>
      <Typography variant='h3' align='center'>Blog Data</Typography>
      {blogData.length > 0 && <AccordianList blogData={blogData} handleBtn={handleBtn} />}
    </Container>
  )
}

export default App