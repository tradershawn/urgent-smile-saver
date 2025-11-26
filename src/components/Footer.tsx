const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Emergency Dental Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Emergency Tooth Extraction</li>
              <li>Tooth Pain Treatment</li>
              <li>Same-Day Appointments</li>
              <li>Urgent Dental Care</li>
              <li>Emergency Dental Treatment</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>📞 <a href="tel:203-865-1480" className="hover:underline">203-865-1480</a></li>
              <li>📧 emergency@newhavendent.com</li>
              <li>📍 123 Medical Plaza, New Haven, CT</li>
              <li>🕐 Open 7 Days a Week</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Service Area</h3>
            <p className="text-sm opacity-90 mb-4">
              Serving New Haven and surrounding areas with emergency dental care, 
              urgent tooth extraction, and same-day dental appointments.
            </p>
            <p className="text-sm opacity-90 font-semibold">
              Emergency Dentist Near Me • New Haven CT
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-75">
          <p>© 2024 New Haven Emergency Dental. All rights reserved. | Emergency Dental Clinic in New Haven</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
