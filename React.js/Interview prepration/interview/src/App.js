import logo from './logo.svg';
import './App.css';
import ChildA from './Props/ChildA';

const App = () => {
  const name = "Karad is well known for sugar production and is known as the sugar bowl of Maharashtra owing to the presence of many sugar factories in and around Karad. It is considered as an important educational hub in Western Maharashtra due to the presence of many prestigious educational institutes."
  return (
    <>
      <h1> Props Driling</h1>
      <ChildA name={name} />
    </>
  );
}

export default App;
