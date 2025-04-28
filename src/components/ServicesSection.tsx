
export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-vr-dark">
      <div className="container mx-auto text-center">
        <h2 className="section-title mb-16">Tailored Solutions for Every Space</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Commercial Visuals"
            description="Present spaces before they're real."
            icon={<BuildingIcon />}
          />
          
          <ServiceCard 
            title="Residential Walkthroughs" 
            description="Homeowners see it before it's built."
            icon={<HomeIcon />}
          />
          
          <ServiceCard 
            title="VR Support" 
            description="Fully immersive experiences."
            icon={<VRIcon />}
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="card-vr flex flex-col items-center">
      <div className="w-24 h-24 mb-6 flex items-center justify-center text-vr-blue">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-vr-blue">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function BuildingIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="8" width="30" height="48" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="16" width="6" height="6" stroke="currentColor" strokeWidth="2" />
      <rect x="30" y="16" width="6" height="6" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="28" width="6" height="6" stroke="currentColor" strokeWidth="2" />
      <rect x="30" y="28" width="6" height="6" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="40" width="6" height="6" stroke="currentColor" strokeWidth="2" />
      <rect x="30" y="40" width="6" height="6" stroke="currentColor" strokeWidth="2" />
      <path d="M42 20H50C51.1046 20 52 20.8954 52 22V56H42V20Z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 56H52" stroke="currentColor" strokeWidth="2" />
      <rect x="46" y="28" width="2" height="2" fill="currentColor" />
      <rect x="46" y="36" width="2" height="2" fill="currentColor" />
      <rect x="46" y="44" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 28L32 12L56 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 24V52H48V24" stroke="currentColor" strokeWidth="2" />
      <path d="M28 52V36H36V52" stroke="currentColor" strokeWidth="2" />
      <rect x="21" y="28" width="6" height="6" stroke="currentColor" strokeWidth="2" />
      <rect x="37" y="28" width="6" height="6" stroke="currentColor" strokeWidth="2" />
      <path d="M12 28H52" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function VRIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 24H48C50.2091 24 52 25.7909 52 28V36C52 38.2091 50.2091 40 48 40H16C13.7909 40 12 38.2091 12 36V28C12 25.7909 13.7909 24 16 24Z" stroke="currentColor" strokeWidth="2" />
      <path d="M16 40V44" stroke="currentColor" strokeWidth="2" />
      <path d="M48 40V44" stroke="currentColor" strokeWidth="2" />
      <path d="M32 40V44" stroke="currentColor" strokeWidth="2" />
      <circle cx="22" cy="32" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="42" cy="32" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M8 32H12" stroke="currentColor" strokeWidth="2" />
      <path d="M52 32H56" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
