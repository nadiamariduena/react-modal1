import React, { useState } from "react";
// 1 import the modal library
import Modal from "react-modal";
// Careful when naming the component Modal, as it will cause errors, name it ModalBox or Modal and something else.

Modal.setAppElement("#root"); //this is for the warning
const ModalBox = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="modal">
        <button onClick={() => setmodalIsOpen(true)}>Open Modal</button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setmodalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "grey",
            },
            content: {
              color: "orange",
              width: "600px",
              height: "200px",
              top: "25%",
              left: "25%",
            },
          }}
        >
          <h2>Modal Title</h2>
          <p>Modal Content</p>

          <button onClick={() => setmodalIsOpen(false)}>Close</button>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default ModalBox;

/*

The first thing you will do, is to see how the modal will look when opened,
like this you can see in your browser how the modal looks like.

Nothing incredible here!

  <Modal isOpen={true}>
          <h2>Modal Title</h2>
          <p>Modal Content</p>
        </Modal>

 Next you will add a button that you want to click to open the modal,
 for that instead of assigning TRUE to the isOpen property : isOpen={true},
We need to assign a state variable that can be set on button click, for state
we make use of the useSTATE HOOK: +

replace the following:

// import React from "react";

for this:

import React, { useState } from "react";

  
NOW within the component, call the useState HOOK,
The STATE variable is modalIsOpen, and the set function is setmodalIsOpen:

[modalIsOpen, setmodalIsOpen]

the default value is false:  =useState(false)
  

const [modalIsOpen, setmodalIsOpen] =useState(false)


We now pass this value of false : =useState(false) ,  to "IsOpen":  [modalIsOpen,

              NOW GO AND REPLACE THIS:

<Modal isOpen={true}>

for this:

 <Modal isOpen={modalIsOpen}>

              then on the click of the button, we will have an arrow function that will
              call setmodalIsOpen] and set it to true:  => setmodalIsOpen(true)}.

replace this:
   <button>Open Modal</button>

   for this:

<button onClick={() => setmodalIsOpen(true)}>Open Modal</button>



 "SO EN GROS(french) , from the base/default the modal is closed/false and
  when you click on it, it becomes true and you see the modal"


  NOW THAT I CAN OPEN IT, i would like to have a way to close it,
  So go and within the <Modal ... h2 etc, type the following:

   <button onClick={() => setmodalIsOpen(false)}>Close</button>

   this will allow you to close it if you click around the overlay:


   onRequestClose={() => setmodalIsOpen(false)}

*/
