import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.jpeg'


export default function Banner() {
    return (
        <div className={styles.banner}>
            < div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                   Boas vindas ao meu espaço pessoal! Eu sou Ana Caroline, estudante de Front-End da Alura. Aqui compartilho vários conhecimentos, espero que possamos aprender juntos! =) 
                </p>            
            </div>
            <div className={styles.imagens}>
                <img
                    classname={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto"
                />

            </div>
        </div>
    )
}