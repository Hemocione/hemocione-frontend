import styles from './Team.module.css'
import {
  PageTitle,
  TeamParticipant
} from '..'

const team = [
  {
    name: "Vitor Pinheiro",
    role: "Presidente",
    img: "/whoweare/team/pinha.png"
  },
  {
    name: "Thiago Guimarães",
    role: "Diretor de Tecnologia",
    img: "/whoweare/team/guima.png"
  },
  {
    name: "Beatriz Pareto",
    role: "Gerente de Operações",
    img: "/whoweare/team/biapareto.png"
  },
  {
    name: "Giuliana Costa",
    role: "Coordenadora de Marketing e Audiovisual",
    img: "/whoweare/team/giuliana.png"
  },
  {
    name: "Ana Luiza Brito",
    role: "Diretora de Operações",
    img: "/whoweare/team/anabrito.png"
  },
  {
    name: "Otávio Trindade",
    role: "Diretor de Comunicação",
    img: "/whoweare/team/otavio.png"
  },
  {
    name: "Maria Joana Pinheiro",
    role: "Estagiária de Redes Sociais",
    img: "/whoweare/team/juba.png"
  },
  {
    name: "Elisa Lidy",
    role: "Diretora Comercial",
    img: "/whoweare/team/elisa.png"
  },
  {
    name: "Ana Helena Nascif",
    role: "Diretora Jurídica",
    img: "/whoweare/team/anahelena.png"
  },
  {
    name: "Rafaella Montuori",
    role: "Designer",
    img: "/whoweare/team/rafamontuori.png"
  }
]

const Team = () => {
  return (
    <div className={styles.container}>
      <PageTitle blackTitle={"Descubra o Nosso "} redTitle={"Time"} />
      <div className={styles.teamContainer}>
        {team.map(({name, role, img, ...rest}) => (
          <TeamParticipant name={name} role={role} img={img} />
        ))}
      </div>
    </div>
  )
}

export default Team