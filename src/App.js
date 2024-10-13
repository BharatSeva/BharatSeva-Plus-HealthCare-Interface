import './App.css';
import HomePage from './HIP Interface/Dashboard/HomePage/HomePage';
function App() {

  return (
    <>
      <div className='DisplaySmallScreen'>
        <HomePage />
      </div>
      <div className='displaySmallscreentext'>
        <h2>Bharat Seva Healthcare InterFace</h2>
        <h4>Note</h4>
        I'm Glad to Know That You Have Shown Interest in My project, but for now this Site is Only Available for
        Screens having Width Larger than 900px. Please Switch to Desktop Device for best Experience! <br>
        </br>Sorry For Inconvenience, Thank You For Your Interest 😊

      </div>
    </>
  );
}

export default App;
