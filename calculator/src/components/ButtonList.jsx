//array (props) destructuring as got from parent component

// const ButtonList = ({ buttonStyles, buttons, handleButtons }) => {

//props got from parent component

const ButtonList = (props) => {
  return (
    <div className={props.buttonStyles.buttonList}>
      {props.buttons.map((element) => {
        return (
          <input
            type="button"
            className="btn btn-light"
            key={element}
            value={element}
            onClick={props.handleButtons}
          />
        );
      })}
    </div>
  );
};

export default ButtonList;
