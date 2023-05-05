import Loading1 from "../../assets/images/quiz/loading/loading1.svg";
import Loading2 from "../../assets/images/quiz/loading/loading2.svg";
import Loading3 from "../../assets/images/quiz/loading/loading3.svg";
import Loading4 from "../../assets/images/quiz/loading/loading4.svg";
const GenerateProccess = ({ setQuestionNum }) => {
  setTimeout(() => setQuestionNum(8), 3000);
  return (
    <div className='w-[75%] md:max-w-[50%] tv:max-w-[80%] m-auto text-center'>
      <div className='flex m-auto justify-center'>
        <img className='w-[3.5rem] md:w-[5rem] tv:w-[8rem]' src={Loading1} alt='Loading1' />
        <img className='w-[3.5rem] md:w-[5rem] tv:w-[8rem]' src={Loading2} alt='Loading2' />
        <img className='w-[3.5rem] md:w-[5rem] tv:w-[8rem]' src={Loading3} alt='Loading3' />
        <img className='w-[3.5rem] md:w-[5rem] tv:w-[8rem]' src={Loading4} alt='Loading4' />
      </div>
      <p className='md:text-lg mt-4 tv:text-4xl'>
        WHAT YOU DREAM
        {window.innerWidth == 1080 && window.screen.orientation.type == "portrait-primary" && (
          <br />
        )}{" "}
        LEADS YOU BECOMING A BETTER MAN.
      </p>
      <span className='block animate-loaded h-[1rem] tv:h-[2rem] bg-blue mt-4' />
    </div>
  );
};

export default GenerateProccess;
