import { useState } from "react";

function App() {
  const services = [
    {
      id: 1,
      title: "Luxury Weddings",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
      description:
        "Royal wedding planning, floral decor, photography, catering and destination weddings.",
      price: "Starting at ₹6,50,000",
    },
    {
      id: 2,
      title: "Birthday Celebrations",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200",
      description:
        "Theme parties, designer cakes, balloon styling, entertainment and photography.",
      price: "Starting at ₹1,15,000",
    },
    {
      id: 3,
      title: "Corporate Events",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      description:
        "Professional conferences, launches, seminars and brand activations.",
      price: "Starting at ₹90,000",
    },
    {
      id: 4,
      title: "College Festivals",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200",
      description:
        "Fests, concerts, celebrity nights, sound systems and stage production.",
      price: "Starting at ₹1,30,000",
    },
    {
      id: 5,
      title: "Mehendi & Sangeet",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200",
      description:
        "Traditional ceremonies with music, decor, choreography and entertainment.",
      price: "Starting at ₹2,00,000",
    },
    {
      id: 6,
      title: "Destination Weddings",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200",
      description:
        "Luxury wedding experiences at beaches, palaces and premium resorts.",
      price: "Starting at ₹12,00,000",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* NAVBAR (ADDED HERE - TOP OF PAGE) */}
      <nav className="navbar">
        <h2>Elite Events</h2>

        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero">
        <h1>Elite Events</h1>
        <p>Crafting Unforgettable Weddings & Celebrations</p>

        <div className="hero-buttons">
          <button className="btn">Book Event</button>
          <button className="btn secondary">View Gallery</button>
        </div>
      </header>

      {/* SEARCH */}
      <section className="search-section">
        <input
          type="text"
          placeholder="Search Services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* SERVICES */}
      <section>
        <h2>Our Event Services</h2>

        <div className="catalog">
          {filteredServices.map((service) => (
            <div className="card" key={service.id}>
              <img src={service.image} alt={service.title} />

              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p className="price">{service.price}</p>

                <button className="btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <h3>500+</h3>
          <p>Events Managed</p>
        </div>

        <div>
          <h3>300+</h3>
          <p>Happy Clients</p>
        </div>

        <div>
          <h3>50+</h3>
          <p>Professional Staff</p>
        </div>

        <div>
          <h3>15+</h3>
          <p>Years Experience</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Event Gallery</h2>

        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200" />
          <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200" />
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200" />
          <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact Us</h2>

        <p>📞 +91 98765 43210</p>
        <p>📧 eliteevents@gmail.com</p>
        <p>📍 Lucknow, India</p>
      </section>

      {/* FOOTER */}
      <footer>© 2026 Elite Events | Timeless Celebrations</footer>
    </>
  );
}

export default App;