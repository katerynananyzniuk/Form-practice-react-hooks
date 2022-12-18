import classes from './EmailForm.module.css'
import {useState, useEffect} from 'react'

function EmailForm() {
  const [input, setInput] = useState('')
  const [values, setValues] = useState([])

  useEffect(() => {
    console.log('values', values)
  }, [values])

  function handleReset() {
    setValues([])
    setInput('')
  }
  
  function handleSave() {
    if (input.trim()) {
      setValues(prev => [...prev, input])
      setInput('')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  function removeEmail(index) {
    const emailArr = values.concat()
    const arr = emailArr.filter((_, i) => index !== i)
    setValues(arr)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.input}>
            <label htmlFor={classes.username}>Select contacts </label>
            <input 
              type='text' 
              onChange={(e) => setInput(e.target.value)} 
              value={input} 
              placeholder='test@test.com'
            />
          </div>
          <div className='btns'>
            <button className={classes.btn} onClick={handleSave}>Save</button>
            <button className={classes.btn} onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
      {
        !!values.length && (
          <div className={classes.output}>
            <div>Selected emails:</div>
            <div>{values.map((item, index) => {
              return (
                <span className={classes.emailOutput} key={index}>{item}
                  <button className={classes.removeBtn} onClick={() => {removeEmail(index)}}>&times;</button>
                </span>
              )
            })}</div>
          </div>
        )
      }
    </div>
  )
}

export {EmailForm}