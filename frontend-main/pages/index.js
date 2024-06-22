// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
  return(
    <div className='container mx-auto px-8'>
      <section className="text-gray-600 body-font">
    <img className=" object-center bg-yellow-300 w-[100vw] h-[40vh]" src="/bg.jpg" alt="" />
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Your Favourite Marketplace</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Top-Rated Products: See What’s Hot!</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At MyShop, we believe shopping should be an enjoyable and seamless experience. Our mission is to bring you a diverse selection of high-quality products at unbeatable prices, all from the comfort of your home. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, MyShop has something for everyone.</p>
      <br />
      <br /><br />
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Why Shop with Us?</h1>
    </div>
    
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Wide Selection</h2>
        <p className="leading-relaxed text-base mb-4">Discover a vast array of products across multiple categories, all in one place.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Quality Assurance</h2>
        <p className="leading-relaxed text-base mb-4">We stand behind the quality of our products, ensuring you receive only the best.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Convenient Shopping</h2>
        <p className="leading-relaxed text-base mb-4">Experience the ease of online shopping with our user-friendly website, secure payment options, and fast, reliable shipping.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Customer Satisfaction</h2>
        <p className="leading-relaxed text-base mb-4">Your happiness is our priority. Enjoy excellent customer service and support every step of the way.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <Link href="/product"><button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start Shopping</button></Link>
  </div>
</section>
    </div>
  );
}
