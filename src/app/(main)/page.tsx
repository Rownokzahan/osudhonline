import Banner from "./home/Banner";
import BestSeller from "./home/BestSeller";
import CashbackOffers from "./home/CashbackOffers";
import LimitedTimeDeals from "./home/LimitedTimeDeals";
import NewArrivals from "./home/NewArrivals";
import ShopByCategory from "./home/ShopByCategory";
import SpecializedStores from "./home/SpecializedStores";
import TrendingToday from "./home/TrendingToday";

const HomePage = () => {
  return (
    <>
      <Banner />
      <SpecializedStores />
      <CashbackOffers />
      <LimitedTimeDeals />
      <TrendingToday />
      <ShopByCategory />
      <NewArrivals />
      <BestSeller />
    </>
  );
};

export default HomePage;
