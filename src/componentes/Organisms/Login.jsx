import React from 'react'
import {validarNumero} from '../../funciones/Funciones.js'

const validate = values => {
    const errors = {}
    if(!values.rut){
        errors.rut = alert('Te falto rellenar este campo')
    }
    else if(values.rut.length < 9){
        errors.rut = alert('Recuerde introducir un número de rut valido, mínimo 9 digitos.')
    }
    else if(!validarNumero(values.rut)){
        errors.rut = alert('recuerde que solo puede ingresar valores numericos.')
    }

    if(!values.password){
        errors.password = alert('Te falto rellenar este campo')
    }
    
    return errors
}

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            errors: {}   
        }

         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);
    }

handleChange = ({ target}) => {
    const {name, value} = target
    this.setState({ [name]: value })
    }


handleSubmit(event) {
    event.preventDefault()
    const {errors, ...sinErrors} = this.state
    const result = validate(sinErrors)

    this.setState({errors: result})
    if (!Object.keys(result).length){
        console.log('gracias por llenar el formulario')

    }
}

render() {
    const {errors} = this.state
    return (
        <form action="/hola" className="login" onSubmit={this.handleSubmit}>
            <div className="login-screen">
                <img className="imagen" src="./imagen/foto.png" alt="Login" />
                <div className="app-title">
                    <h1>Login</h1>
                </div>

                <div className="login-form">
                    <div className="control-group">
                    <input type="text" name="rut" onChange={this.handleChange} className="login-field" placeholder="rut" id="login-name" />
                    {errors.rut && <span>{errors.rut}</span>}
                    <label className="login-field-icon fui-user" for="login-name"></label>
                    </div>
    
                    <div className="control-group">
                    <input type="password" name="password" onChange={this.handleChange} className="login-field" placeholder="password" id="login-pass" />
                    {errors.password && <span>{errors.password}</span>}
                    <label className="login-field-icon fui-lock" for="login-pass"></label>
                    </div>
                    <input type="submit" value="entrar" className="center btn" /> 
                    <a className="login-link" href="#">Lost your password?</a>
                </div>
            </div>
        </form>
    )
}
}

export default Login
// function validar() {
//     var elemento = document.getElementById("login-name").value
//   if (elemento == ""){
//     alert("Debes llenar el campo")
//     return false
//   }else {
//     alert("Gracias por llenar esto ")
//     return false
//   }
// }



