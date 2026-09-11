import { InventoryPage } from "../../pages/InventoryPage";
import { Given,When,Then } from "@cucumber/cucumber";
import { page } from "../support/hooks";

let inventoryPage:InventoryPage;

Then('el usuario observa el aviso {string}',async(mensaje:string)=>{

    inventoryPage=new InventoryPage(page);
    await inventoryPage.validarPagina(mensaje);

});