import react, { Component } from 'react';
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

class Auth extends Component {

state = {
    controls: {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'E-Mail address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6

            },
            valid: false,
            touched: false
        },
    }
}


    render() {
        return (
            <div>
                <form>

                </form>
            </div>
        )
    }

}

export default Auth