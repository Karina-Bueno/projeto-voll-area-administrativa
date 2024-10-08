import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IProfissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsulta";
import useDadosGrafico from "./useDadosGrafico";

interface Props {
    profissionais: IProfissional[] | null,
    consultas: IConsulta[] | null
}

interface IDados {
    nome: string,
    consultas: number
}

function Grafico({ profissionais, consultas }: Props) {
    let dados: Array<IDados> = useDadosGrafico({ profissionais, consultas });
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart
                layout="vertical"
                data={dados}
                margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
            >
                <XAxis type="number"></XAxis>
                 <YAxis type="category" dataKey="nome"></YAxis> {/*será a legenda do gráfico*/}
                <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar> {/*representa a barra em si, o dataKey captura o número de consultas realizadas para aumentar a barra*/}
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Grafico;