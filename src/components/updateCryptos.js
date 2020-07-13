import React from 'react'

const UpdateCryptos = ({ updateCryptos, colors}) => {
    console.log('ini', updateCryptos.length ===0, updateCryptos, colors)
    
    if (updateCryptos.length === 0) {
        return (<div><center><h1>Cryptos Update</h1></center><center><p>Loading...</p></center></div>)
    } else {
        return (
            <div>
                <center><h1>Cryptos Update</h1></center>
                <center><h4 style={{color: colors.date}}>{updateCryptos.canal} - {updateCryptos.data}</h4></center>
                <div className="container">
                    <div className="row py-4">
                        <marquee className="scroll-text" scrollamount="15">
                        <h4>
                            {Object.entries(updateCryptos.coins).map(([key, value]) => (
                                <>{key}: <span style={{color: colors.value}}>{value}</span> </>
                            ))}
                        </h4>
                        </marquee>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateCryptos;