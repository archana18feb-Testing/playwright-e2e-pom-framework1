
import {test,Page,expect,Locator} from '@playwright/test'
export class InventoryPage{
    page : Page;
    constructor(page:Page){
        this.page = page;

    }
    async addProductTocart(targetProduct : string){
        await this.page.locator('.inventory_item').filter({hasText:targetProduct}).locator('button').click();

    }

    async goTocart(){
        await this.page.locator('.shopping_cart_link').click();
    }
}