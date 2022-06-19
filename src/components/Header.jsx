import styles from './Header.module.css'

export function Header() {
    return(
        <header className={styles.header}>
          <strong>Ignite Feed</strong>
        </header>
        
    );
}

/*No react não vamos importar o css no html, todas as importações vão vir dos arquivos JS.*/

//no reactjs a gente não usa o class="" dentro dos elementos html. Porque como estamos dentro de um arquivo JS existe a className
//quando usamos o css module preciso na importação dar um nome para os estilos.
// o .header é o nom da classe que criei no arquivo de estilização.
