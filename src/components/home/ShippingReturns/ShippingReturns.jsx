import React from 'react';
import { Link } from 'react-router-dom';

const ShippingReturns = () => {
  return (
    <div className="card bg-base-100 shadow-2xl my-12">
      <h2 className="text-3xl font-bold text-center pt-4 mb-4">
        Shipping and Returns
      </h2>
      <div className="card-body">
        <div>
          <h2 className="text-2xl font-bold mb-4">Shipping Policy</h2>

          <h3 className="text-xl font-bold mb-2">Processing Time</h3>
          <p className="mb-4">
            We strive to process and ship all orders within 1-2 business days.
            Please note that during peak seasons or promotional periods,
            processing times may be slightly longer.
          </p>

          <h3 className="text-xl font-bold mb-2">Shipping Methods</h3>
          <p className="mb-4">
            We offer various shipping methods to provide flexibility and
            convenience for our customers. You can select your preferred
            shipping option during the checkout process. Available shipping
            methods include standard ground shipping, expedited shipping, and
            overnight delivery.
          </p>

          <h3 className="text-xl font-bold mb-2">Shipping Rates</h3>
          <p className="mb-4">
            Our shipping rates are based on the total weight of your order,
            destination, and the selected shipping method. You can view the
            shipping costs for your order at the checkout before finalizing your
            purchase.
          </p>

          <h3 className="text-xl font-bold mb-2">Order Tracking</h3>
          <p className="mb-4">
            Once your order is shipped, you will receive a confirmation email
            with a tracking number. You can use this tracking number to monitor
            the progress of your shipment on our website or the carrier's
            tracking portal.
          </p>

          <h3 className="text-xl font-bold mb-2">International Shipping</h3>
          <p className="mb-4">
            We currently offer international shipping to select countries.
            Please note that international shipments may be subject to customs
            duties, taxes, or other fees imposed by the destination country.
            These additional charges are the responsibility of the recipient and
            are not included in the order total.
          </p>

          <h3 className="text-xl font-bold mb-2">Delivery Time</h3>
          <p className="mb-4">
            Delivery times vary depending on the destination and the selected
            shipping method. Estimated delivery times will be provided at the
            checkout. Please note that these are estimated times and actual
            delivery may take longer due to unforeseen circumstances or customs
            processing delays for international shipments.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Returns and Exchanges</h2>

          <h3 className="text-xl font-bold mb-2">Return Eligibility</h3>
          <p className="mb-4">
            We accept returns or exchanges for unused and unopened products
            within 30 days of the purchase date. To be eligible for a return or
            exchange, the item must be in its original packaging and in the same
            condition as when it was received.
          </p>

          <h3 className="text-xl font-bold mb-2">Return Process</h3>
          <p className="mb-4">
            To initiate a return or exchange, please contact our customer
            support team with your order details and reason for the return. Our
            team will provide you with further instructions and a return
            shipping address if applicable. Please note that return shipping
            costs are the responsibility of the customer, unless the return is
            due to a product defect or an error on our part.
          </p>

          <h3 className="text-xl font-bold mb-2">Refunds</h3>
          <p className="mb-4">
            Once we receive and inspect the returned item, we will process the
            refund within 5-7 business days. Refunds will be issued to the
            original form of payment used for the purchase. Please note that it
            may take additional time for the refund to reflect in your account,
            depending on your payment provider.
          </p>

          <h3 className="text-xl font-bold mb-2">Exchanges</h3>
          <p className="mb-4">
            If you would like to exchange your product for a different size,
            color, or model, please contact our customer support team to arrange
            the exchange. We will provide you with instructions and assist you
            in selecting the desired replacement. Any price difference between
            the original and exchanged items will be handled accordingly.
          </p>

          <h3 className="text-xl font-bold mb-2">Non-Returnable Items</h3>
          <p className="mb-4">
            Certain items are non-returnable, including but not limited to final
            sale items, gift cards, and personalized or custom-made products.
            Please check the product description or contact our customer support
            team if you have any questions about the return eligibility of a
            specific item.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="mb-4">
            If you have any further questions or need assistance with returns or
            exchanges, please don't hesitate to
            <Link>
              <button className="btn btn-outline btn-secondary capitalize ml-2 mr-2">
                contact us
              </button>
            </Link>
            Our dedicated support team is here to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturns;