function FilterYear(props) {
  const handleSelectYear = (ev) => {
    ev.preventDefault();
    props.handleFilterYear(ev.target.value);
  };
  const renderYear = () => {
    const yearOrder = props.year.sort();
    return yearOrder.map((year, index) => {
      return (
        <option className="listYear" value={year} key={index}>
          {year}
        </option>
      );
    });
  };

  return (
    <>
      <label htmlFor="" className="titleform">
        Year
      </label>
      <select
        name=""
        id=""
        className="rectangleInput"
        onChange={handleSelectYear}
        value={props.filterYear}
      >
        <option value="">All</option>
        {renderYear()}
      </select>
    </>
  );
}
export default FilterYear;
