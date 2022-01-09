import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">Word </Link>
      </h1>
      <div className="menu">
        <a href="#x" className="link">
          add Word
        </a>
        <a href="#x" className="link">
          add Day
        </a>
      </div>
    </div>
  );
}
