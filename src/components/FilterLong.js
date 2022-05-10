function filterLong(props) {
  const handleInput = (ev) => {
    props.handleFilterLong(ev.target.value);
  };
  return (
    <>
      <label htmlFor="" className="titleform">
        Longitud frase
      </label>
      <input
        className="rectangleInput"
        type="number"
        value={props.filterLong}
        onChange={handleInput}
      />
    </>
  );
}
export default filterLong;
