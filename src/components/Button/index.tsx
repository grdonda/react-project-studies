import style from "./Button.module.scss";

interface listProps {
  texto: string, type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

const Button = ({ texto, type, onClick }: listProps) => {
  return (
    <button className={style.botao} type={type || "button"} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Button;