import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './TeamParticipant.module.css'
import Image from 'next/image'

const TeamParticipant = ({ img, name, role }) => {
  const cardPath = '/whoweare/team/redCard.svg'
  const [imgSrc, setImgSrc] = useState(cardPath)
  const usingCard = imgSrc === cardPath

  const handleClick = () => {
    const nextImg = usingCard ? img : cardPath
    setImgSrc(nextImg)
  }

  return (
    <div className={styles.container}>
      <Image
        alt={name}
        className={styles.card}
        height={300}
        onClick={handleClick}
        onKeyDown={handleClick}
        role='presentation'
        src={imgSrc}
        width={300}
      />
      <div className={usingCard ? styles.displayNone : styles.userText}>
        <p className={styles.name}>{name}</p>
        <p>{role}</p>
      </div>
    </div>
  )
}

TeamParticipant.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
}

export default TeamParticipant
