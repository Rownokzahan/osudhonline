import { BsCapsulePill } from "react-icons/bs";
import { MdThumbUpOffAlt } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

const FEATURES = [
  {
    Icon: MdThumbUpOffAlt,
    title: "Convenience",
    paragraphs: [
      "Heavy traffic, lack of parking, bad weather, shop closures, and simple forgetfulness are common reasons people miss vital medications. Since taking medicines regularly is a critical part of managing chronic conditions, it’s best not to run out of essential medicines. Just log on to Osudhonline, place your order online, and have your medicines delivered to you without leaving the comfort of your home.",
      "What’s more, with easy access to reliable drug information, you get to know all about your medicine at Osudhonline. Once you’re an Osudhonline customer, you’ll receive regular refill reminders, so you’ll never come up short of medicines.",
    ],
  },
  {
    Icon: BsCapsulePill,
    title: "One-Stop Shop",
    paragraphs: [
      "Osudhonline provides a wide range of medicines across multiple categories and also offers a broad selection of OTC products, including wellness items, vitamins, diet and fitness supplements, herbal products, pain relievers, diabetic care kits, baby and mother care products, beauty care products, and surgical supplies.",
    ],
  },
  {
    Icon: SlBadge,
    title: "Trust",
    paragraphs: [
      "With high standards of ethical pharmacy practice, Osudhonline is committed to providing authentic and affordable medicines along with a customer service philosophy worthy of customer trust and loyalty. We offer a secure and reliable online shopping experience with smooth navigation and strong transactional security.",
    ],
  },
];

const AboutUsPage = () => {
  return (
    <>
      <section className="my-6 ui-container space-y-4">
        <h1 className="text-3xl font-black">About Us</h1>

        <div className="space-y-2">
          <h2 className="font-black">
            Who we are - a convenient online pharmacy
          </h2>
          <p>
            Osudhonline is a trusted online pharmacy, dispensing quality
            medicines at reasonable prices to millions of happy customers. At
            Osudhonline, we help you look after your own health effortlessly as
            well as take care of loved ones wherever they may reside. You can
            buy and send medicines from any location with just a few clicks of
            the mouse.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-black">
            What we do – Fast online access to medicines with convenient home
            delivery
          </h2>
          <p>
            At Osudhonline, we make a wide range of prescription medicines and
            other health products conveniently available across multiple
            locations. Even customers in remote or underserved areas can now
            have access to the latest medicines. Since we also offer generic
            alternatives to most medicines, online buyers can expect significant
            savings.
          </p>
        </div>
      </section>

      {FEATURES.map(({ Icon, title, paragraphs }) => (
        <section key={title} className="mb-6 ui-container">
          <div className="my-2 flex gap-3">
            <Icon size={28} className="text-secondary" />
            <h3 className="uppercase font-black text-xl text-secondary">
              {title}
            </h3>
          </div>

          <div className="space-y-1">
            {paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default AboutUsPage;
