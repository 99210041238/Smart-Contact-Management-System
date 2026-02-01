import { useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";
import StartButton from "../components/StartButton";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center
                    bg-gradient-to-br from-slate-100 to-slate-200
                    dark:from-slate-900 dark:to-black">
      <Welcome />
      <StartButton onClick={handleStart} />
    </div>
  );
}
