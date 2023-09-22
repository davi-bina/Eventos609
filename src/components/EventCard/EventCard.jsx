import './styles.css'
import { useNavigate } from 'react-router-dom'
import { Card } from './styles'
/* em um componente dinamico recebemos os valores em um parametro 
de objeto cujo nome por convenção se chama props. 
Neste caso, nomeamos o objeto de evento e não da nada {}
*/



export function EventCard(props) {
    const navigate = useNavigate()
    /* Retorna uma função para mudar de página */

    function navegarParaDetalhes() {
        navigate (`/eventos/${props.id}` , {
            state: {
                nome: props.nome,
                data: props.data,
                img: props.img,
                descricao: props.descricao,
                id: props.id
            }
        })
    }
    
    const dataJaPassou = new Date("2023-09-23").getTime() < new Date().getTime()
    return (
        <Card dataJaPassou={dataJaPassou}>
            {
                props.img && <img src={props.img} /> 
            }

            <div> {/* criei uma div */}
                <h2>{props.nome}</h2>
                <p>{props.descricao ? props.descricao : "Sem descrição"}</p>
                <p>{props.data ? props.data : "Sem data Definida"}</p>

                <div className="button-container">
                    <button className='red-button' onClick={() => props.deletarEvento(props.id)}>Deletar</button>
                    <button className='detalhes-button' onClick={navegarParaDetalhes}>Ver Detalhes</button>
                </div>
            </div>
        </Card>
    )
}