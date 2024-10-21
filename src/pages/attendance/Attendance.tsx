import { useNavigate, useSearchParams } from "react-router-dom"

const Attendance = () => {
    const navigate = useNavigate()
    const params = useSearchParams()
    console.log(params[0].get('q'))

    const handleGoToEmployee = () => {
        navigate('/employee', {state: {name: "Ramu", age: 23}, replace: false})
    }

  return (
    <div>
        Attendance
        <button onClick={handleGoToEmployee}>Go to Employee</button>
    </div>
  )
}

export default Attendance