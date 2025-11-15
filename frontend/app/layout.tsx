import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { ReactNode } from "react";
import { NotificationProvider } from "./Context/NotificationContext"; 
import AppInitializer from './Component/AppInitializer';
import NotificationBar from './NotificationBar';
import Navbar from "./Component/Navbar";
import {NavigationProvider} from "./Context/NavigationContext";
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
            <AppInitializer />
            <NotificationBar />
             <NavigationProvider>
              {children}
            </NavigationProvider>
          </NotificationProvider>
        </div>
      </body>
    </html>
  );
}
