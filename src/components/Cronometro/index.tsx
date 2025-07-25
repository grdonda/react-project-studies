import { useEffect, useState } from "react";
import { ITarefa } from "../../common/types/tarefa";
import Button from "../Button";
import style from './Cronometro.module.scss';
import { Relogio } from "./Relogio";
import { commonUtilsTime } from "../../common/utils/time";

interface listProps {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void;
}

export const Cronometro = ({ selecionado, finalizarTarefa }: listProps) => {

    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(commonUtilsTime(selecionado.tempo));
        }
    }, [selecionado]);

    function regressiva(contador: number = 0) {

        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }




    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Button texto={"começar"} onClick={() => { regressiva(tempo) }} />
        </div>
    );
}