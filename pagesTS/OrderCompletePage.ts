import {test,Page,expect,Locator} from '@playwright/test'
export class OrderCompletePage{
    page : Page;
    completeHeader : Locator;

    constructor(page: Page){
        this.page = page;
        this.completeHeader = page.locator(".complete-header");

    
    }
    async getconfirmation(){
       return await this.completeHeader.textContent();
    }
}