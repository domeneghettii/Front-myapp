import styles from "../styles/Home.module.css"
import Header from "../componentes/Header";
<componentes />

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.card}>
                <h1>Coluna 1</h1>
            </main>

            <main className={styles.card2}>
                <h1>Coluna 2 </h1>
            </main>

            <main className={styles.card3}>
                <h1>Coluna 3</h1>
            </main>


            <main className={styles.main}>
                <img src="/imgmac.png/"></img>
            </main>

            <footer className={styles.footer}></footer>
        </div>


    )
}