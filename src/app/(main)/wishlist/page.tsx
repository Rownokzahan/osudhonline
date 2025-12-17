import WishlistProducts from "./components/WishlistProducts";

const WishlistPage = () => {
  return (
    <>
      <div className="ui-container mt-4 mb-2 sm:my-6">
        <h1 className="text-2xl font-black">Saved for later</h1>
      </div>

      <WishlistProducts />
    </>
  );
};

export default WishlistPage;
