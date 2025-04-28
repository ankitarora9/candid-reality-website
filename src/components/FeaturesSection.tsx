
export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-vr-darker">
      <div className="container mx-auto">
        <div className="text-left max-w-3xl mb-16">
          <h2 className="section-title">Why Flat Renders Aren't Enough</h2>
          <p className="text-gray-300 text-lg">
            Show your space as if it's already built. We deliver immersive, real-time visuals 
            that impress stakeholders and speed up approvals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-vr flex flex-col h-full">
            <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=60" 
                alt="Static Render" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-vr-darker/80 p-3">
                <p className="text-white font-medium">Static Render</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Traditional Approach</h3>
              <ul className="space-y-2 text-gray-300">
                <ListItem>Fixed viewpoints only</ListItem>
                <ListItem>Time-consuming revisions</ListItem>
                <ListItem>Limited interaction</ListItem>
                <ListItem>Lacks spatial awareness</ListItem>
              </ul>
            </div>
          </div>
          
          <div className="card-vr flex flex-col h-full border-vr-blue/30">
            <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpcnR1YWwlMjByZWFsaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Real-Time Visual" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-vr-blue/80 p-3">
                <p className="text-white font-medium">Real-Time Visual</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-vr-blue">Candid Reality Approach</h3>
              <ul className="space-y-2 text-gray-300">
                <ListItem>Explore from any angle</ListItem>
                <ListItem>Instant design changes</ListItem>
                <ListItem>Interactive elements</ListItem>
                <ListItem>True-to-life spatial experience</ListItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <svg className="w-5 h-5 text-vr-blue mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      {children}
    </li>
  );
}
