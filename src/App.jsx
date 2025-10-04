
import { Provider } from 'react-redux'
import './App.css'
import Weather from './components/Weather'
import store from './redux/store'

function App() {
 

  return (
    <>
      <Provider store={store}>
         <Weather />
      </Provider>
    </>
  )
}

export default App
