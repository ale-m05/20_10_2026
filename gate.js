/* Protección: si no se ingresó el PIN en esta sesión, se envía al login. */
if (sessionStorage.getItem("acceso") !== "ok") {
  location.replace("login.html");
}
 