import { useEffect } from 'react'
import './EventDetails.css'
import { useLocation, useNavigate } from 'react-router-dom'

export function EventDetailsPage() {
    const { state } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if(!state) {
            navigate('../NoPage')

        }

        /* useEffect aqui precisa testar se o state ta null, senão ele
        volta para a page incial. Só que ele tenta rodar ao mesmo tempo
        que tenta retornar o <h1> */

    }, [])

    if(!state) {
        return <></>
    }


    return <h1>{state.nome}</h1>
}