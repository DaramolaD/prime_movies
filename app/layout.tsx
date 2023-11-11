'use client';
import type { Metadata } from 'next'
import { Provider } from 'react-redux';
import { store } from "../redux/store"
import './globals.css'
import Nav from '../components/Nav';

// export const metadata = {
//   title: {
//     template: '%s | Prime_Movies',
//     default: "Prime_Movies"
//   },
//   description: 'Prime_Movies is a movie website where you can find all the latest movies',

//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: 'https://prime_movies.vercel.app/',
//     site_name: 'Prime_Movies',
//   }
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  )
}
