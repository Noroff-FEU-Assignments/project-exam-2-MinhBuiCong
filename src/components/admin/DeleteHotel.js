import React from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, headers, DELETE } from "../../constants/api";

import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteHotel(props) {
  const history = useNavigate();

  function checkDelete() {
    confirmAlert({
      title: "Confirm deletion",
      buttons: [
        {
          label: "yes",
          onClick: () => deleteHotel(),
        },
        {
          label: "no",
        },
      ],
    });
  }

  async function deleteHotel() {
    const url = BASE_URL + "establishments/" + props.id;
    const options = { headers, method: DELETE };
    await fetch(url, options);
    history.push("/admin/hotels");
  }

  return (
    <button onClick={checkDelete} type="button">
      <i className="fa fa-trash"></i> Delete
    </button>
  );
}

export default DeleteHotel;
