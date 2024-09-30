import avaliacao from './assets/avaliacao.png';
import grafico from './assets/grafico.png';
import consulta from './assets/consulta.png';
import React from 'react';
import styled from 'styled-components';

//Criando interface para declarar quais os tipos dos valores de children
interface Props {
    imagem?: string,
    children?: React.ReactNode
}

interface Imagens {
    avaliacao: string,
    grafico: string,
    consulta: string,
}

const SpanEstilizado = styled.span<Props>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'}  
` //captura as informações que foram enviadas (valor de imagem) e pergunta: props.imagem existe?, caso sim, ela pega a url para o diretório daquela imagem e imprime, caso não, o valor fica como none

const TítuloEstilizado = styled.h2 `
    color: var(--azul-claro);
`
const ContainerEstilizado = styled.div `
    display: flex;
    align-items: center;
`

function Título({ imagem, children }: Props) { //Título receberá dois valores (imagem e children)
    const listaDeImagens: Imagens = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta,
    }
    return (
        <ContainerEstilizado >
            <SpanEstilizado imagem={listaDeImagens[imagem as keyof Imagens]} /> {/*vamos dentro da lista e buscamos a imagem que possui o índice com o valor do nome daquela imagem */}
            <TítuloEstilizado>
                {children}
            </TítuloEstilizado>
        </ContainerEstilizado>
    )
}

export default Título;