import './Form.css'
import {useState, useRef, useEffect, useMemo} from 'react'

const initialName = 'NAME'
const initialEmail = 'EMAIL'

function Form() {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const [userName, setUserName] = useState(initialName)
  const [userEmail, setUserEmail] = useState(initialEmail)
  const [animatedOutput, setAnimatedOutput] = useState(false)
  
  const styles = useMemo(() => ({
    transform: animatedOutput ? 'translateX(-50px)' : 'translateX(50px)',
    transition: 'all 1s linear'
  }), [animatedOutput])

  useEffect(() => {
  }, [userName, userEmail])
  
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
    <div className='wrapper'>
      <div className='container' 
        onMouseOver={handleFocus} 
        onMouseOut={handleUnFocus}
      >
        <form className='form' onSubmit={handleSubmit}>
          <div className='input'>
            <label htmlFor='username'>User name </label>
            <input 
              ref={inputRef} 
              type='text' 
              onChange={(e) => setInput(e.target.value)} 
              value={input}
              placeholder='username'
            />
          </div>
          <div className='btns'>
            <button className='btn' onClick={handleSave}>Save</button>
            <button className='btn' onClick={handleGenerate}>Generate email</button>
            <button className='btn' onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
      <div className='output'>
        <div style={styles}>Saved name: {userName}</div>
        <div style={styles}>Suggested email: {userEmail}</div>
      </div>
    </div>
  )
}

export {Form}