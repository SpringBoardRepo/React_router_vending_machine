import { Link } from "react-router-dom";

function Soda() {
    const gif = "https://media1.giphy.com/media/XgAg4QQfvJXnZ7AhDl/giphy.gif?cid=ecf05e47cavs1y1a1uzccqeabn6nyxmzzujx60d0jxv23i2z&rid=giphy.gif&ct=g"
    return (
        <div style={{ backgroundSize: 'cover' }}>
            <img src={gif} type="video" />
            <Link to="/">Go back!</Link>
        </div>
    )
}


export default Soda;