import { Locator, Page, expect } from "@playwright/test";

export class Loginpage{

private page:Page;
private txtUserName:Locator;
private txtPassword:Locator;
private button:Locator;
private txtpage:Locator;
private txtErrorCredenciales:Locator;

   
    constructor (page:Page){
        this.page=page;
        this.txtUserName=page.getByPlaceholder('Username');
        this.txtPassword=page.getByPlaceholder('Password');
        this.button=page.getByRole('button',{name:'Login'});
        this.txtpage=page.getByText('Swag Labs').first();
        this.txtErrorCredenciales=page.locator('[data-test="error"]');
        
    }

async NavegarPagina(){
    await this.page.goto('https://www.saucedemo.com/');
}
async ingresarCredenciales(username:string,password:string){
await this.txtUserName.fill(username);
await this.txtPassword.fill(password);
}
async clicLoginbutton(){
    await this.button.click({force:true}); 
}
async validarPagina(){
    await expect (this.txtpage).toBeVisible();
}
async validarMensajesError(mensajeError:string){
    await expect(this.txtErrorCredenciales).toBeVisible();
    await expect(this.txtErrorCredenciales).toHaveText(mensajeError,{timeout:7000});

}


}

