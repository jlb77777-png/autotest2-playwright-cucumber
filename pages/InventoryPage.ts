import { Page,Locator,expect } from "@playwright/test";

export class InventoryPage{
    private page:Page;
    private TxtProducts:Locator;


    constructor(page:Page){
        this.page=page;
        this.TxtProducts=page.locator('.title');

    }

async validarPagina(mensaje:string){
    await expect(this.TxtProducts).toBeVisible();
    await expect(this.TxtProducts).toHaveText(mensaje,{timeout:7000});
}


}