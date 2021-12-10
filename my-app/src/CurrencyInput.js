import PropTypes, { func } from 'prop-types'
import './currencyinput.css';
function CurrrencyInput(props){
    return (
        <div className="group">
            <input type="text" value={props.amount} onChange={e => props.onAmountChange(e.target.value)}/>
            <select value ={props.currency} onChange={e => props.onCurrencyChange(e.target.value)}>
                {props.currencies.map(currency =>
                     (<option key={currency} value = {currency}>{currency}</option>)
                     )}
            </select>
        </div>
    );
}

CurrrencyInput.propTypes = {
    amount : PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: func,
    onCurrencyChange: func

}

export default CurrrencyInput;

