export default function ItemList({list}) {
    // Implement the ItemList component to render the list of stationary items here
    return (
        <ul>
            {list.map((item) => (
                <li >{item}</li>
            ))}
        </ul>
    );
}