// exit
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
// exit
import useAuth from "../../hooks/useAuth";
import fingerprint from "../../assets/fingerprient.png";
import { useState } from "react";

const SignUp = () => {
  // exit
  const axiosPublic = useAxiosPublic();
  const { userCreate, userUpdateProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  // exit

  const handleSignUp = async(data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    const checkRole = isChecked ? 'Agent' : 'User';

    // ata mongodb
    console.log(name, email, password, checkRole);

    const signUp = await axiosPublic.post('/users',data )
    console.log(signUp);
  };

  return (
    <div className="min-h-screen px-4 space-y-20">
      <div className="flex justify-end pt-5">
        <h5 className="text-red-500/75 border-[1px] px-3 py-2 border-red-500/75 rounded-full">
          English
        </h5>
      </div>
      {/* form start */}
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="space-y-16">
          <div className="space-y-6">
            <div className="flex justify-between">
              <img src="/logo.jpg" alt="" className="w-10" />
              <div className="w-10 h-10 bg-red-400/80"></div>
            </div>
            <div>
              <p className="text-xl w-56">আপনার বিকাশ একাউন্টে লগ ইন করুন</p>
            </div>
            {/* name */}
            <div>
              <p>আপনার নাম দিন</p>
              <input
                className=""
                type="text"
                name="name"
                {...register("name", { required: true })}
                id="acc-number"
                placeholder="Zahid"
              />
            </div>
            {/* number */}
            <div>
              <p>অ্যাকাউন্ট নাম্বার</p>
              <input
                className=""
                type="text"
                name="email"
                {...register("email", { required: true })}
                id="acc-number"
                placeholder="+88017****"
              />
            </div>
            {/* pin */}
            <div className="flex justify-between items-center">
              <div>
                <p>বিকাশ পিন</p>
                <input
                  className=""
                  type="text"
                  name="pin"
                  {...register("password", { required: true })}
                  id="pin"
                  placeholder="বিকাশ পিন নাম্বার দিন"
                />
              </div>
              <div>
                <img src={fingerprint} alt="fingerprint" className="w-16" />
              </div>
            </div>
            <div>
              <p>আপনি কি একাউন্ট করতে চান</p>
              <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                className="toggle block"
                onChange={(e)=>setIsChecked(e.target.checked)}
                checked={isChecked}
              />
              <label>{isChecked ? 'Agent' : 'User'}</label>
              </div>
            </div>
            <p className="text-[#DF146E]">পিন ভুলে গিয়েছেন ? পিন রিসেট করুন</p>
          </div>
          <div className="flex justify-end">
            <input
              className="bg-red-400 rounded-2xl p-2"
              type="submit"
              value="Login"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
