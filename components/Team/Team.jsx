import styles from './Team.module.css'
import {
  PageTitle,
  TeamParticipant
} from '..'

const team = [
  {
    name: "Thiago Guimarães",
    role: "Diretor de Tecnologia",
    img: ""
  },
  {
    name: "Vitor Pinheiro",
    role: "Presidente",
    img: ""
  },
  {
    name: "Otávio Trindade",
    role: "Diretor de Comunicação",
    img: ""
  },
  {
    name: "Lucas Pitta",
    role: "Líder de backend",
    img: ""
  },
  {
    name: "Gabriel Pireda",
    role: "Líder de Frontend",
    img: ""
  },
  {
    name: "Parangs",
    role: "Diretor de Tudo",
    img: ""
  },
  {
    name: "Dudu Rosa",
    role: "Líder de web design",
    img: ""
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