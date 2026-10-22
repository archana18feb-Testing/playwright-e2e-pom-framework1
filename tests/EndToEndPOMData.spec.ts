import { test, expect } from "@playwright/test";
import { PageManager } from "../pagesTS/PageManager";
import dataset from '../utils/data.json';

for (const data of dataset) {
    test(`SauceDemo end to end order for ${data.targetProduct}`, async ({ page }) => {
        const pm = new PageManager(page); // Creates objects sharing the same tab

        // 1. Login
        await pm.LoginPage.goto();
        await pm.LoginPage.login(data.username, data.password);
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        console.log('URL is valid');
        
        // 2. Add product to cart 
        await pm.InventoryPage.addProductTocart(data.targetProduct);
        await pm.InventoryPage.goTocart();

        // 3. Verify the cart
        await expect(pm.CartPage.cartItems).toContainText(data.targetProduct);
        console.log("Item in the cart is verified");

        // 4. Checkout
        await pm.CartPage.proceedToCheckout();
        await pm.CheckOutPage.fillCustomerInformation('Tom', 'Howerford', '123456');
        await pm.CheckOutPage.ContinueToOverview();
        await pm.CheckOutPage.finishOrder();

        // 5. Verify Order Confirmation
        await expect(pm.OrderCompletePage.completeHeader).toHaveText("Thank you for your order!");
        await expect(pm.OrderCompletePage.completeHeader).toBeVisible();
        console.log(await pm.OrderCompletePage.getconfirmation());
    });
}
