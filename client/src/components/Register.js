import React from "react";

const Register = () => {
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
          <div className="username">
            <input type="text" placeholder="帳號(請輸入至少六碼)" />
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
          <div className="role">
            <select style={{ width: "315px" }}>
              <option value="">請選擇老師或學生身分</option>
              <option value="">老師</option>
              <option value="">學生</option>
            </select>
          </div>
        </div>
        <button>註冊</button>
      </div>
    </div>
  );
};

export default Register;
