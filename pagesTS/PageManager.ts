
import{Page} from '@playwright/test'
import {LoginPage}from "./LoginPage";
import  {InventoryPage} from "./InventoryPage";
import {CartPage} from "./CartPage.js";
import  {CheckOutPage} from "./CheckOutPage.js";
import  {OrderCompletePage} from "./OrderCompletePage.js"
//page manager collects all the page objects in one page 

export class PageManager{
    page :Page;
    LoginPage :LoginPage;
    InventoryPage : InventoryPage;
    CartPage :CartPage;
    CheckOutPage :CheckOutPage ;
    OrderCompletePage:OrderCompletePage;
    constructor(page:Page){
        this.page =page;
        this.LoginPage = new LoginPage(page);
        this.InventoryPage =new InventoryPage(page);
        this.CartPage = new CartPage(page);
        this.CheckOutPage  = new CheckOutPage(page);
        this.OrderCompletePage = new OrderCompletePage(page);
    }
}