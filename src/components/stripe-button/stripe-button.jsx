import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Is7BELkANskjdp5zbcdflCFx3lc0NRdXuWxTD98lEJavNVFxZZXPbweSbpqPqQO9m5fjWoKO2sYdzj3lG0MDV0M00czwRtBvs";

  const onToken = () => {
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="DITA Shopping Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
