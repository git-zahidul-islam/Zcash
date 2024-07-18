import useAuth from "../../hooks/useAuth";
import NavBer from "../../shared/navBer/NavBer";
import { FaPaperPlane, FaMobileAlt, FaWallet, FaShoppingCart, FaPlusCircle, FaFileInvoice, FaHandshake, FaHandHoldingUsd, FaBolt, FaUniversity, FaGraduationCap, FaMoneyBill, FaExchangeAlt, FaHandHoldingHeart, FaGlobe } from 'react-icons/fa';
import { Link } from "react-router-dom";


const services = [
  { name: 'সেন্ড মানি', icon: FaPaperPlane, path: '/send-money' },
  { name: 'মোবাইল রিচার্জ', icon: FaMobileAlt, path: '/mobile-recharge' },
  { name: 'ক্যাশ আউট', icon: FaWallet, path: '/cash-out' },
  { name: 'পেমেন্ট', icon: FaShoppingCart, path: '/payment' },
  { name: 'অ্যাড মানি', icon: FaPlusCircle, path: '/add-money' },
  { name: 'পে বিল', icon: FaFileInvoice, path: '/pay-bill' },
  { name: 'আফিলিয়েট', icon: FaHandshake, path: '/affiliate' },
  { name: 'লোন', icon: FaHandHoldingUsd, path: '/loan' },
  { name: 'ইউটিলিটি', icon: FaBolt, path: '/utility' },
  { name: 'বিকাশ টু ব্যাংক', icon: FaUniversity, path: '/bkash-to-bank' },
  { name: 'এডুকেশন ফি', icon: FaGraduationCap, path: '/education-fee' },
  { name: 'মাইক্রোফাইন্যান্স', icon: FaMoneyBill, path: '/microfinance' },
  { name: 'রিকোয়েস্ট মানি', icon: FaExchangeAlt, path: '/request-money' },
  { name: 'ডোনেশন', icon: FaHandHoldingHeart, path: '/donation' },
  { name: 'রেমিটেন্স', icon: FaGlobe, path: '/remittance' },
];

const ServicePage = () => {
  const {user} = useAuth()

  console.log(user?.user);

  return (
    <div>
      <NavBer />
      <div className="p-4 grid grid-cols-3 gap-4">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <div key={index} className="flex flex-col items-center">
            <Link to={service.path}>
              <div className="p-4 bg-white rounded-full shadow-lg mb-2">
                <IconComponent className="text-pink-600 text-2xl" />
              </div>
            </Link>
            <div className="text-center text-sm">{service.name}</div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default ServicePage;
