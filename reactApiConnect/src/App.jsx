import axios from 'axios'
import { useState } from 'react'


const App = () => {
  //This is fetch api code using async await function
  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(response)
  }

  //This is fetch api code using async await const arrow function
  const getData1 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()
    console.log(data)
  }

  //This is axios code using async await const arrow function
  const getData2 = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)
  }

  //This is axios code using async await const arrow function for picsum api to get images list
  const [picsumData, setPicsumData] = useState([])
  const getData3 = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setPicsumData(response.data)
    console.log(response.data)
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={getData1}>Get Data1</button>
      <button onClick={getData2}>Get Data2</button>
      <button onClick={getData3}>Get Data3</button>
      <div>
        {picsumData.map(function (elem, idx) {
          return <div>
            <h3>{idx + 1}. hello, {elem.author}</h3>
            <img src={elem.download_url} alt="" />
          </div>
        })}
      </div>
    </div>
  )
}

export default App