import { auth, provider } from "./../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import "react-toastify/dist/ReactToastify.css";
export const Auth = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const googleSignUp = async (): Promise<void> => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
      toast.success("Login Successful");
    } catch (error: any) {
      toast.error("Error Signing In");
      console.error("Google Error", error.message);
    }
  };

  return (
    <div className="my-[40%] lg:my-[15%]">
      <div className="flex items center justify-center">
        {!user && (
          <div className="border border-black p-4">
            <h2 className="p-4 text-lg font-semibold">
              Sign In With Google Account Below{" "}
            </h2>
            <button
              onClick={googleSignUp}
              className="p-2 border border-blue-400 rounded-md text-md "
            >
              Sign In With Google
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
