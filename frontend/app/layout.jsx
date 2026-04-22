import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { NotificationProvider } from "./Context/NotificationContext";
import AppInitializer from "./component/AppInitializer";
import NotificationBar from "./NotificationBar";
import { NavigationProvider } from "./Context/NavigationContext";
import { CartProvider } from "./Context/CartContext";
import { OrderFlowGuard } from "./component/OrderFlowGuard";
import { OrderProvider } from './Context/OrderContext';
import { title } from "process";

export const metadata = {
  title: 'ShopEase - Best Online Shopping Store',
  description: 'Shop millions of products at best prices.',
  openGraph:{
    title: 'ShopEase - Best Online Shopping Store',
    description: 'Shop millions of products at best prices'
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <div id="portal-root">
          <NotificationProvider>
            <NavigationProvider>
              <CartProvider>
                <OrderFlowGuard>
                  <OrderProvider>
                  <AppInitializer />
                  <NotificationBar />
                  {children}
                  </OrderProvider>
                </OrderFlowGuard>
              </CartProvider>
            </NavigationProvider>
          </NotificationProvider>
        </div>
      </body>
    </html>
  );
}
