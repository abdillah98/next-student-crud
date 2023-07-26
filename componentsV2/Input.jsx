export default function Input(props) {
	return (
		<div className="w-full">
			{props.label && <label className="block mb-[10px] font-[600]">{props.label}</label>}
			<input 
				type={props.type || 'text'} 
				placeholder={props.placeholder} 
				className="
					px-[20px] 
					py-[8px] 
					rounded-[8px] 
					border-[2px] 
					border-slate-300
					w-full
				"
				onChange={props.onChange}
				value={props.value}
				name={props.name}
				id={props.id}
				required={props.required}
			/>
		</div>
	)
}