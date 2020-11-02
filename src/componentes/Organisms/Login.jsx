import React from 'react'
import {validarNumero} from '../../funciones/Funciones.js'

const validate = values => {

    const errors = {}
    if(!values.rut){
        errors.rut = 'Te falto llenar el campo Rut'
        }
    else if(values.rut.length < 9 || !validarNumero(values.rut)){
        errors.rut = ''
    }
    if(!values.pass){
        errors.pass = 'Te falto llenar el campo Contraseña'
    }
    else if(values.pass.length < 5){
        errors.pass = ''
    }
    return errors
    }
class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            errors: {},
            msgErrorRut:"",
            msgErrorPassword:"",
            rut:"",
            pass:"",
            desabilitarBtn: true,
            desabilitarBtne: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

handleChange = ({target, e}) => {    
    const {name, value} = target
    this.setState({ [name]: value
    })

    if(name === "rut"){
    if(target.value.length < 9 || !validarNumero(target.value) || target.value === "") {
        this.setState({
            msgErrorRut:"Recuerde introducir un número de teléfono valido, mínimo 9 digitos.",
            desabilitarBtn: true,
    })
    } 
    else {
        this.setState({
            msgErrorRut:"",
            desabilitarBtn: false,
        })
    }}

    if(name === "pass"){
    if(target.value === "" || target.value.length < 5 ) {
        this.setState({
            msgErrorPassword:"La contraseña tiene que ser mayor a 5 caracteres",
            desabilitarBtne: true,
    })
    }
    
    else { 
        this.setState({
            msgErrorPassword:"",
            desabilitarBtne: false,
        })
    }}
    }
    
handleSubmit = e => {
    e.preventDefault()
    const {errors, ...sinErrors} = this.state
    const result = validate(sinErrors)
    this.setState({errors: result})
    if (!Object.keys(result).length){
        console.log('gracias por llenar el formulario')
    }
}

render() {
    const {errors, msgErrorRut, msgErrorPassword} = this.state
    return (
        <form action="/hola" className="login" onSubmit={this.handleSubmit}>
            <div className="login-screen">
                <img className="imagen" src="./imagenes/foto.png" alt="Login" />
                <div className="app-title">
                    <h1>Inicio de sesión</h1>
                </div>

                <div className="login-form">
                    <div className="control-group">
                    <input type="text" name="rut" onChange={this.handleChange} className="login-field" placeholder="Rut" id="login-name" />
                    {errors.rut 
                    ?<span className="tamañoDeLetraSpan">{errors.rut}</span>
                    :<span className="tamañoDeLetraSpan">{msgErrorRut}</span> }
                    <label className="login-field-icon fui-user" for="login-name"></label>
                    </div>
    
                    <div className="control-group">
                    <input type="password" name="pass" onChange={this.handleChange} className="login-field" placeholder="Contraseña" id="login-pass" />
                    {errors.pass 
                    ?<span className="tamañoDeLetraSpan">{errors.pass}</span>
                    :<span className="tamañoDeLetraSpan">{msgErrorPassword}</span> }
                    <label className="login-field-icon fui-lock" for="login-pass"></label>
                    </div>
                    <input type="submit" value="Entrar" className="center btn" 
                    disabled={this.state.desabilitarBtn || this.state.desabilitarBtne} />   
                    <a className="login-link" href="#">¿Olvido su contraseña?</a>
                </div>
            </div>
        </form>
    )
}
}

export default Login

