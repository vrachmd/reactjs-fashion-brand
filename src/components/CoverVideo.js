import React from 'react'
import styled from 'styled-components'
import MainVideo from '../assets/Walking Girl.mp4'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const VideoContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;

video{
  width: 100%;
  height: 100vh;
  object-fit: cover;

  @media (max-width: 40em){
    object-position: center 10%;
  }
}
@media (max-width: 30em){
  object-position: center 10%;
  }

`

const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;

background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
`

const Logo = styled(motion.div)`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

svg{
  width: 600px;
}


`

const container = {
  hidden : {
    opacity: 0,
    
  },
  show : {
    opacity: 1,
    

    transition:{
      duration: 3,
      ease: 'easeInOut',
    }
  },
}



const CoverVideo = () => {
  return (
    <VideoContainer>
    <DarkOverlay />
    <Logo variants={container} initial="hidden" animate="show">
    <Link to="/" data-scroll data-scroll-speed="3">
<svg version="1.1" viewBox="0 0 1600 1600" xmlns="http://www.w3.org/2000/svg">
<path transform="translate(619 489)" d="m0 0c2.68 1.62e-4 5.36-0.0137 8.04-0.041 16.7-0.157 32.4 0.547 48.7 4.41 1.83 0.424 1.83 0.424 3.7 0.856 2.98 0.735 5.92 1.54 8.86 2.39 1.55 0.446 1.55 0.446 3.14 0.901 23.3 6.85 44.6 16.7 64.3 30.8 1.61 1.15 1.61 1.15 3.25 2.32 34.8 25.8 60.8 63.9 69.3 107 0.29 1.45 0.598 2.9 0.916 4.35 1.36 6.32 2.05 12.6 2.49 19 0.0827 1.13 0.165 2.25 0.25 3.42 0.53 7.68 0.891 15.4 1.18 23.1 1.59 42.2 5.86 84.1 25.6 122 0.506 0.982 0.506 0.982 1.02 1.98 5.11 9.78 10.9 18.5 18 27 0.656 0.821 1.31 1.64 1.99 2.49 7.63 9.14 17.6 15.8 28 21.5 1.15 0.638 2.29 1.28 3.48 1.93 18 9.7 35 13 55.4 12.7 3.41-0.0475 6.82-0.041 10.2-0.0278 12.2-0.0315 23.2-0.811 34.9-4.64 1.23-0.377 1.23-0.377 2.48-0.761 14.1-4.54 27.4-11.3 38.5-21.2 0.729-0.649 0.729-0.649 1.47-1.31 3.56-3.18 7.05-6.42 10.5-9.69 0.66-0.617 1.32-1.23 2-1.87 19.1-18.4 32.4-43.4 43.4-67.3 0.604-1.31 0.604-1.31 1.22-2.64 0.786-1.71 1.56-3.42 2.33-5.13 0.355-0.772 0.71-1.54 1.08-2.34 0.31-0.689 0.621-1.38 0.941-2.09 1.04-1.6 1.04-1.6 4.04-2.6v101c-5.65 2.51-10.4 4.57-16.2 6.22-0.643 0.183-1.29 0.367-1.95 0.556-2.06 0.584-4.12 1.16-6.19 1.73-0.713 0.198-1.43 0.397-2.16 0.601-11.4 3.17-22.8 5.89-34.5 7.9-2.3 0.413-4.6 0.825-6.9 1.24-16 2.82-32 4.93-48.2 6.45-2.09 0.224-4.17 0.51-6.24 0.835-3.93 0.511-7.79 0.636-11.7 0.642-1.14 0.00499-1.14 0.00499-2.3 0.0101-1.6 0.00504-3.2 0.00741-4.8 0.00725-2.4 0.00217-4.8 0.0203-7.21 0.0393-8.05 0.0293-15.7-0.309-23.7-1.73-2.81-0.475-5.56-0.747-8.4-0.956-41-3.43-80.8-22.5-112-49-1.69-1.44-3.4-2.85-5.11-4.25-30.4-25.8-50.8-70.8-54.5-110-0.316-4.04-0.382-8.07-0.417-12.1-0.0256-1.81-0.052-3.62-0.0791-5.42-0.0133-0.934-0.0265-1.87-0.0402-2.83-0.436-28.2-2.19-55.7-8.67-83.3-0.199-0.859-0.397-1.72-0.602-2.6-5.49-23.4-14.1-46.9-28.4-66.4-1.05-1.49-1.05-1.49-2.11-3.01-18.5-25.7-46.3-40.9-77.3-46.6-7.8-1.27-15.7-2.1-23.6-2.43-1.12-0.0529-2.23-0.106-3.38-0.16-7.71-0.198-14.7 0.765-22.2 2.44-2.8 0.593-5.44 0.99-8.29 1.22-4.68 0.459-8.75 1.84-13.1 3.5-1.11 0.401-2.23 0.802-3.38 1.21-9.56 3.54-18.1 8.17-26.6 13.8-0.785 0.518-1.57 1.04-2.38 1.57-11.8 8.56-22.8 20.2-30.6 32.4-0.437 0.668-0.875 1.34-1.33 2.03-10.1 15.5-19.2 31.3-26.9 48.1-1.83 4.01-3.8 7.94-5.79 11.9h-2c-0.973-2.92-1.12-4.77-1.12-7.8-0.00137-0.989-0.00275-1.98-0.00417-3 0.0036-1.08 0.00719-2.17 0.0109-3.28-1.46e-4 -1.14-2.92e-4 -2.28-4.43e-4 -3.46 6.98e-4 -3.78 0.00848-7.56 0.0163-11.3 0.00186-2.62 0.00329-5.24 0.00429-7.86 0.00311-6.19 0.0113-12.4 0.0213-18.6 0.0112-7.05 0.0167-14.1 0.0217-21.2 0.0105-14.5 0.028-29 0.0503-43.5 0.605 0.0873 1.21 0.175 1.83 0.264 2.76 0.398 5.53 0.795 8.29 1.19 1.43 0.206 1.43 0.206 2.88 0.416 17.9 2.57 35.6 2.94 53.5 0.909 6.56-0.734 13.1-1.14 19.7-1.35 4.6-0.177 9.12-0.591 13.7-1.16 13.1-1.58 26.2-1.64 39.4-1.64z" fill="#ffffff"/>
<path transform="translate(1024 489)" d="m0 0c0.827 0.0605 1.65 0.121 2.51 0.183 0.777 0.06 1.55 0.12 2.36 0.182 0.672 0.0511 1.34 0.102 2.04 0.155 1.68 0.181 3.36 0.448 5.02 0.75 3.35 0.514 6.52 0.611 9.91 0.613 0.646 0.00175 1.29 0.0035 1.96 0.00531 2.12 0.00437 4.24 0.0015 6.36-0.00189 1.48 6.74e-4 2.96 0.00165 4.44 0.0029 3.1 0.00147 6.19-6.57e-4 9.29-0.00534 3.96-0.0057 7.93-0.00241 11.9 0.00357 3.06 0.00362 6.11 0.00246 9.17-1.28e-4 1.46-6.65e-4 2.92 1.45e-4 4.38 0.00248 2.04 0.00255 4.09-0.00135 6.13-0.0069 1.16-7.96e-4 2.32-0.00159 3.52-0.00241 3-0.034 3-0.034 5.46-0.635 3.82-0.71 7.76-0.492 11.6-0.492v118l-4-1c-1.46-2.44-1.46-2.44-2.81-5.7-0.512-1.2-1.02-2.4-1.55-3.63-0.266-0.639-0.533-1.28-0.807-1.94-9.84-23.5-22.4-44.2-38.8-63.7-0.498-0.633-0.995-1.27-1.51-1.92-4.43-5.53-9.9-9.77-15.5-14.1-0.782-0.61-1.56-1.22-2.37-1.85-28.3-20.9-67.2-26.1-101-21.5-31.1 5.23-60.4 21.6-78.8 47.4-2.23 3.26-4.36 6.59-6.44 9.95-0.367 0.581-0.733 1.16-1.11 1.76-7.68 12.3-12.9 25.7-17.9 39.2-3.14-2.92-4.7-6.23-6.5-10.1-3.1-6.38-6.49-12.5-10.2-18.6-0.451-0.745-0.902-1.49-1.37-2.26-2.69-4.35-5.57-8.27-8.95-12.1 9.95-10.8 20.6-19.1 33-27 0.672-0.432 1.34-0.864 2.04-1.31 14.1-9.01 29-15.8 44.9-21 1.99-0.656 3.97-1.34 5.95-2.02 38.1-12.9 78.6-10.4 118-7.41z" fill="#ffffff"/>
<path transform="translate(480,756)" d="m0 0c3.3 1.53 4.58 2.43 6.08 5.79 0.527 1.15 0.527 1.15 1.06 2.33 0.365 0.828 0.731 1.66 1.11 2.51 0.804 1.75 1.61 3.5 2.41 5.25 0.397 0.873 0.795 1.75 1.2 2.64 9.73 21.4 22.1 41.4 37.1 59.5 0.469 0.566 0.937 1.13 1.42 1.72 20.5 24.4 51.5 39.5 82.9 43.1 15.4 1.32 30.6 0.772 45.6-2.77 1.17-0.232 2.35-0.464 3.56-0.703 16.1-3.59 32.9-11.5 45.4-22.3 0.853-0.718 1.71-1.44 2.59-2.18 19.4-16.8 37.3-43.3 42.4-68.8h2c0.301 0.572 0.601 1.14 0.911 1.73 5.94 11.2 12 22.2 19.3 32.6 0.477 0.687 0.955 1.37 1.45 2.08 0.421 0.593 0.842 1.19 1.28 1.8 1.11 1.9 1.59 3.61 2.02 5.76-0.568 0.424-1.14 0.848-1.72 1.29-0.772 0.587-1.54 1.17-2.34 1.78-0.754 0.568-1.51 1.14-2.29 1.72-2.13 1.78-3.94 3.54-5.84 5.54-4.12 4.17-8.74 7.25-13.7 10.4-0.951 0.6-1.9 1.2-2.88 1.82-21.4 13.2-44.7 23.2-69.2 28.5-0.903 0.201-1.81 0.402-2.74 0.609-18.2 3.97-35.6 5.24-54.2 5.08-1.35-0.00518-2.7-0.0097-4.05-0.0136-24.4-0.0933-48.1-2.27-72-6.67-1.25-0.224-2.51-0.448-3.8-0.678-6.79-1.24-13.5-2.68-20.2-4.32-0.955-0.232-1.91-0.464-2.89-0.703-10.4-2.54-20.7-5.37-30.9-8.55-0.793-0.246-1.59-0.492-2.4-0.746-3.3-1.06-5.95-2.07-8.85-4-0.369-1.82-0.369-1.82-0.361-4.07-0.00412-0.853-0.00825-1.71-0.0125-2.58 0.0108-0.937 0.0216-1.87 0.0327-2.84-4.38e-4 -0.985-8.76e-4 -1.97-0.00133-2.99 0.0021-3.27 0.0255-6.54 0.0489-9.8 0.00559-2.26 0.00986-4.52 0.0129-6.78 0.0115-5.96 0.041-11.9 0.0741-17.9 0.0307-6.08 0.0444-12.2 0.0595-18.2 0.0322-11.9 0.0834-23.9 0.146-35.8z" fill="#ffffff"/>
<path transform="translate(1013,982)" d="m0 0c7.53 7 11.4 14.9 13 25 0.135 0.833 0.271 1.67 0.41 2.52 1.7 13.4-0.94 26.3-8.7 37.3-6.99 8.85-15.7 12.4-26.7 14.2-14.1 0.898-27.9-0.229-39-10-9.31-9.87-12.6-22.9-12.2-36.2 0.879-9.73 2.65-18.7 8.25-26.8l1.69-2.69c16-16 45.8-17 63.3-3.31zm-44.2 15.2c-5.83 9.04-6.01 19.3-4.34 29.8 1.47 5.71 3.85 10.4 8.53 14.1 5.51 3.14 10.5 3.48 16.6 1.92 5.55-2.16 8.5-5.09 11-10.4 1.77-5.07 1.88-10 1.84-15.3-5e-3 -0.974-0.00999-1.95-0.0151-2.95-0.168-6.89-0.779-12.8-5.48-18.2-5.15-4.72-10.5-5.35-17.3-5.28-4.95 0.511-7.53 3.08-10.9 6.47z" fill="#ffffff"/>
<path transform="translate(708,973)" d="m0 0c49.5 0 49.5 0 59 9 4.85 5.85 6.48 12.3 6.24 19.7-0.873 8.26-5.41 13.6-11.2 19.3l-3 2c1.67 5.05 4.6 9.14 7.56 13.5 0.797 1.19 0.797 1.19 1.61 2.4 2.5 3.72 5.03 7.41 7.62 11.1 0.626 0.888 0.626 0.888 1.27 1.79 1.12 1.58 2.26 3.16 3.39 4.74 1.55 2.5 1.55 2.5 1.55 5.5-2.29 0.0275-4.58 0.0466-6.88 0.0625-1.28 0.0116-2.55 0.0232-3.87 0.0352-0.677-0.0172-1.35-0.0343-2.05-0.052-1.58-0.0326-3.15-0.00634-4.73 0.0591-3.87-0.028-6.46-0.0922-9.28-2.9-1.65-2.48-3.03-4.99-4.38-7.64-1.02-1.83-2.03-3.66-3.05-5.49-0.475-0.879-0.951-1.76-1.44-2.66-1.6-2.93-3.29-5.74-5.13-8.54-0.69-1.09-0.69-1.09-1.39-2.2-2.28-2.4-2.28-2.4-8.79-3.68v32h-23v-88zm23 18c-0.0869 1.56-0.107 3.13-0.0977 4.69 0.00322 0.944 0.00645 1.89 0.00977 2.86 0.00838 0.993 0.0168 1.99 0.0254 3.01 0.00451 0.997 0.00902 1.99 0.0137 3.02 0.0118 2.47 0.0283 4.94 0.0488 7.42 5.19 1.12 9 0.847 14-1 2.89-2.25 3.79-3.78 4.41-7.38 0.279-4.68 0.159-6.9-2.78-10.7-3.58-2.65-5.29-3.08-9.69-3.06-0.898-0.00258-1.8-0.00516-2.72-0.00781-2.19-0.115-2.19-0.115-3.21 1.13z" fill="#ffffff"/>
<path transform="translate(826,973)" d="m0 0c4.76-0.05 9.53-0.086 14.3-0.11 1.62-0.00996 3.23-0.0235 4.85-0.041 29-0.306 29-0.306 38.9 9.12 5.93 6.46 6.22 11.1 6.14 19.8-0.486 7.25-3.35 12.8-8.81 17.7-1.45 1.22-2.93 2.41-4.41 3.59 3.58 9.64 10.3 18 16.2 26.3 2.62 3.76 4.88 7.48 6.82 11.7-3.39 0.227-6.79 0.428-10.2 0.625-1.44 0.0967-1.44 0.0967-2.91 0.195-0.931 0.0516-1.86 0.103-2.82 0.156-1.28 0.0786-1.28 0.0786-2.59 0.159-3.02-0.163-4.86-0.645-7.5-2.14-1.88-2.55-1.88-2.55-3.63-5.74-0.643-1.15-1.29-2.3-1.95-3.48-0.663-1.22-1.33-2.43-1.99-3.65-1.31-2.38-2.62-4.75-3.94-7.12-0.576-1.06-1.15-2.11-1.74-3.2-1.75-2.81-3.11-4.8-5.75-6.81-3.46-0.495-3.46-0.495-7-1v32l-10.4 0.562c-1.63 0.092-1.63 0.092-3.29 0.186-1.28 0.0647-1.28 0.0647-2.58 0.131-1.31 0.0707-1.31 0.0707-2.65 0.143-2.04-0.0217-2.04-0.0217-3.04-1.02-0.0952-2.74-0.126-5.45-0.114-8.19-1.46e-4 -0.858-2.92e-4 -1.72-4.43e-4 -2.6 6.99e-4 -2.85 0.00849-5.7 0.0163-8.55 0.00186-1.97 0.00329-3.94 0.00429-5.91 0.00383-5.2 0.0137-10.4 0.0247-15.6 0.0102-5.3 0.0148-10.6 0.0198-15.9 0.0107-10.4 0.0278-20.8 0.0488-31.2zm22 18c-0.099 1.55-0.131 3.1-0.133 4.66-0.00129 0.94-0.00258 1.88-0.00391 2.85 0.00387 0.989 0.00773 1.98 0.0117 3-0.00387 0.989-0.00773 1.98-0.0117 3 0.00129 0.94 0.00258 1.88 0.00391 2.85 0.00113 0.868 0.00226 1.74 0.00342 2.63-0.0948 2.02-0.0948 2.02 1.13 3.03 5.62 0.337 11.3 0.105 15.9-3.44 2.7-3.75 2.61-8.14 2.12-12.6-1.24-2.86-2.13-4.44-4.75-6.12-2.77-1.08-4.97-1.11-7.93-1.07-0.973 0.00645-1.95 0.0129-2.95 0.0195-2.32-0.0945-2.32-0.0945-3.36 1.17z" fill="#ffffff"/>
<path transform="translate(611 973)" d="m0 0c0.66-9.57e-4 1.32-0.00191 2-0.0029 1.4-6.82e-4 2.8 0.00117 4.19 0.00534 2.14 0.00534 4.28 5.91e-5 6.43-0.00635 1.36 6.61e-4 2.71 0.00194 4.07 0.00391 1.24 0.00113 2.48 0.00226 3.76 0.00342 2.97 0.129 2.97 0.129 4.97 1.13 0.787 2.07 1.47 4.19 2.11 6.31 0.203 0.664 0.407 1.33 0.616 2.01 0.445 1.45 0.888 2.91 1.33 4.37 5.03 16.6 10.6 33.1 16.3 49.5 2.84 8.19 5.61 16.3 7.68 24.8-8.15 1.81-16.8 1.49-25 0-0.67-2.12-1.34-4.25-2-6.38-0.371-1.18-0.742-2.37-1.12-3.59-0.875-3.04-0.875-3.04-0.875-5.04h-30l-5 15h-25c2.33-8.55 4.79-17 7.44-25.4 0.211-0.675 0.422-1.35 0.639-2.04 3.67-11.7 7.48-23.4 11.4-35 0.257-0.771 0.514-1.54 0.778-2.34 0.737-2.21 1.48-4.42 2.22-6.63 0.215-0.645 0.431-1.29 0.652-1.95 4.95-14.7 4.95-14.7 12.5-14.7zm7.41 16.1c-1.51 4.32-2.69 8.63-3.73 13.1-0.153 0.653-0.305 1.31-0.462 1.98-0.319 1.37-0.637 2.74-0.953 4.1-0.485 2.1-0.976 4.2-1.47 6.29-0.31 1.33-0.62 2.67-0.93 4-0.281 1.21-0.561 2.42-0.85 3.66-0.68 2.72-0.68 2.72-0.611 4.89 3.28 1.64 6.9 1.14 10.5 1.12 0.785 0.00387 1.57 0.00773 2.38 0.0117 4.19 0.101 4.19 0.101 8.12-1.14-2.65-12.9-6.06-25.4-10-38h-2z" fill="#ffffff"/>
<path transform="translate(536,979)" d="m0 0c-1.83 6-4.07 11.4-7 17-0.748-0.205-1.5-0.41-2.27-0.621-1.48-0.404-1.48-0.404-2.98-0.816-0.975-0.267-1.95-0.534-2.95-0.809-0.923-0.249-1.85-0.498-2.8-0.754-1.02-0.286-1.02-0.286-2.06-0.578-5.32-1.16-10.9-1.35-15.8 1.27-6.37 4.71-8.61 9.68-10.1 17.3-1.03 8.36 0.456 16.4 4 24 2.59 3.13 5.39 5.19 9 7 2.7 0.153 5.36 0.238 8.06 0.25 0.769 0.00395 1.54 0.0079 2.33 0.012 5.78-0.0592 10.2-1.16 15.6-3.26 2.23 0.41 2.23 0.41 4 1 0.0812 2.25 0.139 4.5 0.188 6.75 0.0522 1.88 0.0522 1.88 0.105 3.8-0.312 3.68-0.585 5-3.29 7.45-11.4 4.89-27.9 4.92-39.7 1.44-10.8-4.35-16.5-11.2-21.3-21.6-4.94-12.7-3.78-28.5 0.559-41.2 4.21-9.33 12.1-16.6 21.4-20.7 14.8-4.9 31.1-4.49 45 3z" fill="#ffffff"/>
<path transform="translate(1070,973)" d="m0 0c8.46-0.0231 16.9-0.0409 25.4-0.0518 3.93-0.00523 7.85-0.0123 11.8-0.0236 3.79-0.0108 7.57-0.0168 11.4-0.0194 1.45-0.00185 2.9-0.00547 4.34-0.0109 2.02-0.00721 4.04-0.00768 6.06-0.0078 1.73-0.00333 1.73-0.00333 3.49-0.00673 2.59 0.12 2.59 0.12 3.59 1.12 0.0998 2.68 0.139 5.32 0.125 8 0.00387 0.75 0.00773 1.5 0.0117 2.27-0.0101 5.6-0.0101 5.6-1.14 6.73h-21v70h-22l-1-69-21-1c-0.769-3.85-1.14-6.84-1.12-10.7-0.00258-0.953-0.00516-1.91-0.00781-2.89 0.133-2.43 0.133-2.43 1.13-4.43z" fill="#ffffff"/>
<path transform="translate(777 1128)" d="m0 0c4.07 3.17 5.99 6.97 6.95 12 0.306 5.18-1.2 9.87-4.38 14-5.68 4.37-12.2 3.85-19 3-3.88-1.63-5.56-4.09-7.38-7.88-1.32-6.59-0.784-11.1 2.38-17.1 5.47-6.49 13.7-6.25 21.4-4zm-13.4 6v2h-2c-1.22 3.65-1.39 6.16-1 10 1.39 2.65 2.71 3.92 5 6 2.54 0.834 2.54 0.834 5 0 2.5-1.33 2.5-1.33 4-4 0.744-4.43 0.509-7.94-1.44-12-1.41-1.89-1.41-1.89-2.56-3-3.63-0.191-3.63-0.191-7 1z" fill="#ffffff"/>
<path transform="translate(827,1127)" d="m0 0c2.7-0.0619 5.4-0.124 8.19-0.188 0.842-0.0273 1.68-0.0546 2.55-0.0828 4.57-0.0505 7.57 0.268 11.3 3.27 1.68 4.13 0.625 6.98-1 11-0.425 0.605-0.851 1.21-1.29 1.83-1.04 2.31-1.04 2.31 0.66 4.89 0.682 0.956 1.36 1.91 2.07 2.9 1.24 1.76 2.44 3.54 3.56 5.38l-1 2c-5.12 0.177-5.12 0.177-8-1-1.92-2.5-3.29-5.02-4.68-7.85-0.437-0.71-0.874-1.42-1.32-2.15h-3l-1 10h-7v-30zm8 6c-0.934 3.01-1.04 3.87 0 7 2.42 0.167 2.42 0.167 5 0l2-2c-0.32-2.6-0.32-2.6-1-5h-6z" fill="#ffffff"/>
<path transform="translate(894,1127)" d="m0 0h18l1 5c-3.17 1.59-6.49 1.6-10 2v4c3.07 0.911 5.8 1.09 9 1 0.0427 1.67 0.0406 3.33 0 5-2.05 2.05-6.3 1.7-9 2l-1 6h11v5c-6.46 1.33-12.6 1.6-19 0v-30z" fill="#ffffff"/>
<path transform="translate(710,1128)" d="m0 0v6c-0.759-0.0464-1.52-0.0928-2.3-0.141-0.994-0.0361-1.99-0.0722-3.01-0.109-0.986-0.0464-1.97-0.0928-2.99-0.141-2.79 0.136-2.79 0.136-4.54 2.16-2.41 4.63-1.39 10.3-0.16 15.2 1.42 0.0272 2.83 0.0465 4.25 0.0625 0.789 0.0116 1.58 0.0232 2.39 0.0352 2.27-0.0938 4.19-0.465 6.36-1.1-0.875 5.88-0.875 5.88-2 7-5.18 0.593-10.6 1.22-15.4-1.23-3.61-3.05-5.38-5.36-5.86-10.2-0.171-6.46 0.176-10.4 4.24-15.5 4.89-3.7 13.4-4.82 19-2z" fill="#ffffff"/>
</svg>
        </Link>
    </Logo>
        <video src={MainVideo}  type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo