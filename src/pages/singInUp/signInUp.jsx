import React from "react";
import "./signInUp.scss";
import SignIn from "../../components/sign-in/signIn";
import SignUp from "../../components/sign-up/sign-up";

const SignInUP = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp/>
    </div>
  );
};

export default SignInUP;
