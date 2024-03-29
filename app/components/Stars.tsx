import { motion } from "framer-motion";

export default function Stars() {
  return (
    <div
      className="absolute w-screen h-screen top-0 overflow-hidden pointer-events-none"
      style={{ maskImage: "url('/stars.svg')" }}
    >
      <motion.div
        className="absolute left-1/2 top-[5vw] w-[40vw] h-[40vw] rounded-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #000000 24.68%, #FFFFFF 41.49%, #000000 50%, #000000 72.92%, #FFFFFF 89.06%, #000000 96.88%)",
          marginLeft: "-20vw",
        }}
        animate={{ scale: [1, 3] }}
        transition={{
          repeat: Infinity,
          originX: 1,
          originY: 0,
          duration: 10,
          repeatType: "mirror",
        }}
      />
    </div>
  );
}
