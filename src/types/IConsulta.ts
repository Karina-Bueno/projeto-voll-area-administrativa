import IProfissional from "./IProfissional";

export default interface IConsulta extends IProfissional{
    id: number, 
    data: string,
    horario: string,
    profissional: Array<IProfissional>, //estams recebendo o valor da interface IProfissional
    especialidade: string,
    paciente: string,
    modalidade: string
}