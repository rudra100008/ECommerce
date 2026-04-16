import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { ReactNode } from "react";
import { NotificationProvider } from "./Context/NotificationContext";
import AppInitializer from "./component/AppInitializer";
import NotificationBar from "./NotificationBar";
import { NavigationProvider } from "./Context/NavigationContext";
import { CartProvider } from "./Context/CartContext";
import { OrderFlowGuard } from "./component/OrderFlowGuard";
import { OrderProvider } from './Context/OrderContext';
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>ShopEase</title>
      </head>
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
