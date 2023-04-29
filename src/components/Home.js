import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="nav">
      <Link to="/" className="site-title">
        STAR WARS
      </Link>
      <ul>
        <Link to="/people">People</Link>
        <Link to="/planets">Planets</Link>
        <Link to="/starships">Starships</Link>
      </ul>
    </div>
  );
}
