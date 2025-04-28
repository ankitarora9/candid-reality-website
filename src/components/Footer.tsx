
export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-vr-darker border-t border-vr-blue/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <LogoIcon />
              <span className="text-xl font-bold ml-3 text-vr-blue">CANDID REALITY</span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              Transforming architectural visualization with real-time, immersive experiences that bring your designs to life.
            </p>
            <div className="flex space-x-4">
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialIcon>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-semibold text-lg mb-4">Services</h5>
            <ul className="space-y-2">
              <FooterLink href="#">Commercial Projects</FooterLink>
              <FooterLink href="#">Residential Visualizations</FooterLink>
              <FooterLink href="#">VR Experiences</FooterLink>
              <FooterLink href="#">Architectural Rendering</FooterLink>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold text-lg mb-4">Company</h5>
            <ul className="space-y-2">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Portfolio</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-vr-blue/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Candid Reality. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-vr-blue transition-colors">
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full border border-vr-blue/20 flex items-center justify-center text-vr-blue hover:bg-vr-blue/10 hover:border-vr-blue/50 transition-colors">
      {children}
    </a>
  );
}

function LogoIcon() {
  return (
    <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="5" width="18" height="18" rx="4" stroke="#0088FF" strokeWidth="2" />
      <rect x="21" y="5" width="18" height="18" rx="4" stroke="#0088FF" strokeWidth="2" />
      <circle cx="10" cy="14" r="4" fill="#0088FF" />
      <circle cx="30" cy="14" r="4" fill="#0088FF" />
    </svg>
  );
}
