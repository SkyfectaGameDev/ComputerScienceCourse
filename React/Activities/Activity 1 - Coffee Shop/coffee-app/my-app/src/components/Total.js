const Total = (props) => {
    const prices = [2.2, 2.7, 3.4];
    const total = props.total.reduce((sum, value, index) => sum + value * prices[index], 0);
    return (
        <span id="total">Total: £{total.toFixed(2)}</span>
    )
}

export default Total;
