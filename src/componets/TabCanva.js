// import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const NavContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
  padding: 0.5rem;
  background-color: #43A047;
  border-radius: 20px 20px 0 0;
  
`;

const NavItem = styled.li`
  display: flex;
`;

const NavLink = styled.button`
  padding: 5px;
  background-color: ${(props) => props.active ? 'var(--bs-white)' : 'transparent'};
  color: ${(props) => props.active ? 'var(--bs-black)' : 'white'};
  border: none;
  border-radius: 20px;
  transition: background-color 0.2s;

  /* &:hover {
    background-color: var(--bs-white);
    color: black;
  } */
`;

// Nav Component
const HeadCanva = () => {
//   const [activeTab, setActiveTab] = useState('home');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

  return (
    <NavContainer className="nav small shadow-sm">
      <NavItem>
        <NavLink
        //   active={activeTab === 'home'}
        //   onClick={() => handleTabClick('home')}
        >
          Chat
        </NavLink>
      </NavItem>
    </NavContainer>
  );
};

export default HeadCanva;







// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// const options = [
//     {
//         name: 'Chat',
//         scroll: true,
//         backdrop: false,
//     },
//     {
//         name: 'Notification',
//         scroll: true,
//         backdrop: false,
//     },
//     {
//         name: 'About',
//         scroll: true,
//         backdrop: false,
//     },
// ];

// function OffCanvasExample({ name, ...props }) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const toggleShow = () => setShow((s) => !s);

//     return (
//         <>
            
//             <span onClick={toggleShow} className="me-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text" viewBox="0 0 16 16">
//                     <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
//                     <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
//                 </svg>
//                 {name}
//             </span>
//             <Offcanvas show={show} onHide={handleClose} {...props}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>{name}</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>

//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     );
// }

// function Example() {
//     return (
//         <>
//             {options.map((props, idx) => (
//                 <OffCanvasExample key={idx} {...props} />
//             ))}
//         </>
//     );
// }

// // render(<Example />);
// export default Example;