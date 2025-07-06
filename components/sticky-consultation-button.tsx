'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StickyConsultationButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919152407067"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </a>
      
      {/* Main Consultation Button */}
      <Link href="/contact">
        <Button
          size="lg"
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse"
        >
          <Phone className="h-5 w-5 mr-2" />
          Get Consultation
        </Button>
      </Link>
    </div>
  );
};

export default StickyConsultationButton;