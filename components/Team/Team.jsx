import styles from './Team.module.css'
import {
  PageTitle,
  TeamParticipant
} from '..'

const team = [
  {
    name: "Thiago Guimarães",
    role: "Diretor de Tecnologia",
    img: "/whoweare/team/guima.png"
  },
  {
    name: "Vitor Pinheiro",
    role: "Presidente",
    img: "/whoweare/team/guima.png"
  },
  {
    name: "Otávio Trindade",
    role: "Diretor de Comunicação",
    img: "/whoweare/team/guima.png"
  },
  {
    name: "Lucas Pitta",
    role: "Líder de backend",
    img: "/whoweare/team/guima.png"
  },
  {
    name: "Gabriel Pireda",
    role: "Líder de Frontend",
    img: "/whoweare/team/guima.png"
  },
  {
    name: "Parangs",
    role: "Diretor de Tudo",
    img: "/whoweare/team/guima.png"
  },
  {
    name: "Dudu Rosa",
    role: "Criativo",
    img: "/whoweare/team/guima.png"
  },
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