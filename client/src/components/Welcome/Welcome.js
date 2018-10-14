import React, { Component } from 'react';
import SignIn from '../Auth/SignIn';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "../Auth/Register";
import "../Welcome/Welcome.css";
import anime from 'animejs';
import axios from "axios";

// const restart = document.querySelector(".button-restart");
const logoAnimation = anime.timeline({ 
  autoplay: true,
  delay: 200
});

logoAnimation.add({
  targets: '#logo',
  translateY: [-100, 0],
  opacity: [0, 1],
  elasticity: 600,
  duration: 1600
}).add({
  targets: '#logo-hexagon',
  rotate: [-90, 0],
  duration: 1200,
  elasticity: 600,
  offset: 100
}).add({
  targets: '#logo-circle',
  scale: [0, 1],
  duration: 1200,
  elasticity: 600,
  offset: 500
}).add({
  targets: '#logo-mask',
  scale: [0, 1],
  duration: 1000,
  elasticity: 600,
  offset: 550
}).add({
  targets: '#logo-text',
  translateX: ['-100%', 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutExpo',
  offset: 1000
})

// restart.addEventListener("click", () => logoAnimation.restart());
class Welcome extends Component {
//   state = {
//         userID: "",
//         authenticated: false
//       }

//       componentWillMount() {
//         axios.get("/auth/login").then(res => {
//           let user = res.data.user;
//           if(res.status === 200 && user){
//             this.setState({userID: res.data.user._id, authenticated: true})
//           }
//         });
//       }

//       handleLogin = id => {
//           this.setState({ userID: id, authenticated: true });
//         };

//         handleLogout = () => {
//             axios.get("auth/logout").then(res => {
//               if(res.status === 200){
//                 this.setState({ userID: "", authenticated: false });
//               }
//             });
//           };

    render() {
        // const MyRegister = (props) => {
        //     return (
        //       <Register login={this.handleLogin} {...props} />
        //     )
        //   }
  
        //   const MySignIn = (props) => {
        //     return (
        //       <SignIn login={this.handleLogin} authenticated={this.state.authenticated} {...props} />
        //     )
        //   }
        return(
            <div class="welcome-background">
                <div>
               <div class="site-logo">
                <figure id="logo">
                <svg width="100%" height="100%" viewBox="0 0 148 128">
                    <defs>
                    <mask id="circle-mask">
                        <rect fill="white" width="100%" height="100%"></rect>
                        <circle id="logo-mask" fill="black" cx="120" cy="96" r="28"></circle>
                    </mask>
                    </defs>
                    <polygon id="logo-hexagon" fill="#216c83" points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96" mask="url(#circle-mask)"></polygon>
                    <circle id="logo-circle" fill="#3F3C3C" cx="120" cy="96" r="20"></circle>
                </svg> 
                </figure>
                <div class="site-title">
                <div id="logo-text" class="site-title-text">
                    Dash<span>Board</span>
                </div>
                </div>
                </div> 
               

                <div>
                      {/* <button class="button-signup"><Link to="/">Home</Link></button> */}
                      {/* <Link to="/signin" exact component={MySignIn}><button class="button-restart">Login</button></Link>  
                      <Link to="/register" exact component={MyRegister}><button class="button-restart">Register</button></Link>            */}
                 {/* <MenuAppBar authenticated={this.state.authenticated} handleLogout={this.handleLogout}> */}
                   
                   <Link to="/signin"><button class="button-restart">Login</button></Link>  
                   <Link to="/register"><button class="button-restart">Register</button></Link>  
                 {/* </MenuAppBar> */}
                </div>
                </div>
            </div>
            
        )
    }
}

export default Welcome;