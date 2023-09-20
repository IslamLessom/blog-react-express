import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="text" placeholder="password" />
        <button>Войьт</button>
        <p>У вас ошибка</p>
        <span>
          У вас нет аккаунта ? <Link to="/register">Создать</Link>
        </span>
      </form>
    </div>
  );
}
