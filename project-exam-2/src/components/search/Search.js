import { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

function Search(props) {
  console.log(props);
  const { onSearch, data } = props;
  const [options, setOptions] = useState(() => data);

  const hotelOptions = options.map((hotel) => {
    return { label: hotel.attributes.name, value: hotel.id };
  });

  console.log("data", data);
  console.log("options", options);

  const onChange = (e) => {
    console.log(e);
    const hotel = options.find((h) => h.id === e.value);
    console.log(hotel);
    onSearch(hotel ? [hotel] : data);
  };

  return (
    <main>
      {/* <Form className="search-container">
        <FormControl
          type="search"
          placeholder="e.g white hotel ..."
          aria-label="Search"
          className="input"
        />
        <Button className="button">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form> */}
      <Select
        className="search-container"
        options={hotelOptions}
        onChange={onChange}
      />
    </main>
  );
}

export default Search;
