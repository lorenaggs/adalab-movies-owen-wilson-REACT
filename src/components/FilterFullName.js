function FilterFullName(props) {
    const handleInputFilterFullName = (ev) => {
        ev.preventDefault()
        props.handleFilterFullName(ev.target.value)
    } 
    return (
      <>
        <label htmlFor="" className="titleform">
          Full name
        </label>
        <input
          className="rectangleInput"
          type="text"
          onChange={handleInputFilterFullName}
          value={props.filterFullName}
        />
      </>
    );
}

export default FilterFullName;

