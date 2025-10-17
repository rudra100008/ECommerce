import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { ReactNode } from "react";
import { NotificationProvider } from "./Context/NotificationContext"; // make sure this path is correct
import AppInitializer from './Component/AppInitializer';
import NotificationBar from './NotificationBar';
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>E-Commerce</title>
      </head>
      <body>
        <div id="portal-root">
          <NotificationProvider>
            <AppInitializer />
            <NotificationBar />
            {children}
          </NotificationProvider>
        </div>
      </body>
    </html>
  );
}
