import fingerprint from "../../assets/fingerprient.png";

const SignIn = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
    console.log(userInfo);


    // loginUser(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //     navigate(from, { replace: true });
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     console.log(errorMessage);
    //   });
  };

  return (
    <div className="min-h-screen px-4 space-y-20">
      <div className="flex justify-end pt-5">
        <h5 className="text-red-500/75 border-[1px] px-3 py-2 border-red-500/75 rounded-full">
          English
        </h5>
      </div>
      <form onSubmit={handleLogin} action="">
        <div className="space-y-40">
          <div className="space-y-6">
            <div className="flex justify-between">
              <img src="/logo.jpg" alt="" className="w-10" />
              <div className="w-10 h-10 bg-red-400/80"></div>
            </div>
            <div>
              <p className="text-xl w-56">আপনার বিকাশ একাউন্টে লগ ইন করুন</p>
            </div>
            {/* number */}
            <div>
              <p>অ্যাকাউন্ট নাম্বার</p>
              <input
                className=""
                type="text"
                name="email"
                id="acc-number"
                placeholder="+88017**** / email"
              />
            </div>
            {/* pin */}
            <div className="flex justify-between items-center">
              <div>
                <p>বিকাশ পিন</p>
                <input
                  className=""
                  type="text"
                  name="password"
                  id="pin"
                  placeholder="বিকাশ পিন নাম্বার দিন"
                />
              </div>
              <div>
                <img src={fingerprint} alt="fingerprint" className="w-16" />
              </div>
            </div>
            <p className="text-[#DF146E]">পিং ভুলে গিয়েছেন ? পিন রিসেট করুন</p>
          </div>
          <div className="flex justify-end">
            <input type="submit" value="Login" className="bg-red-400 rounded-2xl p-2"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
