import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const Login = ({ currentUser, setCurrentUser }) => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [password2, setPassword2] = useState("");
  let [message, setMessage] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };
  const handleLogin = () => {
    AuthService.login(email, password, password2)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setCurrentUser(AuthService.getCurrentUser());
        window.alert("登入成功，現在幫你轉到個人頁面");
        navigate("/profile");
      })
      .catch((err) => {
        setMessage(err.response.data);
      });
  };
  return (
    <div className="login">
      <div className="leftsection">
        <div className="picture"></div>
        <div className="filter"></div>
      </div>
      <div className="rightsection">
        <div className="title">
          <div className="left">
            <h1>你的登入，是人類的一大步</h1>
          </div>
          <div className="right">
            <h3>
              若無註冊，<a href="/register">請先註冊</a>
            </h3>
          </div>
          <hr />
        </div>
        <div className="keyin">
          <div className="word">
            <p>或使用MC帳號登入</p>
          </div>
          {message && (
            <div className="alert">
              <p>{message}</p>
            </div>
          )}
          <div className="email">
            <input
              type="email"
              placeholder="信箱"
              onChange={handleChangeEmail}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="密碼(請輸入至少八碼)"
              onChange={handleChangePassword}
            />
          </div>
          <div className="password2">
            <input
              type="password"
              placeholder="再次輸入密碼"
              onChange={handleChangePassword2}
            />
          </div>
        </div>
        <button onClick={handleLogin}>登入</button>
      </div>
    </div>
  );
};

export default Login;
