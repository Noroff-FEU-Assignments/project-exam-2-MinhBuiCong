import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";

// const HotelCard = ({ name, image, description, rating, link }) => {
//   return (
//     <Link to={link}>
//       <div>
//         <img src={image} alt={name} />
//         <div>
//           <h4>
//             {name}
//             <span>
//               {rating || 4} <i className="fa fa-star"></i>
//             </span>
//           </h4>
//           <p>{description}</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default HotelCard;

function HotelCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default HotelCard;
