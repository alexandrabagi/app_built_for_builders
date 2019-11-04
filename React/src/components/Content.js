import React from "react";
import ButtonSubmit from './ButtonSubmit'

export default ({ close }) => (
  <div className="modal">
    <div className="header"> Choose Coworker</div>
    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
      commodi beatae optio voluptatum sed eius cumque, delectus saepe
      repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
      Vitae?
    </div>
    <button className="close" onClick={close}>Save</button>
  </div>
);