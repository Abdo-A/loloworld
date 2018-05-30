import React from "react";
import { Menu, Icon, Button } from "antd";
import classes from "./MainMenu.css";
const SubMenu = Menu.SubMenu;

const MainMenu = props => {
  let salahIcon = (
    <img
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQ0OGhAQGjclHyU3MDMuKzczNzczNzc3NzcrNzAvNzUyNDA3MzAzNzcrNy83Nzc1NzE3NzArNzM3LjA3N//AABEIADAAMAMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAIHAf/EACwQAAIBAwMDAgUFAQAAAAAAAAECAwAEEQUSIRMxQVFhFCIycYEzUqGx8Ab/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAJhEAAgIBBAEEAgMAAAAAAAAAAQIAEQMEEiExQRNRkfCBsQUUYf/aAAwDAQACEQMRAD8Ao8mp3c8bpcfDyKQeWto8jPcghc596DVcCaAXzFwEk8gjhUknsB5q3AFmAtsh2oJPJpWpQRNNJZXKRr3cocCoGRDxck4My8lTI4X6gwfqriKhcTbxR7mMuK6SyyJhVoEiFMhMbBe+KpfMcZCVNTfRIbuS8DWUBleP5iMZA+/IwPeuyla5i2lGQPaCzOkjXLibT7N7bTWeO4gEjMXJ2MOCvCnPtkgUgcSgkE9TUXI5pq7nMYIn+IkZgQAT3GM5rQYipn6fExckyR0qoMYdYO64q4irLDkWhTRVZCZZLWd0imeFJwA7J+3yKuAGHPiI5rxZKBoNLM+uz6TaW0Omas96rR9PpvCF2jBGBjxz3PNB9MMTYqGLlAtNu9h9Aiq8na7uJLhwAz4yB2GAAP4FWHAjlVBHWpEGwg0i1cRPIIwNtPsyiD80Lcs1f6+bbaiASWd1JIBKp3HhfAoodQOJlZtLqC1uI/tLGztID0TLc3skXzyOPlgQjkAeWwT647+xXbIx74H7jOHTLjpjZ6s+1+B/sJsdPs33G53/AD7Qi5xxk7iPcAdv77GjO3iO6laN4+vN+PaRWekXHUWZrSaaPb1AUTdhQfqYeMjJGeDUvk47qKO68i4n1GBICgXBLjqbgcjacYA8HHP5zR8bXF25Fx3bq908Mdshd5cbFXvS9c1PUHMgxh/Hcy9Hwbyw3I2vGSpHv7V203Ug6jH6e/xFa67HBt6anKDAP4ovoE9zIy/ymE4zjrxUs2j3k1jqstzLJ8PBFbloxLIWSF+2CFbPKjJ28+vmlWFqAOTfzM57Ykt9+iYn/Q6Wt/rKWlxKVvXjNs0Fr+nj68h+Oe3nHrUtp3pbHV+fj4lMW52Cjk+0qeoyJI8eyR5AkSoSwx2/2fzTeMEQu0qKM207UJIslJpFKrjKsRxXMldRvTaoMKbkCe6pLJKCSzMTxljk1GPuX1xO2liURE0xcwhiYzISsM6OUVwrA7T2I9Kk8ipVDtYGdK0O40i2t4ZLSJLgurcyr+mDnCn1IyR7gj0pB9wPM3sQDKCpqUi9j6dw6j6TyPsaYQ2ILVptyMPz8z//2Q=="
      alt="Salah"
    />
  );

  return (
    <div className={classes.MainMenu} style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={props.toggleMenuCollapsed}
        style={{ marginBottom: 16, marginLeft: -200 }}
      >
        <Icon type={props.menuCollapsed ? "menu-unfold" : "menu-fold"} />
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={props.menuCollapsed}
      >
        <Menu.Item key="0" onClick={() => props.navigateTo("/")}>
          <Icon type="home" className={classes.NavIcon} />
          <span>Main Page</span>
        </Menu.Item>

        <Menu.Item key="1" onClick={() => props.navigateTo("/music")}>
          <Icon type="forward" className={classes.NavIcon} />
          <span>Music</span>
        </Menu.Item>

        <Menu.Item key="2" onClick={() => props.navigateTo("/salah")}>
          <Icon className={classes.NavIcon}>
            {props.menuCollapsed ? (
              salahIcon
            ) : (
              <i className="fas fa-heartbeat" />
            )}
          </Icon>
          <span>Salah</span>
        </Menu.Item>

        <Menu.Item key="3" onClick={() => props.navigateTo("/football")}>
          <Icon className={classes.NavIcon}>
            <i className="fas fa-basketball-ball" />
          </Icon>
          <span>Football</span>
        </Menu.Item>

        <Menu.Item key="4" onClick={() => props.navigateTo("/china")}>
          <Icon className={classes.NavIcon}>
            <i className="fas fa-star" />
          </Icon>
          <span>China News</span>
        </Menu.Item>

        <Menu.Item key="5" onClick={() => props.navigateTo("/painting")}>
          <Icon className={classes.NavIcon}>
            <i className="fas fa-paint-brush" />
          </Icon>
          <span>Painting</span>
        </Menu.Item>

        <Menu.Item key="6" onClick={() => props.navigateTo("/movies")}>
          <Icon className={classes.NavIcon}>
            <i className="fas fa-film" />
          </Icon>
          <span>Movies</span>
        </Menu.Item>

        <Menu.Item key="7" onClick={() => props.navigateTo("/programming")}>
          <Icon className={classes.NavIcon}>
            <i className="fas fa-desktop" />
          </Icon>
          <span>Programming</span>
        </Menu.Item>

        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" className={classes.NavIcon} />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MainMenu;
