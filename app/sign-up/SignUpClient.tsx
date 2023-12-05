import React from "react";
import AuthorizationContainer from "../components/AuthorizationContainer/AuthorizationContainer";

enum STEPS {
  DETAILS = 0,
  CHOOSE_METHOD = 1,
  OFFER_SUBSCRIPTION = 2,
}

const SignUpClient = () => {
  return (
    <div className="min-h-screen w-full ">
      <AuthorizationContainer />
    </div>
  );
};

export default SignUpClient;
