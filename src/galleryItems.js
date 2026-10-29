// Builds the gallery from the photos already listed in content.js (the `figures` of each group),
// so a photo and its caption only ever need to be filled in once.
//
// Optional extras on any figure in content.js:
//   description: 'One or two sentences shown under the title when the photo is open.'
//   link: { label: 'Learn more →', href: 'https://...' }

import { sections } from './content.js'

// Label shown in the small tag, by the title of the group the photo belongs to.
const KIND = {
  'Conference Presentations': 'Conference',
  'Teaching Experience': 'Teaching',
}

export const galleryItems = sections
  .flatMap((s) => s.groups)
  .flatMap((g) => (g.figures || []).map((f) => ({ ...f, kind: KIND[g.title] || g.title })))
  .map((f, i) => ({
    id: `photo-${i + 1}`,
    tag: `${f.kind} ${String(i + 1).padStart(2, '0')}`,
    title: f.caption,
    description: f.description || '',
    alt: f.alt,
    src: f.src,
    link: f.link && f.link.href ? f.link : null,
  }))