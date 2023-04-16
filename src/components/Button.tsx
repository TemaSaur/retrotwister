import React from 'react';

export default function Button(props: {colored?:boolean, style?:any, children: React.ReactNode, onClick?:any}) {
	return <button onClick={props.onClick} style={props.style} className={'Button ' + (props.colored ? 'Button-colored': '')}>{props.children}</button>
}