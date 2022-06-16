//No react quando queremos exibir o valor de uma variável JS dentro de uma tag html, preciso usar {}
export function Post(props) {
    console.log(props);
    return (
        <>
           <strong>{props.author}</strong>
           <p>{props.content}</p>
         </>
    )

}



