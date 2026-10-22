
import{test,Page,expect,Locator} from '@playwright/test';
export class LoginPage{

    page :Page;
    usernameInput : Locator;
    passwordInput :Locator ;
    loginButton : Locator;

    constructor(page : Page ){//2b.constructor recieves it
        
        
        this.page =page;//2.saves it on to object
        //property       page object
        this.usernameInput = page.locator('#user-name');// creates propertyuserInput(user defined variable).it holds the locator for the element whoes id is user name 
        this.passwordInput =page.locator("#password");//same as above
        this.loginButton = page.locator("#login-button");//same as above

    }
    async goto(){
        await this.page.goto("https://www.saucedemo.com/")
    }

    async login(username: string,  password:string){
        await this.usernameInput.fill(username);//types username into user box
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}