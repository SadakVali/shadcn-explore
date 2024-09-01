import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface faqType {
  question: String;
  answer: String;
}

export default function page() {
  const faqs: faqType[] = [
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it styled?",
      answer:
        "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      question: "Is it animated?",
      answer:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];

  return (
    <div className="overflow-hidden h-full">
      <div className="flex gap-10 relative top-[50%] left-[50%]">
        <div>
          <h1>Sadiq Vali</h1>
          <h1>Sadiq Vali</h1>
          <h1>Sadiq Vali</h1>
          <h1>Sadiq Vali</h1>
          <h1>Sadiq Vali</h1>
          <h1>Sadiq Vali</h1>
          <h1>Sadiq Vali</h1>
        </div>
        <div>
          {faqs.map((faq, id) => (
            <Accord key={id} content={faq} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Accord({ content, id }: { content: faqType; id: number }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={`item-${id}`}>
        <AccordionTrigger>{content.question}</AccordionTrigger>
        <AccordionContent>{content.answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
