"use client";

import React, { useState } from "react";
import AuthorizationLeftPanel from "./AuthorizationLeftPanel";
import AuthorizationRightPanel from "./AuthorizationRightPanel";
import { useRouter, usePathname } from "next/navigation";
import LoginAccountForm from "./authComponents/LoginAccountForm";
import CreateAccountForm from "./authComponents/CreateAccountForm";
import ChooseMethodForm from "./authComponents/ChooseMethodForm";
import Subscription from "./authComponents/Subscription";
import { FormattedMessage, useIntl } from "react-intl";

enum STEPS {
  SIGN_UP = 0,
  CHOOSE_METHOD = 1,
  TRY_FOR_FREE = 2,
}

const AuthorizationContainer = () => {
  const intl = useIntl();

  const params = usePathname();
  const paramsWithoutSlash = params.substring(1);

  const [step, setStep] = useState(STEPS.SIGN_UP);

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };
  console.log(params);

  if (paramsWithoutSlash === "login") {
    return (
      <div className="grid md:grid-cols-2">
        <div className="hidden md:block">
          <AuthorizationLeftPanel
            headerText={intl.formatMessage({
              id: "authorization.login.header",
            })}
            paragraphText={intl.formatMessage({
              id: "authorization.login.paragraph",
            })}
          />
        </div>
        <div>
          <AuthorizationRightPanel bodyComponent={<LoginAccountForm />} />
        </div>
      </div>
    );
  }

  let bodyContent = (
    <div className="grid md:grid-cols-2">
      <div className="hidden md:block">
        <AuthorizationLeftPanel
          headerText={intl.formatMessage({ id: "authorization.signup.header" })}
          paragraphText={intl.formatMessage({
            id: "authorization.signup.paragraph",
          })}
        />
      </div>
      <div>
        <AuthorizationRightPanel
          bodyComponent={<CreateAccountForm onNext={() => onNext()} />}
        />
      </div>
    </div>
  );

  if (step === STEPS.CHOOSE_METHOD) {
    bodyContent = (
      <div className="grid md:grid-cols-2">
        <div className="hidden md:block">
          <AuthorizationLeftPanel
            headerText={intl.formatMessage({
              id: "authorization.chooseMethod.header",
            })}
            paragraphText={intl.formatMessage({
              id: "authorization.chooseMethod.paragraph",
            })}
          />
        </div>
        <div>
          <AuthorizationRightPanel
            bodyComponent={<ChooseMethodForm onNext={() => onNext()} />}
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.TRY_FOR_FREE) {
    bodyContent = (
      <div className="grid md:grid-cols-2">
        <div className="hidden md:block">
          <AuthorizationLeftPanel
            headerText={intl.formatMessage({
              id: "authorization.tryForFree.header",
            })}
            paragraphText={intl.formatMessage({
              id: "authorization.tryForFree.paragraph",
            })}
          />
        </div>
        <div>
          <AuthorizationRightPanel bodyComponent={<Subscription />} />
        </div>
      </div>
    );
  }

  return bodyContent;
};

export default AuthorizationContainer;
