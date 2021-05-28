import React, { Fragment, useState } from "react";
import SignupScreen from "../src/screens/SignupScreen";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <Fragment>
            <h1>Sign UP! ...still no naughty stuff!</h1>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            {/* <h3>You won't... You're going to spend far too much time here!</h3> */}
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className=" loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
