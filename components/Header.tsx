import React, { VFC } from 'react';
import { useRecoilState } from 'recoil';
import {
	AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { screenModeState } from '../lib/store';

export const Header: VFC = () => {
	const classes = useStyles()
	const [screenMode, setScreenMode] = useRecoilState(screenModeState)

	const screenModeHandler = () => {
		const mode = screenMode === 'light' ? 'dark' : 'light'
		setScreenMode(mode)
		localStorage.setItem('screen-mode', mode)
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar variant="dense">
					<Typography className={classes.title} variant="h6" color="inherit">
						Next.js
					</Typography>
					<IconButton aria-label="screen-mode" onClick={screenModeHandler}>
						<Brightness4Icon fontSize="small" />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	)
}

// =================================================
// style

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		title: {
			flexGrow: 1
		}
	})
)
