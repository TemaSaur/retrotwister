// import '@/styles/globals.css'
import '@/styles/home.css'
import '@/styles/twister.css'
import '@/styles/dude.css'
import '@/styles/button.css'
import '@/styles/initial.css'
import '@/styles/page.css'
import 'reactjs-popup/dist/index.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

// const engineFont = localFont({src: '../../public/Engine.ttf'})

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
