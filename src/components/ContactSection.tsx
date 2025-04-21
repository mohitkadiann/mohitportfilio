
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-[#eee] text-black p-4 rounded-md shadow-md mt-8">
      <h2 className="font-playfair text-2xl md:text-3xl text-black mb-3">Contact</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex-1 bg-white border border-gray-200 rounded-xl px-6 py-6 shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center"
        >
          <Mail className="text-[#9b87f5] mb-2" size={32} />
          <h3 className="font-playfair text-lg text-black mb-1">Email</h3>
          <a
            href="mailto:kadian.mohit003@gmail.com"
            className="font-medium text-primary-purple hover:underline break-all"
          >
            kadian.mohit003@gmail.com
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-white border border-gray-200 rounded-xl px-6 py-6 shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center"
        >
          <Phone className="text-[#7E69AB] mb-2" size={32} />
          <h3 className="font-playfair text-lg text-black mb-1">Phone</h3>
          <span className="font-medium text-dark-purple">+91-9729741128</span>
        </motion.div>
      </div>
    </section>
  );
}
