
import './bmi-input.css'
export const BmiInput = ({
  label,
  type,
  name,
  dropArray
}) => {
  return (
    <div className='bmi-input'>
      {
        type !== 'select' ?
        <label>
        <p>{label}</p>
        <div>
          <input name={name} placeholder='Input' type={type} />
        </div>
      </label> : null
      }
      {
        type === 'select' ?
        <label >
          <p>{label}</p>
          <div className='select-list'>
            <select name={name} >
              {
                dropArray.map(g =>  <option key={g.key} value={g.name}>{g.name}</option>)
              }
            </select>
          </div>
        </label>
        : null
      }
    </div>
  )

}

BmiInput.defaultProps = {
  label:"Label",
  type:"text",
  name:"name",
  dropArray:[
    {key:12121,name:"M"},
    {key:3432,name:"F"}
  ]
}