
interface InputProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (newValue: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-2 py-1 focus:outline-none focus:border-blue-500"
    />
  );
};

export default Input;