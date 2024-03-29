export default function Intro() {
  return (
    <div className="flex flex-col gap-2">
      <h1
        className="font-inter font-normal text-4xl text-center leading-tight py-2"
        style={{
          background:
            "radial-gradient(123.44% 123.44% at 56.63% 100%, #ECECEE 6.77%, rgba(255, 255, 255, 0.45) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Glowing Button.
      </h1>
      <p
        className="font-inter font-normal text-xl text-center tracking-[-0.01em] leading-8"
        style={{
          background:
            "radial-gradient(123.44% 123.44% at 56.63% 100%, rgba(236, 236, 238, 0.5) 6.77%, rgba(255, 255, 255, 0.225) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        A magical button, interact with it.
      </p>
    </div>
  );
}
