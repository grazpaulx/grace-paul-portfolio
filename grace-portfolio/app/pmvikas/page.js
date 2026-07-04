import PMVikasIntro from "@/components/PMVikasIntro";
import PMVikasClient from "@/components/PMVikasClient";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PM VIKAS IoT Internship — Grace Paul",
  description: "IoT Assistant Internship at IIIT-Kottayam under the PM VIKAS Program — daily activity log and progress tracker."
};

export default function PMVikasPage() {
  return (
    <>
      <PMVikasIntro />
      <PMVikasClient />
      <Footer />
    </>
  );
}
