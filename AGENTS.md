# AGENTS.md

# Project Identity

Nama project: InspiraTech Landing Page

Project ini merupakan landing page company profile bertema AI Vision Inspection untuk industri manufaktur.

Seluruh implementasi harus mengikuti desain Figma semaksimal mungkin (pixel-perfect) dengan tetap menjaga clean code, reusable component, dan responsive design.

---

# Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React
- Framer Motion (jika diperlukan)

---

# UI Library

Project ini menggunakan shadcn/ui.

JANGAN membuat ulang komponen UI apabila sudah tersedia pada shadcn/ui.

Gunakan komponen bawaan seperti:

- Button
- Card
- Badge
- Avatar
- Navigation Menu
- Dialog
- Dropdown Menu
- Sheet
- Separator
- Accordion
- Tabs
- Input
- Textarea
- Carousel (Embla)
- Skeleton

Jika membutuhkan penyesuaian visual, ubah styling komponen tersebut tanpa mengubah API, props, atau logic React.

---

# Design Principle

Prioritas utama adalah mengikuti desain Figma.

Seluruh spacing, typography, warna, radius, layout, hierarchy, dan visual harus mengikuti desain.

Jangan membuat improvisasi UI.

Jika terdapat perbedaan antara shadcn dan desain Figma, maka sesuaikan styling shadcn agar menyerupai desain Figma.

---

# Color System

Background

- #000000

Primary

- #DA7E00

Primary Hover

- #B66900

Gradient

- #DA7E00 → #EDA94C

Text

- White
- Light Gray
- Gray

Gunakan CSS Variable atau Tailwind Theme.

Jangan hardcode warna yang berulang.

---

# Typography

Font

Plus Jakarta Sans

Heading

- font-semibold
- line-height 140%

Body

- line-height 175%

Ukuran font utama

70
55
32
24
20
18
16

---

# Radius

Gunakan

- 20px
- 24px
- 30px
- Full Rounded (999px)

---

# Layout

Container maksimum sekitar 1200px.

Seluruh section memiliki padding horizontal yang konsisten.

Section menggunakan spacing vertikal besar.

Jangan menggunakan layout acak.

---

# Components

Komponen harus reusable.

Jangan membuat komponen besar yang berisi banyak logic.

Pisahkan menjadi section.

Contoh

components/
Hero
Navbar
Partner
Problem
Services
Capabilities
Value
HowItWorks
Testimonials
CTA
Footer

---

# Styling Rules

Gunakan Tailwind.

Hindari inline style.

Gunakan class yang konsisten.

Gunakan utility daripada custom CSS apabila memungkinkan.

Gunakan CSS Variable untuk nilai yang sering digunakan.

---

# Responsive Rules

Desktop adalah prioritas pertama karena desain berasal dari desktop.

Setelah desktop selesai, implementasikan responsive untuk:

- Laptop
- Tablet
- Mobile

Jangan mengorbankan desain desktop.

---

# Accessibility

Gunakan semantic HTML.

Pastikan button memiliki type.

Pastikan image memiliki alt.

Gunakan heading hierarchy.

---

# Performance

Gunakan next/image.

Gunakan lazy loading bila memungkinkan.

Jangan membuat re-render yang tidak diperlukan.

---

# Animation

Gunakan animasi ringan.

Tidak berlebihan.

Durasi sekitar 200–400ms.

---

# Code Style

Gunakan TypeScript.

Gunakan functional component.

Gunakan arrow function.

Jangan menggunakan any.

---

# Workflow

Sebelum membuat kode:

1. Analisis desain.
2. Identifikasi component.
3. Identifikasi reusable pattern.
4. Identifikasi design token.
5. Baru implementasi.

Jangan langsung membuat seluruh halaman sekaligus.

Implementasikan per section.

---

# IMPORTANT

Jangan mengubah logic apabila hanya diminta mengubah tampilan.

Selalu gunakan komponen shadcn/ui apabila tersedia.

Prioritaskan reusable component dibanding copy-paste.

Ikuti desain Figma semaksimal mungkin.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->