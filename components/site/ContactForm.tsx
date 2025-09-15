"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactForm({ variant = "contact" }: Readonly<{ variant?: "contact" | "order" }>) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok?: boolean; error?: string }>(null);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Erreur serveur");
      setStatus({ ok: true });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Erreur inconnue";
      setStatus({ error: message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form action={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Nom</Label>
        <Input id="name" name="name" required placeholder="Votre nom" />
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="vous@exemple.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" name="phone" placeholder="+225 ..." />
        </div>
      </div>
      <div className="grid gap-2">
        <Label>Type de service</Label>
        <Select name="serviceType" defaultValue={variant === "order" ? "order" : "contact"}>
          <SelectTrigger>
            <SelectValue placeholder="Choisissez un service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="contact">Contact</SelectItem>
            <SelectItem value="carburant">Vente carburant</SelectItem>
            <SelectItem value="transport">Transport pétrolier</SelectItem>
            <SelectItem value="location">Location de véhicules</SelectItem>
            <SelectItem value="order">Commande</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {variant === "order" ? (
        <div className="grid gap-2">
          <Label htmlFor="quantity">Quantité</Label>
          <Input id="quantity" name="quantity" placeholder="Ex: 5000 L" />
        </div>
      ) : null}
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Votre message..." rows={5} />
      </div>
      <Button type="submit" disabled={loading} className="bg-primary text-primary-foreground">
        {loading ? "Envoi..." : "Envoyer"}
      </Button>
      {status?.ok ? (
        <p className="text-sm text-green-600">Message envoyé avec succès.</p>
      ) : status?.error ? (
        <p className="text-sm text-red-600">{status.error}</p>
      ) : null}
    </form>
  );
}


