import { Given, When, Then } from '@cucumber/cucumber';
import { expect} from '@playwright/test';
import { page } from '../support/hooks';
import { Loginpage } from '../../pages/LoginPage';

let loginPage:Loginpage;

Given('que el usuario navega a la página de inicio de sesión', async () => {
  loginPage= new Loginpage(page);
  await loginPage.NavegarPagina();
});

When('ingresa el usuario {string} y la contraseña {string}', async (username: string, password: string) => {
  await loginPage.ingresarCredenciales(username,password)
  
});

When('hace clic en el botón de ingresar', async () => {
  await loginPage.clicLoginbutton();
});

Then('debería ver la pantalla principal del sistema', async () => {
  await loginPage.validarPagina();
});