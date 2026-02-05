import React from 'react'
import { useNavigate } from 'react-router';
const Home = () => {

  
  const navigate=useNavigate();
  const explore=()=>{
    navigate("/Recipes")
  }
  return (
    <>
    <div style={{backgroundColor:"rgba(237, 255, 221, 1)" ,height:"100vh"}}>
<div className="container  ">
  <div className="row align-items-center">
    
    <div className="col-md-6">
      <h2 style={{ color: "#4b6043", fontWeight: "bold",fontSize:"28px" }}>
        Discover Fresh Recipes 🍲
      </h2>
      <p style={{ color: "#333", fontSize: "18px", lineHeight: "1.8" }}>
        Explore a variety of healthy, homemade recipes made with love and
        natural ingredients. Whether you're a beginner or a master chef,
        you’ll find inspiration for every meal.
      </p>
      <button
        className="btn btn-success mt-3"
        style={{
          backgroundColor: "rgba(133, 182, 90, 1)",
          border: "none",
          borderRadius: "25px",
          padding: "8px 20px",
        }}
      onClick={explore}>
        Explore Now
      </button>
    </div>

    
    <div className="col-md-6 text-center">
      <img
        src="image/intro-removebg-preview.png"
        
        className="img-fluid mt-5"
        style={{
          paddingTop:"90px",
          borderRadius: "50%",
         // boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          maxWidth: "100%",
         
        }}
      />
    </div>
  </div>
</div>


  </div>
    </>
  )
}

export default Home