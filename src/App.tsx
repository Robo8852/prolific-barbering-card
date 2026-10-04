import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, Clock3, Mail, MessageCircle, Phone, Scissors, Share2, UserRoundPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const phone = '+14583085429'
const email = 'prolificbarberingcompany@gmail.com'
const bookingText = `sms:${phone}?body=${encodeURIComponent("Hi Prolific! I'd like to book an appointment.")}`
const haircuts = [
  ['Skin fade', 30],
  ['Classic cut', 25],
  ['Senior cut 65+', 20],
  ['Kids cut', 20],
] as const
const addons = [
  ['Classic shave', 35],
  ['Beard trim', 15],
  ['Straight razor with hot towel', 15],
  ['Shampoo', 10],
] as const

function PriceList({ items }: { items: readonly (readonly [string, number])[] }) {
  return <dl className="price-list">{items.map(([name, price]) =>
    <div className="price-row" key={name}>
      <dt>{name}</dt><span className="price-dots" aria-hidden="true" /><dd><span className="dollar">$</span>{price}</dd>
    </div>,
  )}</dl>
}

function App() {
  const [notice, setNotice] = useState('')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])
  function notify(message: string) {
    if (timer.current) clearTimeout(timer.current)
    setNotice(message)
    timer.current = setTimeout(() => setNotice(''), 4500)
  }
  async function share() {
    const url = new URL('/', window.location.href).href
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Prolific Barbering Company', text: 'Classic cuts & shaves. Services, prices & contact.', url })
        return
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      notify('Card link copied!')
    } catch {
      notify(`Share this card: ${url}`)
    }
  }
  return (
    <>
      <a className="skip-link" href="#services">Skip to services & prices</a>
      <main className="business-card">
        <header className="hero">
          <div className="topline"><span>THE DIGITAL BUSINESS CARD</span><Button variant="ghost" size="icon" className="top-share" aria-label="Share business card" onClick={share}><Share2 /></Button></div>
          <div className="tagline"><span />CLASSIC CUTS & SHAVES<span /></div>
          <h1 className="sr-only">Prolific Barbering Company</h1>
          <img className="brand-logo" src="/assets/prolific-logo.webp" width="420" height="633" alt="Prolific Barbering Company — original barber chair logo" fetchPriority="high" />
          <p className="hero-caption">A classic cut. A lasting impression.</p>
          <nav className="quick-actions" aria-label="Contact Prolific">
            <Button asChild variant="ghost"><a href={`tel:${phone}`}><Phone /><span>Call</span></a></Button>
            <Button asChild variant="ghost"><a href={`sms:${phone}`}><MessageCircle /><span>Text</span></a></Button>
            <Button asChild variant="ghost"><a href={`mailto:${email}`}><Mail /><span>Email</span></a></Button>
          </nav>
          <Button asChild className="booking-button"><a href={bookingText}>TEXT TO BOOK<ArrowUpRight /></a></Button>
          <a href="#services" className="menu-link">EXPLORE SERVICES & PRICES<ArrowDown size={13} /></a>
        </header>

        <section id="services" className="services" aria-labelledby="services-title">
          <div className="section-eyebrow"><span />THE MENU<span /></div>
          <h2 id="services-title">Service price list</h2>
          <Card className="menu-card">
            <CardContent className="menu-content">
              <h3><Scissors aria-hidden="true" />Haircuts</h3>
              <PriceList items={haircuts} />
              <div className="menu-divider" aria-hidden="true"><span />✦<span /></div>
              <h3>Add ons</h3>
              <PriceList items={addons} />
            </CardContent>
          </Card>
        </section>

        <section className="studio" aria-labelledby="studio-title">
          <div className="section-eyebrow"><span />MAKE TIME FOR A FRESH CUT<span /></div>
          <h2 id="studio-title">Studio hours</h2>
          <div className="hours"><Clock3 size={20} aria-hidden="true" /><div><p>Monday – Saturday</p><strong>2:00 PM – 8:00 PM</strong></div></div>
          <a className="contact-phone" href={`tel:${phone}`}>(458) 308-5429<ArrowUpRight size={18} /></a>
          <a className="contact-email" href={`mailto:${email}`}>{email}</a>
          <Button asChild className="save-button" variant="outline"><a href="/Prolific-Barbering-Company.vcf" download onClick={() => notify('Contact ready — open the download to save.')}><UserRoundPlus />SAVE CONTACT</a></Button>
          <Button className="share-bottom" variant="ghost" onClick={share}><Share2 />Share this card</Button>
        </section>
        <footer><span className="footer-mark" aria-hidden="true">✦</span><p>PROLIFIC BARBERING COMPANY</p><small>Card by <strong>Proclaim Agency</strong></small></footer>
      </main>
      <div role="status" aria-live="polite" className={`toast ${notice ? 'visible' : ''}`}>{notice && <><Check size={17} aria-hidden="true" /><span>{notice}</span></>}</div>
    </>
  )
}

export default App
