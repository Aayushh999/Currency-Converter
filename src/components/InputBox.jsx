import React, {useId} from "react"


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} 
                    className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value = {amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}   
                    // we r checkng that if the function is available(may or may not be empty fn) then get its value and we r wrapping it in 
                    // number so if it is in string by chance due to js syntax or in any other data type so we can convert it into Number
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => typeof onCurrencyChange === 'function' && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;