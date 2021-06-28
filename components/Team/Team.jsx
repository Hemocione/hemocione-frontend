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