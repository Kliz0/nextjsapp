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
    />
  );
};

export default Input;
