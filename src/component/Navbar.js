import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to ="/"><h1>오늘의 메모</h1></Link>
            
        </nav>
    );
}
  
export default Navbar; 