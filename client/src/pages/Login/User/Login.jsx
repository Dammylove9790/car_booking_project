import React from "react";
import Loginuser from "../../../component/Loginuser/Loginuser";
import Background from "../../../component/Background/Background";
import Overlay from "../../../component/Overlay/Overlay";
import "./Login.scss";

function Login() {
  return (
    <div className="login__user">
      <Background />
      <Loginuser />
      {false && <Overlay />}
    </div>
  );
}

export default Login;
