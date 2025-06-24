import PropTypes from "prop-types"

const List = (props) => {
    const category = props.category   
    const listItems = props.items.map(item => 
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>{item.calories}</b>
        </li>
    )

    return (
        <>
            <h3>{category}</h3>
            <ol>{listItems}</ol>
        </>
    )
}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        }
    ))
}
List.defaultProps = {
    category: "Category",
    items: []
}
export default List