import { ReactComponent as Title } from "../images/writeDownYourName/writedownyourname.svg";

const WriteDownYourName = ({ nextStep }) => {
  return (
    <>
      <Title onClick={nextStep} />
    </>
  );
};

export default WriteDownYourName;
