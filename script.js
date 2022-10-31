restaurantList = [
  {
    name: "The Vintage Restaurant",
    address: "4-25, banjara hills,hyderabad",
    city: "hyderabad",
  },
  {
    name: "punjabi tadka",
    address: "9-256,balaji street,bangalore",
    city: "bangalore",
  },
  {
    name: "varahi",
    address: "9-256,balaji street,bangalore",
    city: "hyderabad",
  },
  {
    name: "varahi restaurant",
    address: "9-541,venkat nagar,vijayawada",
    city: "vijayawada",
  },
  {
    name: "Deccan pevillian",
    address: "9-26,balaji street,bangalore",
    city: "hyderabad",
  },
];
filterRestaurant = [];
orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};
data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
console.log("1.Restaurant list object:");
console.log(restaurantList);
function printAllRestaurantNames() {
  console.log("Restaurant list names:");
  for (i = 0; i < restaurantList.length; i++) {
    console.log(i + 1, restaurantList[i]["name"]);
  }
}

function filterRestaurantByCity(city) {
  let k;
  console.log("Restaurant list on basis of city hyderabad:");
  restaurantList.filter((curr, i) => {
    if (curr["city"] == city) {
      k = curr;
      filterRestaurant.push(k);
    }
  });
  console.log(filterRestaurant);
}

printAllRestaurantNames();
filterRestaurantByCity("hyderabad");
const values = Object.values(orderData);
const keys = Object.keys(orderData);
const sum = values.reduce((accumulator, value, index) => {
  return accumulator + value;
}, 0);

console.log("2.a Total number of orders placed=", sum);
console.log("2.b Total number of order proportions=", values.length);
let percentage;

for (i = 0; i < 5; i++) {
  percentage = (values[i] / sum) * 100;
  data[i]["order"] = keys[i];
  data[i]["order percentage"] = percentage;
  data[i]["restaurant"] = "punjabi tadka";
}
console.log("2.c The percentage of each proportion:");
console.log(data);
