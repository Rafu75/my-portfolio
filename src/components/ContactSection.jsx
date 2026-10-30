import { Mail, MapPin, Phone, Send } from "lucide-react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        setIsSubmitting(true);

  try {
    await emailjs.sendForm(
      "service_rp595kl",
      "template_2hdpde9",
      e.currentTarget,
      {
        publicKey: "zamHbG8Sjo1h8lowN",
      }
    );

    setTimeout(() => {
      toast.success(
        "Message sent successfully!", {
        description: "Thank you for your message. I'll get back to you soon.",
      });

      form.reset();
      setIsSubmitting(false);
    }, 1500);

  } catch (error) {
    console.error("EmailJS Error:", error);

    toast.error(
        "Failed to send message!", {
        description: "Something went wrong. Please try again.",
    });

    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">  
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                   <h3 className="bg-card p-3 rounded-lg shadow-xs text-2xl font-semibold mb-10"> 
                    {" "}
                    Contact Information
                    </h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-10 w-8 text-primary"/>{" "}
                            </div>
                            <div className="text-left bg-card p-2 rounded-lg shadow-xs">
                                <h4 className="font-medium"> Email</h4>
                                <a 
                                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rafimahmudul96@gmail.com"
                                  target="_blank"
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    rafimahmudul96@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-10 w-8 text-primary"/>{" "}
                            </div>
                            <div className="text-left bg-card p-2 rounded-lg shadow-xs">
                                <h4 className="font-medium"> Phone</h4>
                                <a 
                                  href="tel:+8801610921863"
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +8801610921863
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-10 w-8 text-primary"/>{" "}
                            </div>
                            <div className="text-left bg-card p-2 rounded-lg shadow-xs">
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Dhaka, Bangladesh
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10">
                        <h4 className="text-xl font-medium mb-4"> Connect With Me</h4>
                        <div className="bg-card p-3 rounded-lg shadow-xs flex space-x-8 justify-center text-xl">
                            <a href="https://www.linkedin.com/in/rafimahmudul" target="_blank">
                                <BsLinkedin className="text-[#0A66C2] "/>
                            </a>
                            <a href="https://www.instagram.com/mahmudul.hasan.rafi" target="_blank">
                                <BsInstagram className="text-[#d92561] "/>
                            </a>
                            <a href="https://www.facebook.com/rafimahmudul75" target="_blank">
                                <BsFacebook className="text-[#1877F2] "/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label 
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                {" "}
                                Your Name
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Rafi Mahmudul..."
                            />
                        </div>
                        <div>
                            <label 
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                {" "}
                                Your Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="rafolio@gmail.com"
                            />
                        </div>
                        <div>
                            <label 
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >
                                {" "}
                                Your Message
                            </label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello! I'd like to talk about..."
                            />
                        </div>

                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className={cn(
                            "cosmic-button w-full flex items-center justify-center gap-2"
                          )}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};