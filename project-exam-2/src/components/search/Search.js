import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Search() {
  return (
    <main>
      <Form className="search-container">
        <FormControl
          type="search"
          placeholder="e.g white hotel ..."
          aria-label="Search"
          className="input"
        />
        <Button className="button">search</Button>
      </Form>
    </main>
  );
}

export default Search;
