import { useState } from 'react';
import './Example2.css';

function Example2() {
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
            <header className="site-header2" role="banner">
                <div className="container2 header-inner2">
                    <div className="header-left2">
                        <a href="/" className="header-logo2" aria-label="POVIS2 – přejít na úvodní stránku">
                            <div className="header-logo-icon2" aria-hidden="true">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="white" opacity="0.9" />
                                </svg>
                            </div>
                            <span className="header-logo-text2">POVIS2</span>
                        </a>
                        <div className="header-search-bar">
                            <input
                                type="search"
                                className="header-search-input"
                                placeholder="Hledejte v názvu, obsahu..."
                                aria-label="Vyhledat na webu"
                            />
                            <button className="header-search-btn" type="button" aria-label="Vyhledat">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="header-right2">
                        <a href="#" className="btn-blue2 hide-mobile">Přihlásit se</a>
                        <a href="#" className="header-lang hide-mobile">English</a>
                        <button
                            className="hamburger-btn"
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav"
                            aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
                        >
                            <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* ===== NAV ===== */}
            <nav className={`main-nav2 ${menuOpen ? 'nav-open' : ''}`} aria-label="Hlavní navigace" id="mobile-nav">
                <div className="container2">
                    <ul className="nav-list2" role="menubar">
                        <li role="none"><a href="#" role="menuitem" aria-current="page" className="active" onClick={() => setMenuOpen(false)}>Úvod</a></li>
                        <li role="none"><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Povodňové plány</a></li>
                        <li role="none"><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Záplavová území</a></li>
                        <li role="none"><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Směrnice</a></li>
                        <li role="none"><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Dokumenty</a></li>
                        <li role="none"><a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Kontakty</a></li>
                    </ul>
                    <div className="mobile-nav-extras">
                        <a href="#" className="btn-blue2">Přihlásit se</a>
                        <a href="#" className="header-lang">English</a>
                    </div>
                </div>
            </nav>

            {/* ===== HERO — ROUNDED ===== */}
            <section className="hero2" aria-label="Hlavní banner">
                <div className="container2">
                    <div className="hero2-card">
                        <div className="hero2-text">
                            <h1>Data, která chrání<br />před povodněmi</h1>
                            <p>Statistiky, analýzy a přehledy, které pomáhají chránit Českou republiku před povodňovými riziky.</p>
                            <a href="#" className="btn-yellow2">Zjistit více</a>
                        </div>
                        <div className="hero2-image">
                            <img
                                src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=600&q=80"
                                alt="Krajina s vodní plochou symbolizující povodňovou problematiku"
                            />
                        </div>
                    </div>

                    {/* Alert */}
                    {alertOpen && (
                        <div className="alert-bar2" role="alert">
                            <span className="alert-icon2" aria-hidden="true">⚠</span>
                            <span>Plánovaná údržba systému proběhne dne 15. 2. 2026. Omlouváme se za případné nepříjemnosti.</span>
                            <button className="alert-close2" onClick={() => setAlertOpen(false)} aria-label="Zavřít upozornění" type="button">✕</button>
                        </div>
                    )}
                </div>
            </section>

            <main id="main-content">

                {/* ===== TÉMATA ===== */}
                <section className="section2" aria-labelledby="heading-temata2">
                    <div className="container2">
                        <h2 className="section2-title" id="heading-temata2">Témata</h2>
                        <div className="topics-grid2">
                            <article className="topic-card2">
                                <h3><a href="#">Povodňové plány</a></h3>
                                <p>Oficiální dokumenty obcí, krajů a správců povodí stanovující postupy při povodňových situacích a krizových stavech.</p>
                            </article>
                            <article className="topic-card2">
                                <h3><a href="#">Záplavová území</a></h3>
                                <p>Vymezení oblastí ohrožených různými typy povodní včetně aktivních zón záplavového území a map nebezpečí.</p>
                            </article>
                            <article className="topic-card2">
                                <h3><a href="#">Ochrana před povodněmi</a></h3>
                                <p>Preventivní opatření, protipovodňové stavby a strategie na snížení povodňových rizik pro obce a kraje.</p>
                            </article>
                            <article className="topic-card2">
                                <h3><a href="#">Hlásné profily</a></h3>
                                <p>Měřicí stanice na vodních tocích s aktuálními informacemi o stavu hladin a historickými daty průtoků.</p>
                            </article>
                            <article className="topic-card2">
                                <h3><a href="#">Předpovědní služba</a></h3>
                                <p>Hydrologické předpovědi a výstrahy ČHMÚ s vazbou na vyhlášené stupně povodňové aktivity v regionech.</p>
                            </article>
                            <article className="topic-card2">
                                <h3><a href="#">Povodňové orgány</a></h3>
                                <p>Registr povodňových komisí obcí, ORP a krajů včetně kontaktních údajů a přehledu kompetencí.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ===== AKTUALITY ===== */}
                <section className="section2" aria-labelledby="heading-aktuality2">
                    <div className="container2">
                        <h2 className="section2-title" id="heading-aktuality2">Aktuality</h2>
                        <div className="news-grid2">
                            <article className="news-main2">
                                <img src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80" alt="Zvýšený stav vodního toku v krajině" />
                                <div className="news-main2-body">
                                    <time className="news-date2" dateTime="2026-02-05">5. února 2026</time>
                                    <h3><a href="#">Aktualizace záplavových území pro oblast Moravy</a></h3>
                                    <p>Na základě nových hydrologických modelů byly přepracovány mapy záplavových území v povodí řeky Moravy.</p>
                                </div>
                            </article>
                            <div className="news-side2">
                                <article className="news-side-card2">
                                    <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=300&q=80" alt="" />
                                    <div className="news-side-body2">
                                        <time className="news-date2" dateTime="2026-02-01">1. února 2026</time>
                                        <h4><a href="#">Údržba systému POVIS2 — 15. 2. 2026</a></h4>
                                        <p>Plánovaná odstávka systému pro upgrade databáze.</p>
                                    </div>
                                </article>
                                <article className="news-side-card2">
                                    <img src="https://images.unsplash.com/photo-1454165833222-d1d44a604771?auto=format&fit=crop&w=300&q=80" alt="" />
                                    <div className="news-side-body2">
                                        <time className="news-date2" dateTime="2026-01-28">28. ledna 2026</time>
                                        <h4><a href="#">Nový modul pro správu povodňových komisí</a></h4>
                                        <p>Spuštěn registr povodňových orgánů s kontakty.</p>
                                    </div>
                                </article>
                                <article className="news-side-card2">
                                    <img src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=300&q=80" alt="" />
                                    <div className="news-side-body2">
                                        <time className="news-date2" dateTime="2026-01-15">15. ledna 2026</time>
                                        <h4><a href="#">Školení pro obce — digitální povodňové plány</a></h4>
                                        <p>Série školení pro ORP a obce ke správě plánů.</p>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <div className="info-banner2" role="complementary" aria-label="Upozornění na novou aplikaci">
                            <p><span aria-hidden="true">📡</span> Nová aplikace pro sledování povodňové situace v reálném čase</p>
                            <a href="#" className="btn-yellow2">Zjistit více<span className="sr-only"> o nové aplikaci</span></a>
                        </div>
                    </div>
                </section>

                {/* ===== INFORMACE O SYSTÉMU ===== */}
                <section className="section2" aria-labelledby="heading-info2">
                    <div className="container2">
                        <h2 className="section2-title" id="heading-info2">Informace o systému</h2>
                        <div className="about-grid2">
                            <div className="about-text2">
                                <h3>Povodňový informační systém POVIS2</h3>
                                <p>POVIS2 je centrální informační systém provozovaný Ministerstvem životního prostředí ve spolupráci s Českým hydrometeorologickým ústavem. Systém slouží ke správě dat o povodňovém nebezpečí.</p>
                                <p>Provozovatelem systému je Výzkumný ústav vodohospodářský T. G. Masaryka. Systém je součástí eGovernment infrastruktury ČR.</p>
                                <a href="#" className="more-link2">Více o systému <span aria-hidden="true">→</span></a>
                            </div>
                            <div className="about-image2">
                                <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80" alt="Vodní krajina znázorňující vodohospodářskou infrastrukturu" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== NEJNOVĚJŠÍ INFORMACE ===== */}
                <section className="section2" aria-labelledby="heading-nejnovejsi2">
                    <div className="container2">
                        <h2 className="section2-title" id="heading-nejnovejsi2">Nejnovější informace</h2>
                        <div className="info-cards-grid2">
                            <article className="info-card2">
                                <div className="info-card-icon2" aria-hidden="true">📋</div>
                                <div className="info-card-body2">
                                    <h4><a href="#">Povodňové plány</a></h4>
                                    <p>3 421 digitálních povodňových plánů pro obce a kraje.</p>
                                </div>
                            </article>
                            <article className="info-card2">
                                <div className="info-card-icon2" aria-hidden="true">🗺️</div>
                                <div className="info-card-body2">
                                    <h4><a href="#">Mapy a data</a></h4>
                                    <p>Záplavové mapy, hloubkové modely a analýzy.</p>
                                </div>
                            </article>
                            <article className="info-card2">
                                <div className="info-card-icon2" aria-hidden="true">📡</div>
                                <div className="info-card-body2">
                                    <h4><a href="#">Monitoring</a></h4>
                                    <p>Aktuální stav vodních toků a výstrahy ČHMÚ.</p>
                                </div>
                            </article>
                            <article className="info-card2">
                                <div className="info-card-icon2" aria-hidden="true">🏛️</div>
                                <div className="info-card-body2">
                                    <h4><a href="#">Povodňové orgány</a></h4>
                                    <p>Kompletní registr povodňových komisí.</p>
                                </div>
                            </article>
                            <article className="info-card2">
                                <div className="info-card-icon2" aria-hidden="true">📊</div>
                                <div className="info-card-body2">
                                    <h4><a href="#">Hlásné profily</a></h4>
                                    <p>Měřicí stanice s historickými daty průtoků.</p>
                                </div>
                            </article>
                            <article className="info-card2">
                                <div className="info-card-icon2" aria-hidden="true">📥</div>
                                <div className="info-card-body2">
                                    <h4><a href="#">Ke stažení</a></h4>
                                    <p>Dokumenty, metodiky a formuláře.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ===== PARTNEŘI ===== */}
                <section className="section2" aria-labelledby="heading-partneri2">
                    <div className="container2">
                        <h2 className="section2-title" id="heading-partneri2">Partneři</h2>
                        <ul className="partners-row2" aria-label="Seznam partnerů">
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
                <section className="section2" aria-labelledby="heading-odkazy2">
                    <div className="container2">
                        <h2 className="section2-title" id="heading-odkazy2">Zajímavé odkazy</h2>
                        <ul className="links-list2" aria-label="Seznam externích odkazů">
                            <li>
                                <a href="#">
                                    <span aria-hidden="true">🌐</span> Portál ČHMÚ — aktuální hydrologická situace
                                    <span className="link-arrow2" aria-hidden="true">→</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span aria-hidden="true">🏛️</span> Ministerstvo životního prostředí — protipovodňová ochrana
                                    <span className="link-arrow2" aria-hidden="true">→</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span aria-hidden="true">📡</span> Hlásná a předpovědní služba ČHMÚ
                                    <span className="link-arrow2" aria-hidden="true">→</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* ===== FAQ ===== */}
                <section className="section2" aria-labelledby="heading-faq2">
                    <div className="container2">
                        <h2 className="section2-title" id="heading-faq2">Časté dotazy</h2>
                        <div className="faq-list2" role="list">
                            {faqItems.map((item, i) => {
                                const isOpen = openFaq === i;
                                const panelId = `faq2-panel-${i}`;
                                const buttonId = `faq2-button-${i}`;
                                return (
                                    <div key={i} className={`faq-item2 ${isOpen ? 'open' : ''}`} role="listitem">
                                        <h3>
                                            <button
                                                id={buttonId}
                                                className="faq-question2"
                                                onClick={() => toggleFaq(i)}
                                                aria-expanded={isOpen}
                                                aria-controls={panelId}
                                                type="button"
                                            >
                                                {item.q}
                                                <span className="faq-chevron2" aria-hidden="true">▼</span>
                                            </button>
                                        </h3>
                                        <div
                                            id={panelId}
                                            className="faq-answer2"
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
            <footer className="site-footer2" role="contentinfo">
                <div className="container2">
                    <div className="footer-grid2">
                        <div>
                            <h4 className="footer-heading2">POVIS2</h4>
                            <p className="footer-text2">Povodňový informační systém České republiky provozovaný Ministerstvem životního prostředí ve spolupráci s VÚV T.G.M.</p>
                        </div>
                        <div>
                            <h4 className="footer-heading2">Kontakt</h4>
                            <a href="mailto:podpora@povis.cz" className="footer-link2">podpora@povis.cz</a>
                            <a href="tel:+420123456789" className="footer-link2">+420 123 456 789</a>
                            <a href="#" className="footer-link2">Kontaktní formulář</a>
                        </div>
                        <div>
                            <h4 className="footer-heading2">Informace</h4>
                            <a href="#" className="footer-link2">Prohlášení o přístupnosti</a>
                            <a href="#" className="footer-link2">Ochrana osobních údajů</a>
                            <a href="#" className="footer-link2">Mapa stránek</a>
                        </div>
                        <div>
                            <h4 className="footer-heading2">Provozovatel</h4>
                            <address className="footer-text2">
                                Ministerstvo životního prostředí<br />
                                Vršovická 1442/65<br />
                                100 10 Praha 10
                            </address>
                        </div>
                    </div>
                    <div className="footer-bottom2">
                        <span>© 2026 MŽP &amp; DIA</span>
                        <span>v2.1.0</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Example2;
