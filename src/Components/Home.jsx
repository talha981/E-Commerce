import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Welcome to Our Shop</h1>
              <p className="text-lg mb-6">
                Discover the best products at unbeatable prices. Shop now and enjoy great deals on all your favorite items.
              </p>
              <a href="#products" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700">
                Shop Now
              </a>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://alluviaplatform.com/wp-content/uploads/2018/11/AdobeStock_188160876.jpeg" 
                alt="Shop Banner" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Highlights */}
      <div id="products" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://wallpaperaccess.com/full/2593065.jpg" 
                alt="Product 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Product 1</h3>
                <p className="text-gray-700 mb-4">High-quality product with excellent features.</p>
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                  View Product
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://tse1.mm.bing.net/th?id=OIP.g3xcOGZJ9u85ZzBzGU1yPgHaDT&pid=Api&P=0&h=220" 
                alt="Product 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Product 2</h3>
                <p className="text-gray-700 mb-4">A reliable product that meets all your needs.</p>
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                  View Product
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://capturly.com/blog/wp-content/uploads/2018/01/eCommerce-website-search-customer-experience.jpg" 
                alt="Product 3" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Product 3</h3>
                <p className="text-gray-700 mb-4">Top-rated product with outstanding reviews.</p>
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                  View Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sign Up for Exclusive Offers</h2>
              <p className="text-lg mb-6">
                Join our newsletter and stay updated on the latest products and special offers.
              </p>
              <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg hover:bg-gray-200">
                Sign Up Now
              </a>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://6ixwebsoft.com/wp-content/uploads/2020/02/bann.png" 
                alt="Newsletter Signup" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
