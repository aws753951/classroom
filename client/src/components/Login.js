import React from "react";

const Login = () => {
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
          <div className="email">
            <input type="email" placeholder="信箱" />
          </div>
          <div className="password">
            <input type="password" placeholder="密碼(請輸入至少八碼)" />
          </div>
          <div className="password2">
            <input type="password" placeholder="再次輸入密碼" />
          </div>
        </div>
        <button>登入</button>
      </div>
    </div>
  );
};

export default Login;
