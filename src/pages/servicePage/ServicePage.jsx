import NavBer from "../../shared/navBer/NavBer";

const services = [
  { name: "সেন্ড মানি", icon: "fas fa-paper-plane" },
  { name: "মোবাইল রিচার্জ", icon: "fas fa-mobile-alt" },
  { name: "ক্যাশ আউট", icon: "fas fa-wallet" },
  { name: "পেমেন্ট", icon: "fas fa-shopping-cart" },
  { name: "অ্যাড মানি", icon: "fas fa-plus-circle" },
  { name: "পে বিল", icon: "fas fa-file-invoice" },
  { name: "আফিলিয়েট", icon: "fas fa-handshake" },
  { name: "লোন", icon: "fas fa-hand-holding-usd" },
  { name: "ইউটিলিটি", icon: "fas fa-bolt" },
  { name: "বিকাশ টু ব্যাংক", icon: "fas fa-university" },
  { name: "এডুকেশন ফি", icon: "fas fa-graduation-cap" },
  { name: "মাইক্রোফাইন্যান্স", icon: "fas fa-money-bill" },
  { name: "রিকোয়েস্ট মানি", icon: "fas fa-exchange-alt" },
  { name: "ডোনেশন", icon: "fas fa-hand-holding-heart" },
  { name: "রেমিটেন্স", icon: "fas fa-globe" },
];

const ServicePage = () => {
  return (
    <div>
      <NavBer />
      <div className="p-4 grid grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-4 bg-white rounded-full shadow-lg mb-2">
              <i className={`text-pink-600 text-2xl ${service.icon}`}></i>
            </div>
            <div className="text-center text-sm">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
