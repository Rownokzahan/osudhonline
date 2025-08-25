import Banner from "./home/Banner";
import CashbackOffers from "./home/CashbackOffers";
import SpecializedStores from "./home/SpecializedStores";
import TrendingToday from "./home/TrendingToday";

const HomePage = () => {
  return (
    <>
      <Banner />
      <SpecializedStores />
      <CashbackOffers />
      <TrendingToday />
    </>
  );
};

export default HomePage;
