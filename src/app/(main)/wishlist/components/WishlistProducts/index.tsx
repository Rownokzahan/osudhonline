import ProductCard from "@/compoents/ui/ProductCard";
import { Product } from "@/types";

const wishlist: Product[] = [
  {
    id: 1,
    name: "Cetaphil Moisturising Cream 80gm",
    slug: "cetaphil-moisturising-cream-80gm-lui51b-8296586",
    manufacturer: "Galderma India Pvt Ltd",
    currentPrice: 488,
    originalPrice: 669,
    discountPercentage: 27,
    category: "Lotions & Creams",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/original/Uqg767wDP9-cetaphil_moisturising_cream_80gm_45835_0_9.jpg",
  },
  {
    id: 2,
    name: "B-Protin Nutritional Powder Supplement - Chocolate 500 gm",
    slug: "b-protin-nutritional-powder-supplement-chocolate-500-gm-lui25u-8237054",
    manufacturer: "British Biologicals",
    currentPrice: 488,
    originalPrice: 575,
    discountPercentage: 15,
    category: "Protein Drink",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/original/pKd3cfD4kS-b_protin_nutritional_powder_supplement_chocolate_500_gm_0.jpg",
  },
  {
    id: 3,
    name: "AHAGLOW ADVANCED FACE WASH Gel 200gm",
    slug: "ahaglow-advanced-face-wash-gel-200gm-lui2qm-8248719",
    manufacturer: "Torrent Pharmaceuticals Ltd",
    currentPrice: 606,
    originalPrice: 798,
    discountPercentage: 24,
    category: "Face Wash & Cleanser...",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/original/Yg9w3Bpk-u-ahaglow_advanced_face_wash_gel_200gm_119919_0_3.jpg",
  },
  {
    id: 4,
    name: "Accu-Chek Active Test Strip 100's",
    slug: "accu-chek-active-test-strip-100s-lui3m0-8266198",
    manufacturer: "Roche Diabetes Care India Pvt LTD",
    currentPrice: 1659,
    originalPrice: 1966,
    discountPercentage: 16,
    category: "Blood Glucose Monito...",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/original/ebjayzT4Np-accu_chek_active_test_strip_100s_42974_0_1.jpg",
  },
];

const WishlistProducts = () => {
  return (
    <div className="sm:ui-container grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-x-4 sm:gap-y-6 divide-y">
      {wishlist.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default WishlistProducts;
