import FilterYear from "./FilterYear";
import FilterMovie from "./FilterMovie";

function Filters(props) {
  return (
    <form action="" className="form">
      <FilterMovie
        handleFilterMovie={props.handleFilterMovie}
        inputMovie={props.inputMovie}
      />
      <FilterYear
        handleFilterYear={props.handleFilterYear}
        year={props.year}
        filterYear={props.filterYear}
      />
    </form>
  );
}

export default Filters;
