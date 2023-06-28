import "./App.css";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const data = [
    {
      id: 1002,
      plan: "Free",
      currency: "$",
      price: 0,
      period: "month",
      feature: [
        {
          title: "Single User",
          isEnable: true,
        },
        {
          title: "5GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          title: "Community Access",
          isEnable: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: false,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: false,
        },
        {
          title: "Free Subdomain",
          isEnable: false,
        },
        {
          title: "Monthly Status Reports",
          isEnable: false,
        },
      ],
    },
    {
      id: 1004,
      plan: "Plus",
      currency: "$",
      price: 9,
      period: "month",
      feature: [
        {
          title: "5 Users",
          isEnable: true,
        },
        {
          title: "50GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          title: "Community Access",
          isEnable: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          title: "Free Subdomain",
          isEnable: true,
        },
        {
          title: "Monthly Status Reports",
          isEnable: false,
        },
      ],
    },
    {
      id: 1007,
      plan: "Pro",
      currency: "$",
      price: 49,
      period: "month",
      feature: [
        {
          title: "Unlimited Users",
          isEnable: true,
        },
        {
          title: "150GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          title: "Community Access",
          isEnable: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          title: "Unlimited Free Subdomain",
          isEnable: true,
        },
        {
          title: "Monthly Status Reports",
          isEnable: true,
        },
      ],
    },
  ];
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
