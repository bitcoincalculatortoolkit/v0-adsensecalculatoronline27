"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function ContactForm() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            {t.contact.form.name} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={t.contact.form.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
            required
            className="focus-visible:ring-accent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            {t.contact.form.email} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t.contact.form.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            required
            className="focus-visible:ring-accent"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">
          {t.contact.form.subject} <span className="text-destructive">*</span>
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder={t.contact.form.subjectPlaceholder}
          value={formData.subject}
          onChange={handleChange}
          required
          className="focus-visible:ring-accent"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          {t.contact.form.message} <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t.contact.form.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="resize-none focus-visible:ring-accent"
        />
      </div>

      {submitStatus === "success" && (
        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4 text-sm text-green-800 dark:text-green-200">
          {t.contact.form.successMessage}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 text-sm text-red-800 dark:text-red-200">
          {t.contact.form.errorMessage}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          t.contact.form.sending
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" aria-hidden="true" />
            {t.contact.form.submit}
          </>
        )}
      </Button>
    </form>
  )
}
