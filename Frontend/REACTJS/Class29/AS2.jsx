export default function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked ? '\u2714' : '\u274c'}
      </li>
    );
}