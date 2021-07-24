import React from 'react';
import './../../auth/css/login.css'

const Login = () => {

    return (
        <>
        <main className="login">
        <div className="login__form">
            <h1 >INICIO DE SESIÓN</h1>
            <form className="formulario" >
            <label htmlFor="">Email:</label>
            <input 
                type="text" 
                className="formulario__input" 
                placeholder="Email"
                name="correo"

            />
            <label htmlFor="">Password:</label>
            <input
                type="password"
                className="formulario__input"
                placeholder="Password"
                name="password"

            />
            <a className="formulario__submit " type="submit"
                style={{textAlign:'center'}}
                href= '/cuenta/mi_cuenta'
                >
                Iniciar Sesión
            </a>
            </form>
        </div>
        </main>
    </>
    )
}

export default Login
