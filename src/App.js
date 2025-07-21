import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponents from './components/ParentComponents';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylessheet from './components/Stylessheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import ReactHook from './components/react-hook/ReactHook';



class App extends Component {
  render() {
  return (
    <div className="App">
    {/* <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}
    <ReactHook />
      {/* <Inline /> */}
      {/* <Stylessheet primary={true} />  */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponents /> */}
      <EventBind />  
      {/* <FunctionClick /> */}
      {/*<ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        This is children props
        </Greet> 
      <Greet name="Clark" heroName="Superman">
        <button>Action</button> 
        </Greet>
      <Greet name="Diana" heroName="Wonder Women" children={<b>Arman</b>} />  */}

      {/* <Welcome name="Bruce" heroName="Batman"/>   
      <Welcome name="Clark" heroName="Superman"/> 
      <Welcome name="Diana" heroName="Wonder Women"/> */} 
      {/*<Hello /> */}
    </div>
  );
}
}

export default App;
