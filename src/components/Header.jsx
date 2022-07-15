import styles from './Header.module.css'

export function Header() {
    return(
       <header>
        <strong className={styles.header}>Ignite Feed</strong>
       </header>
    );
}
// o css module gera um  rash para cada classe criada para que cada uma seja única e não interfira na estilização dos outros componentes.
