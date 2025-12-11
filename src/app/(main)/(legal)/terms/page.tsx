const termsSections = [
  {
    title: "Acceptance of Terms",
    items: [
      "By using our website, you agree to comply with these Terms & Conditions.",
      "If you do not agree, do not use our platform or purchase products.",
    ],
  },
  {
    title: "Account Responsibilities",
    items: [
      "You must provide accurate, complete, and current information when creating an account.",
      "You are responsible for keeping your login credentials secure.",
      "You are responsible for all activity under your account.",
    ],
  },
  {
    title: "Product Information",
    items: [
      "We make every effort to provide accurate product descriptions, images, and pricing.",
      "Medicines sold on our platform require a valid prescription where applicable.",
      "We reserve the right to correct errors or update information at any time.",
    ],
  },
  {
    title: "Order and Payment",
    items: [
      "Orders are subject to acceptance and availability.",
      "Payment must be made at the time of purchase.",
      "We may cancel or refuse orders for any reason, including prescription verification failure.",
    ],
  },
  {
    title: "Limitation of Liability",
    items: [
      "We are not liable for indirect, incidental, or consequential damages.",
      "Use of the platform is at your own risk.",
      "We do not replace professional medical advice; always consult a healthcare professional before using medicines.",
    ],
  },
  {
    title: "Intellectual Property",
    items: [
      "All content on the website, including text, images, and logos, is our property or used with permission.",
      "You may not reproduce, distribute, or use our content without explicit written permission.",
    ],
  },
  {
    title: "Governing Law",
    items: [
      "These Terms & Conditions are governed by the laws of [Your Country/Region].",
      "Any disputes will be resolved in the competent courts of [Your City/Region].",
    ],
  },
  {
    title: "Modifications",
    items: [
      "We may update these Terms & Conditions at any time.",
      "Continued use of the platform after changes indicates acceptance of the updated terms.",
    ],
  },
];

const TermsPage = () => {
  return (
    <>
      <header className="ui-container my-6 space-y-2">
        <h1 className="text-2xl font-black">Terms & Conditions</h1>
        <p className="text-sm leading-relaxed">
          These Terms & Conditions govern your use of our platform and the
          purchase of products. Please read them carefully before using our
          services.
        </p>
      </header>

      <section className="ui-container space-y-5">
        {termsSections.map((section, index) => (
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
        By using our platform, you agree to these Terms & Conditions. We may
        update this page from time to time, and continued use means acceptance
        of the updated version.
      </footer>
    </>
  );
};

export default TermsPage;
