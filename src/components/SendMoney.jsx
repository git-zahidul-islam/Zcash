import { useState } from "react";
 

const SendMoney = () => {
    const [amount, setAmount] = useState('');
    const [number, setNumber] = useState('');
    const [pin, setPin] = useState('');
    const [error,setError] = useState('')

    const handleSendMoney = () => {
        
       
        if(parseInt(amount) < 50 || amount.length == 0){
            setError('minimum 50 tka')
            return
        }
        setError('')
        if(pin.length < 5){
            setError('pin only 5 digit')
            return
        }
        console.log(amount,number,pin);

        
        // if (amount < 50) {
        //     alert('Transaction amount must be at least 50 Taka.');
        //     return;
        // }

        // if (amount > 100) {
        //     alert("A fee of 5 Taka will be charged for transactions over 100 Taka");
        // }

        // Add JWT verification and pin check here

        // Proceed with transaction logic here
    };

    return (
        <div className="max-w-md min-h-screen mx-auto px-6 bg-white shadow-lg rounded-lg pt-10">
            <h1 className="text-2xl font-bold text-center mb-6 text-pink-500">Send Money</h1>
            <div className="mb-4">
                <label htmlFor="err">{error}</label>
                <label htmlFor="number" className="block text-gray-700">To</label>
                <input
                    type="text"
                    id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter name or number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700">Amount</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount in Taka"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="pin" className="block text-gray-700">Pin</label>
                <input
                    type="password"
                    id="pin"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter your PIN"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <button 
                onClick={handleSendMoney} 
                className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
                Send Money
            </button>
        </div>
    );
};

export default SendMoney;