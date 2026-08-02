import { jsPDF } from 'jspdf'
import { profile, experience, skills, education, certifications } from '../data/resume'

const MARGIN = 48
const PAGE_WIDTH = 595.28
const PAGE_HEIGHT = 841.89
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2

export function generateResumePdf() {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  let y = MARGIN

  const ensureSpace = (needed) => {
    if (y + needed > PAGE_HEIGHT - MARGIN) {
      doc.addPage()
      y = MARGIN
    }
  }

  const heading = (text) => {
    ensureSpace(28)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.setTextColor(30, 41, 59)
    doc.text(text, MARGIN, y)
    y += 6
    doc.setDrawColor(224, 224, 224)
    doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y)
    y += 16
  }

  const paragraph = (text, { fontSize = 10, color = [71, 85, 105], gap = 12, bold = false } = {}) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal')
    doc.setFontSize(fontSize)
    doc.setTextColor(...color)
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH)
    ensureSpace(lines.length * (fontSize + 2))
    doc.text(lines, MARGIN, y)
    y += lines.length * (fontSize + 2) + gap
  }

  const bullet = (text) => {
    const fontSize = 10
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(fontSize)
    doc.setTextColor(71, 85, 105)
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH - 14)
    ensureSpace(lines.length * (fontSize + 2))
    doc.text('•', MARGIN, y)
    doc.text(lines, MARGIN + 14, y)
    y += lines.length * (fontSize + 2) + 3
  }

  // Header
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(22)
  doc.setTextColor(15, 23, 42)
  doc.text(profile.name, MARGIN, y)
  y += 22

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(12)
  doc.setTextColor(79, 70, 229)
  doc.text(profile.title, MARGIN, y)
  y += 18

  doc.setFontSize(9.5)
  doc.setTextColor(100, 116, 139)
  doc.text(`${profile.email}   |   ${profile.phone}   |   ${profile.location}`, MARGIN, y)
  y += 22

  heading('Summary')
  paragraph(profile.summary, { gap: 18 })

  heading('Experience')
  experience.forEach((job, i) => {
    ensureSpace(30)
    paragraph(`${job.role} · ${job.company}`, { fontSize: 11, color: [15, 23, 42], bold: true, gap: 2 })
    paragraph(job.period, { fontSize: 9, color: [100, 116, 139], gap: 6 })
    paragraph(job.summary, { fontSize: 9.5, gap: 6 })
    job.highlights.forEach(bullet)
    y += i === experience.length - 1 ? 0 : 10
  })

  heading('Certifications')
  certifications.forEach((cert) => {
    paragraph(cert.title, { fontSize: 10.5, color: [15, 23, 42], bold: true, gap: 2 })
    paragraph(`${cert.issuer} · ${cert.instructor} · ${cert.meta} · Completed ${cert.date}`, {
      fontSize: 9,
      gap: 10,
    })
  })

  heading('Skills')
  skills.forEach((group) => {
    paragraph(`${group.category}: ${group.items.join(', ')}`, { fontSize: 9.5, gap: 6 })
  })

  heading('Education')
  paragraph(`${education.school} — ${education.degree} (${education.year})`, { fontSize: 9.5, gap: 0 })

  doc.save('Alvin-Baclagan-Resume.pdf')
}
