const DisplayOutput = ({ styles, displayVal }) => {
  return (
    <div className={styles.display}>
      <input type="text" className="form-control" value={displayVal} readOnly />
    </div>
  );
};

export default DisplayOutput;
