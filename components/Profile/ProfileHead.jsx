import Image from 'next/image'
import styles from './profileStyle.module.css'
import ProfileImage from '../../public/FUAD.jpg'
import MenuHamb from '../../public/hamb.png'

export default function ProfileHead() {
  return (
    <>
      <div className={styles.head__container}>
        <div className={styles.profile}>
          <div className={styles.image__container}>
            <Image src={ProfileImage} width="42px" height="42px" className={styles.profile__Image} alt="Foto do Perfil" />
          </div>
          <div>
            <Image src={MenuHamb} width="32px" height="32px" alt="Menu Hamburguer" />
          </div>
        </div>
        <div className={styles.head__content}>
          <h1 className={styles.pfl__title}>Lista de grupos</h1>
          <p className={styles.pfl__subtitle}>Não há grupos disponíveis para acessar no momento.</p>
        </div>
      </div>
    </>
  )
}