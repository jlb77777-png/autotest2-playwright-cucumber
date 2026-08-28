import { Locator, Page, expect } from "@playwright/test";

export class Loginpage{

private page:Page;
private txtUserName:Locator;
private txtPassword:Locator;
private button:Locator;
private txtpage:Locator;

   
    constructor (page:Page){
        this.page=page;
        this.txtUserName=page.getByPlaceholder('Username');
        this.txtPassword=page.getByPlaceholder('Password');
        this.button=page.getByRole('button',{name:'Login'});
        this.txtpage=page.getByText('Swag Labs').first();
    }

async NavegarPagina(){
    await this.page.goto('https://www.saucedemo.com/');
}
async ingresarCredenciales(username:string,password:string){
await this.txtUserName.fill(username);
await this.txtPassword.fill(password);
}
async clicLoginbutton(){
    await this.button.click();
    
}
async validarPagina(){
    await expect (this.txtpage).toBeVisible();
}
}

