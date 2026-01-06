const menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: sans-serif;
}

html,
body {
  height: 100%;
  width: 100%;
}

.logo {
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
}

.navBar {
  padding: 10px 30px;
  background-color: #004274;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  position: relative;
}

.navBar ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
}

.navBar ul li {
  list-style-type: none;
}

.navBar ul li a {
  text-decoration: none;
  color: #fff;
}

.menu-icon {
  display: none;
}

.menu-icon i {
  font-size: 30px;
  color: #fff;
}

@media (max-width: 600px) {
  .navBar ul {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    text-align: center;
    background-color: #004274;
    gap: 0;
    overflow: hidden;
  }
  .navBar ul li {
    padding: 20px;
  }
  .menu-icon {
    display: block;
  }
  #menuList {
    transition: all 0.5s;
  }
}

.navbar {
  background-color: #007bff;
}

.navbar-brand,
.nav-link {
  color: #fff !important;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-toggler-icon {
  filter: invert(1);
}
