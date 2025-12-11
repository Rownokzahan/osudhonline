const policySections = [
  {
    title: "Information We Collect",
    items: [
      "Personal details such as name, phone number, email, and delivery address.",
      "Medical-related information required to verify prescriptions.",
      "Order history, browsing behavior, and device information.",
    ],
  },
  {
    title: "How We Use Your Information",
    items: [
      "Processing orders and delivering purchased medicine.",
      "Providing customer support and verifying prescriptions when necessary.",
      "Improving our platform, detecting fraud, and ensuring account security.",
    ],
  },
  {
    title: "How We Share Your Data",
    items: [
      "Delivery partners to complete your orders.",
      "Healthcare professionals for prescription validation.",
      "Legal authorities if required by law.",
    ],
  },
  {
    title: "Data Security",
    items: [
      "We store your data using industry-standard encryption.",
      "Strict access controls to prevent unauthorized access.",
      "Regular audits and monitoring to detect potential risks.",
    ],
  },
  {
    title: "Your Rights",
    items: [
      "Request data deletion or correction.",
      "Access your stored information at any time.",
      "Opt out of marketing communications.",
    ],
  },
];

const PrivacyPolicyPage = () => {
  return (
    <>
      <header className="ui-container my-6 space-y-2">
        <h1 className="text-2xl font-black">Privacy Policy</h1>
        <p className="text-sm leading-relaxed">
          We respect your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your data when you shop with us.
        </p>
      </header>

      <section className="ui-container space-y-5">
        {policySections.map((section, index) => (
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
        By using our platform, you agree to this Privacy Policy. We may update
        this page from time to time, and continued use means you accept the
        updated version.
      </footer>
    </>
  );
};

export default PrivacyPolicyPage;
