import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies/Movies";
import Watchlist from "./components/watchlist/Watchlist";
import Contatct from "./components/contatct/Contatct";
import About from "./components/about/About";
import Error from "./components/error/Error";
import Search from "./components/search/Search";
import Details from "./components/details/Details";
import { useEffect, useState } from "react";
import PreLoader from "./components/loading/PreLoader";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
1
2
3
4
5
6
7
8
9
10
1
1
function App() {
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2400);
  }, []);

  return (
    
    <>
      {pageLoading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/MovieInfoApp" element={<Home />} />
            <Route path="/MovieInfoApp/movies" element={<Movies />} />
            <Route
              path="/MovieInfoApp/movies/:movieId"
              element={<Details />}
            />
            <Route path="/MovieInfoApp/watchlist" element={<Watchlist />} />
            <Route path="/MovieInfoApp/search" element={<Search />} />
            <Route path="/MovieInfoApp/about" element={<About />} />
            <Route path="/MovieInfoApp/contact" element={<Contatct />} />
            <Route
              path="/MovieInfoApp/*"
              element={<Error msg="Page Not Found" btn="true" height={100} />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
