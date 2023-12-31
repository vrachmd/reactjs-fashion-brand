import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from "./sections/Home";
import About from "./sections/About";
import Products from "./sections/Products";
import Social from "./sections/Social";
import Footer from "./sections/Footer";
import Quotes from "./sections/Quotes";




function App() {

  const containerRef = useRef(null)

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>

        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
              smartphone: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              }
            }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>

          
            <Home />
            <About />
            <Products />
            <Quotes />
            <Social />
            <Footer />
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>


    </>
  );
}

export default App;
