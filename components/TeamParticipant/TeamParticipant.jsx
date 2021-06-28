import styles from './TeamParticipant.module.css'
import { useState } from 'react'; 


const TeamParticipant = ({name, role, img}) => {
  const cardPath = "/whoweare/team/redCard.svg"
  let [imgSrc, setImgSrc] = useState(cardPath)
  let usingCard = imgSrc === cardPath
  
  const handleClick = () => {
    let nextImg = usingCard ? img : cardPath
    setImgSrc(nextImg)
  }

  return (
    <div className={styles.container}>
      <img src={imgSrc} className={styles.card} onClick={handleClick} />
      <div className={usingCard ? styles.displayNone : styles.userText}>
        <p className={styles.name}>{name}</p>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default TeamParticipant