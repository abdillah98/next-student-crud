export default function Button(props) {
	return (
		<button 
			className="
				px-[20px] 
				py-[8px] 
				rounded-[8px] 
				border-[2px] 
				border-blue-500 
				bg-blue-500 
				hover:bg-blue-600 
				text-white 
				whitespace-nowrap
			" 
			onClick={props.onClick}
		>
			{props.label}
		</button>
	)
}