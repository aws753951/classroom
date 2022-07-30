import React, { useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [password2, setPassword2] = useState("");
  let [role, setRole] = useState("");
  let [message, setMessage] = useState("");
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };
  const handleRegister = () => {
    AuthService.register(username, email, password, password2, role)
      .then(() => {
        window.alert("註冊成功，現在幫你導向登入頁面");
        navigate("/login");
      })
      .catch((err) => {
        setMessage(err.response.data);
      });
  };
  return (
    <div className="register">
      <div className="leftsection">
        <div className="picture"></div>
        <div className="filter"></div>
      </div>
      <div className="rightsection">
        <div className="title">
          <div className="left">
            <h1>還在等甚麼?趕緊來註冊</h1>
          </div>
          <div className="right">
            <h3>
              若已註冊，<a href="/login">請登入</a>
            </h3>
          </div>
          <hr />
        </div>
        <div className="keyin">
          <div className="word">
            <p>或使用MC帳號註冊</p>
          </div>
          {message && (
            <div className="alert">
              <p>{message}</p>
            </div>
          )}
          <div className="username">
            <input
              type="text"
              placeholder="帳號(請輸入至少六碼)"
              onChange={handleChangeUsername}
            />
          </div>
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
          <div className="role">
            <select style={{ width: "315px" }} onChange={handleChangeRole}>
              <option value="">請選擇老師或學生身分</option>
              <option value="instructor">老師</option>
              <option value="student">學生</option>
            </select>
          </div>
        </div>
        <button onClick={handleRegister}>註冊</button>
      </div>
    </div>
  );
};

export default Register;
