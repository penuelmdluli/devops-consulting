import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = {
  title: "Sabelo Mdluli — Africa's Mobile Banking DevOps Specialist",
  description: "6+ years deploying mobile banking apps across 9 African markets. CI/CD, Kubernetes, .NET MAUI, Jenkins, PostgreSQL. Available for consulting.",
  keywords: ["DevOps Africa","mobile banking DevOps","Kubernetes Africa","Jenkins CI/CD","fintech DevOps","South Africa"]
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
