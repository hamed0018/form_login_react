import { Link } from 'react-router-dom';
import img from './assist/icons8-user-avatar.gif'

function Frm() {
    return ( <>
        <div className="form">
        <h1 className="title">welcome</h1>
        <div className="profile">
            <img src={img} alt="avatar" id="prf"/>
        </div>
        <div className="inputs">
            <input type="text" placeholder="user name" id="username"/>
            <input type="password" placeholder="password" id="password"/>
            <input type="password" placeholder="repaid password" id="repaidpassword"/>
            <div class="btn">
               
                <button id="btn"><Link to="/">sign in</Link></button>
                <button id="btn"><Link to="login">login</Link></button>
            </div>
        </div>
    </div>
    </> );
}

export default Frm;
 