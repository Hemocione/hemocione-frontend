import { useState } from 'react'
import styles from './WhereAndWhen.module.css'

const nextEvents = [
  {
    address: 'Rua São Clemente, 226',
    day: '13',
    location: 'Colégio Santo Inácio',
    month: 'Agosto',
    subtitle: '10:00 às 16:00',
    text: 'Nosso primeiro evento no Colégio Santo Inácio já tem data! Convidamos os alunos, ex-alunos, responsáveis e funcionários para se (h)emocionarem com a gente!',
  },
  {
    address: 'Rua José Linhares, 88',
    day: '15',
    location: 'Colégio Santo Agostinho - Leblon',
    month: 'Outubro',
    subtitle: '10:00 às 16:00',
    text: 'Mais do que conhecido para os agostinianos, o Hemocione promove um evento pela quarta vez no CSA - Leblon! Esperamos vocês nesse feriado para doarem sangue e salvarem 4 vidas!',
  },
]

const WhereAndWhen = () => {
  const [eventIndex, setEventIndex] = useState(0)

  return (
    <div className={styles.whereContainer}>
      <h2 className={styles.title}>{/* Onde e<a className={styles.red}>{' Quando'}</a> */}</h2>
      <div className={styles.contentContainer}>
        <div className={styles.eventControlContainer}>
          {eventIndex === 0 ? null : (
            <img
              alt=''
              className={styles.arrow}
              onClick={() => setEventIndex(eventIndex - 1)}
              role='presentation'
              src='/leftArrowNav.svg'
            />
          )}
          <div className={styles.dateContainer}>
            <p className={styles.day}>{nextEvents[eventIndex].day}</p>
            <p className={styles.month}>{nextEvents[eventIndex].month}</p>
          </div>
          {eventIndex === nextEvents.length - 1 ? null : (
            <img
              alt=''
              className={styles.arrow}
              onClick={() => setEventIndex(eventIndex + 1)}
              role='presentation'
              src='/rightArrowNav.svg'
            />
          )}
        </div>
        <div className={styles.eventDetailsContainer}>
          <hr className={styles.divider} />
          <h3 className={styles.location}>{nextEvents[eventIndex].location}</h3>
          <hr className={styles.divider} />
          <h4 className={styles.subtitle}>{nextEvents[eventIndex].address}</h4>
          <h4 className={styles.subtitle}>{nextEvents[eventIndex].subtitle}</h4>
          <p className={styles.text}>{nextEvents[eventIndex].text}</p>
          <hr className={styles.divider} />
        </div>
      </div>
    </div>
  )
}

export default WhereAndWhen
