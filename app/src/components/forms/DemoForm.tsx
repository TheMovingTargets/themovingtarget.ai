import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function DemoForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    problem: '',
    timeline: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build mailto URL with structured email content
    const subject = `Demo Request: ${formData.company}`;
    const body = `MARIA DEMO REQUEST

CONTACT INFORMATION
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Role: ${formData.role}

TEAM DETAILS
Team Size: ${formData.teamSize || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

PROBLEM TO SOLVE
${formData.problem}
`;

    const mailtoUrl = `mailto:themovingtargetpodcast@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open mail client
    window.location.href = mailtoUrl;

    // Navigate to success page after a short delay
    setTimeout(() => {
      navigate('/inquiries/success?type=demo');
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-secondary border-border"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="bg-secondary border-border"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company name"
            required
            className="bg-secondary border-border"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role *</Label>
          <Input
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Your role"
            required
            className="bg-secondary border-border"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="teamSize">Team Size</Label>
        <Select
          value={formData.teamSize}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, teamSize: value }))
          }
        >
          <SelectTrigger className="bg-secondary border-border">
            <SelectValue placeholder="Select team size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1-10 people</SelectItem>
            <SelectItem value="11-50">11-50 people</SelectItem>
            <SelectItem value="51-200">51-200 people</SelectItem>
            <SelectItem value="200+">200+ people</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="problem">What problem are you solving? *</Label>
        <Textarea
          id="problem"
          name="problem"
          value={formData.problem}
          onChange={handleChange}
          placeholder="Tell us about the challenges you're facing and what you're hoping to achieve..."
          required
          rows={4}
          className="bg-secondary border-border resize-none"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">Timeline</Label>
        <Select
          value={formData.timeline}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, timeline: value }))
          }
        >
          <SelectTrigger className="bg-secondary border-border">
            <SelectValue placeholder="Select timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asap">ASAP</SelectItem>
            <SelectItem value="1-3-months">1-3 months</SelectItem>
            <SelectItem value="3-6-months">3-6 months</SelectItem>
            <SelectItem value="exploring">Just exploring</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 btn-hover"
      >
        {isSubmitting ? (
          'Submitting...'
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Request Demo
          </>
        )}
      </Button>

      <p className="text-sm text-muted-foreground">
        We'll get back to you within 48 hours to schedule.
      </p>
    </form>
  );
}
