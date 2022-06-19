import './Header.module.css'

export function Header() {
    return(
        <strong className="header">Ignite Feed</strong>
    );
}

/*No react não vamos importar o css no html, todas as importações vão vir dos arquivos JS.*/

//no reactjs a gente não usa o class="" dentro dos elementos html. Porque como estamos dentro de um arquivo JS existe a className
