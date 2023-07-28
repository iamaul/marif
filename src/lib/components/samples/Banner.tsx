const Banner = () => {
  return (
    <div className="w-full h-96 relative wrapper flex flex-col pt-24">
      <img
        src="assets/iftar.svg"
        className="absolute top-0 inset-x-0 w-full h-96 object-cover bg:gray-800"
        alt="banner"
      />
      <header className="flex flex-col w-full z-10 mb-4" />
    </div>
  );
};

export default Banner;
