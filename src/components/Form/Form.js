import classes from './Form.module.css'
import {useState, useRef} from 'react'

const initialName = 'NAME'
const initialEmail = 'EMAIL'

function Form() {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const [userName, setUserName] = useState(initialName)
  const [userEmail, setUserEmail] = useState(initialEmail)
  const [animatedOutput, setAnimatedOutput] = useState(false)
  
  const styles = {
    transform: animatedOutput ? 'translateX(-50px)' : 'translateX(50px)',
    transition: 'all 1s linear'
  }
  
  function handleFocus() {
    inputRef.current.focus()
  }

  function handleUnFocus() {
    inputRef.current.blur()
  }

  function handleReset() {
    if (userName !== initialName) {
      setInput('')
      setUserName(initialName)
      setUserEmail(initialEmail)
      setAnimatedOutput(prev => !prev)
    }
  }
  
  function handleSave() {
    if (input.trim()) {
      setUserName(input)
      setInput('')
      setAnimatedOutput(prev => !prev)
    }
  }

  function handleGenerate() {
    if (userName !== initialName) {
      setUserEmail(`${userName}@gmail.com`) 
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className={classes.wrapper}>
      <div 
        className={classes.container} 
        onMouseOver={handleFocus} 
        onMouseOut={handleUnFocus}
      >
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.input}>
            <label htmlFor='username'>User name </label>
            <input 
              ref={inputRef} 
              type='text' 
              onChange={(e) => setInput(e.target.value)} 
              value={input}
              placeholder='username'
            />
          </div>
          <div className={classes.btns}>
            <button className={classes.btn} onClick={handleSave}>Save</button>
            <button className={classes.btn} onClick={handleGenerate}>Generate email</button>
            <button className={classes.btn} onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
      <div className={classes.output}>
        <div style={styles}>Saved name: {userName}</div>
        <div style={styles}>Suggested email: {userEmail}</div>
      </div>
    </div>
  )
}

export {Form}