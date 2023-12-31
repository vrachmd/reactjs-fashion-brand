import React, { useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const NavContainer = styled(motion.div)`
width: 100vw;


position: absolute;
top: ${props => props.click ? '0' : `-${props = props.theme.navHeight}`};
z-index: 7;
color: white;

display: flex;
justify-content: center;
align-items: center;

transition: all 0.3s ease;

`
const MenuItems = styled(motion.ul)`
position: relative;
height: ${props => props.theme.navHeight};
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
list-style: none;


display: flex;
justify-content: space-around;
align-items: center;

width: 100%;
padding:0 5rem;

@media screen and (max-width: 768px) {
  
  padding: 0 3rem;
}

@media screen and (max-width: 480px) {
  padding: 0 1rem;
  font-size: ${props => props.theme.fontsm};
}
`

const MenuItem = styled(motion.li)`
text-transform: upercase;
color: ${props => props.theme.text};

`


const MenuButton = styled.li`

list-style-type: none;

cursor: pointer;

position: absolute;
top: 100%;
left: 50%;

.container {
  
  height: 100vh;
  
  text-align: center;
}

.content {
  position: absolute;
  left: 50%;
  top: 7%;
	transform: translate(-50%, -50%);
  height: 25px;
  
  p {
    margin: 0 0 20px;
  }
  
}

/* Arrow & Hover Animation */
#more-arrows {
	width: 75px;
  height: 65px;
  
  &:hover {
    
    polygon {
      fill: #FFF;
      transition: all .2s ease-out;

      &.arrow-bottom {
        transform: translateY(-18px);
      }

      &.arrow-top {
        transform: translateY(18px);
      }
      
    }
  
  }
  
}

polygon {
  fill: #FFF;
  transition: all .2s ease-out;
    
  &.arrow-middle {
	  opacity: 0.75;
	}

	&.arrow-top {
	  opacity: 0.5
	}

  	 
}


`

const Navbar = () => {
      const [click, setClick] = useState(false);

      const {scroll} = useLocomotiveScroll();

  const handleScroll = (id) => {
    setClick(!click);
    let elem = document.querySelector(id);

    scroll.scrollTo(elem,
    {
        offset:'-100',
        duration:'2000',
        easeing: [0.25,0.0,0.35,1.0]



    }
    )
  }
  return (
    <NavContainer click={click}
    initial={{
      y: '-200%'
    }}
    animate={{
      y:0
    }}
    transition={{
      duration:2, delay:2
    }}
    > 
     <MenuItems
     drag="y"
     dragConstraints={{
        top: 0,
        bottom: 70,
     }}
     dragElastic={0.5}
     dragSnapToOrigin
     >
      <MenuButton onClick={() => setClick(!click)}>
      <div class="container">
  <div class="content">
    <svg id="more-arrows">
      <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
      <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
      <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
    </svg>
  </div>
</div>
      </MenuButton>
      <MenuItem
      onClick={() => handleScroll('#home')}
      whileHover={{scale:1.1,y:-5}}
      whileTap={{scale:0.9, Y:0}}
      >Home</MenuItem>
      <MenuItem
      onClick={() => handleScroll('.about')}
      whileHover={{scale:1.1,y:-5}}
      whileTap={{scale:0.9, Y:0}}
      >About</MenuItem>
      <MenuItem
      onClick={() => handleScroll('#products')}
      whileHover={{scale:1.1,y:-5}}
      whileTap={{scale:0.9, Y:0}}
      >Products</MenuItem>
      <MenuItem
      whileHover={{scale:1.1,y:-5}}
      whileTap={{scale:0.9, Y:0}}
      ><a href="https://store.carrotcore.com">Shop</a></MenuItem>
      <MenuItem
      onClick={() => handleScroll('#contacts')}
      whileHover={{scale:1.1,y:-5}}
      whileTap={{scale:0.9, Y:0}}
      >Contact Us</MenuItem>
     </MenuItems>
    </NavContainer>
  )
}

export default Navbar