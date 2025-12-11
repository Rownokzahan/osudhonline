const paymentSections = [
  {
    title: "Payment Methods",
    items: [
      "We accept major credit/debit cards, mobile payment apps, and online banking.",
      "Payment must be completed at the time of purchase to confirm your order.",
      "Cash on delivery may be available for selected locations only.",
    ],
  },
  {
    title: "Pricing",
    items: [
      "All prices are displayed in [Your Currency] and include applicable taxes.",
      "Prices are subject to change without notice, but confirmed orders will be charged at the displayed price.",
      "Discounts, promotions, or coupon codes cannot be combined unless explicitly stated.",
    ],
  },
  {
    title: "Order Confirmation",
    items: [
      "You will receive an email or SMS confirmation after successful payment.",
      "Orders are only processed after payment has been verified.",
      "Payment errors may delay your order; please contact support if this occurs.",
    ],
  },
  {
    title: "Refunds and Adjustments",
    items: [
      "Refunds will be processed according to our Return Policy.",
      "Partial refunds may apply if only part of an order is returned or canceled.",
      "Any payment-related disputes must be reported within 7 days of the transaction.",
    ],
  },
  {
    title: "Security",
    items: [
      "All payments are processed through secure, PCI-compliant gateways.",
      "We do not store full credit card information on our servers.",
      "Always ensure your payment details are entered on a secure connection.",
    ],
  },
  {
    title: "Taxes and Fees",
    items: [
      "Applicable taxes are added automatically at checkout.",
      "Additional service fees may apply for express delivery or special handling.",
      "You are responsible for any fees charged by your bank or payment provider.",
    ],
  },
];

const FeesPaymentsPage = () => {
  return (
    <>
      <header className="ui-container my-6 space-y-2">
        <h1 className="text-2xl font-black">Fees & Payments</h1>
        <p className="text-sm leading-relaxed">
          This page explains the payment methods, fees, pricing, and refund
          procedures for purchases made on our platform. Please review carefully
          before completing your order.
        </p>
      </header>

      <section className="ui-container space-y-5">
        {paymentSections.map((section, index) => (
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
        By making payments on our platform, you agree to these terms. We may
        update this page periodically, and continued use of our services implies
        acceptance of the updated terms.
      </footer>
    </>
  );
};

export default FeesPaymentsPage;
