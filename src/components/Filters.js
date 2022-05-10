import FilterYear from "./FilterYear";
import FilterMovie from "./FilterMovie";
import FilterFullName from './FilterFullName'
import FilterWow from './FilterWow'
import FilterLong from './FilterLong'
import Reset from "./Reset";

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
      <FilterFullName
        handleFilterFullName={props.handleFilterFullName}
        filterFullName={props.filterFullName}
      />
      <FilterWow
        handleFilterWow={props.handleFilterWow}
        filterWow={props.filterWow}
      />
      <FilterLong
        handleFilterLong={props.handleFilterLong}
        filterLong={props.filterLong}
      />
      <Reset
        handleFilterMovie={props.handleFilterMovie}
        handleFilterYear={props.handleFilterYear}
        handleFilterWow={props.handleFilterWow}
        handleFilterLong={props.handleFilterLong}
        handleFilterFullName={props.handleFilterFullName}
      />
    </form>
  );
}

export default Filters;
