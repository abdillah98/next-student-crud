export default function StudentItem(props) {
	return (
		<div 
			className="
				flex 
				flex-col 
				gap-[10px] 
				rounded-[12px] 
				border-[1px] 
				border-slate-300 
				p-[20px] 
				cursor-pointer 
				hover:bg-slate-50
			"
			onClick={() => props.handleShowDetails(props.data)}
		>
		  	<div className="block">
		    	<div className="text-[12px] text-slate-600">Name</div>
		    	<div>{props.data.name}</div>
		  	</div>
		  	<div className="block">
		    	<div className="text-[12px] text-slate-600">Email</div>
		    	<div>{props.data.email}</div>
		  	</div>
		</div>
	)
}