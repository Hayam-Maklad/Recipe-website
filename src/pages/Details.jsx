import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const Details = () => {
  const {id}=useParams();
  const navigate=useNavigate();
  const [recipe,setRecipe]=useState(null);
  useEffect(()=>{
const fetchData=async(e)=>{
  const {data}=await axios.get(`http://localhost:3000/recipes/${id}`)
  setRecipe(data)
}
fetchData()
  },[id])
  if(!recipe)
     return <p>Loading...</p>
  const redirectToRecipes=()=>{
    navigate("/Recipes")
  }
  
   const handelFav=async()=>{
    await axios.patch(`http://localhost:3000/recipes/${recipe.id}`,{isFav:true});
    

   }
  
  return (
    <>

<div style={{backgroundColor:"rgba(202, 238, 170, 1)" }}>
  <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className="row ">
      <div
        className="card h-100 "
        style={{
          // backgroundColor:"rgba(103, 43, 0, 0.4)",
          maxWidth: "900px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)", 
          border: "none",
         borderRadius: "15px", 
          overflow: "hidden", 
        }}
      >
        <div className="row align-items-center">
          <div className="col-md-5 p-0">
            <img
              src={recipe.image}
              className="img-fluid w-100 h-100"
              alt={recipe.name}
              style={{
                objectFit: "cover",
                height: "100%",
                maxHeight: "1000px",
              }}
            />
          </div>

          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title " style={{marginBottom:30}}>{recipe.name}</h3>
              <h5>Ingredients:</h5>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {recipe.ingredients.map((ing, index) => (
                  <span key={index} style={{backgroundColor:"rgba(202, 238, 170, 1)" }}
>
                    {ing}
                  </span>
                ))}
              </div>
              <button className="btn btn-outline-success mt-3 me-3 " 
        style={{
          backgroundColor: "rgba(133, 182, 90, 1)",
          border: "none",
          borderRadius: "25px",
          padding: "8px 20px",
        }} onClick={redirectToRecipes}>
                back to Recipes
              </button>
              <button  className="btn btn-outline-success mt-3"
        style={{
          backgroundColor: "rgba(133, 182, 90, 1)",
          border: "none",
          borderRadius: "25px",
          padding: "8px 20px",
        }} onClick={handelFav}>
                Add to Fav
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
  )
}

export default Details