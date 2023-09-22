import { NavLink } from "react-router-dom";

export function NoPage() {
    return (
        <>
            <h1>Oops... Page Not Found</h1>
            <NavLink to="/">Voltar para a página inicial</NavLink>
        </>
    )
}