import  { useEffect,  } from 'react'
import ProductCards from './ProductCards'
import { useDispatch, useSelector } from 'react-redux';
import { productStore } from '../redux/productSlice';
import { productId } from '../redux/productSlice'
import Star from './Star';
import { IoClose } from "react-icons/io5";
const Home = () => {

  const productIdlocal=useSelector(state=>state.product.idValue)
  console.log(productIdlocal)
  
  const dispatch = useDispatch();
  const storedData=useSelector(state=>state.product.value)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              dispatch(productStore(data))
            
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
    
     const cross=()=>{
      dispatch(productId(null));
     }


  return (
    <div className="container p-3 min-vh-100" >
      <div className="row d-flex justify-content-center align-items-stretch h-100 gap-2">
        {
          (productIdlocal !== null)? 

<div
  style={{
    height: "90vh",
    width: "90vw",
    background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,31,185,1) 35%, rgba(0,212,255,1) 100%)" ,
    position: "fixed", // Use fixed positioning
    top: "50%", // Center vertically
    left: "50%", // Center horizontally
    transform: "translate(-50%, -50%)", // Adjust positioning to be centered
    zIndex: 1050, // High z-index to ensure it's in front
  }}
  className="d-flex justify-content-center align-items-center gap-4 rounded"
>

  <div style={{width:"35%",height:"100%"}} className='d-flex justify-content-center align-items-center  '>
  <img src={storedData[productIdlocal-1].image} alt="imagerer" style={{width:"100%",height:"80%"}} className='rounded object-fit-scale border' />
  </div>

        <div className='d-flex justify-content-between align-items-start flex-column  gap-2 ' style={{width:"50%",height:"70vh"}}>

          <div style={{fontSize:"30px" ,fontWeight:"bold",textAlign:"justify",color:"white"}}>{storedData[productIdlocal-1].title}</div>
          <div  style={{fontSize:"20px",textAlign:"justify",color:"white" , height:"50%" ,overflow:"auto"}}>{storedData[productIdlocal-1].description}</div>
          <div style={{color:"white"}}><Star value={storedData[productIdlocal-1].rating.rate}/>({storedData[productIdlocal-1].rating.count})</div>
          
          <div style={{fontSize:"25px" ,fontWeight:"bold",color:"white"}}>${storedData[productIdlocal-1].price}</div>

        </div>






<IoClose size={30} onClick={()=>(cross())} style={{position:"absolute", top:"5vh" ,right:"5vh",cursor:"pointer"}} />
</div>
:
''
        }
            

{
  
    storedData.map((item)=>(
        <ProductCards
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        image={item.image}
        category={item.category}
        rate={item.rating.rate}
        count={item.rating.count}
        
        />
    ))
}

    </div>
    </div>
  )
}

export default Home