import { Link } from 'react-router-dom';
import logo from '/logo.jpg'

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center space-y-10">
      {/* Top Bar with Logo */}
      <div className="w-full p-4 flex justify-center">
        <img src={logo} alt="Zcash Logo" className="h-20" />
      </div>

      {/* Middle Section with Buttons */}
      <div className="flex justify-center gap-5">
        <Link to={'/sign-in'} className="bg-blue-500 text-white px-4 py-2 rounded">লগইন করুন</Link>
        <Link to={'/sign-up'} className="bg-green-500 text-white px-4 py-2 rounded">রেজিস্ট্রেশন করুন</Link>
      </div>

      {/* Banner Section */}
      <div className="mt-10 w-full flex justify-center">
        <div className="bg-yellow-300 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-base font-bold">প্রথম লগইন করলে আপনি পাবেন 40 টাকা বোনাস</h2>
        </div>
      </div>
    </div>
    );
};

export default Home;