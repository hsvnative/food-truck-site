import React from "react";

const menuItems = [
  {
    name: "Classic Cheeseburger",
    image: "/images/burger.jpg",
    description: "Juicy grilled beef patty, cheddar cheese, lettuce, tomato, and our secret sauce.",
    ingredients: ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "Brioche bun", "Secret sauce"]
  },
  {
    name: "Street Tacos",
    image: "/images/tacos.jpg",
    description: "Three soft corn tortillas loaded with seasoned chicken, cilantro, and lime.",
    ingredients: ["Corn tortillas", "Chicken", "Cilantro", "Lime", "Onion", "Spices"]
  },
  {
    name: "Loaded Fries",
    image: "/images/fries.jpg",
    description: "Crispy fries smothered with melted cheese, bacon bits, and green onions.",
    ingredients: ["Potatoes", "Cheddar cheese", "Bacon", "Green onions", "Sour cream"]
  },
  {
    name: "Fresh Lemonade",
    image: "/images/lemonade.jpg",
    description: "House-made lemonade with freshly squeezed lemons and a hint of mint.",
    ingredients: ["Lemons", "Sugar", "Mint", "Water"]
  }
];

export default function Menu() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Our Menu</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        {menuItems.map(item => (
          <div key={item.name} style={{
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            overflow: "hidden"
          }}>
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{item.name}</h3>
              <p style={{ marginBottom: "0.5rem" }}>{item.description}</p>
              <ul style={{ fontSize: "0.9rem", color: "#555", paddingLeft: "1.2rem" }}>
                {item.ingredients.map((ing, idx) => (<li key={idx}>{ing}</li>))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
