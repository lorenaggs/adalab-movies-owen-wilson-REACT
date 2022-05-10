function filterWow(props) {
  const handleSelectCant = (ev) => {
    props.handleFilterWow(ev.target.value);
  };

  const selectOptionNumbers = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return numbers.map((number) => (
      <option value={number}>
        {number}
      </option>
    ));
  };

  return (
    <>
      <label className="titleform" htmlFor="">
        Cantidad de escenas
      </label>
      <select
        name=""
        id=""
        className="rectangleInput"
        value={props.filterWow}
        onChange={handleSelectCant}
      >
        <option value="">All</option>
        {selectOptionNumbers()}
      </select>
    </>
  );
}
export default filterWow;
