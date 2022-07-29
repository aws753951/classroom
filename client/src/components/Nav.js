import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/register">註冊</Link>
        </li>
        <li>
          <Link to="login">登入</Link>
        </li>
        <li>
          <Link to="profile">個人頁面</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
