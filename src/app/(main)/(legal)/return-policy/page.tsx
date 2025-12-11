const returnSections = [
  {
    title: "Eligibility for Returns",
    items: [
      "Products must be unused, unopened, and in original packaging.",
      "Prescribed medicines cannot be returned unless defective or incorrect.",
      "Returns must be requested within 7 days of delivery.",
    ],
  },
  {
    title: "How to Initiate a Return",
    items: [
      "Log in to your account and go to 'Order History'.",
      "Select the order and choose 'Request Return'.",
      "Follow instructions to prepare the package for pickup or drop-off.",
    ],
  },
  {
    title: "Refund Process",
    items: [
      "Refunds will be issued to the original payment method within 5–7 business days.",
      "Shipping charges are non-refundable unless the return is due to our error.",
      "You will receive an email confirmation once the refund is processed.",
    ],
  },
  {
    title: "Exchanges",
    items: [
      "Exchanges are allowed only for defective or incorrect products.",
      "Follow the return process first, then place a new order for the correct item.",
    ],
  },
  {
    title: "Contact Us",
    items: [
      "For questions regarding returns, reach out to our customer support via email or phone.",
      "Provide your order number and reason for return for faster processing.",
    ],
  },
];

const ReturnPolicyPage = () => {
  return (
    <>
      <header className="ui-container my-6 space-y-2">
        <h1 className="text-2xl font-black">Return Policy</h1>
        <p className="text-sm leading-relaxed">
          We want you to be satisfied with your purchase. This Return Policy
          explains how to return products, request refunds, and handle
          exchanges.
        </p>
      </header>

      <section className="ui-container space-y-5">
        {returnSections.map((section, index) => (
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
        By initiating a return, you agree to comply with this Return Policy. We
        may update it from time to time, and continued use of our platform means
        acceptance of any updates.
      </footer>
    </>
  );
};

export default ReturnPolicyPage;
