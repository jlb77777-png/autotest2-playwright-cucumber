#language: es
Característica: Inicio de sesión en la plataforma

  Escenario: Inicio de sesión exitoso con credenciales válidas
    Dado que el usuario navega a la página de inicio de sesión
    Cuando ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Y hace clic en el botón de ingresar
    Entonces debería ver la pantalla principal del sistema