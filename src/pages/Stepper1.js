import React from 'react';

function Stepper1() {
  return (
    <div style={{height:"100px",width:"100px"}}>
 <div class="md-stepper-horizontal orange">
    <div class="md-step active done">
      <div class="md-step-circle"><span>1</span></div>
      <div class="md-step-title">Checkout</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div class="md-step active editable">
      <div class="md-step-circle"><span>2</span></div>
      <div class="md-step-title">Shipping</div>
      <div class="md-step-optional">Optional</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div class="md-step active">
      <div class="md-step-circle"><span>3</span></div>
      <div class="md-step-title">Payment</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div class="md-step">
      <div class="md-step-circle"><span>4</span></div>
      <div class="md-step-title">Review</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
  </div>
  </div>
  );
}

export default Stepper1;
