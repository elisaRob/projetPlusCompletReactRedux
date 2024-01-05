import s from "./style.module.css"
import { Logo } from "components/logo";
import logo from "assets/images/logo.png"
import { BoutonPrimary } from "components/BoutonPrimary/BoutonPrimary";
import { useNavigate } from "react-router-dom";

export function Header(props){
    const navigate = useNavigate();
    return <div className={`row ${s.container}`}>
        <div className="col-xs-12 col-sm-4" onClick={()=>navigate("/")}>
            <Logo title="Note automatique" subtitle="Notes" image={logo} />
        </div>
        <div className="col-xs-12 col-sm-8 text-end">
            <BoutonPrimary onClick={()=>navigate("/note/new")}>
                Ajouter une note
            </BoutonPrimary>
        </div>
    </div>
}