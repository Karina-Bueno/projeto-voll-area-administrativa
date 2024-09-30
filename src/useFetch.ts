import { useEffect, useState } from "react";

export default function useFetch<T>({url} : {url : string}) {
    const [dados, setDados] = useState<T | null>(null); //utilizando o useState estamos especificando que esse estado ou vai ter tipo genérico ou null
    const [erro, setErro] = useState('');

    useEffect(() => { //é um hook que serve para fazermos algo depois do carregamento da página
        fetch(`http://localhost:8080/${url}`).then( //o fetch utilizamos para procurar a url e fazer a requisição. Colocamos entre chaves o valor da url que precisamos receber de algum lugar para que ele entenda o link que precisa acessar.
            resposta => resposta.json()
        ).then(dados => setDados(dados)).catch((erro) => setErro(erro))// o then está pegando o valor já convertido da resposta e envia para o setDados, agora a variavel dados terá o valor retornado da requisição. Colocamos um catch para o caso de retornar algum erro,ele mudará o valor da variavel erro e não da variavel dados.
    }, [url]) //clocamos o valor de url porque queremos que essa requisição aconteça somente quando o valor da url mudar.
    return { dados, erro }
}