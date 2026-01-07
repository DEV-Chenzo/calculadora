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
        <Input type="text" placeholder="0" />
        <GridContainer>
          <Button className="gray">C</Button>
          <Button className="gray">±</Button>
          <Button className="gray">%</Button>
          <Button className="orange">÷</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button className="orange">×</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button className="orange">−</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button className="orange">+</Button>
          <Button className="spanTwo">0</Button>
          <Button>,</Button>
          <Button className="orange">=</Button>
        </GridContainer>
      </MainContainer>
    </>
  );
}

export default App;
