export default function EnviloupMainCardSection() {
  return (
    <>
      <div className="flex flex-col items-center h-full justify-evenly gap-6 p-2">
        <img
          className="w-[420px] rounded-full shadow-lg transition-transform transform contrast-200 rotate-[-4deg]"
          src="enviloupv2.png"
          alt="Enviloup"
        />
        <h1 className="text-5xl text-gray-100 tracking-widest drop-shadow-lg rotate-[-4deg]">
          Enviloup Team
        </h1>
      </div>
    </>
  );
}
