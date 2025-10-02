import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Users, DollarSign, Truck, Recycle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      icon: Users,
      title: "Pendaftaran & Keanggotaan",
      items: [
        {
          question: "Bagaimana cara mendaftar sebagai nasabah?",
          answer: "Anda dapat mendaftar melalui formulir online di website ini atau datang langsung ke kantor kami dengan membawa KTP. Pendaftaran gratis dan prosesnya sangat mudah."
        },
        {
          question: "Apakah ada biaya pendaftaran?",
          answer: "Tidak ada biaya pendaftaran. Semua layanan Bank Sampah Giwang Bersih 04 gratis untuk nasabah."
        },
        {
          question: "Siapa saja yang bisa menjadi nasabah?",
          answer: "Semua warga yang memiliki KTP dan berdomisili di Yogyakarta dapat menjadi nasabah kami."
        }
      ]
    },
    {
      icon: DollarSign,
      title: "Harga & Pembayaran",
      items: [
        {
          question: "Bagaimana sistem pembayaran?",
          answer: "Pembayaran dilakukan cash setelah penimbangan atau dapat ditransfer ke rekening nasabah yang terdaftar."
        },
        {
          question: "Berapa minimum sampah yang bisa disetor?",
          answer: "Minimum 2 kg per jenis sampah untuk penyetoran langsung ke kantor."
        },
        {
          question: "Apakah harga sampah bisa berubah?",
          answer: "Ya, harga dapat berubah sesuai kondisi pasar. Kami selalu mengumumkan perubahan harga melalui WhatsApp dan website."
        }
      ]
    },
    {
      icon: Truck,
      title: "Layanan Penjemputan",
      items: [
        {
          question: "Bagaimana cara menjadwalkan penjemputan?",
          answer: "Anda dapat menjadwalkan melalui website ini atau menghubungi WhatsApp admin minimal H-1."
        },
        {
          question: "Berapa minimum untuk layanan penjemputan?",
          answer: "Minimum 5 kg total untuk semua jenis sampah agar efisien dalam penjemputan."
        },
        {
          question: "Apakah ada biaya penjemputan?",
          answer: "Layanan penjemputan gratis untuk nasabah dalam radius 5 km dari kantor."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <HelpCircle className="h-8 w-8 text-primary" />
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum seputar Bank Sampah Giwang Bersih 04
          </p>
        </div>

        {faqCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <category.icon className="h-6 w-6 text-primary" />
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQ;