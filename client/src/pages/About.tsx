export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About BoxiPhone</h1>
        
        <img
          src="https://images.unsplash.com/photo-1529579001084-c58ac6686ec2"
          alt="Store Interior"
          className="rounded-lg mb-8 w-full"
        />

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to BoxiPhone, your premier destination for all things iPhone.
            Since our establishment, we've been dedicated to providing our customers
            with the latest Apple technology and exceptional service.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to make the latest iPhone technology accessible to everyone
            while providing unparalleled customer service and expert guidance. We
            believe in creating a shopping experience that's both enjoyable and
            informative.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>Authorized Apple retailer with genuine products</li>
            <li>Expert staff with deep product knowledge</li>
            <li>Competitive pricing and flexible payment options</li>
            <li>Outstanding customer service and support</li>
            <li>Modern retail locations for hands-on experience</li>
          </ul>

          <h2>Our Commitment</h2>
          <p>
            We're committed to staying at the forefront of mobile technology and
            providing our customers with the best possible shopping experience. Our
            team regularly undergoes training to ensure we can answer all your
            questions and help you make informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
