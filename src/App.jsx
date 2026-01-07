import "./styles/reset.css";
import MainContainer from "./components/container/MainContainer";
import GridContainer from "./components/container/GridContainer";
import Input from "./components/Input";
import Button from "./components/Button";
function App() {
  return (
    <>
      <h1>Minha Calculadora</h1>
      <MainContainer>
        <Input type="text" placeholder="0" disabled />
        <GridContainer>
          <Button label='AC' variant="gray" />
          <Button label='±' variant="gray" />
          <Button label='%' variant="gray" />
          <Button label='÷' variant="orange" />
          <Button label='7' />
          <Button label='8' />
          <Button label='9' />
          <Button label='x' variant="orange" />
          <Button label='4' />
          <Button label='5' />
          <Button label='6'/>
          <Button label='-' variant="orange" />
          <Button label='1' />
          <Button label='2' />
          <Button label='3' />
          <Button label='+' variant="orange" />
          <Button label='0' double />
          <Button label=',' />
          <Button label='=' variant="orange" />
        </GridContainer>
      </MainContainer>
    </>
  );
}

export default App;
