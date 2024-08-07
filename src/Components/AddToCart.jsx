import React from 'react';
import { useAuth } from './AuthContext'; 

function AddToCart() {

  return (
    <div className="container mx-auto p-6">
       

    
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Shop</h1>
        <p className="text-lg text-gray-600 mt-2">Find the best products at unbeatable prices!</p>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://designhooks.com/wp-content/uploads/2018/07/Cosmetics_Preview1-1.jpg"
              alt="Product 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Product 1</h3>
              <p className="text-gray-600 mt-2">$29.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg"
              alt="Product 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Product 2</h3>
              <p className="text-gray-600 mt-2">$49.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?cs=srgb&dl=cosmetic-products-3018845.jpg&fm=jpg"
              alt="Product 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Product 3</h3>
              <p className="text-gray-600 mt-2">$19.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://i.pinimg.com/originals/35/94/79/3594793ee69d85ab8e82e780537fa83e.jpg"
              alt="Product 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Product 4</h3>
              <p className="text-gray-600 mt-2">$39.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Latest Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://www.insidehook.com/wp-content/uploads/2019/09/Amazon.jpg?fit=1200%2C800"
              alt="Product 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Product 5</h3>
              <p className="text-gray-600 mt-2">$24.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://media.allure.com/photos/59cbde6f0dbae65c2febea1d/master/pass/edsfaves-100217-lede.jpg?mbid=social_retweet"
              alt="Product 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Product 6</h3>
              <p className="text-gray-600 mt-2">$34.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 7 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://wwd.com/wp-content/uploads/2022/12/Beauty-Inc-Awards-22-Product-Winners-GC-04.jpg"
              alt="Product 7"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Product 7</h3>
              <p className="text-gray-600 mt-2">$14.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 8 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.9rssJewM8mcVHxy84ucVXgHaE8&pid=Api&P=0&h=220"
              alt="Product 8"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Product 8</h3>
              <p className="text-gray-600 mt-2">$44.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 border-t mt-12">
        <p className="text-gray-600">© 2024 Our Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AddToCart;
