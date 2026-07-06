# Luis Hernandez Portfolio

A premium personal portfolio for Luis Hernandez, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Vercel-compatible deployment conventions.

## Page Structure

- `Home`: cinematic hero, availability indicator, animated software-system visual, GitHub/LinkedIn/resume links.
- `About`: concise engineering story, Drexel background, backend/cloud focus, and philosophy.
- `Experience`: animated impact counters with context.
- `Projects`: case-study-style project showcase with detailed modal views and clickable architecture diagrams.
- `Skills`: interactive technology ecosystem that highlights related projects.
- `Process`: software development pipeline from discovery through measurement.
- `GitHub`: static-first repository fallback content.
- `Contact`: validated form, email/social links, local time, and availability details.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run build
```

## Contact Form Delivery

The contact API validates form input and posts to `CONTACT_WEBHOOK_URL` when configured. Without that environment variable, the form returns a clear delivery error and the UI points visitors to direct email/social links instead of pretending a message was sent.

Example `.env.local`:

```bash
CONTACT_WEBHOOK_URL=https://example.com/portfolio-contact-webhook
NEXT_PUBLIC_SITE_URL=https://luishernandez.dev
```

## Vercel Deployment

1. Import the repository into Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. Set `CONTACT_WEBHOOK_URL` if form submissions should be delivered to a webhook.
4. Deploy with the default Next.js framework settings.
