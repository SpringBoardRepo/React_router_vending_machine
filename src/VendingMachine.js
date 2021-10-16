import { Link } from "react-router-dom";
import "./VendingMachine.css"
function Vendingmachine() {
    const VendingmachineImage = "https://images.unsplash.com/photo-1529664876179-6d4aa5a02ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    return (

        <div className="VendingMachine"
            style={{
                backgroundImage: `url(${VendingmachineImage})`
            }}>
            <h1>Want Something?</h1>
            <div className="row">
                <p className="msg coloum">Hi I am Vending Machine. What would you like to Eat/Drink ?</p>
                <div className="Links coloum">
                    <h2><Link to="/Soda">Soda</Link></h2>
                    <h2><Link to="/Chips">Chips</Link></h2>
                    <h2><Link to="/FreshJuice">Fresh Juice</Link></h2>
                </div>
            </div>
        </div >
    )
}


export default Vendingmachine