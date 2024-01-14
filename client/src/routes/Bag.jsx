import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const item = {
    id: "002",
    image: "/images/2.jpg",
    company: "CUKOO",
    item_name: "Women Padded Halter Neck Swimming Dress",
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.3,
      count: 24,
    },
  };

  return (
    <main className="container my-5 py-5">
      <div className="row ">
        <div className="col-8">
          <BagItem item={item} />
        </div>
        <div className="col-4 mx-auto" align="center">
          <BagSummary />
        </div>
      </div>
    </main>
  );
};
export default Bag;
