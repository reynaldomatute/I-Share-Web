import logo from '../assets/logo.svg';
import '../styles/App.css';
import '../styles/sidebar.css'
import {Link, Form, Outlet} from 'react-router-dom'

function Root() {
  return (
    <>
    <div id="sidebar" className="sidebar">
      <nav>
          <ul>
              <li key={1}>
                <Link to={`about`}>About</Link>
              </li>
              <li key={2}>
                <Link to={`home`}>Home</Link>
              </li>
          </ul>
      </nav>
    </div>
    <div id="detail" className="content"
    
    // className={
    //   navigation.state === "loading" ? "loading" : ""
    // }
    >
      <Outlet />
    </div>
  </>
  );
}

export default Root;
