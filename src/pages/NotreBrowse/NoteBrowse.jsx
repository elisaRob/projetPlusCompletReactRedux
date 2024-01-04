import { TextCard } from "components/TextCard/TextCard"
import s from "./style.module.css"

export function NoteBrowse(){
    return <>
        <TextCard 
            title="Un Titre" 
            subtitle="01/02/2000" 
            content="srysy tzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetr
            tzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetr
            tzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetr
            tzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetr
            tzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetr
            tzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetr
            tzyyryrffffffffffffetrtzyyryrffffffffffffetr
            tzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetr
            tzyyryrffffffffffffetrtzyyryrffffffffffffetrtzyyryrffffffffffffetr
            auzyuyuiyauzyuazhuhsui"
            onClick={() => alert("Clique sur la carte")}
            onTrash={()=>alert("Clique sur la poubelle")}
        />
    </>
}