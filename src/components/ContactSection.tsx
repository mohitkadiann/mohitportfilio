
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#eee] text-black p-4 rounded-md shadow-md mt-8"> {/* Changed background to lighter off-white */}
      <h2 className="font-playfair text-2xl md:text-3xl text-primary mb-3">Contact</h2>
      <div className="bg-secondary rounded-xl px-6 py-5 shadow flex flex-col md:flex-row items-center gap-4 animate-fade-in">
        <div className="flex items-center gap-2 text-gray-900">
          <Mail className="text-primary" size={22} />
          <a href="mailto:kadian.mohit003@gmail.com" className="hover:underline hover:text-primary transition">{'kadian.mohit003@gmail.com'}</a>
        </div>
        <div className="flex items-center gap-2 text-gray-900">
          <Phone className="text-primary" size={22} />
          <span>+91-9729741128</span>
        </div>
      </div>
    </section>
  );
}
