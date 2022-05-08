function FilterMovie(props) {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <>
      <label htmlFor="" className="titleform">
        Movie
      </label>
      <input
        className="rectangleInput"
        type="text"
        onChange={handleInput}
        value={props.inputMovie}
      />
    </>
  );
}
export default FilterMovie;
