import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SiFacebook, SiWhatsapp, SiGmail, SiX } from "react-icons/si";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  const socialLinks = [
    {
      name: "Facebook",
      icon: SiFacebook,
      url: "https://facebook.com/boxiphone",
      color: "text-blue-600",
    },
    {
      name: "WhatsApp",
      icon: SiWhatsapp,
      url: "https://wa.me/1234567890",
      color: "text-green-500",
    },
    {
      name: "X (Twitter)",
      icon: SiX,
      url: "https://x.com/boxiphone",
      color: "text-gray-800",
    },
    {
      name: "Gmail",
      icon: SiGmail,
      url: "mailto:info@boxiphone.com",
      color: "text-red-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Visit Our Store</h2>
            <p className="text-muted-foreground">
              123 Tech Street<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
            <div className="flex gap-6 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:opacity-80 transition-opacity ${social.color}`}
                  title={social.name}
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground">
              Email: info@boxiphone.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}