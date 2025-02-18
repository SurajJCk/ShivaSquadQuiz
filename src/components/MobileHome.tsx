import { useNavigate } from "@tanstack/react-router";
import { mp, MIXPANEL_EVENTS } from "../utils/mixpanel";

export default function MobileHome() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // Track quiz start
    mp.track(MIXPANEL_EVENTS.GAME_STARTED, {
      device: 'mobile',
      timestamp: new Date().toISOString()
    });
    navigate({ to: "/quiz" });
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-orange-50">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/images/mobile-bg.webp")',
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          opacity: 0.95,
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-3xl font-bold text-center text-white">
          Which member of Shiva's Squad do you relate with the most?
        </h1>

        <button
          onClick={handleStartQuiz}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-xl font-semibold transition-colors shadow-xl"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
