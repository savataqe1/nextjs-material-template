import '../styles/globals.css';
import Head from 'next/head';
import React, { useEffect, VFC } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { screenModeState } from '../lib/store';
import { ScreenModeType } from '../lib/types';

// import { theme } from '../styles/theme';

import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		jssStyles?.parentElement?.removeChild(jssStyles)
	}, [])

	return (
		<>
			<Head>
				<title>MyApp</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<RecoilRoot>
				<MaterialThemeProvider>
					<CssBaseline />
					<Component {...pageProps} />
				</MaterialThemeProvider>
			</RecoilRoot>
		</>
	)
}
export default MyApp

const MaterialThemeProvider: VFC<{ children: React.ReactNode }> = ({ children }) => {
	const [screenMode, setScreenMode] = useRecoilState(screenModeState)

	useEffect(() => {
		const mode = (localStorage.getItem('screen-mode') ?? screenMode) as ScreenModeType
		setScreenMode(mode)
	}, [])

	return <ThemeProvider theme={theme(screenMode)}>{children}</ThemeProvider>
}

const theme = (screenMode: ScreenModeType) =>
	createTheme({
		palette: {
			primary: {
				main: orange[800]
			},
			type: screenMode
		}
	})
