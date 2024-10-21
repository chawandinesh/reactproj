import { useLocation, useNavigate } from "react-router-dom"

const Employee = () => {
  const  location = useLocation()
  const navigate = useNavigate()
  console.log(location)

  const handleGoBack = () => navigate(-1)
  return (
    <div>Employee

        <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default Employee