type LinkButtonProps = {
  icon?: JSX.Element;
  label: string;
};
const LinkButton = ({ icon, label }: LinkButtonProps) => {
  return (
    <button className="bg-grayish flex items-center rounded-full border p-2 px-4 font-medium">
      {icon}
      {label}
    </button>
  );
};

export default LinkButton;
