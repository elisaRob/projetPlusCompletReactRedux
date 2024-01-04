import s from "./style.module.css"
import { useState } from "react"
import { Trash as TrashIcon } from "react-bootstrap-icons"
export function TextCard({title,subtitle,content,onClick,onTrash}){
    const [isCardHovered,setIsCardHovered]=useState(false)
    const [isTrashHovered,setIsTrashHovered]=useState(false)

    function arreterLaPropagation(e){
        onTrash()
        e.stopPropagation();
    }

    return (
        <div className=
        {`card ${s.container}`} 
        onMouseEnter={()=> setIsCardHovered(true)} 
        onMouseLeave={()=>setIsCardHovered(false)}
        style={{borderColor : isCardHovered ? "#0d6efd" : "transparent"}}
        onClick={onClick}
        >
            <div className="card-body">
                <div className={s.title_row}>
                    <h5 className="card-title">{title}</h5>
                    <TrashIcon 
                    size={20}
                    onMouseEnter={()=>setIsTrashHovered(true)}
                    onMouseLeave={()=>setIsTrashHovered(false)}
                    style={{color : isTrashHovered? "red" : "grey"}}
                    onClick={arreterLaPropagation} />
                   
                </div>
              
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className={`card-text ${s.text_content}`}>
                    {content}
                </p>
            </div>
      </div>
    )
}