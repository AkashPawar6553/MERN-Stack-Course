import React from 'react'

const Cookies = () => {
    let expiretime = new Date (2025-4-3);
    const fun1 = () => {
        document.cookie=('username=Akash Pawar;expires='+expiretime.toUTCString())
    }
    const fun2 = () =>{
        console.log(document.cookie);
    }
  return (
    <div>
        <h1>Cookies</h1>
        <button onClick={fun1}>Save Cookies</button>
        <button onClick={fun2}>Print Cookies</button>
    </div>
  )
}

export default Cookies