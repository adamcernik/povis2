import { useState } from 'react';
import './Example1.css';

function Example1() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? -1 : i);

  const faqItems = [
    { q: 'Co je systém POVIS2 a k čemu slouží?', a: 'POVIS2 je povodňový informační systém pro shromažďování, správu a zpřístupňování informací o povodňovém nebezpečí v České republice. Slouží jak pro veřejnou správu, tak pro občany.' },
    { q: 'Jak zjistím, zda je moje nemovitost v záplavovém území?', a: 'V sekci Záplavová území zadejte adresu nebo katastrální číslo nemovitosti. Systém vám zobrazí, zda se pozemek nachází v záplavovém území a jaká je míra ohrožení.' },
    { q: 'Kde najdu povodňový plán mé obce?', a: 'V sekci Povodňové plány vyhledejte svou obec. Každá obec má povinnost mít zpracovaný povodňový plán dostupný občanům v digitální i tištěné formě.' },
    { q: 'Jak se mohu přihlásit do systému?', a: 'Pro přihlášení klikněte na tlačítko „Přihlásit se" v pravém horním rohu. Můžete využít Identity občana (NIA) nebo přidělené přístupové údaje od vašeho správce.' },
  ];

  return (
    <div>
      {/* Skip to main content — WCAG 2.4.1 */}
      <a href="#main-content" className="skip-link">Přeskočit na hlavní obsah</a>

      {/* ===== HEADER ===== */}
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <div className="header-left">
            <a href="/" className="header-logo" aria-label="POVIS2 – přejít na úvodní stránku">
              <div className="header-logo-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="white" opacity="0.9" />
                </svg>
              </div>
              <span className="header-logo-text">POVIS2</span>
            </a>
            <nav aria-label="Hlavní navigace">
              <ul className="header-nav" role="menubar">
                <li role="none"><a href="#" role="menuitem" aria-current="page" className="active">Úvod</a></li>
                <li role="none"><a href="#" role="menuitem">Povodňové plány</a></li>
                <li role="none"><a href="#" role="menuitem">Záplavová území</a></li>
                <li role="none"><a href="#" role="menuitem">Směrnice</a></li>
                <li role="none"><a href="#" role="menuitem">Dokumenty</a></li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <button className="header-search" type="button" aria-label="Vyhledat na webu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <a href="#" className="btn-blue">Přihlásit se</a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Hlavní banner">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Data, která chrání<br />před povodněmi</h1>
            <p>POVIS2 je povodňový informační systém pro správu, analýzu a zpřístupnění klíčových dat o povodňovém nebezpečí v České republice.</p>
            <a href="#" className="btn-yellow">Zjistit více</a>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=600&q=80"
              alt="Krajina s vodní plochou symbolizující povodňovou problematiku"
            />
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <nav className="quick-links-bar" aria-label="Rychlé odkazy">
        <div className="container">
          <ul className="quick-links">
            <li><a href="#">Povodňové plány obcí</a></li>
            <li><a href="#">Záplavová území</a></li>
            <li><a href="#">Hlásné profily</a></li>
            <li><a href="#">Aktuální výstrahy ČHMÚ</a></li>
            <li><a href="#">Registr subjektů</a></li>
          </ul>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <main id="main-content">

        {/* ===== TÉMATA ===== */}
        <section className="section" aria-labelledby="heading-temata">
          <div className="container">
            <h2 className="section-title" id="heading-temata">Témata</h2>
            <div className="topics-grid">
              <article className="topic-card">
                <div className="topic-icon topic-icon-blue" aria-hidden="true">📋</div>
                <h3><a href="#">Povodňové plány</a></h3>
                <p>Oficiální dokumenty obcí, krajů a správců povodí stanovující postupy při povodňových situacích.</p>
              </article>
              <article className="topic-card">
                <div className="topic-icon topic-icon-blue" aria-hidden="true">🗺️</div>
                <h3><a href="#">Záplavová území</a></h3>
                <p>Vymezení oblastí ohrožených různými typy povodní včetně aktivních zón záplavového území.</p>
              </article>
              <article className="topic-card">
                <div className="topic-icon topic-icon-green" aria-hidden="true">🛡️</div>
                <h3><a href="#">Ochrana před povodněmi</a></h3>
                <p>Preventivní opatření, protipovodňové stavby a strategie na snížení povodňových rizik.</p>
              </article>
              <article className="topic-card">
                <div className="topic-icon topic-icon-blue" aria-hidden="true">📊</div>
                <h3><a href="#">Hlásné profily</a></h3>
                <p>Měřicí stanice na vodních tocích s aktuálními informacemi o stavu hladin.</p>
              </article>
              <article className="topic-card">
                <div className="topic-icon topic-icon-yellow" aria-hidden="true">⚠️</div>
                <h3><a href="#">Předpovědní služba</a></h3>
                <p>Hydrologické předpovědi a výstrahy ČHMÚ s vazbou na vyhlášené stupně povodňové aktivity.</p>
              </article>
              <article className="topic-card">
                <div className="topic-icon topic-icon-green" aria-hidden="true">🏛️</div>
                <h3><a href="#">Povodňové orgány</a></h3>
                <p>Registr povodňových komisí obcí, ORP a krajů včetně kontaktních údajů a kompetencí.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ===== AKTUALITY ===== */}
        <section className="section" aria-labelledby="heading-aktuality">
          <div className="container">
            <h2 className="section-title" id="heading-aktuality">Aktuality</h2>
            <div className="news-grid">
              <article className="news-main">
                <img src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80" alt="Zvýšený stav vodního toku v krajině" />
                <div className="news-main-body">
                  <time className="news-date" dateTime="2026-02-05">5. února 2026</time>
                  <h3><a href="#">Aktualizace záplavových území pro oblast Moravy</a></h3>
                  <p>Na základě nových hydrologických modelů byly přepracovány mapy záplavových území v povodí řeky Moravy. Změny se dotýkají 32 obcí.</p>
                </div>
              </article>
              <div className="news-side">
                <article className="news-side-card">
                  <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=300&q=80" alt="" />
                  <div className="news-side-body">
                    <time className="news-date" dateTime="2026-02-01">1. února 2026</time>
                    <h4><a href="#">Údržba systému POVIS2 — 15. 2. 2026</a></h4>
                    <p>Plánovaná odstávka systému pro upgrade databáze.</p>
                  </div>
                </article>
                <article className="news-side-card">
                  <img src="https://images.unsplash.com/photo-1454165833222-d1d44a604771?auto=format&fit=crop&w=300&q=80" alt="" />
                  <div className="news-side-body">
                    <time className="news-date" dateTime="2026-01-28">28. ledna 2026</time>
                    <h4><a href="#">Nový modul pro správu povodňových komisí</a></h4>
                    <p>Spuštěn registr povodňových orgánů s aktualizovanými kontakty.</p>
                  </div>
                </article>
                <article className="news-side-card">
                  <img src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=300&q=80" alt="" />
                  <div className="news-side-body">
                    <time className="news-date" dateTime="2026-01-15">15. ledna 2026</time>
                    <h4><a href="#">Školení pro obce — digitální povodňové plány</a></h4>
                    <p>Série školení pro ORP a obce ke správě digitálních povodňových plánů.</p>
                  </div>
                </article>
              </div>
            </div>

            {/* Info banner */}
            <div className="info-banner" role="complementary" aria-label="Upozornění na novou aplikaci">
              <p><span aria-hidden="true">📡</span> Nová aplikace pro sledování povodňové situace v reálném čase</p>
              <a href="#" className="btn-yellow">Zjistit více<span className="sr-only"> o nové aplikaci pro monitoring</span></a>
            </div>
          </div>
        </section>

        {/* ===== INFORMACE O SYSTÉMU ===== */}
        <section className="section" aria-labelledby="heading-info">
          <div className="container">
            <h2 className="section-title" id="heading-info">Informace o systému</h2>
            <div className="about-grid">
              <div className="about-text">
                <h3>Povodňový informační systém POVIS2</h3>
                <p>POVIS2 je centrální informační systém provozovaný Ministerstvem životního prostředí ve spolupráci s Českým hydrometeorologickým ústavem. Systém slouží ke správě dat o povodňovém nebezpečí, záplavových územích a povodňových plánech.</p>
                <p>Provozovatelem systému je Výzkumný ústav vodohospodářský T. G. Masaryka. Systém je součástí eGovernment infrastruktury ČR.</p>
                <a href="#" className="more-link">Více o systému <span aria-hidden="true">→</span></a>
              </div>
              <div className="about-image">
                <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80" alt="Vodní krajina znázorňující vodohospodářskou infrastrukturu" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== NEJNOVĚJŠÍ INFORMACE ===== */}
        <section className="section" aria-labelledby="heading-nejnovejsi">
          <div className="container">
            <h2 className="section-title" id="heading-nejnovejsi">Nejnovější informace</h2>
            <div className="info-cards-grid">
              <article className="info-card">
                <div className="info-card-icon" aria-hidden="true">📋</div>
                <div className="info-card-body">
                  <h4><a href="#">Povodňové plány</a></h4>
                  <p>3 421 digitálních povodňových plánů pro obce, kraje a správce povodí.</p>
                </div>
              </article>
              <article className="info-card">
                <div className="info-card-icon" aria-hidden="true">🗺️</div>
                <div className="info-card-body">
                  <h4><a href="#">Mapy a data</a></h4>
                  <p>Záplavové mapy, hloubkové modely a rizikové analýzy ke stažení.</p>
                </div>
              </article>
              <article className="info-card">
                <div className="info-card-icon" aria-hidden="true">📡</div>
                <div className="info-card-body">
                  <h4><a href="#">Monitoring</a></h4>
                  <p>Aktuální stav vodních toků a výstrahy ČHMÚ v reálném čase.</p>
                </div>
              </article>
              <article className="info-card">
                <div className="info-card-icon" aria-hidden="true">🏛️</div>
                <div className="info-card-body">
                  <h4><a href="#">Povodňové orgány</a></h4>
                  <p>Kompletní registr povodňových komisí a jejich kontaktních údajů.</p>
                </div>
              </article>
              <article className="info-card">
                <div className="info-card-icon" aria-hidden="true">📊</div>
                <div className="info-card-body">
                  <h4><a href="#">Hlásné profily</a></h4>
                  <p>Přehled měřicích stanic s historickými a aktuálními daty o průtocích.</p>
                </div>
              </article>
              <article className="info-card">
                <div className="info-card-icon" aria-hidden="true">📥</div>
                <div className="info-card-body">
                  <h4><a href="#">Ke stažení</a></h4>
                  <p>Dokumenty, metodiky a formuláře pro správu povodňových rizik.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===== PARTNEŘI ===== */}
        <section className="section" aria-labelledby="heading-partneri">
          <div className="container">
            <h2 className="section-title" id="heading-partneri">Partneři</h2>
            <ul className="partners-row" aria-label="Seznam partnerů">
              <li>MŽP</li>
              <li>ČHMÚ</li>
              <li>VÚV T.G.M.</li>
              <li>Povodí Vltavy</li>
              <li>Povodí Labe</li>
              <li>Povodí Moravy</li>
              <li>Povodí Ohře</li>
              <li>Povodí Odry</li>
            </ul>
          </div>
        </section>

        {/* ===== ZAJÍMAVÉ ODKAZY ===== */}
        <section className="section" aria-labelledby="heading-odkazy">
          <div className="container">
            <h2 className="section-title" id="heading-odkazy">Zajímavé odkazy</h2>
            <ul className="links-list" aria-label="Seznam externích odkazů">
              <li>
                <a href="#">
                  <span aria-hidden="true">🌐</span> Portál ČHMÚ — aktuální hydrologická situace
                  <span className="link-arrow" aria-hidden="true">→</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span aria-hidden="true">🏛️</span> Ministerstvo životního prostředí — protipovodňová ochrana
                  <span className="link-arrow" aria-hidden="true">→</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span aria-hidden="true">📡</span> Hlásná a předpovědní služba ČHMÚ
                  <span className="link-arrow" aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="section" aria-labelledby="heading-faq">
          <div className="container">
            <h2 className="section-title" id="heading-faq">Časté dotazy</h2>
            <div className="faq-list" role="list">
              {faqItems.map((item, i) => {
                const isOpen = openFaq === i;
                const panelId = `faq-panel-${i}`;
                const buttonId = `faq-button-${i}`;
                return (
                  <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`} role="listitem">
                    <h3>
                      <button
                        id={buttonId}
                        className="faq-question"
                        onClick={() => toggleFaq(i)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        type="button"
                      >
                        {item.q}
                        <span className="faq-chevron" aria-hidden="true">▼</span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      className="faq-answer"
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4 className="footer-heading">POVIS2</h4>
              <p className="footer-text">Povodňový informační systém České republiky provozovaný Ministerstvem životního prostředí ve spolupráci s VÚV T.G.M.</p>
            </div>
            <div>
              <h4 className="footer-heading">Kontakt</h4>
              <a href="mailto:podpora@povis.cz" className="footer-link">podpora@povis.cz</a>
              <a href="tel:+420123456789" className="footer-link">+420 123 456 789</a>
              <a href="#" className="footer-link">Kontaktní formulář</a>
            </div>
            <div>
              <h4 className="footer-heading">Informace</h4>
              <a href="#" className="footer-link">Prohlášení o přístupnosti</a>
              <a href="#" className="footer-link">Ochrana osobních údajů</a>
              <a href="#" className="footer-link">Mapa stránek</a>
            </div>
            <div>
              <h4 className="footer-heading">Provozovatel</h4>
              <address className="footer-text">
                Ministerstvo životního prostředí<br />
                Vršovická 1442/65<br />
                100 10 Praha 10
              </address>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 MŽP &amp; DIA</span>
            <span>v2.1.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Example1;
