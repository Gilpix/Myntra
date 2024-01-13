import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeItems from "./components/HomeItems";

function App() {
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
    <>
      <Header />
      <main>
        <div className="items-container">
          <HomeItems item={item} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
