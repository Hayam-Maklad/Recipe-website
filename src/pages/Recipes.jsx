import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
const Recipes = () => {
const [recipes,setRecipes]=useState([])
const [loader,setLoader]=useState(false)
const [search,setSearch]=useState("")
    useEffect(()=>{
        setLoader(true);
        const fetchData=async(e)=>{
            const {data}=await axios.get("http://localhost:3000/recipes")
            setRecipes(data)
        }
        setTimeout(() => {
            setLoader(false);
            fetchData();
        }, 2000);
    },[])

    const handelChange=(e)=>{
      setSearch(e.target.value)
    }

// filter recipes
const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
 <div style={{backgroundColor:"rgba(202, 238, 170, 1)" }} >

{loader && <p>loading.....</p>}

<div className="container min-vh-100 d-flex flex-column align-items-center 

 " >
  <input className="form-control " type="search" placeholder="Search" aria-label="Search" value={search} onChange={handelChange}
   style={{ maxWidth: "80%",       
      borderRadius: "25px",
      padding: "6px 12px",
      fontSize: "14px",marginTop:"90px",marginBottom:"25px"}}
   />
  

<div className='row'>
 
          {filteredRecipes.map((recipe) => (
    <div key={recipe.id} className="col-md-4 mb-5 mt-3  ">
      <div className="card h-100">
        <img
          src={recipe.image}
          className="card-img-top"
          alt={recipe.name}
          style={{  objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          
          <Link to={`/details/${recipe.id}`} className="btn btn-primary"  style={{
          backgroundColor: "rgba(133, 182, 90, 1)",
          border: "none",
          borderRadius: "25px",
          padding: "8px 20px",
        }}>View Details</Link>
        
        </div>
      </div>
    </div>
  ))} 


    </div>

</div>

  </div>
 


    </>
  )
}

export default Recipes