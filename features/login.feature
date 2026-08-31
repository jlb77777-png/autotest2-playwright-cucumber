#language: es
Característica: Inicio de sesión en la plataforma

  Antecedentes:
    Dado que el usuario navega a la página de inicio de sesión

  Escenario: Inicio de sesión exitoso con credenciales válidas
    Cuando ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Y hace clic en el botón de ingresar
    Entonces debería ver la pantalla principal del sistema

  Escenario: Inicio de sesión fallido con credenciales incorrectas
    Cuando ingresa el usuario "standard_user" y la contraseña "clave_incorrecta"
    Y hace clic en el botón de ingresar
    Entonces debería mostrar el aviso "Epic sadface: Username and password do not match any user in this service"
  
   Escenario: Inicio de sesion fallido con credenciales vacias
    Cuando intenta ingresar sin llenar los campos 
    Entonces debería mostrar el aviso "Epic sadface: Username is required"