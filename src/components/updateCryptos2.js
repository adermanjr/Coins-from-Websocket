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
                    {Object.entries(updateCryptos.coins).map(([key, value]) => (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{key}</h5>
                                <h6 className="card-subtitle mb-2 text-muted"><span style={{color: colors.value}}>{value}</span></h6>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default UpdateCryptos;