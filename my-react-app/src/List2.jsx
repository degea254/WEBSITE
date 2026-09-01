import propTypes from "prop-types";

function List2(props) {
  // fruits.sort((a, b) => a.calories - b.calories);

  //decending sort
  // fruits.sort((a, b) => b.calories - a.calories);

  //alphabetical sort
  // fruits.sort((a, b) => a.name.localeCompare(b.name));
  const category = props.category;
  const itemList = props.items;

  const lowCalFruit = itemList.filter((item) => item.calories < 80);

  const HighCalFruit = itemList.filter((item) => item.calories > 80);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} :&nbsp;{item.calories}{" "}
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}

List2.propTypes = {
  category: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      calories: propTypes.number.isRequired,
    }),
  ),
};
List2.defaultProps = {
  items: [],
  category: "Items",
};

export default List2;
