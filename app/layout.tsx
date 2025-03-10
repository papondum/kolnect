import type { Metadata } from "next";
import StitchesRegistry from "./registry";
export const metadata: Metadata = {
  title: "KOLNECT",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <StitchesRegistry>{children}</StitchesRegistry>
      </body>
    </html>
  );
}
