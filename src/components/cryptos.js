import React from 'react'

const Cryptos = ({ cryptos }) => {
    return (
    <div>
        <center><h1>Cryptos List</h1></center>
        {cryptos.map((crypto) => (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{crypto.moeda}</h5>
                <p class="card-text">{crypto.dados.last}</p>
            </div>
        </div>
        ))}
    </div>
    )
};

export default Cryptos;