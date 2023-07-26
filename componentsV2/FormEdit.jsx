import Input from './Input'
import Button from './Button'

export default function FormEdit(props) {
	return (
		<div className="fixed top-0 left-0 w-full h-full bg-[#000000d4]">
		  <div className="fixed top-0 right-0 w-full md:w-[500px] h-full bg-white p-[20px]">
		    <div className="text-[24px] font-[800] mb-[20px]">Tambah Data</div>
		    <form 
		    	onSubmit={props.handleSave}
		    	className="flex flex-col gap-[20px]"
		    >
		      <Input
		        label="Student Name*"
		        id="name" 
		        name="name" 
		        placeholder="Cari..."
		        value={props.form.name}
		        onChange={props.handleChange}
		      />
		      <Input
		        label="Student Email*"
		        type="email" 
		        id="email" 
		        name="email" 
		        placeholder="Cari..."
		        value={props.form.email}
		        onChange={props.handleChange}
		      />
		      <div className="grid grid-cols-3 gap-[10px]">
		        <Button 
		          label="Cancel" 
		          color="secondary" 
		          onClick={props.handleClose}
		        />
		        <Button 
		        	type="submit"
		          label="Save" 
		          color="primary" 
		        />
		        <Button 
		          label="Delete" 
		          color="danger" 
		          onClick={props.handleDelete}
		        />
		      </div>
		    </form>
		  </div>
		</div>
	)
}