import React from 'react'

const validate = values => {
    const errors = {}
    if(!values.rut){
        errors.rut = 'Te falto rellenar un campo'
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

    }

 handleSubmit(event) {
    event.preventDefault()
    const {errors, ...sinErrors} = this.state
    const result = validate(sinErrors)
    this.setState({errors: result})
    if (!Object.keys(result).length){
        console.log('gracias')

    }
 }


    //  validar() {
    // let elemento = document.getElementById("login-name").value
    // if (elemento == ""){
    //   alert("Debes llenar el campo")
    //   return false
    // }else {
    //   alert("Gracias por llenar esto ")
    //   return false
    //      this.setState({
    //          nombre: e.target.value
    //  })}}

    // cambiarCorreo(e) {
    //     this.setState({
    //         correo: e.target.value
    // })}

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
                    <input type="text" name="rut" className="login-field" placeholder="rut" id="login-name" />
                    {errors.rut && <p> {alert(errors.rut)} </p>}
                    <label className="login-field-icon fui-user" for="login-name"></label>
                    </div>
    
                    <div className="control-group">
                    <input type="password" className="login-field" placeholder="password" id="login-pass" />
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



