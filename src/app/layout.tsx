import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = {
  title: "Sabelo Mdluli — Africa DevOps & Mobile Banking CI/CD Specialist",
  description: "Senior DevOps Engineer with 6+ years experience in mobile banking CI/CD across 9 African markets. Jenkins, Kubernetes, OpenShift, .NET MAUI, Supabase.",
  keywords: ["DevOps Africa","mobile banking CI/CD","Jenkins","Kubernetes","OpenShift","South Africa fintech","MAUI DevOps"]
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
