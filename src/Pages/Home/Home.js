import './Home.css';
import { Header } from "../../components/Header"
import { EventCard } from '../../components/EventCard/EventCard';
import { useState, useEffect } from 'react';

const eventosIniciais = [
  { 
    id: 1,
    nome: "Protesto pela falta de café",
    data: "11/08/2023 10:03",
    img: "https://static.preparaenem.com/2021/04/graos-de-cafe.jpg"
  },
  {
    id: 2,
    nome: "Dia do surto",
    data: "31/12/1999 23:59",
    img: "https://aventurasnahistoria.uol.com.br/media/_versions/erro_de_sistema_widelg.jpg"
  },
  {
    id: 3,
    nome: "Click",
    data: "00/00/00",
    img: "https://static.wixstatic.com/media/98c203_57daecfc91f04446bfba8d66edfc1bed~mv2_d_1226_1226_s_2.jpg/v1/fill/w_1226,h_1226,al_c/98c203_57daecfc91f04446bfba8d66edfc1bed~mv2_d_1226_1226_s_2.jpg"
  },
]

export function Home() {
  const estadoDoNavegador = JSON.parse(localStorage.getItem("eventos:609")) 
  /* Captamos o array de eventos do navegador para jogar no estado de eventos.
  Desta forma os dados são persistidos para o usuário, já que cada mudança no array 
  é espelhada no navegador */

  /* coalescencia nula */
  const [eventos, setEventos] = useState(estadoDoNavegador ?? eventosIniciais)
  const [nome, setNome] = useState("")
  const [data, setData] = useState("")
  const [img, setImg] = useState("")
  const [descricao, setDescricao] = useState("")


/* Adicionar o campo de descrição para o cadastro de eventos */

  function converterImg(eventoDeChange) {
    if(eventoDeChange.target.files.length <= 0) {
      return;
    }

    const reader = new FileReader()

    reader.readAsDataURL(eventoDeChange.target.files[0])
    
    reader.onload = () => {
      setImg(reader.result)
    }
  }

  function cadastrarEvento(eventoDeSubmit) {
    eventoDeSubmit.preventDefault()
    const id = eventos.length > 0 ? eventos[eventos.length - 1].id + 1 : 1

    const novoEvento = {
      id, 
      nome,
      data, 
      img,
      descricao
    }

    setEventos([...eventos, novoEvento])

    eventoDeSubmit.target.reset()
    setImg('')
  }

  function deletarEvento(id) {
    /* crio um array novo filtrado com todos os eventos que eu quero manter
    menos o evento cujo id eu quero apagar */
    const eventosFiltrados = eventos.filter(evento => evento.id !== id)

    /* jogo o array novo filtrado sem aquele evento deletado no lugar
    do array antigo */
    setEventos(eventosFiltrados)
  }

  async function captarEventos() {
    /* teste de consumo de api para entender a logica do useEffect */
    try {
      let resposta = await fetch("http://localhost:80/api/events")
      let dados = await resposta.json()
  
      console.log(dados)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    localStorage.setItem("eventos:609", JSON.stringify(eventos))
  }, [eventos])

  useEffect(() => {
    /* 
      Podemos ter mais de um useEffect.
      Um array de dependencia vazio indica que o useEffect só irá rodar uma vez 
    */
    //captarEventos()
  }, [])

  return (
    <> {/* fragmento de tag utilizado para envolver tags filhas */}
      <Header />

      <div className="App">
        <form onSubmit={cadastrarEvento}>
          <div>
            <label htmlFor='nome'>Nome</label>
            <input type='text' id='nome' onChange={(eventoDeChange) => setNome(eventoDeChange.target.value) } />
          </div>
          <div>
            <label htmlFor='data'>Data</label>
            <input type='datetime-local' id='data' onChange={(eventoDeChange) => setData(eventoDeChange.target.value)} />
          </div>
          <div>
            <label htmlFor='descricao'>Descrição</label>
            <input type='text' id='descricao' onChange={(eventoDeChange) => setDescricao(eventoDeChange.target.value)} />
          </div>
          <div className='label-img'>
            <label htmlFor='img'>Selecione uma imagem</label>
            <input type='file' id='img' onChange={converterImg} />
          </div>

          <div className='preview-img'>
            {
              img && <img src={img} />
            }
          </div>

          <button>Cadastrar</button>
        </form>

        <div className='container-eventos'>
          {
            eventos.map(evento => {
              return (
                <EventCard 
                  key={evento.id}
                  id={evento.id}
                  nome={evento.nome}
                  data={evento.data}
                  img={evento.img}
                  descricao={evento.descricao}
                  deletarEvento={deletarEvento}
                />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

