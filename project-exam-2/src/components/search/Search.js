import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function Search() {
  return (
    <>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </>
  );
}

export default Search;
// import React from "react";
// import useAutocomplete from "@material-ui/lab/useAutocomplete";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const ListBox = styled.div`
//   .listBox {
//     max-height: 200px;
//   }
//   .listBox li[data-focus="true"] {
//     background-color: #4a8df6;
//     color: white;
//     cursor: pointer;
//   }
//   .listBox li:active {
//     background-color: #2977f5;
//     color: white;
//   }
// `;

// export default function UseAutocomplete({ accommodations }) {
//   const history = useNavigate();
//   const {
//     getRootProps,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//     value, // Selected item
//   } = useAutocomplete({
//     id: "use-autocomplete-demo",
//     options: accommodations,
//     getOptionLabel: (option) => option.name,
//   });

//   return (
//     <div>
//       <form onSubmit={() => history.push(`/hotels/${value ? value.id : ""}`)}>
//         <div {...getRootProps()}>
//           <input placeholder="Search for Hotels" {...getInputProps()} />
//           <span>
//             <button>
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//               </svg>
//             </button>
//           </span>
//         </div>
//       </form>
//       {groupedOptions.length > 0 ? (
//         <ListBox>
//           <ul {...getListboxProps()}>
//             {groupedOptions.map((option, index) => (
//               <li {...getOptionProps({ option, index })}>{option.name}</li>
//             ))}
//           </ul>
//         </ListBox>
//       ) : null}
//     </div>
//   );
// }
