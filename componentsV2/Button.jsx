export default function Button(props) {
	return (
		<button 
			type={props.type || 'button'}
			className={`
				px-[20px] 
				py-[8px] 
				rounded-[8px] 
				border-[2px] 
				whitespace-nowrap
				${props.color === 'primary' ? 'bg-blue-500 hover:bg-blue-600 border-blue-500 text-white' : ''}
				${props.color === 'secondary' ? 'bg-slate-200 hover:bg-slate-300 border-slate-200 text-black' : ''}
				${props.color === 'danger' ? 'bg-red-500 hover:bg-red-600 border-red-500 text-white': ''}
			`}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.label}
		</button>
	)
}
