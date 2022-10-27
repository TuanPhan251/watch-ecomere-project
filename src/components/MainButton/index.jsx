import * as S from "./styles";

const MainButton = (props) => {
  return (
    <S.MainButton
      buttonType={props.buttonType}
      style={props.style}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </S.MainButton>
  );
};

export default MainButton;
