import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
  return (
    <main>
      <Form className="search-container">
        <FormControl
          type="search"
          placeholder="e.g white hotel ..."
          aria-label="Search"
          className="input"
        />
        <Button className="button">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
    </main>
  );
}

export default Search;
