import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

const Nav = ({ currentUser, setCurrentUser }) => {
  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(AuthService.getCurrentUser());
    window.alert("(人生)登出成功，現在幫你導回首頁");
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">首頁</Link>
        </li>
        {!currentUser && (
          <li>
            <Link to="/register">註冊</Link>
          </li>
        )}
        {!currentUser && (
          <li>
            <Link to="login">登入</Link>
          </li>
        )}
        {currentUser && (
          <li>
            <Link to="/" onClick={handleLogout}>
              登出
            </Link>
          </li>
        )}
        {currentUser && (
          <li>
            <Link to="profile">個人頁面</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
