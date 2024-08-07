import React from 'react'

function About() {
  return (
    <div className="container mx-auto p-6 font-sans">
      <section className="text-center my-10">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to our e-commerce shop! We are dedicated to providing you with the best online shopping experience. Our goal is to offer top-quality products and exceptional customer service.
        </p>
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://cms.dresma.com/uploads/Image_2_11cac6fa82.jpg"/>
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Wide Range of Products</h3>
              <p className="text-gray-700 text-base">
                From electronics to clothing, we have it all. Discover our diverse range of products to meet all your needs.
              </p>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://planetgoodwill.com/wp-content/uploads/2018/12/911ZrDKR7CL._SL1500_.jpg"/>
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Fast and Reliable Shipping</h3>
              <p className="text-gray-700 text-base">
                We ensure your orders are delivered quickly and safely, so you can enjoy your purchases without delay.
              </p>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://i.pinimg.com/736x/40/3f/89/403f8990d6c6c7c45eb0b45e76cfa286.jpg" alt="Service 3" />
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Customer Support</h3>
              <p className="text-gray-700 text-base">
                Our customer support team is here to assist you with any inquiries or issues. We are committed to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://www.shutterstock.com/shutterstock/photos/2157855675/display_1500/stock-photo-a-portrait-of-asian-woman-e-commerce-employee-freelance-with-parcel-box-for-deliver-to-customer-2157855675.jpg" />
            <div className="px-6 py-4 text-center">
              <h3 className="font-bold text-xl mb-2">John Doe</h3>
              <p className="text-gray-700 text-base">
                CEO & Founder
              </p>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://c8.alamy.com/comp/2J8M6M8/a-portrait-of-asian-woman-e-commerce-employee-freelance-with-parcel-box-for-deliver-to-customer-online-marketing-packing-box-delivery-concept-2J8M6M8.jpg" alt="Team Member 2" />
            <div className="px-6 py-4 text-center">
              <h3 className="font-bold text-xl mb-2">Jane Smith</h3>
              <p className="text-gray-700 text-base">
                Chief Marketing Officer
              </p>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://thumbs.dreamstime.com/z/young-female-employee-e-commerce-concept-245597878.jpg" alt="Team Member 3" />
            <div className="px-6 py-4 text-center">
              <h3 className="font-bold text-xl mb-2">Sarah Johnson</h3>
              <p className="text-gray-700 text-base">
                Head of Customer Support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600">
          Our mission is to provide the best online shopping experience for our customers. We strive to offer high-quality products, exceptional customer service, and fast and reliable shipping. We are committed to creating a platform where customers can easily find and purchase the products they love.
        </p>
      </section>
    </div>
  )
}

export default About
