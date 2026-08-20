"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function RegisterFormClient({ projectTitle, projectSlug }: { projectTitle: string; projectSlug: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="container py-16 lg:py-24 max-w-4xl mx-auto">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link href={`/research/${projectSlug}`}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to {projectTitle}
        </Link>
      </Button>

      <div className="bg-white rounded-[24px] border border-ink-100 shadow-xl overflow-hidden p-8 sm:p-12 lg:p-16">
        {isSuccess ? (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="h-8 w-8 text-brand-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-ink-950 mb-4">
              Registration Successful!
            </h2>
            <p className="text-lg text-ink-600 mb-8 max-w-md mx-auto">
              Thank you for registering your interest in <strong>{projectTitle}</strong>. Our team will review your application and get back to you shortly.
            </p>
            <Button asChild size="lg">
              <Link href={`/research/${projectSlug}`}>Return to Project</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h1 className="text-3xl font-display font-bold text-ink-950 sm:text-4xl lg:text-5xl mb-4">
                Join the Research Team
              </h1>
              <p className="text-lg text-ink-600">
                Register your interest to collaborate on <strong>{projectTitle}</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required placeholder="Doe" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">University or Organization</Label>
                <Input id="organization" required placeholder="E.g., Harvard Medical School" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Academic Status</Label>
                <select 
                  id="status" 
                  required 
                  defaultValue=""
                  className="flex h-10 w-full rounded-md border border-ink-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-ink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="" disabled>Select your status...</option>
                  <option value="undergraduate">Undergraduate Student</option>
                  <option value="graduate">Graduate / Master's Student</option>
                  <option value="phd">PhD Candidate</option>
                  <option value="postdoc">Postdoctoral Researcher</option>
                  <option value="faculty">Faculty Member</option>
                  <option value="professional">Industry Professional</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Why are you interested in this project?</Label>
                <Textarea 
                  id="motivation" 
                  required 
                  className="min-h-[120px]" 
                  placeholder="Tell us briefly about your background and what you hope to contribute..." 
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Registration
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
