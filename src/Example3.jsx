import { useState } from 'react';
import './Example3.css';

function Example3() {
    const [openFaq, setOpenFaq] = useState(0);
    const [alertOpen, setAlertOpen] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleFaq = (i) => setOpenFaq(openFaq === i ? -1 : i);

    const faqItems = [
        { q: 'Co je systém POVIS2 a k čemu slouží?', a: 'POVIS2 je povodňový informační systém pro shromažďování, správu a zpřístupňování informací o povodňovém nebezpečí v České republice. Slouží jak pro veřejnou správu, tak pro občany.' },
        { q: 'Jak zjistím, zda je moje nemovitost v záplavovém území?', a: 'V sekci Záplavová území zadejte adresu nebo katastrální číslo nemovitosti. Systém vám zobrazí, zda se pozemek nachází v záplavovém území a jaká je míra ohrožení.' },
        { q: 'Kde najdu povodňový plán mé obce?', a: 'V sekci Povodňové plány vyhledejte svou obec. Každá obec má povinnost mít zpracovaný povodňový plán dostupný občanům v digitální i tištěné formě.' },
        { q: 'Jak se mohu přihlásit do systému?', a: 'Pro přihlášení klikněte na tlačítko „Přihlásit se" v pravém horním rohu. Můžete využít Identity občana (NIA) nebo přidělené přístupové údaje od vašeho správce.' },
    ];

    return (
        <div>
            <a href="#main-content" className="skip-link">Přeskočit na hlavní obsah</a>

            {/* ===== HEADER ===== */}
            <header className="site-header3" role="banner">
                <div className="container3 header-inner3">
                    <div className="header-left3">
                        <a href="/" className="header-logo3" aria-label="POVIS2 – přejít na úvodní stránku">
                            <div className="header-logo-icon3" aria-hidden="true">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="white" opacity="0.9" />
                                </svg>
                            </div>
                            <span className="header-logo-text3">POVIS2</span>
                        </a>
                        <div className="header-search-bar3">
                            <input
                                type="search"
                                className="header-search-input3"
                                placeholder="Hledejte v názvu, obsahu..."
                                aria-label="Vyhledat na webu"
                            />
                            <button className="header-search-btn3" type="button" aria-label="Vyhledat">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="header-right3">
                        <a href="#" className="btn-primary3 hide-mobile3">Přihlásit se</a>
                        <a href="#" className="header-lang3 hide-mobile3">English</a>
                        <button
                            className="hamburger-btn3"
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav3"
                            aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
                        >
                            <span className={`hamburger-icon3 ${menuOpen ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* ===== NAV ===== */}
            <nav className={`main-nav3 ${menuOpen ? 'nav-open3' : ''}`} aria-label="Hlavní navigace" id="mobile-nav3">
                <div className="container3">
                    <ul className="nav-list3" role="menubar">
                        <li role="none"><a href="#" role="menuitem" aria-current="page" className="active" onClick={() => setMenuOpen(false)}>Úvod</a></li>
                        <li role="none"><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Povodňové plány</a></li>
                        <li role="none"><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Záplavová území</a></li>
                        <li role="none"><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Směrnice</a></li>
                        <li role="none"><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Dokumenty</a></li>
                        <li role="none"><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Kontakty</a></li>
                    </ul>
                    <div className="mobile-nav-extras3">
                        <a href="#" className="btn-primary3">Přihlásit se</a>
                        <a href="#" className="header-lang3">English</a>
                    </div>
                </div>
            </nav>

            {/* ===== HERO WITH MAP ===== */}
            <section className="hero3" aria-label="Hlavní banner">
                <div className="container3">
                    <div className="hero3-card">
                        <div className="hero3-text">
                            <span className="hero3-badge" aria-hidden="true">🌊 Povodňový systém</span>
                            <h1>Chráníme Česko<br />před povodněmi</h1>
                            <p>Přístup k záplavovým mapám, povodňovým plánům a aktuálním datům o stavu vodních toků v celé ČR.</p>
                            <a href="#" className="btn-hero3">
                                Prozkoumat mapu
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                        <div className="hero3-map" aria-label="Interaktivní mapa záplavových území">
                            <iframe
                                src="https://www.openstreetmap.org/export/embed.html?bbox=12.09%2C48.55%2C18.86%2C51.06&layer=mapnik"
                                title="Mapa České republiky — záplavová území"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {alertOpen && (
                        <div className="alert-bar3" role="alert">
                            <span className="alert-icon3" aria-hidden="true">⚠</span>
                            <span>Plánovaná údržba systému proběhne dne 15. 2. 2026. Omlouváme se za případné nepříjemnosti.</span>
                            <button className="alert-close3" onClick={() => setAlertOpen(false)} aria-label="Zavřít upozornění" type="button">✕</button>
                        </div>
                    )}
                </div>
            </section>

            <main id="main-content">

                {/* ===== TÉMATA ===== */}
                <section className="section3" aria-labelledby="heading-temata3">
                    <div className="container3">
                        <h2 className="section3-title" id="heading-temata3">Témata</h2>
                        <div className="topics-grid3">
                            <article className="topic-card3">
                                <div className="topic-card-icon3 tc-blue" aria-hidden="true">📋</div>
                                <h3><a href="#">Povodňové plány</a></h3>
                                <p>Oficiální dokumenty obcí, krajů a správců povodí stanovující postupy při povodňových situacích.</p>
                            </article>
                            <article className="topic-card3">
                                <div className="topic-card-icon3 tc-mint" aria-hidden="true">🗺️</div>
                                <h3><a href="#">Záplavová území</a></h3>
                                <p>Vymezení oblastí ohrožených různými typy povodní včetně aktivních zón a map nebezpečí.</p>
                            </article>
                            <article className="topic-card3">
                                <div className="topic-card-icon3 tc-lavender" aria-hidden="true">🛡️</div>
                                <h3><a href="#">Ochrana před povodněmi</a></h3>
                                <p>Preventivní opatření, protipovodňové stavby a strategie na snížení povodňových rizik.</p>
                            </article>
                            <article className="topic-card3">
                                <div className="topic-card-icon3 tc-peach" aria-hidden="true">📡</div>
                                <h3><a href="#">Hlásné profily</a></h3>
                                <p>Měřicí stanice na vodních tocích s aktuálními informacemi o stavu hladin a průtoků.</p>
                            </article>
                            <article className="topic-card3">
                                <div className="topic-card-icon3 tc-sky" aria-hidden="true">🌤️</div>
                                <h3><a href="#">Předpovědní služba</a></h3>
                                <p>Hydrologické předpovědi a výstrahy ČHMÚ s vazbou na stupně povodňové aktivity.</p>
                            </article>
                            <article className="topic-card3">
                                <div className="topic-card-icon3 tc-rose" aria-hidden="true">🏛️</div>
                                <h3><a href="#">Povodňové orgány</a></h3>
                                <p>Registr povodňových komisí obcí, ORP a krajů včetně kontaktních údajů.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ===== AKTUALITY ===== */}
                <section className="section3" aria-labelledby="heading-aktuality3">
                    <div className="container3">
                        <h2 className="section3-title" id="heading-aktuality3">Aktuality</h2>
                        <div className="news-grid3">
                            <article className="news-main3">
                                <div className="news-main3-overflow">
                                    <img src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80" alt="Zvýšený stav vodního toku v krajině" />
                                </div>
                                <div className="news-main3-body">
                                    <time className="news-date3" dateTime="2026-02-05">5. února 2026</time>
                                    <h3><a href="#">Aktualizace záplavových území pro oblast Moravy</a></h3>
                                    <p>Na základě nových hydrologických modelů byly přepracovány mapy záplavových území v povodí řeky Moravy.</p>
                                </div>
                            </article>
                            <div className="news-side3">
                                <article className="news-side-card3">
                                    <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=300&q=80" alt="" />
                                    <div className="news-side-body3">
                                        <time className="news-date3" dateTime="2026-02-01">1. února 2026</time>
                                        <h4><a href="#">Údržba systému POVIS2 — 15. 2. 2026</a></h4>
                                        <p>Plánovaná odstávka systému pro upgrade databáze.</p>
                                    </div>
                                </article>
                                <article className="news-side-card3">
                                    <img src="https://images.unsplash.com/photo-1454165833222-d1d44a604771?auto=format&fit=crop&w=300&q=80" alt="" />
                                    <div className="news-side-body3">
                                        <time className="news-date3" dateTime="2026-01-28">28. ledna 2026</time>
                                        <h4><a href="#">Nový modul pro správu povodňových komisí</a></h4>
                                        <p>Spuštěn registr povodňových orgánů s kontakty.</p>
                                    </div>
                                </article>
                                <article className="news-side-card3">
                                    <img src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=300&q=80" alt="" />
                                    <div className="news-side-body3">
                                        <time className="news-date3" dateTime="2026-01-15">15. ledna 2026</time>
                                        <h4><a href="#">Školení pro obce — digitální povodňové plány</a></h4>
                                        <p>Série školení pro ORP a obce ke správě plánů.</p>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <div className="info-banner3" role="complementary" aria-label="Upozornění na novou aplikaci">
                            <p><span aria-hidden="true">📡</span> Nová aplikace pro sledování povodňové situace v reálném čase</p>
                            <a href="#" className="btn-banner3">Zjistit více<span className="sr-only"> o nové aplikaci</span></a>
                        </div>
                    </div>
                </section>

                {/* ===== INFORMACE O SYSTÉMU ===== */}
                <section className="section3" aria-labelledby="heading-info3">
                    <div className="container3">
                        <h2 className="section3-title" id="heading-info3">Informace o systému</h2>
                        <div className="about-grid3">
                            <div className="about-text3">
                                <h3>Povodňový informační systém POVIS2</h3>
                                <p>POVIS2 je centrální informační systém provozovaný Ministerstvem životního prostředí ve spolupráci s Českým hydrometeorologickým ústavem. Systém slouží ke správě dat o povodňovém nebezpečí.</p>
                                <p>Provozovatelem systému je Výzkumný ústav vodohospodářský T. G. Masaryka. Systém je součástí eGovernment infrastruktury ČR.</p>
                                <a href="#" className="more-link3">Více o systému <span aria-hidden="true">→</span></a>
                            </div>
                            <div className="about-image3">
                                <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80" alt="Vodní krajina znázorňující vodohospodářskou infrastrukturu" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== NEJNOVĚJŠÍ INFORMACE ===== */}
                <section className="section3" aria-labelledby="heading-nejnovejsi3">
                    <div className="container3">
                        <h2 className="section3-title" id="heading-nejnovejsi3">Nejnovější informace</h2>
                        <div className="info-cards-grid3">
                            <article className="info-card3">
                                <div className="info-card-icon3 tc-blue" aria-hidden="true">📋</div>
                                <div className="info-card-body3">
                                    <h4><a href="#">Povodňové plány</a></h4>
                                    <p>3 421 digitálních povodňových plánů pro obce a kraje.</p>
                                </div>
                            </article>
                            <article className="info-card3">
                                <div className="info-card-icon3 tc-mint" aria-hidden="true">🗺️</div>
                                <div className="info-card-body3">
                                    <h4><a href="#">Mapy a data</a></h4>
                                    <p>Záplavové mapy, hloubkové modely a analýzy.</p>
                                </div>
                            </article>
                            <article className="info-card3">
                                <div className="info-card-icon3 tc-sky" aria-hidden="true">📡</div>
                                <div className="info-card-body3">
                                    <h4><a href="#">Monitoring</a></h4>
                                    <p>Aktuální stav vodních toků a výstrahy ČHMÚ.</p>
                                </div>
                            </article>
                            <article className="info-card3">
                                <div className="info-card-icon3 tc-lavender" aria-hidden="true">🏛️</div>
                                <div className="info-card-body3">
                                    <h4><a href="#">Povodňové orgány</a></h4>
                                    <p>Kompletní registr povodňových komisí.</p>
                                </div>
                            </article>
                            <article className="info-card3">
                                <div className="info-card-icon3 tc-peach" aria-hidden="true">📊</div>
                                <div className="info-card-body3">
                                    <h4><a href="#">Hlásné profily</a></h4>
                                    <p>Měřicí stanice s historickými daty průtoků.</p>
                                </div>
                            </article>
                            <article className="info-card3">
                                <div className="info-card-icon3 tc-rose" aria-hidden="true">📥</div>
                                <div className="info-card-body3">
                                    <h4><a href="#">Ke stažení</a></h4>
                                    <p>Dokumenty, metodiky a formuláře.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ===== PARTNEŘI ===== */}
                <section className="section3" aria-labelledby="heading-partneri3">
                    <div className="container3">
                        <h2 className="section3-title" id="heading-partneri3">Partneři</h2>
                        <ul className="partners-row3" aria-label="Seznam partnerů">
                            <li className="partner-chip3">MŽP</li>
                            <li className="partner-chip3">ČHMÚ</li>
                            <li className="partner-chip3">VÚV T.G.M.</li>
                            <li className="partner-chip3">Povodí Vltavy</li>
                            <li className="partner-chip3">Povodí Labe</li>
                            <li className="partner-chip3">Povodí Moravy</li>
                            <li className="partner-chip3">Povodí Ohře</li>
                            <li className="partner-chip3">Povodí Odry</li>
                        </ul>
                    </div>
                </section>

                {/* ===== ZAJÍMAVÉ ODKAZY ===== */}
                <section className="section3" aria-labelledby="heading-odkazy3">
                    <div className="container3">
                        <h2 className="section3-title" id="heading-odkazy3">Zajímavé odkazy</h2>
                        <ul className="links-list3" aria-label="Seznam externích odkazů">
                            <li>
                                <a href="#">
                                    <span aria-hidden="true">🌐</span> Portál ČHMÚ — aktuální hydrologická situace
                                    <span className="link-arrow3" aria-hidden="true">→</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span aria-hidden="true">🏛️</span> Ministerstvo životního prostředí — protipovodňová ochrana
                                    <span className="link-arrow3" aria-hidden="true">→</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span aria-hidden="true">📡</span> Hlásná a předpovědní služba ČHMÚ
                                    <span className="link-arrow3" aria-hidden="true">→</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* ===== FAQ ===== */}
                <section className="section3" aria-labelledby="heading-faq3">
                    <div className="container3">
                        <h2 className="section3-title" id="heading-faq3">Časté dotazy</h2>
                        <div className="faq-list3" role="list">
                            {faqItems.map((item, i) => {
                                const isOpen = openFaq === i;
                                const panelId = `faq3-panel-${i}`;
                                const buttonId = `faq3-button-${i}`;
                                return (
                                    <div key={i} className={`faq-item3 ${isOpen ? 'open' : ''}`} role="listitem">
                                        <h3>
                                            <button
                                                id={buttonId}
                                                className="faq-question3"
                                                onClick={() => toggleFaq(i)}
                                                aria-expanded={isOpen}
                                                aria-controls={panelId}
                                                type="button"
                                            >
                                                {item.q}
                                                <span className="faq-chevron3" aria-hidden="true">▼</span>
                                            </button>
                                        </h3>
                                        <div
                                            id={panelId}
                                            className="faq-answer3"
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
            <footer className="site-footer3" role="contentinfo">
                <div className="container3">
                    <div className="footer-grid3">
                        <div>
                            <h4 className="footer-heading3">POVIS2</h4>
                            <p className="footer-text3">Povodňový informační systém České republiky provozovaný Ministerstvem životního prostředí ve spolupráci s VÚV T.G.M.</p>
                        </div>
                        <div>
                            <h4 className="footer-heading3">Kontakt</h4>
                            <a href="mailto:podpora@povis.cz" className="footer-link3">podpora@povis.cz</a>
                            <a href="tel:+420123456789" className="footer-link3">+420 123 456 789</a>
                            <a href="#" className="footer-link3">Kontaktní formulář</a>
                        </div>
                        <div>
                            <h4 className="footer-heading3">Informace</h4>
                            <a href="#" className="footer-link3">Prohlášení o přístupnosti</a>
                            <a href="#" className="footer-link3">Ochrana osobních údajů</a>
                            <a href="#" className="footer-link3">Mapa stránek</a>
                        </div>
                        <div>
                            <h4 className="footer-heading3">Provozovatel</h4>
                            <address className="footer-text3">
                                Ministerstvo životního prostředí<br />
                                Vršovická 1442/65<br />
                                100 10 Praha 10
                            </address>
                        </div>
                    </div>
                    <div className="footer-bottom3">
                        <span>© 2026 MŽP &amp; DIA</span>
                        <span>v2.1.0</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Example3;
