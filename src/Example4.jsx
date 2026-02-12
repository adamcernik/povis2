import { useState, useEffect } from 'react';
import './Example4.css';
import MapPage from './MapPage';

function Example4() {
    const [alertOpen, setAlertOpen] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [emergencyOpen, setEmergencyOpen] = useState(true);
    const [langOpen, setLangOpen] = useState(false);
    const [lang, setLang] = useState('cs');
    const [loginOpen, setLoginOpen] = useState(false);
    const [mapQuery, setMapQuery] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    const selectLang = (l) => { setLang(l); setLangOpen(false); };

    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape') setLoginOpen(false); };
        if (loginOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleEsc);
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', handleEsc); };
    }, [loginOpen]);

    if (mapQuery) {
        return <MapPage query={mapQuery} onBack={() => setMapQuery(null)} />;
    }

    return (
        <>
            <div>
                <a href="#main-content" className="skip-link">Přeskočit na hlavní obsah</a>

                {/* ===== EMERGENCY BANNER ===== */}
                {emergencyOpen && (
                    <div className="emergency-banner4" role="alert">
                        <div className="c4 emergency-inner4">
                            <span className="emergency-text4">
                                <strong>⚠ Zvýšený povodňový stupeň</strong> — Na řece Moravě byl vyhlášen 3. stupeň povodňové aktivity.
                                <a href="#">Zobrazit detail →</a>
                            </span>
                            <button
                                className="emergency-close4"
                                onClick={() => setEmergencyOpen(false)}
                                aria-label="Zavřít upozornění"
                                type="button"
                            >✕</button>
                        </div>
                    </div>
                )}

                {/* ===== HEADER ===== */}
                <header className="site-header4" role="banner">
                    <div className="c4 header-inner4">
                        <div className="header-left4">
                            <a href="/" className="header-logo4" aria-label="POVIS2 – přejít na úvodní stránku">
                                <div className="header-logo-icon4" aria-hidden="true">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                                        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="white" opacity="0.9" />
                                    </svg>
                                </div>
                                <span className="header-logo-text4">POVIS2</span>
                            </a>
                        </div>
                        <div className="header-right4">
                            <button type="button" className="btn-primary4 hide-mobile4" onClick={() => setLoginOpen(true)}>Přihlásit se</button>
                            <div className="lang-switcher4 hide-mobile4">
                                <button
                                    className="lang-toggle4"
                                    type="button"
                                    onClick={() => setLangOpen(!langOpen)}
                                    aria-expanded={langOpen}
                                    aria-haspopup="true"
                                    aria-label="Vybrat jazyk"
                                >
                                    <span className="lang-flag4">{lang === 'cs' ? '🇨🇿' : '🇬🇧'}</span>
                                    <span className="lang-label4">{lang === 'cs' ? 'CZ' : 'EN'}</span>
                                    <span className="lang-chevron4" aria-hidden="true">▼</span>
                                </button>
                                {langOpen && (
                                    <div className="lang-dropdown4" role="menu">
                                        <button role="menuitem" className={lang === 'cs' ? 'active' : ''} onClick={() => selectLang('cs')} type="button">
                                            <span>🇨🇿</span> Česky
                                        </button>
                                        <button role="menuitem" className={lang === 'en' ? 'active' : ''} onClick={() => selectLang('en')} type="button">
                                            <span>🇬🇧</span> English
                                        </button>
                                    </div>
                                )}
                            </div>
                            <button
                                className="hamburger-btn4"
                                type="button"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-expanded={menuOpen}
                                aria-controls="mobile-nav4"
                                aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
                            >
                                <span className={`hamburger-icon4 ${menuOpen ? 'open' : ''}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* ===== MEGA NAV ===== */}
                <nav className={`main-nav4 ${menuOpen ? 'nav-open4' : ''}`} aria-label="Hlavní navigace" id="mobile-nav4">
                    <div className="c4">
                        <ul className="nav-list4" role="menubar">
                            <li className="nav-item4" role="none">
                                <a href="#" role="menuitem" aria-current="page" className="active" onClick={() => setMenuOpen(false)}>Úvod</a>
                            </li>
                            <li className="nav-item4" role="none">
                                <a href="#" role="menuitem">
                                    Plánování a území <span className="nav-chevron4" aria-hidden="true">▼</span>
                                </a>
                                <div className="mega-dropdown4" role="menu" aria-label="Plánování a území podmenu">
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Povodňové plány</strong>
                                        <span>Registr plánů, metodika, exporty dat</span>
                                    </a>
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Směrnice (OsVPR)</strong>
                                        <span>Úseky s rizikem, plány zvládání rizik</span>
                                    </a>
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Záplavová území</strong>
                                        <span>Evidence a vymezení území</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item4" role="none">
                                <a href="#" role="menuitem">
                                    Mapový portál <span className="nav-chevron4" aria-hidden="true">▼</span>
                                </a>
                                <div className="mega-dropdown4" role="menu" aria-label="Mapový portál podmenu">
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Interaktivní mapa ČR</strong>
                                        <span>Celkový přehled všech vrstev</span>
                                    </a>
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Mapy záplavových území</strong>
                                        <span>Specifické kompozice ZÚ</span>
                                    </a>
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Mapy rizik</strong>
                                        <span>Mapové výstupy povodňové směrnice</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item4" role="none">
                                <a href="#" role="menuitem">
                                    Aktuální situace <span className="nav-chevron4" aria-hidden="true">▼</span>
                                </a>
                                <div className="mega-dropdown4" role="menu" aria-label="Aktuální situace podmenu">
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Výstrahy a radar</strong>
                                        <span>Aktuální data ČHMÚ v reálném čase</span>
                                    </a>
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Hlásná a předpovědní služba</strong>
                                        <span>Průtoky a stavy na tocích</span>
                                    </a>
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Aktuality</strong>
                                        <span>Věcné a technické novinky</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item4" role="none">
                                <a href="#" role="menuitem">
                                    Podpora a info <span className="nav-chevron4" aria-hidden="true">▼</span>
                                </a>
                                <div className="mega-dropdown4" role="menu" aria-label="Podpora a info podmenu">
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Praktický rádce</strong>
                                        <span>Životní situace — před, při a po povodni</span>
                                    </a>
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Legislativa</strong>
                                        <span>Právní předpisy v ochraně před povodněmi</span>
                                    </a>
                                    <a href="#" className="mega-link4" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Dokumentace</strong>
                                        <span>Uživatelské příručky a terminologie</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div className="mobile-nav-extras4">
                            <button type="button" className="btn-primary4" onClick={() => { setLoginOpen(true); setMenuOpen(false); }}>Přihlásit se</button>
                            <div className="mobile-lang-row4">
                                <button type="button" className={`mobile-lang-btn4 ${lang === 'cs' ? 'active' : ''}`} onClick={() => setLang('cs')}>🇨🇿 Česky</button>
                                <button type="button" className={`mobile-lang-btn4 ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>🇬🇧 English</button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* ===== HERO WITH MAP ===== */}
                <section className="hero4" aria-label="Hlavní banner">
                    <div className="c4">
                        <div className="hero4-card">
                            <div className="hero4-text">
                                <span className="hero4-badge">Povodňový informační systém</span>
                                <h1>Portál povodňového informačního systému POVIS2</h1>
                                <p>Spravujeme informace o povodňových rizicích, ochraně a postupech v krizových situacích. Pomáháme obcím, úřadům i veřejnosti se včas připravit a správně reagovat.</p>
                                <div className="hero4-search" role="search" aria-label="Ověření ohrožení místa">
                                    <input
                                        type="text"
                                        className="hero4-search-input"
                                        placeholder="Zadejte adresu nebo parcelu..."
                                        aria-label="Adresa nebo parcela"
                                        value={searchInput}
                                        onChange={(e) => setSearchInput(e.target.value)}
                                        onKeyDown={(e) => { if (e.key === 'Enter' && searchInput.trim()) setMapQuery(searchInput.trim()); }}
                                    />
                                    <button
                                        className="hero4-search-btn"
                                        type="button"
                                        onClick={() => { if (searchInput.trim()) setMapQuery(searchInput.trim()); else setMapQuery('Praha'); }}
                                    >Ověřit na mapě <span aria-hidden="true">→</span></button>
                                </div>
                            </div>
                            <div className="hero4-map" aria-label="Interaktivní mapa České republiky">
                                <iframe
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=12.09%2C48.55%2C18.86%2C51.06&layer=mapnik"
                                    title="Mapa České republiky — záplavová území"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {alertOpen && (
                            <div className="alert-bar4" role="alert">
                                <span className="alert-icon4" aria-hidden="true">⚠</span>
                                <span>Plánovaná údržba systému proběhne dne 15. 2. 2026. Omlouváme se za případné nepříjemnosti.</span>
                                <button className="alert-close4" onClick={() => setAlertOpen(false)} aria-label="Zavřít upozornění" type="button">✕</button>
                            </div>
                        )}
                    </div>
                </section>

                <main id="main-content">

                    {/* ===== ŽIVOTNÍ SITUACE ===== */}
                    <section className="section4" aria-labelledby="heading-situace4">
                        <div className="c4">
                            <h2 className="section4-title" id="heading-situace4">Životní situace</h2>
                            <p className="section4-subtitle">Praktický rádce — co dělat před povodní, při ní i po ní.</p>
                            <div className="phases-grid4">
                                <article className="phase-card4 phase-before">
                                    <div className="phase-icon4" aria-hidden="true">🛡️</div>
                                    <span className="phase-label4">Příprava a prevence</span>
                                    <h3>Co dělat mimo povodeň</h3>
                                    <p>Zjistěte rizika v okolí své parcely, prostudujte legislativu a digitální povodňové plány. Připravte se na případné ohrožení.</p>
                                    <a href="#" className="phase-btn4">
                                        Zjistit více <span aria-hidden="true">→</span>
                                    </a>
                                </article>
                                <article className="phase-card4 phase-during">
                                    <div className="phase-icon4" aria-hidden="true">⚡</div>
                                    <span className="phase-label4">Krizová situace</span>
                                    <h3>Co dělat při povodni</h3>
                                    <p>Okamžité informace o průběhu povodně, předpovědi a kontakty na povodňové komise. Získejte aktuální data v reálném čase.</p>
                                    <a href="#" className="phase-btn4">
                                        Zjistit více <span aria-hidden="true">→</span>
                                    </a>
                                </article>
                                <article className="phase-card4 phase-after">
                                    <div className="phase-icon4" aria-hidden="true">🔧</div>
                                    <span className="phase-label4">Obnova a náprava</span>
                                    <h3>Co dělat po povodni</h3>
                                    <p>Průvodce financováním obnovy, ochrana před povodněmi a důležité dokumenty k nápravě škod. Začněte obnovu správně.</p>
                                    <a href="#" className="phase-btn4">
                                        Zjistit více <span aria-hidden="true">→</span>
                                    </a>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* ===== MONITORING ČHMÚ ===== */}
                    <section className="section4" aria-labelledby="heading-monitoring4">
                        <div className="c4">
                            <div className="monitoring-section4">
                                <div className="monitoring-header4">
                                    <h2 id="heading-monitoring4">Aktuální situace na tocích</h2>
                                    <p>Operativní informace ze stránek Českého hydrometeorologického ústavu.</p>
                                </div>
                                <div className="monitoring-grid4">
                                    <a href="#" className="monitoring-tile4" aria-label="Výstrahy — aktuálně platná varování">
                                        <div className="mon-icon4 mi-warn" aria-hidden="true">⚠️</div>
                                        <h3>Výstrahy</h3>
                                        <p>Aktuálně platná varování a stupně povodňové aktivity.</p>
                                        <span className="mon-arrow4" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                    <a href="#" className="monitoring-tile4" aria-label="Radar a srážky">
                                        <div className="mon-icon4 mi-radar" aria-hidden="true">🌧️</div>
                                        <h3>Radar a srážky</h3>
                                        <p>Srážkoměrné stanice a radarové snímky v reálném čase.</p>
                                        <span className="mon-arrow4" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                    <a href="#" className="monitoring-tile4" aria-label="Předpovědní služba">
                                        <div className="mon-icon4 mi-forecast" aria-hidden="true">📊</div>
                                        <h3>Předpovědní služba</h3>
                                        <p>Hlásná a předpovědní povodňová služba — průtoky a stavy.</p>
                                        <span className="mon-arrow4" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                    <a href="#" className="monitoring-tile4" aria-label="Přívalové povodně">
                                        <div className="mon-icon4 mi-flash" aria-hidden="true">⚡</div>
                                        <h3>Přívalové povodně</h3>
                                        <p>Indikátor rizik bleskových povodní a lokálních záplav.</p>
                                        <span className="mon-arrow4" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ===== AKTUALITY ===== */}
                    <section className="section4" aria-labelledby="heading-aktuality4">
                        <div className="c4">
                            <h2 className="section4-title" id="heading-aktuality4">Aktuality</h2>
                            <p className="section4-subtitle">Novinky ze systému POVIS2, legislativní změny a aktuální povodňové události.</p>
                            <div className="news-grid4">
                                <article className="news-main4">
                                    <img src="/images/flood-main.png" alt="Letecký pohled na zaplavené české město s rozvodněnou řekou" />
                                    <div className="news-main-body4">
                                        <time className="news-date4" dateTime="2026-02-05">5. února 2026</time>
                                        <h3><a href="#">Aktualizace záplavových území pro oblast Moravy</a></h3>
                                        <p>Na základě nových hydrologických modelů byly přepracovány mapy záplavových území v povodí řeky Moravy. Změny se dotknou více než 120 obcí a budou promítnuty do územních plánů.</p>
                                    </div>
                                </article>
                                <div className="news-side4">
                                    <article className="news-side-card4">
                                        <img src="/images/flood-gauge.png" alt="Hlásný profil na rozvodněné řece" />
                                        <div className="news-side-body4">
                                            <time className="news-date4" dateTime="2026-02-01">1. února 2026</time>
                                            <h4><a href="#">Nová metodika měření hlásných profilů</a></h4>
                                            <p>ČHMÚ zavádí modernizované postupy měření na více než 500 hlásných profilech v ČR.</p>
                                        </div>
                                    </article>
                                    <article className="news-side-card4">
                                        <img src="/images/flood-sandbags.png" alt="Záchranáři při protipovodňové ochraně" />
                                        <div className="news-side-body4">
                                            <time className="news-date4" dateTime="2026-01-28">28. ledna 2026</time>
                                            <h4><a href="#">Školení pro obce — krizové řízení a protipovodňová ochrana</a></h4>
                                            <p>Série školení pro ORP a obce ke správě povodňových plánů a krizovému řízení.</p>
                                        </div>
                                    </article>
                                    <article className="news-side-card4">
                                        <img src="/images/flood-radar.png" alt="Meteorologická radarová stanice ČHMÚ" />
                                        <div className="news-side-body4">
                                            <time className="news-date4" dateTime="2026-01-15">15. ledna 2026</time>
                                            <h4><a href="#">Upgrade radarové sítě ČHMÚ — přesnější předpovědi</a></h4>
                                            <p>Nové radary zvyšují přesnost předpovědí přívalových srážek o 30 %.</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* ===== FOOTER ===== */}
                <footer className="site-footer4" role="contentinfo">
                    <div className="c4">
                        <div className="footer-grid4">
                            <div>
                                <h4 className="footer-heading4">POVIS2</h4>
                                <p className="footer-text4">Povodňový informační systém České republiky provozovaný Ministerstvem životního prostředí.</p>
                            </div>
                            <div>
                                <h4 className="footer-heading4">Informace</h4>
                                <a href="#" className="footer-link4">Časté dotazy (FAQ)</a>
                                <a href="#" className="footer-link4">Provozní řád</a>
                                <a href="#" className="footer-link4">Ochrana osobních údajů</a>
                            </div>
                            <div>
                                <h4 className="footer-heading4">Kontakty</h4>
                                <a href="mailto:podpora@povis.cz" className="footer-link4">podpora@povis.cz</a>
                                <a href="tel:+420123456789" className="footer-link4">+420 123 456 789</a>
                                <a href="#" className="footer-link4">Kontaktní formulář</a>
                            </div>
                            <div>
                                <h4 className="footer-heading4">Provozovatel</h4>
                                <address className="footer-text4">
                                    Ministerstvo životního prostředí<br />
                                    Vršovická 1442/65<br />
                                    100 10 Praha 10
                                </address>
                            </div>
                        </div>
                        <div className="footer-bottom4">
                            <span>© 2026 Ministerstvo životního prostředí</span>
                            <span>Systém POVIS2 v2.1.0</span>
                        </div>
                    </div>
                </footer>
            </div>

            {/* ===== LOGIN MODAL ===== */}
            {loginOpen && (
                <div className="modal-overlay4" onClick={(e) => { if (e.target === e.currentTarget) setLoginOpen(false); }}>
                    <div className="modal-card4" role="dialog" aria-modal="true" aria-labelledby="modal-title4">
                        <div className="modal-header4">
                            <h2 id="modal-title4">Vyberte typ přístupu</h2>
                            <button className="modal-close4" onClick={() => setLoginOpen(false)} aria-label="Zavřít" type="button">✕</button>
                        </div>

                        <div className="modal-body4">
                            {/* Public */}
                            <div className="modal-section4 section-public">
                                <div className="modal-sec-icon4" aria-hidden="true">🔍</div>
                                <h3>Prohlížení informací pro veřejnost</h3>
                                <p className="modal-sec-desc4">Vstup do veřejné části systému POVIS2</p>
                                <p className="modal-sec-text4">Pro získání informací o záplavových územích, digitálních povodňových plánech nebo aktuálních výstrahách ČHMÚ se nemusíte přihlašovat.</p>
                                <ul className="modal-sec-list4">
                                    <li>
                                        <span className="modal-check4" aria-hidden="true">✓</span>
                                        <span>Ověření ohrožení konkrétního místa na mapě</span>
                                    </li>
                                    <li>
                                        <span className="modal-check4" aria-hidden="true">✓</span>
                                        <span>Podrobné metodiky a rady, jak se chránit před povodní</span>
                                    </li>
                                    <li>
                                        <span className="modal-check4" aria-hidden="true">✓</span>
                                        <span>Veřejně dostupné verze povodňových plánů obcí a krajů</span>
                                    </li>
                                </ul>
                                <button className="modal-btn-outline4" type="button" onClick={() => setLoginOpen(false)}>Pokračovat bez přihlášení</button>
                            </div>

                            {/* Admin */}
                            <div className="modal-section4 section-admin">
                                <div className="modal-sec-icon4" aria-hidden="true">🔐</div>
                                <h3>Pro obce, úřady a správce agend</h3>
                                <p className="modal-sec-desc4">Vstup do neveřejné části pro editaci a správu dat</p>
                                <p className="modal-sec-text4">Přihlášení je určeno výhradně pro oprávněné pracovníky, kteří v systému POVIS2 vykonávají správu agend a plní zákonné povinnosti.</p>
                                <ul className="modal-sec-list4">
                                    <li>
                                        <span className="modal-check4" aria-hidden="true">✓</span>
                                        <span>Editace a aktualizace povodňových plánů a úseků OsVPR</span>
                                    </li>
                                    <li>
                                        <span className="modal-check4" aria-hidden="true">✓</span>
                                        <span>Přístup k neveřejným technickým zprávám a protokolům</span>
                                    </li>
                                    <li>
                                        <span className="modal-check4" aria-hidden="true">✓</span>
                                        <span>Správa subjektů a uživatelských rolí v rámci kompetence</span>
                                    </li>
                                </ul>
                                <button className="modal-btn-filled4" type="button">Přihlásit se (Identita občana / NIA)</button>
                                <p className="modal-note4">Rozsah funkcí se přizpůsobí vaší roli</p>
                            </div>
                        </div>

                        <div className="modal-footer4">
                            <div className="modal-request4">
                                <div className="modal-request-icon4" aria-hidden="true">📋</div>
                                <div className="modal-request-text4">
                                    <h4>Žádost o zřízení přístupu</h4>
                                    <p>Pokud vaše obec či úřad ještě nemá přístupové údaje, musíte nejprve zaslat oficiální přihlášku subjektu.</p>
                                </div>
                                <a href="#" className="modal-btn-small4">Stáhnout formulář</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Example4;
