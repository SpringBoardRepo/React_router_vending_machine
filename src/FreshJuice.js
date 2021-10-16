import { Link } from "react-router-dom";

function FreshJuice() {

    const gif = "https://media4.giphy.com/media/61ZaJbRdLFvnpq3dR2/200w.webp?cid=ecf05e47nw3wgmm4g6rhzz6fnrqfsd9mugpu33rh3dmk9d4p&rid=200w.webp&ct=g"
    return (
        <div style={{ backgroundSize: 'cover' }}>
            <img src={gif} type="video" />
            <Link to="/">Go back!</Link>
        </div>

    )

}


export default FreshJuice;