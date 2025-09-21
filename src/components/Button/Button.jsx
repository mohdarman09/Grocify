const Button = ({ content, onClick }) => {
  return (
    <button
      className="bg-gradient-to-b from-orange-400 to-orange-600 text-white font-semibold px-6 py-2 rounded-lg text-xl hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
