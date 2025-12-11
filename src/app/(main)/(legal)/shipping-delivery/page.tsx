const shippingDeliverySections = [
  {
    title: "Delivery Areas",
    items: [
      "We deliver across [Your Country/Region].",
      "Remote or hard-to-reach areas may have extended delivery times.",
      "International delivery is not available at this time.",
    ],
  },
  {
    title: "Shipping Methods",
    items: [
      "Standard Delivery: 3–5 business days.",
      "Express Delivery: 1–2 business days (additional fee applies).",
      "Same-Day Delivery: Available in select cities for orders placed before [cut-off time].",
    ],
  },
  {
    title: "Order Processing",
    items: [
      "Orders are processed once payment and prescription verification (if required) are complete.",
      "Processing times may vary depending on product availability.",
      "You will receive a confirmation email or SMS once your order is shipped.",
    ],
  },
  {
    title: "Tracking Your Order",
    items: [
      "You will receive a tracking number via email or SMS after your order is dispatched.",
      "Use the tracking number to monitor delivery status on the courier’s website.",
    ],
  },
  {
    title: "Delivery Issues",
    items: [
      "If a package is delayed, damaged, or lost, contact customer support immediately.",
      "We are not responsible for delays caused by courier services, weather, or unforeseen circumstances.",
      "Ensure your delivery address and contact details are accurate to prevent delays.",
    ],
  },
  {
    title: "Shipping Charges",
    items: [
      "Standard delivery charges are calculated at checkout based on location and order weight.",
      "Express and same-day delivery incur additional fees.",
      "Free shipping may be offered for promotions or minimum order amounts.",
    ],
  },
];

const ShippingDeliveryPage = () => {
  return (
    <>
      <header className="ui-container my-6 space-y-2">
        <h1 className="text-2xl font-black">Shipping & Delivery</h1>
        <p className="text-sm leading-relaxed">
          This page outlines how we handle shipping and delivery of your orders,
          including timelines, methods, and tracking.
        </p>
      </header>

      <section className="ui-container space-y-5">
        {shippingDeliverySections.map((section, index) => (
          <article key={index} className="space-y-2">
            <h2 className="font-extrabold">{section.title}</h2>
            <ul className="list-disc pl-5 space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-sm leading-normal">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <footer className="ui-container my-6 text-sm text-dark-light">
        By placing an order, you agree to our Shipping & Delivery terms. We may
        update this page periodically, and continued use of our services implies
        acceptance of the updates.
      </footer>
    </>
  );
};

export default ShippingDeliveryPage;
