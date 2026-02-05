import { useState,useEffect  } from 'react'


import axios from 'axios'
const Favorites = () => {
const [recipes,setRecipes]=useState([])
 
   useEffect(()=>{
        
        const fetchFav=async(e)=>{
            const {data}=await axios.get("http://localhost:3000/recipes?isFav=true")
            setRecipes(data)
        }
       
            fetchFav();
      
    },[])

     const handelUnFav=async(id)=>{
    await axios.patch(`http://localhost:3000/recipes/${id}`,{isFav:false});
    setRecipes((prev) => prev.filter((r) => r.id !== id));
   }
  return (
    <>
<div style={{backgroundColor:"rgba(202, 238, 170, 1)" }}>
<div className="container  d-flex justify-content-center align-items-center  min-vh-100 " >
  {recipes.length ===0?(<p>no recipes yet</p>):(

 <div className='row'>

          {recipes.map((recipe) => (
    <div key={recipe.id} className="col-md-4 mb-4 ">
      <div className="card h-100">
        <img
          src={recipe.image}
          className="card-img-top"
          alt={recipe.name}
          style={{  objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          
        
      
         <button  className="btn btn-outline-success mt-3"
        style={{
          backgroundColor: "rgba(133, 182, 90, 1)",
          border: "none",
          borderRadius: "25px",
          padding: "8px 20px",
        }} onClick={()=>handelUnFav(recipe.id)}>
                remove from fav
              </button>
        </div>
      </div>
    </div>
  ))}
    </div>

  )}
   

</div>


</div>

    </>
  )
}

export default Favorites