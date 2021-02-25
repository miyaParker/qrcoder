import './App.css'
import CodePallete from './components/CodePallete/CodePallete'
import Form from './components/Form/Form'
import {useSelector} from 'react-redux'

function App() {
  const formType = useSelector(state=> state.form)
  return (
    <div className="app">
      <div className="flex">
        <Form type={formType}/>
        <CodePallete />
      </div>
    </div>
  );
}

export default App;
