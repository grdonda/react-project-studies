import { ITarefa } from "../../common/types/tarefa";
import Item from "./Item";
import style from "./List.module.scss";

interface ListProps {
    tasks: ITarefa[];
    selecionaTarefa: (tarefa: ITarefa) => void;
}

function List({ tasks, selecionaTarefa }: ListProps) {
    return (
        <aside className={style.listaTarefas}>

            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map((task) => <Item key={task.id} {...task} selecionaTarefa={selecionaTarefa} />)}
            </ul>
        </aside >
    );
}

export default List;