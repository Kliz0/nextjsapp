interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white ml-2 px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
    >
      {children}
    </button>
  );
};

export default Button;
