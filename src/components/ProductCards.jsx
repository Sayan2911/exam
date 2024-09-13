
import { useDispatch } from 'react-redux'
import { productId } from '../redux/productSlice'


// eslint-disable-next-line react/prop-types, no-unused-vars
const ProductCards = ({id,title,price,description,image,category,rate,count}) => {

  const dispatch=useDispatch()
const modal=(id)=>{
  dispatch(productId(id));
  
}




  return (
   <>

   
   <div className='rounded d-flex flex-column align-items-center justify-content-center border ' style={{width:"20vw", height:"50vh"}}>


  
<img src={image} alt='img-name' style={{width:"100%" ,height:"50%"}} className='object-fit-scale border rounded mb-1'/> 
<p className='text-center' style={{height:"70px " ,width:"100%" ,overflow:"hidden"}}>{title}</p>

<button className='btn btn-primary'onClick={()=>(modal(id))}>details</button>

   </div>
   
   
   
   </>
  )
}

export default ProductCards