import { PageTitle, TeamParticipant } from '..'
import styles from './Team.module.css'

const team = [
  {
    img: '/whoweare/team/pinha.png',
    name: 'Vitor Pinheiro',
    role: 'Presidente',
  },
  {
    img: '/whoweare/team/guima.png',
    name: 'Thiago Guimarães',
    role: 'Diretor de Tecnologia',
  },
  {
    img: '/whoweare/team/anabrito.png',
    name: 'Ana Luiza Brito',
    role: 'Diretora de Operações',
  },
  {
    img: '/whoweare/team/otavio.png',
    name: 'Otávio Trindade',
    role: 'Diretor de Comunicação',
  },
  {
    img: '/whoweare/team/elisa.png',
    name: 'Elisa Lidy',
    role: 'Diretora Comercial',
  },
  {
    img: '/whoweare/team/anahelena.png',
    name: 'Ana Helena Nascif',
    role: 'Responsável Jurídica',
  },
  {
    img: '/whoweare/team/biapareto.png',
    name: 'Beatriz Pareto',
    role: 'Gerente de Operações',
  },
  {
    img: '/whoweare/team/giuliana.png',
    name: 'Giuliana Costa',
    role: 'Coordenadora de Marketing e Audiovisual',
  },
  {
    img: '/whoweare/team/rafamontuori.png',
    name: 'Rafaella Montuori',
    role: 'Designer',
  },
  {
    img: '/whoweare/team/juba.png',
    name: 'Maria Joana Pinheiro',
    role: 'Estagiária de Redes Sociais (Instagram)',
  },
  {
    img: '/whoweare/team/jacintho.png',
    name: 'João Pedro Jacintho',
    role: 'Estagiário de Redes Sociais (Twitter)',
  },
  {
    img: '/whoweare/team/amandamussi.png',
    name: 'Amanda Mussi',
    role: 'Voluntária - Fotografia e Redação',
  }
]

const Team = () => (
  <div className={styles.container}>
    <PageTitle blackTitle='Descubra o Nosso ' redTitle='Time' />
    <div className={styles.teamContainer}>
      {team.map(({ name, role, img }) => (
        <TeamParticipant img={img} name={name} role={role} />
      ))}
    </div>
  </div>
)

export default Team
