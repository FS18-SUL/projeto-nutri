import { ConfigProvider } from "antd";
import Paths from "./routes/Paths";

const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#85CFAA',
            colorPrimaryBgHover: '#41745A',
          }
        }}
      >
        <Paths />
      </ConfigProvider>
    </>
  );
}

export default App;