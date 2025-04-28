
export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-vr-darker">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h2 className="section-title">
            Trusted by<br />
            Architects & Builders
          </h2>
          
          <div className="flex items-start mt-6 mb-8">
            <div className="mr-4">
              <div className="w-16 h-16 rounded-full bg-vr-dark border border-vr-blue/30 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="16" r="8" stroke="#0088FF" strokeWidth="2" />
                  <path d="M8 34C8 28.4772 13.4772 26 20 26C26.5228 26 32 28.4772 32 34" stroke="#0088FF" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className="w-5 h-5 text-vr-blue" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-300 text-lg italic mb-4">
                "Our clients were blown away by the realism and speed. Candid Reality helped us close deals faster."
              </blockquote>
              
              <div>
                <p className="font-semibold text-white">Ryan M.</p>
                <p className="text-gray-400">Principal Architect</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-vr-dark border border-vr-blue/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-vr-blue">Start Visualizing Smarter Today</h3>
            <p className="text-gray-300 mb-6">Send us your plans – we'll do the rest.</p>
            
            <form>
              <div className="space-y-4">
                <div>
                  <input type="text" placeholder="Name" className="form-input" />
                </div>
                <div>
                  <input type="email" placeholder="Email" className="form-input" />
                </div>
                <div>
                  <select className="form-input">
                    <option value="">Project Type</option>
                    <option value="commercial">Commercial</option>
                    <option value="residential">Residential</option>
                    <option value="institutional">Institutional</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <button type="submit" className="btn-primary w-full">Book a Free Consultation</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
