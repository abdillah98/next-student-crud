import {useState, useEffect} from 'react'
import { Inter } from 'next/font/google'
import Input from '../componentsV2/Input'
import Button from '../componentsV2/Button'
import StudentItem from '../componentsV2/StudentItem'
import FormAdd from '../componentsV2/FormAdd'
import FormEdit from '../componentsV2/FormEdit'

const inter = Inter({ subsets: ['latin'] })

const initialForm = {
    id: null, 
    name: '', 
    email: ''
}

export default function StudentList() {

    const [searchField, setSearchField] = useState('')
    const [isOpenAdd, setIsOpenAdd] = useState(false)
    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [form, setForm] = useState(initialForm)
    const [students, setStudents] = useState([])


    const handleShowAdd = (e) => {
        setIsOpenAdd(true)
        setForm(initialForm)
    }
    
    const handleChange = (e) => {
        const {value, name} = e.target
        setForm(prev => ({...prev, [name]: value}))
    }

    const handleAddNew = (e) => {
        e.preventDefault()
        setStudents(prev => ([...prev, {...form, id: students.length + 1}]))
        setIsOpenAdd(false)
        setForm(initialForm)
    }

    const handleShowDetails = (student) => {
        setForm(student)
        setIsOpenEdit(true)
    }

    const handleSave = (e) => {
        e.preventDefault()

        setStudents(prev => prev.map(student => 
            student.id === form.id ? form : student
        ))
        setIsOpenEdit(false)
        setForm(initialForm)
    }

    const handleDelete = () => {
        setStudents(prev => prev.filter(student => student.id !== form.id))
        setIsOpenEdit(false)
        setForm(initialForm)
    }

    useEffect(() => {
        console.log(students)
    }, [students])

    return (
        <main className={`${inter.className} max-w-full md:max-w-4xl mx-auto px-[20px] py-[40px]`}>
            <div className="text-[55px] font-[800]">Next - Student Crud</div>
            {/*{Next code here...}*/}

            <div className="flex items-center justify-start py-[20px] w-[50%] gap-[10px]">
                <Input 
                    placeholder="Cari..."
                    onChange={(e) => setSearchField(e.target.value)}
                />
                <Button 
                    label="+ Tambah" 
                    color="primary" 
                    onClick={handleShowAdd}
                />
            </div>

            {students.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                    {students.filter(student => {
                        if (searchField == '') {
                            return student
                        }
                        else if (student.name?.toLowerCase().includes(searchField.toLowerCase())) {
                            return student
                        }
                    }).map((student, index) => 
                        <StudentItem 
                            key={index}
                            data={student}
                            handleShowDetails={handleShowDetails}
                        />
                    )}
                </div> :
                <div>Student data empty...</div>

            }

            {/*Tambahkan FormAdd di sini*/}
            {isOpenAdd &&
                <FormAdd 
                    form={form} 
                    handleChange={handleChange}
                    handleAddNew={handleAddNew}
                    handleClose={() => setIsOpenAdd(false)}
                />
            }

            {isOpenEdit &&
                <FormEdit 
                    form={form} 
                    handleChange={handleChange}
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                    handleClose={() => setIsOpenEdit(false)}
                />
            }
        </main>
    )
}
