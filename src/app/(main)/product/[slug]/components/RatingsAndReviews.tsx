import { TiStarFullOutline } from "react-icons/ti";

const RatingsAndReviews = () => {
  return (
    <>
      <section className="ui-container mt-6 px-3">
        <h3 className="mb-4 sm:text-2xl font-black">Ratings & Reviews</h3>
        <div className="px-2 flex gap-3">
          <div>
            <h3 className="mb-2 text-[32px] font-black leading-8">0</h3>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <TiStarFullOutline
                  key={index}
                  size={16}
                  className="text-dark-light/25"
                />
              ))}
            </div>
            <p className="text-dark-light text-xs">0 rating</p>
          </div>

          <div className="flex flex-col-reverse">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-1 text-dark-light text-xs"
              >
                <span className="text-dark-light/60">{index + 1}</span>
                <TiStarFullOutline size={16} className="text-dark-light/25" />
                <div className="h-2 w-28 rounded-full bg-dark-light/20" />
                <span>0%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-container mt-6 px-3">
        <h3 className="mb-1 sm:text-2xl font-black">Review this product</h3>
        <p className="text-dark-light text-xs">
          Help others make a an informed decision!
        </p>

        <div className="my-3 flex gap-2">
          {[...Array(5)].map((_, index) => (
            <TiStarFullOutline
              key={index}
              size={48}
              className="text-dark-light/25"
            />
          ))}
        </div>

        <button className="w-full px-6 py-4 border hover:border-secondary rounded-full text-secondary font-bold">
          Write a review
        </button>
      </section>
    </>
  );
};

export default RatingsAndReviews;
