import { useNavigate } from "react-router-dom";

function Btn({ children, margin }) {
  const navigate = useNavigate();
  return (
    <button
      className={`dark:bg-blue dark:text-whitey py-1.5 px-6 bg-whitey shadow-[0px_0px_4px_3px_rgba(0,0,0,0.15)]  ${margin}`}
      onClick={() => children === "Back" && navigate(-1)}
    >
      {children === "Back" && <span className="mr-2 ">&#10229;</span>}
      {children}
    </button>
  );
}

export default Btn;
