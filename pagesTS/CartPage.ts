import{test,Page,expect,Locator} from '@playwright/test';
export class CartPage{
    page : Page;
    cartItems : Locator;
    checkOutButton : Locator;

    constructor(page : Page){
        this.page= page;
        this.cartItems = page.locator('.cart_item');
        this.checkOutButton = page.locator('#checkout');
    }
    async proceedToCheckout(){
        await this.checkOutButton.click();
    }
}