import logo from './logo.svg';
import './App.css';

function App() {
  const data=[
    {
      imges:"img/imgone.jpg",
      name:"Product"
    },
    {
      imges:"img/imgtwo.jpg",
      name:"Hello"
    },
    {
      imges:"img/imgthree.jpg",
      name:"City"
    },
    {
      imges:"img/imgfour.jpg",
      name:"Office"
    },  {
      imges:"img/imgfive.jpg",
      name:"Mountun"
    }
  ]
  return (
  <>
 {data.map( img => {
  return  <div className='Container bg-dark'>
<div className='row justify-content-center'>

  <div className='col-lg-4 col-md-4 col-sm-12 m-5 '>
  <div className="box">
  <img src={img.imges} />
      <div className="orerlay">
    <p>{img.name}</p>
  </div>
  </div> </div></div>

    
</div>
})}












  
  </>
  );
}

export default App;
