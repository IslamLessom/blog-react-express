import React from "react";
//route
import { Link } from "react-router-dom";
//img
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
//components
import Menu from "../components/Menu";

export default function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://get.pxhere.com/photo/man-person-girl-woman-camera-photography-portrait-spring-red-lens-color-autumn-canon-romance-season-taking-photo-photograph-beauty-emotion-photo-shoot-portrait-photography-1169775.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://o-tendencii.com/uploads/posts/2023-04/1680690855_o-tendencii-com-p-v-chem-nosit-fotoapparat-s-obektivom-36.jpg"
            alt=""
          />
          <div className="info">
            <span>Islam</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Смотреть стоковые фотографии без лицензионных платежей</h1>
        <p>
          Стоковые фотографии — это фотографии, на которые любой пользователь
          может приобрести лицензию на творческое использование. Вы можете не
          нанимать фотографа, а поискать в большой базе данных и быстро найти
          изображение, подходящее для вашего проекта. Подробнее об истории
          стоковой фотографии и бизнесе в этой сфере. Вы можете приобрести
          лицензию и на другие типы стоковых изображений, в том числе на
          векторную графику и красивые стоковые иллюстрации.
          <br />
          <br />
          Стоковые фотографии — это фотографии, на которые любой пользователь
          может приобрести лицензию на творческое использование. Вы можете не
          нанимать фотографа, а поискать в большой базе данных и быстро найти
          изображение, подходящее для вашего проекта. Подробнее об истории
          стоковой фотографии и бизнесе в этой сфере. Вы можете приобрести
          лицензию и на другие типы стоковых изображений, в том числе на
          векторную графику и красивые стоковые иллюстрации.
          <br />
          <br />
          Стоковые фотографии — это фотографии, на которые любой пользователь
          может приобрести лицензию на творческое использование. Вы можете не
          нанимать фотографа, а поискать в большой базе данных и быстро найти
          изображение, подходящее для вашего проекта. Подробнее об истории
          стоковой фотографии и бизнесе в этой сфере. Вы можете приобрести
          лицензию и на другие типы стоковых изображений, в том числе на
          векторную графику и красивые стоковые иллюстрации.
        </p>
      </div>
      <Menu />
    </div>
  );
}
