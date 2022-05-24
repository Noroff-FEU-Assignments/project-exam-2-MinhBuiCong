import { useState } from "react";
import Select from "react-select";

function Search(props) {
  const { onSearch, data } = props;
  const [options, setOptions] = useState(() => data);

  const hotelOptions = options.map((hotel) => {
    return { label: hotel.attributes.name, value: hotel.id };
  });

  const onChange = (e) => {
    console.log(e);
    const hotel = options.find((h) => h.id === e.value);
    console.log(hotel);
    onSearch(hotel ? [hotel] : data);
  };

  return (
    <main>
      <Select
        className="search-container"
        options={hotelOptions}
        onChange={onChange}
      />
    </main>
  );
}

export default Search;
