import React from 'react'

class InputText extends React.Component {
    render (){
    const {handleChange} = this.props
        return (
<input type="text" name="rut" onChange={handleChange} className="login-field" placeholder="Rut" id="login-name" />
)
}}
export default InputText

{/* <a className="btn btn-primary btn-large btn-block" href="ed.team">entrar</a> */}
{/* <input type="text" name="rut" onChange={this.handleChange} className="login-field" placeholder="Rut" id="login-name" /> */}