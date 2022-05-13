import { useLocation } from "react-router-dom";

function DrinkDetail() {
  const location = useLocation();
  const { drink } = location.state;

  return (
    <main className="detail">
      <h1>{drink.strDrink}</h1>
      <p>Category: {drink.strCategory}</p>
      <img height={200} width={200} src={drink.strDrinkThumb} alt="yo" />
    </main>
  );
}

export default DrinkDetail;
