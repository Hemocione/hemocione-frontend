import styles from './WhereAndWhen.module.css'
import { useState } from 'react'; 

var nextEvents = [
  {
    day: "28",
    month: "Dezembro",
    location: "Hemorio",
    address: "Rua Frei Caneca, 8 - Centro",
    subtitle: "Aberto todo dia das: 7:00H às 18:00H",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget arcu varius massa finibus faucibus. Nullam convallis et odio eu vulputate. Nullam lacinia interdum orci id cursus. Aliquam et sapien egestas, bibendum erat nec, pellentesque justo. Mauris in hendrerit urna, ac imperdiet nisi. Proin at velit lacinia erat tincidunt scelerisque a a est. Integer porttitor vestibulum tellus quis tincidunt. "
  },
  {
    day: "29",
    month: "Dezembro",
    location: "fghjfghj",
    address: "Rua Frei Caneca, 8 - Centro",
    subtitle: "Aberto todo dia das: 7:00H às 18:00H",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget arcu varius massa finibus faucibus. Nullam convallis et odio eu vulputate. Nullam lacinia interdum orci id cursus. Aliquam et sapien egestas, bibendum erat nec, pellentesque justo. Mauris in hendrerit urna, ac imperdiet nisi. Proin at velit lacinia erat tincidunt scelerisque a a est. Integer porttitor vestibulum tellus quis tincidunt. "
  },
  {
    day: "30",
    month: "Dezembro",
    location: "Hemogfhjfgho",
    address: "Rua Frei Caneca, 8 - Centro",
    subtitle: "Aberto todo dia das: 7:00H às 18:00H",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget arcu varius massa finibus faucibus. Nullam convallis et odio eu vulputate. Nullam lacinia interdum orci id cursus. Aliquam et sapien egestas, bibendum erat nec, pellentesque justo. Mauris in hendrerit urna, ac imperdiet nisi. Proin at velit lacinia erat tincidunt scelerisque a a est. Integer porttitor vestibulum tellus quis tincidunt. "
  },
  {
    day: "31",
    month: "Dezembro",
    location: "fghjfghj",
    address: "Rua Frei Caneca, 8 - Centro",
    subtitle: "Aberto todo dia das: 7:00H às 18:00H",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget arcu varius massa finibus faucibus. Nullam convallis et odio eu vulputate. Nullam lacinia interdum orci id cursus. Aliquam et sapien egestas, bibendum erat nec, pellentesque justo. Mauris in hendrerit urna, ac imperdiet nisi. Proin at velit lacinia erat tincidunt scelerisque a a est. Integer porttitor vestibulum tellus quis tincidunt. "
  }
]

const WhereAndWhen = () => {
  var [eventIndex, setEventIndex] = useState(0)

  return (
    <div className={styles.whereContainer}>
      <h2 className={styles.title}>
        Onde e 
        <a className={styles.red}>
          {" Quando"}
        </a>
      </h2>
      <div className={styles.contentContainer}>
        <div className={styles.eventControlContainer}>
          {eventIndex === 0 ? null : <img src='/leftArrowNav.svg' className={styles.arrow}
           onClick={ () => setEventIndex(eventIndex - 1) } />}
          <div className={styles.dateContainer}>
            <p className={styles.day}>
              {nextEvents[eventIndex].day}
            </p>
            <p className={styles.month}>
              {nextEvents[eventIndex].month}
            </p>
          </div>
          {eventIndex === nextEvents.length-1 ? null : <img src='/rightArrowNav.svg' className={styles.arrow} 
           onClick={ () => setEventIndex(eventIndex + 1) } />}
        </div>
        <div className={styles.eventDetailsContainer}>
          <h3 className={styles.location}>
            {nextEvents[eventIndex].location}
          </h3>
          <h4 className={styles.subtitle}>
            {nextEvents[eventIndex].address}
          </h4>
          <h4 className={styles.subtitle}>
            {nextEvents[eventIndex].subtitle}
          </h4>
          <p>
            {nextEvents[eventIndex].text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhereAndWhen