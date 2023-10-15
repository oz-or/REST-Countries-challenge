import Country from "./Country/Country";
import Btn from "../ui/BackBtn";

function Details() {
  return (
    <div className="dark:bg-darkBlue ">
      <div>
        <Btn
          margin={
            "mt-10 mb-[72px] ml-[34px] 500:ml-[50px] 660:ml-[80px] 1050:ml-[70px] 1100:ml-[45px] 1340:ml-[140px]"
          }
        >
          Back
        </Btn>
      </div>

      <Country />
    </div>
  );
}

export default Details;
