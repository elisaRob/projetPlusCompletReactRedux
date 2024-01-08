import s from "./style.module.css"

export function FielError({msg}){
    return <span className={s.container}>{msg}</span>
}