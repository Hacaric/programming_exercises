//@ts-ignore
import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Navbar } from "~/components/navbar/navbar";

export const metadata: Metadata = {
    title: "Skauské hry a aktivity",
    description: "Vyhľadávač skautských hier a aktivít",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${geist.variable}`}>
            <head>
                {/*link:favicon - This is needed because next will replace the icon with default one for some reason even when favincon is defined in metadata
        TODO: remove this link; look at https://stackoverflow.com/questions/75832964/nextjs-13-overwrites-my-favicon-with-its-default-one */}
                <link
                    rel="shortcut icon"
                    href="favicon.ico"
                    type="image/x-icon"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=schedule"
                />
            </head>
            <body>
                <div className="flex flex-col gap-2">
                    <Navbar />
                    <div id="content" className="p-2">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
