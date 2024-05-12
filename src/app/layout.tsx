import { InputProvider } from 'compo/global/context/InputContext';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'styles/globals.scss';
import 'regenerator-runtime/runtime';

export const metadata: Metadata = {
    title: "U-Cook | An Intelligent Cooking Collaboration Assistant",
    description: "An Intelligent Cooking Collaboration Assistant",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <InputProvider>
                    {children}
                </InputProvider>
            </body>
        </html>
    );
}
