import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(true));
  }, []);
  return (
    {loading} && <>
      {/* <h1>loged in</h1> */}
      <Header/>
      <Footer/>
    </>
  );
}

export default App;
