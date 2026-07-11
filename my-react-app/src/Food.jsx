function Food() {
  const food1 = "Noodles";
  const food2 = "Burger";

  return (
    <ul>
      <li>Biryani</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
