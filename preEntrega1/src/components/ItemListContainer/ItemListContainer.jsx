import './itemlistcontainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="item-list container">
            <p className="item-text">{greeting}</p>
        </div>
    )
}

export default ItemListContainer