"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">Al-Falah Travel &middot; Last updated: November 2026</p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">1. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              When you interact with Al-Falah Travel via our website or our official WhatsApp communication channels, we may collect information necessary to fulfill your travel inquiries, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-foreground">
              <li>Contact details such as name, phone number, and email address.</li>
              <li>Travel preferences, flight inquiries, Umrah/Hajj package requests, and visa requirements.</li>
              <li>Communication history sent through our messaging services.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">2. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              We process your personal information solely for providing you with travel services, specifically to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-foreground">
              <li>Respond to inquiries, send flight quotes, and confirm travel bookings.</li>
              <li>Send critical booking updates, itinerary confirmations, and travel alerts via WhatsApp or email.</li>
              <li>Comply with applicable airline, immigration, and legal requirements.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">3. WhatsApp Communications & Meta Platform Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Our messaging services utilize the official WhatsApp Business Cloud API provided by Meta Platforms Inc. We do not sell, rent, or trade your contact information or messaging data to any third parties for advertising or marketing purposes.
            </p>
            <p>
              You may opt out of automated messaging at any time simply by replying STOP or contacting our support team directly.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">4. Data Security & Storage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              We employ strict industry-standard technical measures, including encrypted token storage (AES-256) and secured cloud databases, to protect your personal information against unauthorized access, alteration, or disclosure.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">5. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data deletion, please reach out to:
            </p>
            <p className="font-medium text-foreground">Al-Falah Travel</p>
            <p>Email: <a href="mailto:info@alfalahtravels.net" className="text-primary hover:underline">info@alfalahtravels.net</a></p>
            <p>Website: <a href="https://alfalahtravels.net" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://alfalahtravels.net</a></p>
          </CardContent>
        </Card>

        <div className="text-center pt-4">
          <Link href="/" className="text-sm text-primary hover:underline">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
