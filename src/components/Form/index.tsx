import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { ITarefa } from "../../common/types/tarefa";
import Button from "../Button";
import style from "./Form.module.scss";

interface listProps {
    setTasks: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Form = ({ setTasks }: listProps) => {


    const [state, setState] = useState({
        tarefa: '',
        tempo: '00:10:00'
    });

    const adicionarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setTasks(tarefasAntigas => {
            return [...tarefasAntigas, { ...state, id: uuid(), selecionado: false, completado: false }];
        });

        setState({
            tarefa: '',
            tempo: '00:00'
        });
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa.bind(this)}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    value={state.tarefa}
                    onChange={(e) => setState({ ...state, tarefa: e.target.value })}
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:10:00"
                    max="01:00:00"
                    required
                    value={state.tempo}
                    onChange={(e) => setState({ ...state, tempo: e.target.value })}
                />
            </div>
            <Button type="submit" texto="Adicionar" />
        </form>
    )
}
export default Form;

