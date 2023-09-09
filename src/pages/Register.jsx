import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input required type="text" placeholder="Ваш ник" />
        <input required type="email" placeholder="Ваша почта" />
        <input required type="text" placeholder="Пароль" />
        <button>Создать</button>
        <p>У вас ошибка</p>
        <span>
          У вас есть аккаунт ? <Link to="/register">Создать</Link>
        </span>
      </form>
    </div>
  );
}
