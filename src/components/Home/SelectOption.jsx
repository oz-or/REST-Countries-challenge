function SelectOption({ children, value, onClick }) {
  return (
    <li
      className="hover:bg-gray-50 dark:text-whitey dark:hover:bg-darkBlue"
      onClick={onClick}
    >
      <label htmlFor={value} value={value}>
        {children}
      </label>
    </li>
  );
}

export default SelectOption;
