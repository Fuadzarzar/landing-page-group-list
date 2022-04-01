import styles from './bodyStyle.module.css'
import Lottie from 'react-lottie';
import animationData from '../../public/study.json';

export default function AppBody() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };

    return (
        <>
            <main className={styles.body__App}>
                <div className={styles.lottie__container}>
                    <Lottie options={defaultOptions} height={300} width={300} />
                    <p className={styles.body__title}>Explore todos os nossos grupos de estudos gratuitamente.</p>
                </div>
                <div className={styles.body__button}>Explorar</div>
            </main>
        </>
    )
}