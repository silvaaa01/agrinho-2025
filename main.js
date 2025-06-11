document.getElementById('menu-btn').addEventListener('click', () => {
  alert('Menu clicado!');
});
/* Menu lateral */
#side-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;
  background-color: #fde9ef;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
}

#side-menu ul {
  list-style: none;
  padding: 0;
}

#side-menu li {
  margin: 20px 0;
}

#side-menu a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

/* Sobreposição */
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 900;
  display: none;
}

#side-menu.active {
  transform: translateX(0);
}

#overlay.active {
  display: block;
}

/* Utilitário */
.hidden {
  display: none;
}
