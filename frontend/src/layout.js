import './globals.css'

export const metadata = {
  title: 'EliteMedBilling | Medical Billing Solutions',
  description: 'Premium US Healthcare RCM Services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}