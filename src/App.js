import { Provider } from "react-redux";
import "./App.css"
import Header from "./Components/Header";
import store from "./Utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import MainContainer from "./Components/MainContainer"
import { Watch } from "./Components/Watch";
import SearchListing from "./Components/SearchListing";

const Application = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <Watch />
      },
      {
        path: '/results',
        element: <SearchListing />
      }
    ]
  }
])


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
