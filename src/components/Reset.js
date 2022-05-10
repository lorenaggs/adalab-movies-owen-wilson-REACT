function reset(props) {
  const handleReset = (ev) => {
    props.handleFilterMovie("");
    props.handleFilterYear("");
    props.handleFilterLong("");
    props.handleFilterWow("");
    props.handleFilterFullName("");
    localStorage.removeItem("MovieSceneItem");
  };

  return (
    <button value={props.filterLong} className="btnReset" onClick={handleReset}>
      BORRAR
    </button>
  );
}

export default reset;
