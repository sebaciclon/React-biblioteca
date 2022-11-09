import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="create">Create</Link>
        </div>
    );
}