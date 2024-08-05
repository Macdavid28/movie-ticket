import { auth, provider } from "./../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
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
      console.error("Google Error", error.message);
    }
  };
  const signOutFunction = async (): Promise<void> => {
    signOut(auth);
  };
  return (
    <div className="my-[15%]">
      <div className="flex items center justify-center">
        {!user && (
          <div className="border border-black p-4">
            <h2>Sign In With Google Account Below </h2>
            <button className="p-4" onClick={googleSignUp}>
              Sign In With Google
            </button>
          </div>
        )}
        {user && (
          <div>
            <h1> {user?.displayName} </h1>
            <p>{user?.email} </p>
            <button onClick={signOutFunction}>Sign Out</button>
          </div>
        )}
      </div>
    </div>
  );
};
