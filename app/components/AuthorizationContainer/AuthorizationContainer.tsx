"use client";

import React from "react";
import AuthorizationLeftPanel from "./AuthorizationLeftPanel";
import AuthorizationRightPanel from "./AuthorizationRightPanel";

const AuthorizationContainer = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="hidden md:block">
        <AuthorizationLeftPanel />
      </div>
      <div>
        <AuthorizationRightPanel />
      </div>
    </div>
  );
};

export default AuthorizationContainer;
