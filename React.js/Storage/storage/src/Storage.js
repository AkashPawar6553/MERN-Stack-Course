import React from 'react'

const Storage = () => {
    let expiretime = new Date (2025-4-3);
    const fun1 = () =>{
        localStorage.setItem("username","akashpawar")
        localStorage.setItem("Password","123456789")
        sessionStorage.setItem("City","Karad")
    }
    const fun2 = () => {
        console.log(localStorage.getItem('username'))
        console.log(localStorage.getItem('Password'))
        console.log(sessionStorage.getItem('City'))
        console.log(document.cookie)
    }
    const fun3 = () => {
        localStorage.clear()
        sessionStorage.clear()
    } 
    const fun4 = () =>{ 
        document.cookie=('username=akashpawar;expire='+expiretime.toUTCString())
    }

  return (
    <div>
        
        <h1>Javascript Storage</h1>
        <button onClick={fun1}>Put Item</button>
        <button onClick={fun2}>Get Item</button>
        <button onClick={fun3}>Delete Data</button>
        <button onClick={fun4}>Cookies</button>

    </div>
  )
}

export default Storage