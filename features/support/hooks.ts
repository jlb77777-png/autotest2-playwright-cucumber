import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { ChromiumBrowser, chromium, Page, BrowserContext } from '@playwright/test';

let browser: ChromiumBrowser;
let context: BrowserContext;
export let page: Page;

// Se ejecuta UNA SOLA VEZ antes de que inicien todas las pruebas
BeforeAll(async () => {
  browser = await chromium.launch({ 
    headless: true, // Cámbialo a true si quieres ejecuciones silenciosas (sin interfaz)
    slowMo: 1000      // Ralentiza la ejecución 1s por acción para poder observar los clics
  });
});

// Se ejecuta ANTES de CADA escenario de prueba
Before(async () => {
  context = await browser.newContext();
  page = await context.newPage();
});

// Se ejecuta DESPUÉS de CADA escenario de prueba
After(async () => {
  await page.close();
  await context.close();
});

// Se ejecuta UNA SOLA VEZ al finalizar todas las pruebas
AfterAll(async () => {
  await browser.close();
});