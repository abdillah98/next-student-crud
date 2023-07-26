export default function Input(props) {
	return (
		<input 
			type={props.type || 'text'}
			className="
				px-[20px] 
				py-[8px] 
				rounded-[8px] 
				border-[2px] 
				border-slate-300 
				w-full
			" 
			placeholder="New todo..."
			value={props.value} 
			onChange={props.onChange} 
		/>
	)
}