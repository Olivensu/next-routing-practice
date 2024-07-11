// app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>This is header</div>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
