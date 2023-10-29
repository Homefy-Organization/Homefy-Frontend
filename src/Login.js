import { Component } from "react";
import user from "./Data/userClass";
import UsersArray from './Data/usersArray';
import { Link } from "react-router-dom";

class Login extends Component {

    state = {
        _name: '',
        _pass: '',
        UsersArray: UsersArray,
        errors:{}

    }
    validateForm = ()=> {
        const errors = {};

        if (this.state._name === '') {
            errors._name = 'Username is required';
        }else if (this.state._name.length<3) {
            errors._name = 'Username must contain 4 or more char';
        }


        if (this.state._pass.trim() === '') {
            errors._pass = 'Password is required';
        }

        if (this.state._pass.length<3) {
            errors._pass = 'Please enter the password correctly';
        }

        return errors;
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            errors: this.validateForm()
        });
    };


    render() {
        return (
            <div class="cont">
            <div class="logform">
                <div class="tit">
                    <h3 class="head3">Log in</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="35" viewBox="0 0 184 35" fill="none">
                    <path d="M184 30.578C184 47.4658 143.849 10.539 94.3193 10.539C44.7901 10.539 0 47.4658 0 30.578C0 13.6902 44.7901 6.95388e-07 94.3193 6.95388e-07C143.849 6.95388e-07 184 13.6902 184 30.578Z" fill="#30994E"/>
                    </svg>
                </div>
                <div class='formconts'>
                        <input type="text" class="form-control" placeholder="name" id="txtName"
                            value={this.state._name}
                            onChange={this.handleChange}
                            
                            name="_name"
                        />
                        <b class="err" style={{color:'red'}}>
                            {this.state.errors._name && <span>{this.state.errors._name}</span>}
                        </b>

                        <input type="password" class="form-control" placeholder="password" id="pass" value={this.state._pass}
                            onChange={this.handleChange}
                            name="_pass"
                        />
                        <b class="err" style={{color:'red'}}>
                            {this.state.errors._pass && <span>{this.state.errors._pass}</span>}
                        </b>

                        <p class="forgot">Forgot password?</p>

                        <div class="or">
                                <p>OR Log in With </p>
                            <div class="ico">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <g clip-path="url(#clip0_6_81)">
                            <path d="M18 31.5C25.4558 31.5 31.5 25.4558 31.5 18C31.5 10.5442 25.4558 4.5 18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4558 10.5442 31.5 18 31.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.625 12.375H21.375C20.4799 12.375 19.6214 12.7306 18.9885 13.3635C18.3556 13.9964 18 14.8549 18 15.75V31.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.5 20.25H22.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_6_81">
                            <rect width="36" height="36" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <g clip-path="url(#clip0_6_77)">
                            <path d="M30.375 10.3388C28.762 8.81157 26.0156 7.875 23.625 7.875C21.5803 7.87025 19.5954 8.56495 18 9.84375C16.4377 8.59119 14.5009 7.89806 12.4987 7.875C7.31246 7.80469 3.24277 12.1359 3.37496 17.3236C3.43142 19.5475 3.92844 21.7381 4.83725 23.7686C5.74606 25.7992 7.04861 27.6293 8.66949 29.153C9.50442 29.9398 10.6089 30.3771 11.7562 30.375H24.089C24.7015 30.3775 25.308 30.254 25.8707 30.012C26.4334 29.7701 26.9404 29.415 27.36 28.9688C29.5889 26.5781 30.375 24.3 30.375 24.3C28.0139 22.6786 27 19.9589 27 16.8778C27 14.3044 28.6425 11.9827 30.375 10.3416V10.3388Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.625 1.125H23.4844C22.4864 1.1245 21.5165 1.45578 20.7273 2.06674C19.9382 2.6777 19.3745 3.53367 19.125 4.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_6_77">
                            <rect width="36" height="36" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <g clip-path="url(#clip0_6_71)">
                            <path d="M31.5 7.875L18 20.25L4.5 7.875" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.5 7.875H31.5V27C31.5 27.2984 31.3815 27.5845 31.1705 27.7955C30.9595 28.0065 30.6734 28.125 30.375 28.125H5.625C5.32663 28.125 5.04048 28.0065 4.82951 27.7955C4.61853 27.5845 4.5 27.2984 4.5 27V7.875Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.5462 18L4.84741 27.8072" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M31.1526 27.8072L20.4539 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_6_71">
                            <rect width="36" height="36" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </div>
                        </div>


                      <Link to="/"> <button  type="submit" class="but">Log in</button></Link> 
                      <p>Don't have an account?
                        <a href="/sign">Sign up</a>
                        </p>

                </div>
            </div>
            </div>
        )
    }
}

export default Login;