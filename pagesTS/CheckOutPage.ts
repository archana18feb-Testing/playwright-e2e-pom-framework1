
import { test,Page,expect,Locator } from '@playwright/test';

export class CheckOutPage{
    page :Page;
    firstNameInput :Locator;
    lastNameInput :Locator;
    postalCodeInput:Locator;
    continueButton :Locator;
    finishButton :Locator;

    constructor(page :Page){
        this.page =page;
        this.firstNameInput = page.locator("#first-name");
        this.lastNameInput = page.locator("#last-name");
        this.postalCodeInput = page.locator("#postal-code");
        this.continueButton = page.locator("#continue");
        this.finishButton = page.locator("#finish");
    }
    async fillCustomerInformation(firstName:String,LastName :String,postalCode :String){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(LastName);
        await this.postalCodeInput.fill(postalCode);

    }

    async ContinueToOverview(){
        await this.continueButton.click();
    }
    
    async finishOrder(){
        await this.finishButton.click();
    }
}
