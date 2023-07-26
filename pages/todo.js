	import {useState} from 'react'
	import { Inter } from 'next/font/google'
	const inter = Inter({ subsets: ['latin'] })

	export default function Todo() {

		const [todos, setTodos] = useState([]);
		const [text, setText] = useState('');

		const handleInputChange = (e) => {
		    setText(e.target.value);
		};

		const handleAddTodo = () => {
		    if (text !== '') {
		      	const newTodo = {
		        	id: Date.now(),
		        	text: text.trim(),
		        	end: false,
		      	};
		     	setTodos([...todos, newTodo]);
		      	setText('');
		    }
		};

		const handleFinishTodo = (e, id) => {
		    setTodos(todos.map(todo => 
		    	todo.id === id 
		    		? {...todo, end: e.target.checked}
		    		: todo
		    ));
		};

		const handleDeleteTodo = (id) => {
		    setTodos(todos.filter(todo => todo.id !== id));
		};

		return (
			<div className={`${inter.className} max-w-full md:max-w-lg mx-auto py-[40px] px-[20px]`}>
				<div className="text-[55px] font-[800]">Next - To Do List</div>
				
				<div className="flex items-center gap-[10px] py-[20px]">
					<Input 
						value={text}
						onChange={handleInputChange}
					/>
					<Button 
						label="+ Add"
						onClick={handleAddTodo}
					/>
				</div>

				{todos.length > 0 &&
					<div className="
						border 
						border-slate-300 
						rounded-[12px]
					">

						{todos.map(todo =>
							<TodoItem
								key={todo.id}
								data={todo}
								handleFinishTodo={handleFinishTodo}
								handleDeleteTodo={handleDeleteTodo}
							/>
						)}

					</div>
				}
			</div>
		)
	}

function Input(props) {
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

function Button(props) {
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

function TodoItem(props) {
	return (
		<div className="
			flex 
			items-center 
			gap-[20px] 
			p-[20px] 
			border-b 
			border-slate-300 
			last:border-b-0
		">
			<input 
				type="checkbox" 
				checked={props.data.end} 
				onChange={(e) => props.handleFinishTodo(e, props.data.id)}
			/>

			{props.data.end ? 
				<del>{props.data.text}</del> :
				<span>{props.data.text}</span>
			}

			<span 
				className="
					text-red-500 
					ml-auto 
					cursor-pointer
				" 
				onClick={() => props.handleDeleteTodo(props.data.id)}
			>
				Delete
			</span>
		</div>
	)
}