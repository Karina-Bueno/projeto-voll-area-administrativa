import styled from 'styled-components';
import facebook from './assets/facebook.png';
import google from './assets/google.png';
import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';

const RodapeEstilizado = styled.footer `
    height: 100%;
    color: white;
    padding; 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`
const ListaEstilizada = styled.ul `
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`
const ItemEstilizado = styled.li `
    list-style-type: none;
    margin: 10px;
`
const ImagemEstilizada = styled.img `
    padding: 10px;
`
const ParagrafoEstilizado = styled.p `
    padding: 10px;
`
function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <a href="#">
                        <ImagemEstilizada src={facebook} alt="logo do facebook" />
                    </a>
                    <a href="#">
                        <ImagemEstilizada src={google} alt='logo do google' />
                    </a> 
                    <a href="#">
                        <ImagemEstilizada src={instagram} alt='logo do instagram' />
                    </a>
                    <a href="#">
                        <ImagemEstilizada src={whatsapp} alt='logo do whatsapp' />
                    </a>
                        
                    
                </ItemEstilizado>
            </ListaEstilizada>
            <ParagrafoEstilizado>2024 © Desenvolvido por Alura | Projeto fictício sem fins comerciais. </ParagrafoEstilizado>
        </RodapeEstilizado>
    )
}

export default Rodape;