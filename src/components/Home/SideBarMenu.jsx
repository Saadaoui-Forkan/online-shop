import React from 'react'
import'../../assets/css/custom.css'
import {Link} from 'react-router-dom'

function SideBarMenu({subCategoryProducts}) {
    let accordionMenuDivInside = [
        {
            id : 1,
            content : "High-Tech",
            ul : ["Mobile","Watch","Wireless"]
        },
        {
            id : 2,
            content : "Home & Office",
            ul : ["Chair","Sofa"]
        },
        {
            id : 3,
            content : "Mode",
            ul : ["Sofa", "Watch", "Wireless"]
        },
        {
            id : 4,
            content : "Electronic",
            ul : ["Mobile","Watch","Wireless"]
        },
        {
            id : 5,
            content : "Phone & Tablet",
            ul : ["Mobile"]
        },
    ]

    // const [subProducts,setSubProducts] = useState([])
    
    const handleClick = (e) =>{
        e.target.classList.toggle('active')
        if(e.target.nextElementSibling.style.maxHeight){
            e.target.nextElementSibling.style.maxHeight = null;
       }else{
            e.target.nextElementSibling.style.maxHeight
            = e.target.nextElementSibling.scrollHeight+ "px"
       }
    }
  return (
    <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">
            {
                accordionMenuDivInside.map((item) => {
                return (
                        <React.Fragment key={item.id}>
                            <button className='accordion' 
                                onClick={handleClick}>
                                {item.content}
                            </button>
                            <div className="panel">
                                {
                                    item.ul.map((item,index)=>{
                                    return (
                                        <ul key={index}>
                                            <li>
                                                <Link 
                                                to="/subcategory" 
                                                className="accordionItem" 
                                                onClick={()=>subCategoryProducts(item)}
                                                > 
                                                {item} </Link>
                                            </li>
                                        </ul>
                                    )
                                    })
                                }

                            </div>
                        </React.Fragment>
                        ) 
            })}
            
        </div>
    </div>
  )
}

export default SideBarMenu