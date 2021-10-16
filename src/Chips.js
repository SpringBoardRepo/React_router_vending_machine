import { Link } from "react-router-dom";

function Chpis() {
    const gif = "https://media4.giphy.com/media/xUOxfaABfkwPSJ5M6A/200w.webp?cid=ecf05e47sfporf6698svgl2fmd16nzmszv2at2jwzdpyg9vf&rid=200w.webp&ct=g"
    return (
        <div style={{ backgroundSize: 'cover' }}>
            <img src={gif} type="video" />
            <Link to="/">Go back!</Link>
        </div>

    )
}

export default Chpis;