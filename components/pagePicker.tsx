import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface PagePickerProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  numberOfPages: number;
}

const PagePicker = ({
  currentPage,
  setCurrentPage,
  numberOfPages,
}: PagePickerProps) => {
  const onClickLeft = () => {
    if (currentPage === 0) return;
    setCurrentPage((oldPage) => oldPage - 1);
  };

  const onClickRight = () => {
    if (currentPage + 1 === numberOfPages) return;
    setCurrentPage((oldPage) => oldPage + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <AiOutlineArrowLeft
        className="cursor-pointer"
        color={"white"}
        onClick={onClickLeft}
        size={20}
      />
      <h3 className="text-gray-200 text-xl">
        Page {currentPage + 1} / {numberOfPages}
      </h3>
      <AiOutlineArrowRight
        className="cursor-pointer"
        color={"white"}
        onClick={onClickRight}
        size={20}
      />
    </div>
  );
};

export default PagePicker;
