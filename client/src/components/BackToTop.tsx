import { scrollToSection } from "@/lib/utils";

interface BackToTopProps {
  visible: boolean;
}

export default function BackToTop({ visible }: BackToTopProps) {
  return (
    <button
      onClick={() => scrollToSection("home")}
      className={`fixed bottom-6 right-6 p-3 bg-primary/80 hover:bg-primary text-white rounded-full shadow-lg transition-all duration-300 z-40 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
