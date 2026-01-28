import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mic, Handshake, Wrench } from 'lucide-react';
import { GuestForm } from '@/components/forms/GuestForm';
import { PartnerForm } from '@/components/forms/PartnerForm';
import { DemoForm } from '@/components/forms/DemoForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const inquiryTypes = [
  {
    id: 'guest',
    label: 'Suggest a Guest',
    icon: Mic,
    description: 'Know someone who\'d be great on the show? Tell us about them.',
  },
  {
    id: 'partner',
    label: 'Partnerships',
    icon: Handshake,
    description: 'Interested in sponsoring or collaborating? Let\'s talk.',
  },
  {
    id: 'demo',
    label: 'Request a Demo',
    icon: Wrench,
    description: 'See MARIA in action. Tell us what you\'re working on.',
  },
];

export function Inquiries() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('guest');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['guest', 'partner', 'demo'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-h1 mb-4">Inquiries</h1>
          <p className="text-body text-muted-foreground">
            How can we help? Choose a path below.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-3xl">
          <TabsList className="grid grid-cols-3 w-full mb-8">
            {inquiryTypes.map((type) => (
              <TabsTrigger
                key={type.id}
                value={type.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <type.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{type.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
            {inquiryTypes.map((type) => (
              <TabsContent key={type.id} value={type.id} className="mt-0">
                <div className="mb-6">
                  <h2 className="text-h3 mb-2">{type.label}</h2>
                  <p className="text-body-small text-muted-foreground">
                    {type.description}
                  </p>
                </div>
                {type.id === 'guest' && <GuestForm />}
                {type.id === 'partner' && <PartnerForm />}
                {type.id === 'demo' && <DemoForm />}
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Prefer email? Reach us at{' '}
            <a
              href="mailto:themovingtargetpodcast@gmail.com"
              className="text-primary hover:underline"
            >
              themovingtargetpodcast@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
