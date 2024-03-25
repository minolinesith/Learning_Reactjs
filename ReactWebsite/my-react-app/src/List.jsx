import PropTypes from 'prop-types';

function List(props) {

    const category = props.category;

    const itemList = props.items;


    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b></li>);

    return (
        <>
            <h3 className="list-category">{category}</h3><ol className="list-items">{listItems}</ol>
        </>

    );

}

List.propTypes = {
    items: PropTypes.listItems,
    category: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string, calories: PropTypes.number
    }))
};

export default List