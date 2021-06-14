import React from 'react';




const Categories = ({categories, cat,setCategory, handleChange}) =>{
    
    

    return(
        <form>
            
            <select value={cat} onChange={handleChange}>
                <option className="bg-blue" value="All">All</option>
            {categories.map((c)=>{
                return(
                    <option value={c}>{c}</option>
                )
            })}    
        </select>
        </form>
        
    )
}

export default Categories;