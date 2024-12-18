import { ThemeProvider } from "@/components/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistMono = localFont({
	src: "../assets/fonts/GeistMonoVF.woff",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistMono.className} antialiased`}>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="system"
					disableTransitionOnChange
					enableSystem
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
