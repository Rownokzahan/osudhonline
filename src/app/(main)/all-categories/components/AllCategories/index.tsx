import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "01",
    title: "Devices",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713346989889.png",
    link: "",
  },
  {
    id: "02",
    title: "Surgicals",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347086263.png",
    link: "",
  },
  {
    id: "03",
    title: "Diabetes",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347251232.png",
    link: "",
  },
  {
    id: "04",
    title: "Makeup",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347251226.png",
    link: "",
  },
  {
    id: "05",
    title: "Fitness",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347572921.png",
    link: "",
  },
  {
    id: "06",
    title: "Ayush",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347978989.png",
    link: "",
  },
  {
    id: "07",
    title: "Personal Care",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347643723.png",
    link: "",
  },
  {
    id: "08",
    title: "Derma Cosmetics",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347675744.png",
    link: "",
  },
  {
    id: "09",
    title: "Hair Care",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347836351.png",
    link: "",
  },
  {
    id: "10",
    title: "Fragrances",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347878500.png",
    link: "",
  },
  {
    id: "11",
    title: "Mom & Baby",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347912329.png",
    link: "",
  },
  {
    id: "12",
    title: "Vitamin Store",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348163795.png",
    link: "",
  },
  {
    id: "13",
    title: "Men's Grooming",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348319243.png",
    link: "",
  },
  {
    id: "14",
    title: "Treatments",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348377552.png",
    link: "",
  },
  {
    id: "15",
    title: "Tools & Appliances",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348434046.png",
    link: "",
  },
  {
    id: "16",
    title: "Women's Care",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348473770.png",
    link: "",
  },
  {
    id: "17",
    title: "Elderly Care",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348548783.png",
    link: "",
  },
];

const AllCategories = () => {
  return (
    <section className="ui-container mb-8">
      <h3 className="mb-4 sm:text-2xl font-black">All Categories</h3>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-4">
        {categories.map((category) => {
          const { id, image, link, title } = category || {};
          return (
            <Link href={link} key={id}>
              <Image
                height={214}
                width={214}
                src={image}
                alt=""
                className="w-full aspect-square"
              />
              <p className="mt-2 text-center truncate text-xs md:text-base lg:text-lg font-medium">
                {title}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default AllCategories;
