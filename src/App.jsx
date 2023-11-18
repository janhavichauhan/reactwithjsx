import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const imagearray = imageData();
  return(
    <div>
      <div><h1> Kalvium gallary</h1></div>
      <div className='image'>
        {imagearray.map((item)=>{
          return <img key={item.id} src={item.img}/>
        })}
      </div>
    </div>
  )
}

export default App;
