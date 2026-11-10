"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FileText className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Terms and Conditions</h1>
          <p className="text-muted-foreground text-sm">Al-Falah Travel &middot; Last updated: November 2026</p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">1. Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              By accessing our website at alfalahtravels.net, utilizing our booking platforms, or communicating with us via our official WhatsApp channels, you agree to comply with and be bound by these Terms and Conditions.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">2. Travel Booking & Agency Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Al-Falah Travel acts as an authorized booking agent between clients and travel service providers, including airlines, hotels, and tour operators.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-foreground">
              <li>All flight tickets, Umrah/Hajj packages, and hotel reservations are subject to the terms, tariffs, and baggage policies of the respective providers.</li>
              <li>Clients are responsible for ensuring they possess valid passports, visas, and health documents required for their destinations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">3. WhatsApp Messaging Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              By initiating contact with Al-Falah Travel on WhatsApp, you consent to receive customer support, booking updates, payment confirmations, and relevant travel service notifications. You may opt out of automated messaging at any time.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">4. Cancellations and Refunds</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Cancellation and refund requests are governed by the specific rules of the operating airline, hotel, or package provider. Al-Falah Travel processes refunds following verification and provider confirmation.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">5. Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              For inquiries, bookings, or clarifications regarding these terms:
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
