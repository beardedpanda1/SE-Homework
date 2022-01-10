

function Receipts(props){
    return(
        <div className = "Rec">
            <h1>Person: {props.receipt.person}</h1>
            <p>Main: {props.receipt.order.main}</p>
            <p>Protein: {props.receipt.order.protein}</p>
            <p>Rice: {props.receipt.order.rice}</p>
            <p>Sauce: {props.receipt.order.sauce}</p>
            <p>Toppings: {props.receipt.order.toppings[0]}, {props.receipt.order.toppings[1]}, {props.receipt.order.toppings[2]}</p>
            <p>Drink: {props.receipt.order.drink}</p>
            <p>Cost: {props.receipt.order.cost}</p>
        </div>


    )
}

export default Receipts;