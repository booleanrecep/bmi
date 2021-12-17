import { BmiInput } from '../Input/BmiInput'
import './bmi-form.css'
export const BmiForm = () => {
  return (
    <div className="bmi-form">
      <form >
        <div>
          <BmiInput label="Your cat's name" type="text" />
          <BmiInput label="Birthday" type="date" />
          <BmiInput label="Gender" type="select" />
          <BmiInput label="Ribcage" type="number" />
          <BmiInput label="Your cat's name" type="number" />
        </div>
      </form>
    </div>
  )
}