import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import themeConfigs from "./config/theme.configs";
import { ThoastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material/CssBaseline";

const App = () => {
  const { themeMode } = useSelector((state) => state.themeMode);
  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      {/* config toastify */}
      <ThoastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme={themeMode}
        position="bottom-left"
      />

      {/* mui reset css */}
      <CssBaseline />
      App
    </ThemeProvider>
  );
};

export default App;
