import './App.css'
import {Form} from "./components/Form/Form";
import {EmailForm} from "./components/EmailForm/EmailForm";

function App() {
  return (
    <div className='main'>
      <div className='main-container'>
        <Form />
        <EmailForm />
      </div>
    </div>
  )
}

export default App;
