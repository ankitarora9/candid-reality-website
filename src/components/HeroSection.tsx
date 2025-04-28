
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden bg-grid">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Bring Your Designs</span> <br />
            <span className="text-vr-blue blue-glow">to Life — In Real Time</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Real-time 3D visualization for architects & developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">
              Get a Free Demo
            </button>
            <button className="btn-outline">
              View Portfolio
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative animate-float">
            <VRHeadsetIllustration />
            <div className="absolute inset-0 bg-vr-blue/20 blur-3xl rounded-full animate-pulse-glow" style={{ transform: 'scale(0.7)' }}></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-vr-blue/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-vr-blue/10 blur-3xl rounded-full"></div>
    </section>
  );
}

function VRHeadsetIllustration() {
  return (
    <svg className="w-full h-auto max-w-lg mx-auto" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M300 150C300 122.386 277.614 100 250 100H150C122.386 100 100 122.386 100 150V200C100 227.614 122.386 250 150 250H250C277.614 250 300 227.614 300 200V150Z" stroke="#0088FF" strokeWidth="3" />
      <path d="M110 190C110 175.088 122.088 163 137 163H163C177.912 163 190 175.088 190 190V190C190 204.912 177.912 217 163 217H137C122.088 217 110 204.912 110 190V190Z" stroke="#0088FF" strokeWidth="3" />
      <path d="M210 190C210 175.088 222.088 163 237 163H263C277.912 163 290 175.088 290 190V190C290 204.912 277.912 217 263 217H237C222.088 217 210 204.912 210 190V190Z" stroke="#0088FF" strokeWidth="3" />
      <path d="M140 250V280" stroke="#0088FF" strokeWidth="3" />
      <path d="M260 250V280" stroke="#0088FF" strokeWidth="3" />
      <path d="M75 190H100" stroke="#0088FF" strokeWidth="3" />
      <path d="M300 190H325" stroke="#0088FF" strokeWidth="3" />
      <circle cx="150" cy="190" r="15" fill="#0088FF" fillOpacity="0.3" />
      <circle cx="250" cy="190" r="15" fill="#0088FF" fillOpacity="0.3" />
      <path d="M130 130L150 150M150 130L130 150" stroke="#0088FF" strokeWidth="2" />
      <path d="M250 130L270 150M270 130L250 150" stroke="#0088FF" strokeWidth="2" />
    </svg>
  );
}
