export const Shipping = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-[20px]">SHIPPING</h2>
      <p>
        For customers in the <strong>United States</strong> Free Shipping
        applies to all orders over $75.00 USD.
      </p>
      <p className="underline"> International Customers </p>
      For customers outside the US please refer to the shipping section in the
      checkout for the most up to date Shipping rates and estimated delivery
      times.
      <p>
        <strong>
          Please note that all items are shipped from the United State
        </strong>
        . As a service, local import taxes are included within the price you pay
        where possible.
      </p>
      Import Duties are calculated and are charged at the checkout where
      applicable
    </div>
  );
};
