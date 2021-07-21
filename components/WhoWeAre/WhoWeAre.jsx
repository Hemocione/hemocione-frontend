import { ImageSideText, PageTitle } from '..'
import styles from './WhoWeAre.module.css'

const content = [
  {
    img: '/whoweare/photo1.png',
    textSections: [
      'Nós somos um grupo de jovens indignados com o pouco costume que nós - jovens - temos em doar sangue.',
      'A gente sabe que doar sangue tão longe de ser fácil infelizmente, é mais comum achar alguém que saiba a fórmula da aprovação no ENEM do que alguém que saiba onde e como doar sangue. Pior que isso: mesmo sabendo, ter que ir ao Hemorio, num lugar desconhecido, sozinho, sem ninguém pra dar uma força chega a ser um tanto amedrontador.',
    ],
  },
  {
    img: '/whoweare/photo2.png',
    textSections: [
      'Para resolver isso, decidimos criar uma campanha que leva cadeiras de coleta até as salas de aula dos colégios do nosso Brasilzão! Ou seja, a gente, em parceria com o Hemorio, organiza coletas de sangue dentro dos colégios!',
    ],
  },
  {
    img: '/whoweare/photo3.png',
    textSections: [
      'Assim, você doa enquanto os amigos dão uma força e fazem a mí­dia! Por fim, fazemos, então, um trato com cada um que doar: Doa sangue que nós te doamos uma camisa da campanha - nossa marca registrada!',
      'E aí, vamos hemocionar juntos?',
      'Quer levar o Hemocione pra seu colégio? Manda um email pra gente!',
    ],
  },
]

const WhoWeAre = () => (
  <div className={styles.container}>
    <PageTitle blackTitle='Quem ' redTitle='Somos?' />
    <div className={styles.contentContainer}>
      {content.map((element, index) => (
        <ImageSideText
          key={element.img}
          img={element.img}
          index={index}
          textSections={element.textSections}
        />
      ))}
    </div>
  </div>
)

export default WhoWeAre
