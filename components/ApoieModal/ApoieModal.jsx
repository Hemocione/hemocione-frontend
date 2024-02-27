import { useEffect, useState } from "react";
import Image from 'next/image'
import styles from './ApoieModal.module.css'

const ApoieModal = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if(showModal) document.body.style.overflow = 'hidden';
  })

  function closeModal() {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  }

  if(!showModal) return null;

  return (
    <div className={styles.container} onClick={closeModal} role="presentation">
      <div className={styles.modal} open={showModal}>
        <a href="https://apoie.hemocione.com.br" rel="noreferrer" target="_blank">
          <Image alt="Doe Sangue, Doe Vida" height={1080} src="/e-banner.png" width={1920} />
        </a>
        <div className={styles.close}>X</div>
      </div>
    </div>
  );
}

export default ApoieModal;