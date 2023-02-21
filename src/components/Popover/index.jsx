export const Popover = ({ text, isPopoverVisible }) => {
  //   const [isPopoverVisible, setIsPopoverVisible] = useS/tate(false);

  return (
    <div
      className={`bg-white p-2 rounded-md font-header border border-solid border-gray-300 text-gray-400 text-[12px] transition-all ${
        isPopoverVisible ? "transition-all" : "hidden transition-all"
      }`}
    >
      <p>{text}</p>
    </div>
  );
};
