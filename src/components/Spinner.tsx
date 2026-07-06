const LoadingSpinner = ({
  text,
}: any) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-300">
        {text}
      </p>
    </div>
  );
};

export default LoadingSpinner;