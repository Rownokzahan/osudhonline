import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  title: string;
  slug: string;
  image: string;
}

const categories: Category[] = [
  {
    id: "01",
    title: "Devices",
    slug: "devices",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713346989889.png",
  },
  {
    id: "02",
    title: "Surgicals",
    slug: "surgicals",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347086263.png",
  },
  {
    id: "03",
    title: "Diabetes",
    slug: "diabetes",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347251232.png",
  },
  {
    id: "04",
    title: "Makeup",
    slug: "makeup",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347251226.png",
  },
  {
    id: "05",
    title: "Fitness",
    slug: "fitness",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347572921.png",
  },
  {
    id: "06",
    title: "Ayush",
    slug: "ayush",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347978989.png",
  },
  {
    id: "07",
    title: "Personal Care",
    slug: "personal-care",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347643723.png",
  },
  {
    id: "08",
    title: "Derma Cosmetics",
    slug: "derma-cosmetics",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347675744.png",
  },
  {
    id: "09",
    title: "Hair Care",
    slug: "hair-care",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347836351.png",
  },
  {
    id: "10",
    title: "Fragrances",
    slug: "fragrances",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347878500.png",
  },
  {
    id: "11",
    title: "Mom & Baby",
    slug: "mom-baby",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713347912329.png",
  },
  {
    id: "12",
    title: "Vitamin Store",
    slug: "vitamin-store",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348163795.png",
  },
  {
    id: "13",
    title: "Men's Grooming",
    slug: "mens-grooming",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348319243.png",
  },
  {
    id: "14",
    title: "Treatments",
    slug: "treatments",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348377552.png",
  },
  {
    id: "15",
    title: "Tools & Appliances",
    slug: "tools-appliances",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348434046.png",
  },
  {
    id: "16",
    title: "Women's Care",
    slug: "womens-care",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348473770.png",
  },
  {
    id: "17",
    title: "Elderly Care",
    slug: "elderly-care",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1713348548783.png",
  },
];

const AllCategories = () => {
  return (
    <section className="ui-container mb-8">
      <h3 className="mb-4 sm:text-2xl font-black">All Categories</h3>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-4">
        {categories.map((category) => {
          const { id, image, title, slug } = category || {};
          return (
            <Link href={`/collection/${slug}`} key={id}>
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
