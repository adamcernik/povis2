import { useState, useEffect } from 'react';
import './Example5.css';
import MapPage from './MapPage';

function Example5() {
    const [alertOpen, setAlertOpen] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [emergencyOpen, setEmergencyOpen] = useState(true);
    const [langOpen, setLangOpen] = useState(false);
    const [lang, setLang] = useState('cs');
    const [loginOpen, setLoginOpen] = useState(false);
    const [mapQuery, setMapQuery] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState('public'); // 'public' | 'editor' | 'admin'

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

    const chevronSvg = (
        <span className="nav-chevron5" aria-hidden="true">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );

    return (
        <>
            <div>
                <a href="#main-content" className="skip-link">Přeskočit na hlavní obsah</a>

                {/* ===== EMERGENCY BANNER ===== */}
                {emergencyOpen && (
                    <div className="emergency-banner5" role="alert">
                        <div className="c5 emergency-inner5">
                            <span className="emergency-text5">
                                <strong>⚠ Zvýšený povodňový stupeň</strong>
                                <span className="emergency-detail5"> — 3. stupeň povodňové aktivity na řece Moravě.</span>
                                <a href="#">Detail →</a>
                            </span>
                            <button
                                className="emergency-close5"
                                onClick={() => setEmergencyOpen(false)}
                                aria-label="Zavřít upozornění"
                                type="button"
                            >✕</button>
                        </div>
                    </div>
                )}

                {/* ===== HEADER ===== */}
                <header className="site-header5" role="banner">
                    <div className="c5 header-inner5">
                        <div className="header-left5">
                            <a href="/" className="header-logo5" aria-label="POVIS2 – přejít na úvodní stránku">
                                <span className="header-logo-text5">POVIS2</span>
                                <span className="header-logo-divider5" aria-hidden="true">|</span>
                                <span className="header-tagline5">Povodňový informační systém</span>
                            </a>
                        </div>
                        <div className="header-right5">
                            {isLoggedIn ? (
                                <button type="button" className="btn-primary5 hide-mobile5" onClick={() => { setIsLoggedIn(false); setUserRole('public'); }}>Odhlásit se</button>
                            ) : (
                                <button type="button" className="btn-primary5 hide-mobile5" onClick={() => setLoginOpen(true)}>Přihlásit se</button>
                            )}
                            <div className="lang-switcher5 hide-mobile5">
                                <button
                                    className="lang-toggle5"
                                    type="button"
                                    onClick={() => setLangOpen(!langOpen)}
                                    aria-expanded={langOpen}
                                    aria-haspopup="true"
                                    aria-label="Vybrat jazyk"
                                >
                                    <span className="lang-flag5">{lang === 'cs' ? '🇨🇿' : '🇬🇧'}</span>
                                    <span className="lang-label5">{lang === 'cs' ? 'CZ' : 'EN'}</span>
                                    <span className="lang-chevron5" aria-hidden="true">▼</span>
                                </button>
                                {langOpen && (
                                    <div className="lang-dropdown5" role="menu">
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
                                className="hamburger-btn5"
                                type="button"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-expanded={menuOpen}
                                aria-controls="mobile-nav5"
                                aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
                            >
                                <span className={`hamburger-icon5 ${menuOpen ? 'open' : ''}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* ===== MEGA NAV — RESTRUCTURED ===== */}
                <nav className={`main-nav5 ${menuOpen ? 'nav-open5' : ''}`} aria-label="Hlavní navigace" id="mobile-nav5">
                    <div className="c5">
                        <ul className="nav-list5" role="menubar">
                            {/* O POVIS2 */}
                            <li className="nav-item5" role="none">
                                <a href="#" role="menuitem">
                                    O POVIS2 {chevronSvg}
                                </a>
                                <div className="mega-dropdown5" role="menu" aria-label="O POVIS2 podmenu">
                                    <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Základní informace</strong>
                                        <span>Co je POVIS2, terminologie, zkratky</span>
                                    </a>
                                    <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Dokumentace POVIS2</strong>
                                        <span>Provozní řád, uživatelská dokumentace</span>
                                    </a>
                                    <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>FAQ</strong>
                                        <span>Často kladené dotazy</span>
                                    </a>
                                </div>
                            </li>

                            {/* Povodňové plány */}
                            <li className="nav-item5" role="none">
                                <a href="#" role="menuitem">
                                    Povodňové plány {chevronSvg}
                                </a>
                                <div className="mega-dropdown5 mega-dropdown5--wide" role="menu" aria-label="Povodňové plány podmenu">
                                    <div className="mega-columns5">
                                        <div className="mega-col5">
                                            <span className="mega-col-heading5">Veřejné</span>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Povodňový plán ČR</strong>
                                                <span>Celostátní povodňový plán</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Registr povodňových plánů</strong>
                                                <span>Plány krajů, ORP, obcí</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Povodňové komise</strong>
                                                <span>Přehled komisí a jejich složení</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Mapy povodňových plánů</strong>
                                                <span>Mapové výstupy povodňových plánů</span>
                                            </a>
                                        </div>
                                        <div className="mega-col5">
                                            <span className="mega-col-heading5">Data a metodika</span>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Export dat pro dPP</strong>
                                                <span>Datové exporty pro digitální plány</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Metodika tvorby dPP</strong>
                                                <span>Postupy a pravidla pro tvorbu plánů</span>
                                            </a>
                                            {isLoggedIn && (
                                                <>
                                                    <span className="mega-col-heading5 mega-col-heading5--auth">Pro přihlášené</span>
                                                    <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                        <strong>Editace povodňových plánů</strong>
                                                        <span>Správa a aktualizace plánů</span>
                                                    </a>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Záplavová území */}
                            <li className="nav-item5" role="none">
                                <a href="#" role="menuitem">
                                    Záplavová území {chevronSvg}
                                </a>
                                <div className="mega-dropdown5" role="menu" aria-label="Záplavová území podmenu">
                                    <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Základní informace</strong>
                                        <span>O agendě záplavových území</span>
                                    </a>
                                    <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Mapy záplavových území</strong>
                                        <span>Mapové kompozice a aktivní zóny</span>
                                    </a>
                                    <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Záplavová území (evidence)</strong>
                                        <span>Evidence vymezených záplavových území</span>
                                    </a>
                                    {isLoggedIn && (
                                        <a href="#" className="mega-link5 mega-link5--auth" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            <strong>Správa záplavových území</strong>
                                            <span>Editace a aktualizace dat (pro přihlášené)</span>
                                        </a>
                                    )}
                                </div>
                            </li>

                            {/* Povodňová směrnice */}
                            <li className="nav-item5" role="none">
                                <a href="#" role="menuitem">
                                    Povodňová směrnice {chevronSvg}
                                </a>
                                <div className="mega-dropdown5 mega-dropdown5--wide" role="menu" aria-label="Povodňová směrnice podmenu">
                                    <div className="mega-columns5">
                                        <div className="mega-col5">
                                            <span className="mega-col-heading5">Veřejné</span>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Základní informace</strong>
                                                <span>O agendě povodňové směrnice</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Úseky OsVPR</strong>
                                                <span>Úseky s významným povodňovým rizikem</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Mapy OsVPR</strong>
                                                <span>Mapové výstupy povodňové směrnice</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Strukturální opatření</strong>
                                                <span>Přehled protipovodňových opatření</span>
                                            </a>
                                        </div>
                                        <div className="mega-col5">
                                            <span className="mega-col-heading5">Plány a implementace</span>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Plány pro zvládání rizik</strong>
                                                <span>2015–2021, 2021–2027, 2027–2033</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Implementace PS</strong>
                                                <span>1., 2. a 3. cyklus implementace</span>
                                            </a>
                                            {isLoggedIn && (
                                                <>
                                                    <span className="mega-col-heading5 mega-col-heading5--auth">Pro přihlášené</span>
                                                    <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                        <strong>Plánovací období</strong>
                                                        <span>Správa plánovacích období</span>
                                                    </a>
                                                    <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                        <strong>Přehled protokolů</strong>
                                                        <span>Protokoly a přehledy importů</span>
                                                    </a>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Povodňová ochrana */}
                            <li className="nav-item5" role="none">
                                <a href="#" role="menuitem">
                                    Povodňová ochrana {chevronSvg}
                                </a>
                                <div className="mega-dropdown5 mega-dropdown5--wide" role="menu" aria-label="Povodňová ochrana podmenu">
                                    <div className="mega-columns5">
                                        <div className="mega-col5">
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Aktuální informace</strong>
                                                <span>Povodňová situace, odkazy ČHMÚ</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Vyhodnocení minulých povodní</strong>
                                                <span>Analýzy a závěrečné zprávy</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>OPŽP</strong>
                                                <span>Operační programy 2007–2027</span>
                                            </a>
                                        </div>
                                        <div className="mega-col5">
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Legislativa</strong>
                                                <span>Právní předpisy k povodňové ochraně</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Školení a semináře</strong>
                                                <span>Kalendář akcí a vzdělávání</span>
                                            </a>
                                            <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Dokumenty ke stažení</strong>
                                                <span>Další materiály a soubory</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Aktuality — direct link */}
                            <li className="nav-item5" role="none">
                                <a href="#heading-aktuality5" role="menuitem" onClick={() => setMenuOpen(false)}>Aktuality</a>
                            </li>

                            {/* Conditional: Subjekty (logged in) */}
                            {isLoggedIn && (
                                <li className="nav-item5" role="none">
                                    <a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Subjekty</a>
                                </li>
                            )}

                            {/* Conditional: Správa (admin only) */}
                            {userRole === 'admin' && (
                                <li className="nav-item5" role="none">
                                    <a href="#" role="menuitem">
                                        Správa {chevronSvg}
                                    </a>
                                    <div className="mega-dropdown5" role="menu" aria-label="Správa podmenu">
                                        <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            <strong>Konfigurace aplikace</strong>
                                            <span>Nastavení systému</span>
                                        </a>
                                        <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            <strong>Uživatelé a role</strong>
                                            <span>Správa uživatelů, rolí a oprávnění</span>
                                        </a>
                                        <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            <strong>Číselníky</strong>
                                            <span>Správa číselníků systému</span>
                                        </a>
                                        <a href="#" className="mega-link5" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            <strong>Notifikace</strong>
                                            <span>Konfigurace notifikací</span>
                                        </a>
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className="mobile-nav-extras5">
                            {isLoggedIn ? (
                                <button type="button" className="btn-primary5" onClick={() => { setIsLoggedIn(false); setUserRole('public'); setMenuOpen(false); }}>Odhlásit se</button>
                            ) : (
                                <button type="button" className="btn-primary5" onClick={() => { setLoginOpen(true); setMenuOpen(false); }}>Přihlásit se</button>
                            )}
                            <div className="mobile-lang-row5">
                                <button type="button" className={`mobile-lang-btn5 ${lang === 'cs' ? 'active' : ''}`} onClick={() => setLang('cs')}>🇨🇿 Česky</button>
                                <button type="button" className={`mobile-lang-btn5 ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>🇬🇧 English</button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* ===== HERO WITH MAP ===== */}
                <section className="hero5" aria-label="Hlavní banner">
                    <div className="c5">
                        <div className="hero5-card">
                            <div className="hero5-text">
                                <span className="hero5-badge">Povodňový informační systém</span>
                                <h1>Portál povodňového informačního systému POVIS2</h1>
                                <p>Spravujeme informace o povodňových rizicích, ochraně a postupech v krizových situacích. Pomáháme obcím, úřadům i veřejnosti se včas připravit a správně reagovat.</p>
                                <div className="hero5-search" role="search" aria-label="Ověření ohrožení místa">
                                    <input
                                        type="text"
                                        className="hero5-search-input"
                                        placeholder="Zadejte adresu nebo parcelu..."
                                        aria-label="Adresa nebo parcela"
                                        value={searchInput}
                                        onChange={(e) => setSearchInput(e.target.value)}
                                        onKeyDown={(e) => { if (e.key === 'Enter' && searchInput.trim()) setMapQuery(searchInput.trim()); }}
                                    />
                                    <button
                                        className="hero5-search-btn"
                                        type="button"
                                        onClick={() => { if (searchInput.trim()) setMapQuery(searchInput.trim()); else setMapQuery('Praha'); }}
                                    >Ověřit na mapě <span aria-hidden="true">→</span></button>
                                </div>
                            </div>
                            <div className="hero5-map" aria-label="Interaktivní mapa České republiky">
                                <iframe
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=12.09%2C48.55%2C18.86%2C51.06&layer=mapnik"
                                    title="Mapa České republiky — záplavová území"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {alertOpen && (
                            <div className="alert-bar5" role="alert">
                                <span className="alert-icon5" aria-hidden="true">⚠</span>
                                <span>Plánovaná údržba systému proběhne dne 15. 2. 2026. Omlouváme se za případné nepříjemnosti.</span>
                                <button className="alert-close5" onClick={() => setAlertOpen(false)} aria-label="Zavřít upozornění" type="button">✕</button>
                            </div>
                        )}
                    </div>
                </section>

                <main id="main-content">

                    {/* ===== HLAVNÍ AGENDY — NEW TILES SECTION ===== */}
                    <section className="agenda-section5" aria-labelledby="heading-agendy5">
                        <div className="c5">
                            <h2 className="section5-title" id="heading-agendy5">Hlavní agendy</h2>
                            <p className="section5-subtitle">Klíčové oblasti povodňového informačního systému.</p>
                            <div className="agenda-grid5">
                                <article className="agenda-card5">
                                    <div className="agenda-icon5" aria-hidden="true">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                            <polyline points="10 9 9 9 8 9" />
                                        </svg>
                                    </div>
                                    <h3>Povodňové plány</h3>
                                    <p>Registr digitálních povodňových plánů ČR, krajů, ORP a obcí. Metodika tvorby a export dat.</p>
                                    <div className="agenda-actions5">
                                        <a href="#" className="agenda-btn5">Zjistit více <span aria-hidden="true">→</span></a>
                                    </div>
                                </article>

                                <article className="agenda-card5">
                                    <div className="agenda-icon5" aria-hidden="true">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                                            <line x1="8" y1="2" x2="8" y2="18" />
                                            <line x1="16" y1="6" x2="16" y2="22" />
                                        </svg>
                                    </div>
                                    <h3>Záplavová území</h3>
                                    <p>Evidence a vymezení záplavových území. Mapy aktivních zón a záplavových čar.</p>
                                    <div className="agenda-actions5">
                                        <a href="#" className="agenda-btn5">Zjistit více <span aria-hidden="true">→</span></a>
                                        <a href="#" className="agenda-btn-map5" aria-label="Zobrazit záplavová území na mapě" onClick={() => setMapQuery('Záplavová území')}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                                                <line x1="8" y1="2" x2="8" y2="18" />
                                                <line x1="16" y1="6" x2="16" y2="22" />
                                            </svg>
                                            Mapa
                                        </a>
                                    </div>
                                </article>

                                <article className="agenda-card5">
                                    <div className="agenda-icon5" aria-hidden="true">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </div>
                                    <h3>Zvládání povodňových rizik</h3>
                                    <p>Povodňová směrnice EU, úseky s významným povodňovým rizikem, plány a opatření.</p>
                                    <div className="agenda-actions5">
                                        <a href="#" className="agenda-btn5">Zjistit více <span aria-hidden="true">→</span></a>
                                        <a href="#" className="agenda-btn-map5" aria-label="Zobrazit rizikové úseky na mapě" onClick={() => setMapQuery('OsVPR')}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                                                <line x1="8" y1="2" x2="8" y2="18" />
                                                <line x1="16" y1="6" x2="16" y2="22" />
                                            </svg>
                                            Mapa
                                        </a>
                                    </div>
                                </article>

                                <article className="agenda-card5">
                                    <div className="agenda-icon5" aria-hidden="true">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                    </div>
                                    <h3>Ochrana před povodněmi</h3>
                                    <p>Financování protipovodňových opatření, legislativa, vyhodnocení minulých povodní.</p>
                                    <div className="agenda-actions5">
                                        <a href="#" className="agenda-btn5">Zjistit více <span aria-hidden="true">→</span></a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* ===== ŽIVOTNÍ SITUACE ===== */}
                    <section className="section5" aria-labelledby="heading-situace5">
                        <div className="c5">
                            <h2 className="section5-title" id="heading-situace5">Životní situace</h2>
                            <p className="section5-subtitle">Praktický rádce — co dělat před povodní, při ní i po ní.</p>
                            <div className="phases-grid5">
                                <article className="phase-card5 phase-before">
                                    <div className="phase-icon5" aria-hidden="true">🛡️</div>
                                    <span className="phase-label5">Příprava a prevence</span>
                                    <h3>Co dělat mimo povodeň</h3>
                                    <p>Zjistěte rizika v okolí své parcely, prostudujte legislativu a digitální povodňové plány. Připravte se na případné ohrožení.</p>
                                    <a href="#" className="phase-btn5">
                                        Zjistit více <span aria-hidden="true">→</span>
                                    </a>
                                </article>
                                <article className="phase-card5 phase-during">
                                    <div className="phase-icon5" aria-hidden="true">⚡</div>
                                    <span className="phase-label5">Krizová situace</span>
                                    <h3>Co dělat při povodni</h3>
                                    <p>Okamžité informace o průběhu povodně, předpovědi a kontakty na povodňové komise. Získejte aktuální data v reálném čase.</p>
                                    <a href="#" className="phase-btn5">
                                        Zjistit více <span aria-hidden="true">→</span>
                                    </a>
                                </article>
                                <article className="phase-card5 phase-after">
                                    <div className="phase-icon5" aria-hidden="true">🔧</div>
                                    <span className="phase-label5">Obnova a náprava</span>
                                    <h3>Co dělat po povodni</h3>
                                    <p>Průvodce financováním obnovy, ochrana před povodněmi a důležité dokumenty k nápravě škod. Začněte obnovu správně.</p>
                                    <a href="#" className="phase-btn5">
                                        Zjistit více <span aria-hidden="true">→</span>
                                    </a>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* ===== MONITORING ČHMÚ ===== */}
                    <section className="section5" aria-labelledby="heading-monitoring5">
                        <div className="c5">
                            <div className="monitoring-section5">
                                <div className="monitoring-header5">
                                    <h2 id="heading-monitoring5">Aktuální situace na tocích</h2>
                                    <p>Operativní informace ze stránek Českého hydrometeorologického ústavu.</p>
                                </div>
                                <div className="monitoring-grid5">
                                    <a href="#" className="monitoring-tile5" aria-label="Výstrahy — aktuálně platná varování">
                                        <div className="mon-icon5 mi-warn" aria-hidden="true">⚠️</div>
                                        <h3>Výstrahy</h3>
                                        <p>Aktuálně platná varování a stupně povodňové aktivity.</p>
                                        <span className="mon-arrow5" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                    <a href="#" className="monitoring-tile5" aria-label="Radar a srážky">
                                        <div className="mon-icon5 mi-radar" aria-hidden="true">🌧️</div>
                                        <h3>Radar a srážky</h3>
                                        <p>Srážkoměrné stanice a radarové snímky v reálném čase.</p>
                                        <span className="mon-arrow5" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                    <a href="#" className="monitoring-tile5" aria-label="Předpovědní služba">
                                        <div className="mon-icon5 mi-forecast" aria-hidden="true">📊</div>
                                        <h3>Předpovědní služba</h3>
                                        <p>Hlásná a předpovědní povodňová služba — průtoky a stavy.</p>
                                        <span className="mon-arrow5" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                    <a href="#" className="monitoring-tile5" aria-label="Přívalové povodně">
                                        <div className="mon-icon5 mi-flash" aria-hidden="true">⚡</div>
                                        <h3>Přívalové povodně</h3>
                                        <p>Indikátor rizik bleskových povodní a lokálních záplav.</p>
                                        <span className="mon-arrow5" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ===== AKTUALITY ===== */}
                    <section className="section5" aria-labelledby="heading-aktuality5">
                        <div className="c5">
                            <h2 className="section5-title" id="heading-aktuality5">Aktuality</h2>
                            <p className="section5-subtitle">Novinky ze systému POVIS2, legislativní změny a aktuální povodňové události.</p>
                            <div className="news-grid5">
                                <article className="news-main5">
                                    <img src="/images/flood-main.png" alt="Letecký pohled na zaplavené české město s rozvodněnou řekou" />
                                    <div className="news-main-body5">
                                        <time className="news-date5" dateTime="2026-02-05">5. února 2026</time>
                                        <h3><a href="#">Aktualizace záplavových území pro oblast Moravy</a></h3>
                                        <p>Na základě nových hydrologických modelů byly přepracovány mapy záplavových území v povodí řeky Moravy. Změny se dotknou více než 120 obcí a budou promítnuty do územních plánů.</p>
                                    </div>
                                </article>
                                <div className="news-side5">
                                    <article className="news-side-card5">
                                        <img src="/images/flood-gauge.png" alt="Hlásný profil na rozvodněné řece" />
                                        <div className="news-side-body5">
                                            <time className="news-date5" dateTime="2026-02-01">1. února 2026</time>
                                            <h4><a href="#">Nová metodika měření hlásných profilů</a></h4>
                                            <p>ČHMÚ zavádí modernizované postupy měření na více než 500 hlásných profilech v ČR.</p>
                                        </div>
                                    </article>
                                    <article className="news-side-card5">
                                        <img src="/images/flood-sandbags.png" alt="Záchranáři při protipovodňové ochraně" />
                                        <div className="news-side-body5">
                                            <time className="news-date5" dateTime="2026-01-28">28. ledna 2026</time>
                                            <h4><a href="#">Školení pro obce — krizové řízení a protipovodňová ochrana</a></h4>
                                            <p>Série školení pro ORP a obce ke správě povodňových plánů a krizovému řízení.</p>
                                        </div>
                                    </article>
                                    <article className="news-side-card5">
                                        <img src="/images/flood-radar.png" alt="Meteorologická radarová stanice ČHMÚ" />
                                        <div className="news-side-body5">
                                            <time className="news-date5" dateTime="2026-01-15">15. ledna 2026</time>
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
                <footer className="site-footer5" role="contentinfo">
                    <div className="c5">
                        <div className="footer-grid5">
                            <div>
                                <h4 className="footer-heading5">POVIS2</h4>
                                <p className="footer-text5">Povodňový informační systém České republiky provozovaný Ministerstvem životního prostředí.</p>
                            </div>
                            <div>
                                <h4 className="footer-heading5">Informace</h4>
                                <a href="#" className="footer-link5">Časté dotazy (FAQ)</a>
                                <a href="#" className="footer-link5">Provozní řád</a>
                                <a href="#" className="footer-link5">Ochrana osobních údajů</a>
                            </div>
                            <div>
                                <h4 className="footer-heading5">Kontakty</h4>
                                <a href="mailto:podpora@povis.cz" className="footer-link5">podpora@povis.cz</a>
                                <a href="tel:+420123456789" className="footer-link5">+420 123 456 789</a>
                                <a href="#" className="footer-link5">Kontaktní formulář</a>
                            </div>
                            <div>
                                <h4 className="footer-heading5">Provozovatel</h4>
                                <address className="footer-text5">
                                    Ministerstvo životního prostředí<br />
                                    Vršovická 1442/65<br />
                                    100 10 Praha 10
                                </address>
                            </div>
                        </div>
                        <div className="footer-bottom5">
                            <span>© 2026 Ministerstvo životního prostředí</span>
                            <span>Systém POVIS2 v2.1.0</span>
                        </div>
                    </div>
                </footer>
            </div>

            {/* ===== LOGIN MODAL ===== */}
            {loginOpen && (
                <div className="modal-overlay5" onClick={(e) => { if (e.target === e.currentTarget) setLoginOpen(false); }}>
                    <div className="modal-card5" role="dialog" aria-modal="true" aria-labelledby="modal-title5">
                        <div className="modal-header5">
                            <h2 id="modal-title5">Vyberte typ přístupu</h2>
                            <button className="modal-close5" onClick={() => setLoginOpen(false)} aria-label="Zavřít" type="button">✕</button>
                        </div>

                        <div className="modal-body5">
                            {/* Public */}
                            <div className="modal-section5 section-public">
                                <div className="modal-sec-icon5" aria-hidden="true">🔍</div>
                                <h3>Prohlížení informací pro veřejnost</h3>
                                <p className="modal-sec-desc5">Vstup do veřejné části systému POVIS2</p>
                                <p className="modal-sec-text5">Pro získání informací o záplavových územích, digitálních povodňových plánech nebo aktuálních výstrahách ČHMÚ se nemusíte přihlašovat.</p>
                                <ul className="modal-sec-list5">
                                    <li>
                                        <span className="modal-check5" aria-hidden="true">✓</span>
                                        <span>Ověření ohrožení konkrétního místa na mapě</span>
                                    </li>
                                    <li>
                                        <span className="modal-check5" aria-hidden="true">✓</span>
                                        <span>Podrobné metodiky a rady, jak se chránit před povodní</span>
                                    </li>
                                    <li>
                                        <span className="modal-check5" aria-hidden="true">✓</span>
                                        <span>Veřejně dostupné verze povodňových plánů obcí a krajů</span>
                                    </li>
                                </ul>
                                <button className="modal-btn-outline5" type="button" onClick={() => setLoginOpen(false)}>Pokračovat bez přihlášení</button>
                            </div>

                            {/* Admin */}
                            <div className="modal-section5 section-admin">
                                <div className="modal-sec-icon5" aria-hidden="true">🔐</div>
                                <h3>Pro obce, úřady a správce agend</h3>
                                <p className="modal-sec-desc5">Vstup do neveřejné části pro editaci a správu dat</p>
                                <p className="modal-sec-text5">Přihlášení je určeno výhradně pro oprávněné pracovníky, kteří v systému POVIS2 vykonávají správu agend a plní zákonné povinnosti.</p>
                                <ul className="modal-sec-list5">
                                    <li>
                                        <span className="modal-check5" aria-hidden="true">✓</span>
                                        <span>Editace a aktualizace povodňových plánů a úseků OsVPR</span>
                                    </li>
                                    <li>
                                        <span className="modal-check5" aria-hidden="true">✓</span>
                                        <span>Přístup k neveřejným technickým zprávám a protokolům</span>
                                    </li>
                                    <li>
                                        <span className="modal-check5" aria-hidden="true">✓</span>
                                        <span>Správa subjektů a uživatelských rolí v rámci kompetence</span>
                                    </li>
                                </ul>
                                <button className="modal-btn-filled5" type="button" onClick={() => { setIsLoggedIn(true); setUserRole('admin'); setLoginOpen(false); }}>Přihlásit se (Identita občana / NIA)</button>
                                <p className="modal-note5">Rozsah funkcí se přizpůsobí vaší roli</p>
                            </div>
                        </div>

                        <div className="modal-footer5">
                            <div className="modal-request5">
                                <div className="modal-request-icon5" aria-hidden="true">📋</div>
                                <div className="modal-request-text5">
                                    <h4>Žádost o zřízení přístupu</h4>
                                    <p>Pokud vaše obec či úřad ještě nemá přístupové údaje, musíte nejprve zaslat oficiální přihlášku subjektu.</p>
                                </div>
                                <a href="#" className="modal-btn-small5">Stáhnout formulář</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Example5;
