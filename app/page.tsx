import { InquiryForm } from "@/components/InquiryForm";
import { PageEffects } from "@/components/PageEffects";
import {
  PhFoyerPortrait,
  PhFoyerWide,
  PhLawnPortrait,
  PhLawnWide,
  PhMainHallPortrait,
  PhMainHallWide,
  PhSuiteWide,
} from "@/components/Placeholders";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <>
      <nav className="topnav" id="topnav" aria-label="Primary">
        <a href="#hero" className="nav-link hide-mobile">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#spaces" className="nav-link">Spaces</a>
        <a href="#events" className="nav-link hide-mobile">Events</a>
        <a href="#location" className="nav-link hide-mobile">Contact</a>
        <a href="#inquiry" className="nav-cta">
          Inquire <span className="arrow" aria-hidden>↗</span>
        </a>
      </nav>

      <a href="#inquiry" className="hero-inquire" id="hero-inquire">
        Inquire <span aria-hidden>↗</span>
      </a>

      {/* 01 HERO */}
      <section id="hero" className="hero" data-screen-label="01 Hero">
        <div className="hero-fallback" />
        <video
          className="hero-media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src="/media/aerial.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-grain" aria-hidden />

        <div className="hero-content">
          <div className="hero-eyebrow"><span>Sadashivpet</span><span className="hero-eyebrow-dot" aria-hidden="true">·</span><span>Telangana</span></div>
          <h1 className="hero-title">
            Burle<br />Convention
          </h1>
          <p className="hero-sub">
            Where a thousand guests feel like family.
          </p>
        </div>

        <div className="hero-foot">
          <span>Capacity 1000+ guests</span>
          <span className="scroll-cue">
            Scroll <span className="line" aria-hidden />
          </span>
        </div>
      </section>

      {/* 02 SCALE REVEAL */}
      <section id="reveal" className="reveal" data-screen-label="02 Reveal">
        <span className="sec-num"></span>
        <div className="container">
          <h2 className="reveal-line reveal-up">
            The Venue.
          </h2>

          <div className="reveal-strip">
            <div className="photo reveal-up" data-stagger="1">
              <PhMainHallPortrait />
              <span className="ph-tag">Main hall</span>
            </div>
            <div className="photo reveal-up" data-stagger="2">
              <PhLawnPortrait />
              <span className="ph-tag">The lawn</span>
            </div>
            <div className="photo reveal-up" data-stagger="3">
              <PhFoyerPortrait />
              <span className="ph-tag">Foyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 ABOUT */}
      <section id="about" className="about" data-screen-label="03 About">
        <span className="sec-num">About</span>
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 className="about-h2 reveal-up" data-stagger="1">
                Made for the moments that matter most.
              </h2>
            </div>
            <div>
              <div className="about-body reveal-up" data-stagger="2">
                <p>
                  <span className="lead-letter">B</span>urle Convention is a purpose-built function hall in Sadashivpet, on the western edge of Telangana. Designed for the kind of evening that fills a room with a thousand guests and still finds space for quiet, considered moments — between the rituals, between the speeches, between people.
                </p>
                <p>
                  Four distinct spaces, one continuous experience. From the welcome at the foyer to the procession into the hall, from the lawn at dusk to the suites where the day begins — every part of the venue has been thought through, so the day itself doesn&apos;t have to be.
                </p>
              </div>

              <dl className="about-meta reveal-up" data-stagger="3">
                <div><dt>Location</dt><dd>Sadashivpet</dd></div>
                <div><dt>Capacity</dt><dd>1000+ guests</dd></div>
                <div><dt>Spaces</dt><dd>Hall · Lawn · Foyer · Suites</dd></div>
                <div><dt>Hosting</dt><dd>Year-round</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 04 SPACES */}
      <section id="spaces" className="spaces" data-screen-label="04 Spaces">
        <span className="sec-num">The four spaces</span>
        <div className="container">
          <div className="spaces-head">
            <div>
              <h2 className="spaces-h2 reveal-up" data-stagger="1">The spaces.</h2>
            </div>
          </div>

          <div className="spaces-grid">
            <div className="space-row">
              <div className="space-img reveal-up"><PhMainHallWide /></div>
              <div className="reveal-up" data-stagger="1">
                <h3 className="space-name">The Main Hall</h3>
                <p className="space-desc">
                  Pillarless and climate-controlled, designed to seat a thousand under one ceiling. The stage and aisle are proportioned for processions — and the acoustics tuned for everything from vows to live music.
                </p>
                <ul className="space-feats">
                  <li>1000+ seated</li><li>Pillarless</li><li>AC</li><li>Stage &amp; aisle</li>
                </ul>
              </div>
            </div>

            <div className="space-row flip">
              <div className="space-img reveal-up"><PhLawnWide /></div>
              <div className="reveal-up" data-stagger="1">
                <h3 className="space-name">The Lawn</h3>
                <p className="space-desc">
                  An open-air space for haldi, mehendi, and cocktail receptions. Ambient lighting strung above turns dusk into evening — a softer, slower counterpoint to the formality of the hall.
                </p>
                <ul className="space-feats">
                  <li>Open-air</li><li>500+ guests</li><li>Ambient lighting</li><li>Daytime &amp; evening</li>
                </ul>
              </div>
            </div>

            <div className="space-row">
              <div className="space-img reveal-up"><PhFoyerWide /></div>
              <div className="reveal-up" data-stagger="1">
                <h3 className="space-name">The Foyer</h3>
                <p className="space-desc">
                  A generous pre-function space, where guests arrive at their own pace, greet, and gather before the main event. Designed as a breath, not a bottleneck.
                </p>
                <ul className="space-feats">
                  <li>Welcome area</li><li>Cocktail-ready</li><li>AC</li><li>Reception desk</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 EVENTS */}
      <section id="events" className="events" data-screen-label="05 Events">
        <span className="sec-num">Events</span>
        <div className="container">
          <div className="events-head">
            <div>
              <h2 className="spaces-h2 reveal-up" data-stagger="1">What we host.</h2>
            </div>
          </div>

          <div className="events-list reveal-up" data-stagger="2">
            {[
              ["Weddings", "Hindu ceremonies, baraats, mandap"],
              ["Receptions", "Stage, dining, dancing"],
              ["Haldi · Mehendi · Engagement", "Daytime & intimate"],
              ["Birthdays", "Milestone celebrations"],
              ["Private gatherings", "By invitation"],
            ].map(([name, tag]) => (
              <div className="event-row" key={name}>
                <span className="event-name">{name}</span>
                <span className="event-tag">{tag}</span>
                <span className="event-arrow" aria-hidden>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 AMENITIES */}
      <section id="amenities" className="amenities" data-screen-label="06 Amenities">
        <span className="sec-num">Amenities</span>
        <div className="container">
          <div className="amenities-grid">
            <div>
              <h2 className="about-h2 reveal-up" data-stagger="1">
                Considered, end to end.
              </h2>
              <p className="about-body reveal-up" data-stagger="2" style={{ marginTop: 24, maxWidth: 340 }}>
                Everything a thousand-guest evening asks for — already accounted for, so the day itself can be about the people in it.
              </p>
            </div>
            <div className="amenities-list">
              {[
                ["Valet & parking", "Generous on-site parking with valet service for arriving and departing guests."],
                ["Climate control", "Fully air-conditioned main hall, foyer, and suites, year-round."],
                ["Catering", "In-house kitchen and approved external catering partners — vegetarian and non-vegetarian."],
                ["Decor partners", "Trusted partners for floral and stage design, or bring your own designer."],
                ["Bridal & groom suites", "Private rooms for getting ready, away from the gathering."],
                ["Power backup", "Full backup power, so the evening never pauses for a moment."],
              ].map(([name, desc], i) => (
                <div className="amenity-item reveal-up" data-stagger={(i % 2) + 1} key={name}>
                  <div className="amenity-name">{name}</div>
                  <div className="amenity-desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 INQUIRY */}
      <section id="inquiry" className="inquiry" data-screen-label="07 Inquiry">
        <span className="sec-num">Plan your event</span>
        <div className="container">
          <div className="inquiry-grid">
            <div>
              <h2 className="inquiry-h2 reveal-up" data-stagger="1">
                Tell us about the day.
              </h2>
              <p className="inquiry-intro reveal-up" data-stagger="2">
                Share a few details and we&apos;ll come back to you with availability, a tour of the venue, and the next steps for booking.
              </p>

              <div className="inquiry-meta reveal-up" data-stagger="3">
                Or reach us directly —<br />
                <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a> · <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>

            <InquiryForm />
          </div>
        </div>
      </section>

      {/* 08 LOCATION */}
      <section id="location" className="location" data-screen-label="08 Location">
        <span className="sec-num">Find us</span>
        <div className="container">
          <div className="location-grid">
            <div className="map-frame reveal-up">
              <iframe
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=B+Convention,+Sadashivpet,+Telangana+502291&z=18&output=embed"
                title="Burle Convention map"
              />
            </div>
            <div className="reveal-up" data-stagger="1">
              <h2 className="about-h2" style={{ margin: "16px 0 40px 0", fontSize: "clamp(36px, 3.4vw, 52px)" }}>
                Sadashivpet,<br />Telangana.
              </h2>

              <dl className="loc-meta-block">
                <dt>Address</dt>
                <dd>
                  Burle Convention<br />
                  <span className="muted">Sadashivpet, Telangana 502291</span>
                </dd>
              </dl>
              <dl className="loc-meta-block">
                <dt>Drive times</dt>
                <dd>
                  <span className="muted">
                    Sangareddy · ~25 min<br />
                    Hyderabad (HITEC City) · ~75 min<br />
                    Shamshabad Airport · ~90 min
                  </span>
                </dd>
              </dl>
              <dl className="loc-meta-block">
                <dt>Contact</dt>
                <dd>
                  <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a><br />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 09 FAQ */}
      <section id="faq" className="faq" data-screen-label="09 FAQ">
        <span className="sec-num">Questions</span>
        <div className="container">
          <div className="faq-head">
            <div>
              <h2 className="spaces-h2 reveal-up" data-stagger="1">
                Questions, answered.
              </h2>
            </div>
          </div>

          <div className="faq-list reveal-up" data-stagger="2">
            {[
              ["What is the maximum capacity?", "The main hall comfortably seats 1000+ guests, with additional standing and floating capacity in the foyer and lawn. We can configure layouts for both seated dining and reception-style gatherings."],
              ["Can we bring our own caterer and decorator?", "Yes. We have an in-house kitchen and trusted decor partners, and we're equally happy to host your preferred caterer and designer. Coordination is part of what we do."],
              ["Is parking available on-site?", "Yes — generous on-site parking with valet service. We plan capacity based on your guest count."],
              ["What is the booking and cancellation policy?", "Bookings are confirmed with an advance, with the balance due before the event. Cancellation terms depend on the proximity to the event date — we'll walk you through them in detail when you inquire."],
              ["Do you offer accommodation nearby?", "Sadashivpet has a range of hotels and guest houses within a short drive. We're happy to share recommendations and help with group bookings."],
              ["How early should we book?", "For weddings, we recommend booking at least 4–6 months in advance, especially during the wedding season (October–February). Smaller events can often be accommodated on shorter notice."],
            ].map(([q, a]) => (
              <div className="faq-row" key={q}>
                <div className="faq-q-row">
                  <div className="faq-q">{q}</div>
                  <div className="faq-icon" aria-hidden />
                </div>
                <div className="faq-a">
                  <div className="faq-a-inner">{a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-mark">{site.name}</div>
            <p className="footer-tag">{site.tagline}</p>
          </div>
          <div>
            <h4>Visit</h4>
            <a href="#location">Sadashivpet</a>
            <a href="#location">Telangana 502291</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <h4>Follow</h4>
            <a href={site.social.instagram} rel="noopener" target="_blank">Instagram</a>
            <a href={site.social.youtube} rel="noopener" target="_blank">YouTube</a>
          </div>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Sadashivpet · Telangana</span>
        </div>
      </footer>

      <PageEffects />
    </>
  );
}
