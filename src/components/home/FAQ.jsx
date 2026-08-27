import { useState } from 'react';
import Icon from '../ui/Icon';
import { faqs } from '../../data/content';

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-lg border-l-4 border-brand-purple bg-[#232429]">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-white"
        >
          {faq.question}
          <Icon name={isOpen ? 'minus' : 'plus'} className="h-5 w-5 shrink-0" strokeWidth={2.5} />
        </button>
      </h3>
      {isOpen && (
        <p className="bg-black/20 px-6 py-5 text-sm leading-relaxed text-white/80">{faq.answer}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(faqs[2]?.id ?? faqs[0]?.id ?? null);

  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8" aria-label="Frequently asked questions">
      <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>

      <div className="mx-auto mt-10 max-w-4xl space-y-4">
        {faqs.map((faq) => (
          <FaqItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
          />
        ))}
      </div>
    </section>
  );
}
