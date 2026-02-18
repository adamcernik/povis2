import { useState, useEffect } from 'react';
import './Example7.css';

function Example7() {
    const [alertOpen, setAlertOpen] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [emergencyOpen, setEmergencyOpen] = useState(true);
    const [langOpen, setLangOpen] = useState(false);
    const [lang, setLang] = useState('cs');
    const [loginOpen, setLoginOpen] = useState(false);
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

    const chevronSvg = (
        <span className="nav-chevron7" aria-hidden="true">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );

    return (
        <div className="example7-root">
            <div>
                <a href="#main-content" className="skip-link">Přeskočit na hlavní obsah</a>

                {/* ===== EMERGENCY BANNER ===== */}
                {emergencyOpen && (
                    <div className="emergency-banner7" role="alert">
                        <div className="c7 emergency-inner7">
                            <span className="emergency-text7">
                                <strong>⚠ Výstraha ČHMÚ: Extrémní stupeň nebezpečí</strong>
                                <span className="emergency-detail7"> — silné bouřky a přívalové srážky v Jihomoravském a Zlínském kraji.</span>
                                <a href="https://www.chmi.cz/files/portal/docs/meteo/om/vystrahy/" target="_blank" rel="noopener noreferrer">Detail na ČHMÚ →</a>
                            </span>
                            <button
                                className="emergency-close7"
                                onClick={() => setEmergencyOpen(false)}
                                aria-label="Zavřít upozornění"
                                type="button"
                            >✕</button>
                        </div>
                    </div>
                )}

                {/* ===== HEADER ===== */}
                <header className="site-header7" role="banner">
                    <div className="c7 header-inner7">
                        <div className="header-left7">
                            <img
                                src="/images/logo-mzp-cs.svg"
                                alt="Ministerstvo životního prostředí"
                                className="header-mzp-logo7"
                            />
                            <div className="header-mzp-divider7" aria-hidden="true"></div>
                            <a href="/" className="header-logo7" aria-label="POVIS2 – přejít na úvodní stránku">
                                <span className="header-logo-text7">POVIS2</span>
                                <span className="header-logo-divider7" aria-hidden="true">|</span>
                                <span className="header-tagline7">Povodňový informační systém</span>
                            </a>
                        </div>
                        <div className="header-right7">
                            {isLoggedIn ? (
                                <button type="button" className="btn-primary7 hide-mobile7" onClick={() => { setIsLoggedIn(false); setUserRole('public'); }}>Odhlásit se</button>
                            ) : (
                                <button type="button" className="btn-primary7 hide-mobile7" onClick={() => setLoginOpen(true)}>Přihlásit se</button>
                            )}
                            <div className="lang-switcher7 hide-mobile7">
                                <button
                                    className="lang-toggle7"
                                    type="button"
                                    onClick={() => setLangOpen(!langOpen)}
                                    aria-expanded={langOpen}
                                    aria-haspopup="true"
                                    aria-label="Vybrat jazyk"
                                >
                                    <span className="lang-flag7">{lang === 'cs' ? '🇨🇿' : '🇬🇧'}</span>
                                    <span className="lang-label7">{lang === 'cs' ? 'CZ' : 'EN'}</span>
                                    <span className="lang-chevron7" aria-hidden="true">▼</span>
                                </button>
                                {langOpen && (
                                    <div className="lang-dropdown7" role="menu">
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
                                className="hamburger-btn7"
                                type="button"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-expanded={menuOpen}
                                aria-controls="mobile-nav7"
                                aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
                            >
                                <span className={`hamburger-icon7 ${menuOpen ? 'open' : ''}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* ===== MEGA NAV ===== */}
                <nav className={`main-nav7 ${menuOpen ? 'nav-open7' : ''}`} aria-label="Hlavní navigace" id="mobile-nav7">
                    <div className="c7">
                        <ul className="nav-list7" role="menubar">
                            {/* O POVIS2 */}
                            <li className="nav-item7" role="none">
                                <a href="#" role="menuitem">
                                    O POVIS2 {chevronSvg}
                                </a>
                                <div className="mega-dropdown7" role="menu" aria-label="O POVIS2 podmenu">
                                    <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Základní informace</strong>
                                        <span>Co je POVIS2, terminologie, zkratky</span>
                                    </a>
                                    <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Dokumentace POVIS2</strong>
                                        <span>Přehled provozní a uživatelské dokumentace</span>
                                    </a>
                                    <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)} style={{ paddingLeft: '1.4rem' }}>
                                        <strong>Provozní řád</strong>
                                        <span>Pravidla provozu systému POVIS2</span>
                                    </a>
                                    <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)} style={{ paddingLeft: '1.4rem' }}>
                                        <strong>Uživatelská dokumentace</strong>
                                        <span>Návody a příručky pro uživatele</span>
                                    </a>
                                    <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>FAQ</strong>
                                        <span>Často kladené dotazy</span>
                                    </a>
                                </div>
                            </li>

                            {/* Povodňové plány */}
                            <li className="nav-item7" role="none">
                                <a href="#" role="menuitem">
                                    Povodňové plány {chevronSvg}
                                </a>
                                <div className="mega-dropdown7 mega-dropdown7--wide" role="menu" aria-label="Povodňové plány podmenu">
                                    <div className="mega-columns7">
                                        <div className="mega-col7">
                                            <span className="mega-col-heading7">Veřejné</span>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Povodňový plán ČR</strong>
                                                <span>Celostátní povodňový plán</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Registr povodňových plánů</strong>
                                                <span>Plány krajů, ORP, obcí</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Povodňové komise</strong>
                                                <span>Přehled komisí a jejich složení</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Mapy povodňových plánů</strong>
                                                <span>Mapové výstupy povodňových plánů</span>
                                            </a>
                                        </div>
                                        <div className="mega-col7">
                                            <span className="mega-col-heading7">Data a metodika</span>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Export dat pro dPP</strong>
                                                <span>Datové exporty pro digitální plány</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Metodika tvorby dPP</strong>
                                                <span>Postupy a pravidla pro tvorbu plánů</span>
                                            </a>
                                            {isLoggedIn && (
                                                <>
                                                    <span className="mega-col-heading7 mega-col-heading7--auth">Pro přihlášené</span>
                                                    <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
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
                            <li className="nav-item7" role="none">
                                <a href="#" role="menuitem">
                                    Záplavová území {chevronSvg}
                                </a>
                                <div className="mega-dropdown7" role="menu" aria-label="Záplavová území podmenu">
                                    <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Základní informace</strong>
                                        <span>O agendě záplavových území</span>
                                    </a>
                                    <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Mapy záplavových území</strong>
                                        <span>Mapové kompozice a aktivní zóny</span>
                                    </a>
                                    <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                        <strong>Záplavová území (evidence)</strong>
                                        <span>Evidence vymezených záplavových území</span>
                                    </a>
                                    {isLoggedIn && (
                                        <a href="#" className="mega-link7 mega-link7--auth" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            <strong>Správa záplavových území</strong>
                                            <span>Editace a aktualizace dat (pro přihlášené)</span>
                                        </a>
                                    )}
                                </div>
                            </li>

                            {/* Zvládání povodňových rizik (formerly Povodňová směrnice) */}
                            <li className="nav-item7" role="none">
                                <a href="#" role="menuitem">
                                    Zvládání povod. rizik {chevronSvg}
                                </a>
                                <div className="mega-dropdown7 mega-dropdown7--wide" role="menu" aria-label="Zvládání povodňových rizik podmenu">
                                    <div className="mega-columns7">
                                        <div className="mega-col7">
                                            <span className="mega-col-heading7">Veřejné</span>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Základní informace</strong>
                                                <span>O agendě zvládání povodňových rizik</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Úseky OsVPR</strong>
                                                <span>Úseky s významným povodňovým rizikem</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Mapy OsVPR</strong>
                                                <span>Mapové výstupy povodňových rizik</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Strukturální opatření</strong>
                                                <span>Přehled protipovodňových opatření</span>
                                            </a>
                                        </div>
                                        <div className="mega-col7">
                                            <span className="mega-col-heading7">Plány a implementace</span>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Plány pro zvládání rizik</strong>
                                                <span>2015–2021, 2021–2027, 2027–2033</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Implementace</strong>
                                                <span>1., 2. a 3. cyklus implementace</span>
                                            </a>
                                            {isLoggedIn && (
                                                <>
                                                    <span className="mega-col-heading7 mega-col-heading7--auth">Pro přihlášené</span>
                                                    <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                        <strong>Plánovací období</strong>
                                                        <span>Správa plánovacích období</span>
                                                    </a>
                                                    <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
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
                            <li className="nav-item7" role="none">
                                <a href="#" role="menuitem">
                                    Povodňová ochrana {chevronSvg}
                                </a>
                                <div className="mega-dropdown7 mega-dropdown7--wide" role="menu" aria-label="Povodňová ochrana podmenu">
                                    <div className="mega-columns7">
                                        <div className="mega-col7">
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Aktuální informace</strong>
                                                <span>Povodňová situace, odkazy ČHMÚ</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Vyhodnocení minulých povodní</strong>
                                                <span>Analýzy a závěrečné zprávy</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>OPŽP</strong>
                                                <span>Operační programy 2007–2027</span>
                                            </a>
                                        </div>
                                        <div className="mega-col7">
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Legislativa</strong>
                                                <span>Právní předpisy k povodňové ochraně</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Školení a semináře</strong>
                                                <span>Kalendář akcí a vzdělávání</span>
                                            </a>
                                            <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                                <strong>Dokumenty ke stažení</strong>
                                                <span>Další materiály a soubory</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* Aktuality — direct link */}
                            <li className="nav-item7" role="none">
                                <a href="#heading-aktuality7" role="menuitem" onClick={() => setMenuOpen(false)}>Aktuality</a>
                            </li>

                            {/* Conditional: Subjekty (logged in) */}
                            {isLoggedIn && (
                                <li className="nav-item7" role="none">
                                    <a href="#" role="menuitem" onClick={() => setMenuOpen(false)}>Subjekty</a>
                                </li>
                            )}

                            {/* Conditional: Správa (admin only) */}
                            {userRole === 'admin' && (
                                <li className="nav-item7" role="none">
                                    <a href="#" role="menuitem">
                                        Správa {chevronSvg}
                                    </a>
                                    <div className="mega-dropdown7" role="menu" aria-label="Správa podmenu">
                                        <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            <strong>Konfigurace aplikace</strong>
                                            <span>Nastavení systému</span>
                                        </a>
                                        <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            <strong>Uživatelé a role</strong>
                                            <span>Správa uživatelů, rolí a oprávnění</span>
                                        </a>
                                        <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            <strong>Číselníky</strong>
                                            <span>Správa číselníků systému</span>
                                        </a>
                                        <a href="#" className="mega-link7" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            <strong>Notifikace</strong>
                                            <span>Konfigurace notifikací</span>
                                        </a>
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className="mobile-nav-extras7">
                            {isLoggedIn ? (
                                <button type="button" className="btn-primary7" onClick={() => { setIsLoggedIn(false); setUserRole('public'); setMenuOpen(false); }}>Odhlásit se</button>
                            ) : (
                                <button type="button" className="btn-primary7" onClick={() => { setLoginOpen(true); setMenuOpen(false); }}>Přihlásit se</button>
                            )}
                            <div className="mobile-lang-row7">
                                <button type="button" className={`mobile-lang-btn7 ${lang === 'cs' ? 'active' : ''}`} onClick={() => setLang('cs')}>🇨🇿 Česky</button>
                                <button type="button" className={`mobile-lang-btn7 ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>🇬🇧 English</button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* ===== HERO WITH MAP ===== */}
                <section className="hero7" aria-label="Hlavní banner">
                    <div className="c7">
                        <div className="hero7-card">
                            <div className="hero7-text">
                                <span className="hero7-badge">Povodňový informační systém</span>
                                <h1>Portál povodňového informačního systému POVIS2</h1>
                                <p>Spravujeme informace o povodňových rizicích, ochraně a postupech v mimořádných povodňových situacích. Pomáháme obcím, úřadům i veřejnosti se včas připravit a správně reagovat.</p>
                                <div className="hero7-search" role="search" aria-label="Ověření ohrožení místa">
                                    <input
                                        type="text"
                                        className="hero7-search-input"
                                        placeholder="Zadejte adresu nebo parcelu..."
                                        aria-label="Adresa nebo parcela"
                                    />
                                    <button
                                        className="hero7-search-btn"
                                        type="button"
                                    >Ověřit na mapě <span aria-hidden="true">→</span></button>
                                </div>
                            </div>
                            <div className="hero7-map" aria-label="Interaktivní mapa České republiky">
                                <iframe
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=12.09%2C48.55%2C18.86%2C51.06&layer=mapnik"
                                    title="Mapa České republiky — záplavová území"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {alertOpen && (
                            <div className="alert-bar7" role="alert">
                                <span className="alert-icon7" aria-hidden="true">⚠</span>
                                <span>Plánovaná údržba systému proběhne dne 15. 2. 2026. Omlouváme se za případné nepříjemnosti.</span>
                                <button className="alert-close7" onClick={() => setAlertOpen(false)} aria-label="Zavřít upozornění" type="button">✕</button>
                            </div>
                        )}
                    </div>
                </section>

                <main id="main-content">

                    {/* ===== HLAVNÍ AGENDY ===== */}
                    <section className="agenda-section7" aria-labelledby="heading-agendy7">
                        <div className="c7">
                            <h2 className="section7-title" id="heading-agendy7">Hlavní agendy</h2>
                            <p className="section7-subtitle">Klíčové oblasti povodňového informačního systému.</p>
                            <div className="agenda-grid7">
                                <article className="agenda-card7">
                                    <div className="agenda-icon7" aria-hidden="true">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                            <polyline points="10 9 9 9 8 9" />
                                        </svg>
                                    </div>
                                    <h3>Povodňové plány</h3>
                                    <p>Registr digitálních povodňových plánů ČR, krajů, ORP a obcí. Metodika tvorby a export dat.</p>
                                    <div className="agenda-actions7">
                                        <a href="#" className="agenda-btn7">Zjistit více <span aria-hidden="true">→</span></a>
                                    </div>
                                </article>

                                <article className="agenda-card7">
                                    <div className="agenda-icon7" aria-hidden="true">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                                            <line x1="8" y1="2" x2="8" y2="18" />
                                            <line x1="16" y1="6" x2="16" y2="22" />
                                        </svg>
                                    </div>
                                    <h3>Záplavová území</h3>
                                    <p>Evidence a vymezení záplavových území. Mapy aktivních zón a záplavových čar.</p>
                                    <div className="agenda-actions7">
                                        <a href="#" className="agenda-btn7">Zjistit více <span aria-hidden="true">→</span></a>
                                        <a href="#" className="agenda-btn-map7" aria-label="Zobrazit záplavová území na mapě" title="Mapa">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                                                <line x1="8" y1="2" x2="8" y2="18" />
                                                <line x1="16" y1="6" x2="16" y2="22" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>

                                <article className="agenda-card7">
                                    <div className="agenda-icon7" aria-hidden="true">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </div>
                                    <h3>Zvládání povodňových rizik</h3>
                                    <p>Směrnice EU o zvládání povodňových rizik, úseky s významným povodňovým rizikem, plány a opatření.</p>
                                    <div className="agenda-actions7">
                                        <a href="#" className="agenda-btn7">Zjistit více <span aria-hidden="true">→</span></a>
                                        <a href="#" className="agenda-btn-map7" aria-label="Zobrazit rizikové úseky na mapě" title="Mapa">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                                                <line x1="8" y1="2" x2="8" y2="18" />
                                                <line x1="16" y1="6" x2="16" y2="22" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>

                                <article className="agenda-card7">
                                    <div className="agenda-icon7" aria-hidden="true">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                    </div>
                                    <h3>Ochrana před povodněmi</h3>
                                    <p>Financování protipovodňových opatření, legislativa, vyhodnocení minulých povodní.</p>
                                    <div className="agenda-actions7">
                                        <a href="#" className="agenda-btn7">Zjistit více <span aria-hidden="true">→</span></a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* ===== ŽIVOTNÍ SITUACE ===== */}
                    <section className="section7" aria-labelledby="heading-situace7">
                        <div className="c7">
                            <h2 className="section7-title" id="heading-situace7">Životní situace</h2>
                            <p className="section7-subtitle">Praktický rádce — co dělat před povodní, při ní i po ní.</p>
                            <div className="phases-grid7">
                                <article className="phase-card7 phase-before">
                                    <div className="phase-icon7" aria-hidden="true">🛡️</div>
                                    <span className="phase-label7">Příprava a prevence</span>
                                    <h3>Co dělat mimo povodeň</h3>
                                    <p>Zjistěte rizika v okolí své parcely, prostudujte legislativu a digitální povodňové plány. Připravte se na případné ohrožení.</p>
                                    <a href="#" className="phase-btn7">
                                        Zjistit více <span aria-hidden="true">→</span>
                                    </a>
                                </article>
                                <article className="phase-card7 phase-during">
                                    <div className="phase-icon7" aria-hidden="true">⚡</div>
                                    <span className="phase-label7">Mimořádná situace</span>
                                    <h3>Co dělat při povodni</h3>
                                    <p>Okamžité informace o průběhu povodně, předpovědi a kontakty na povodňové komise. Získejte aktuální data v reálném čase.</p>
                                    <a href="#" className="phase-btn7">
                                        Zjistit více <span aria-hidden="true">→</span>
                                    </a>
                                </article>
                                <article className="phase-card7 phase-after">
                                    <div className="phase-icon7" aria-hidden="true">🔧</div>
                                    <span className="phase-label7">Obnova a náprava</span>
                                    <h3>Co dělat po povodni</h3>
                                    <p>Průvodce financováním obnovy, ochrana před povodněmi a důležité dokumenty k nápravě škod. Začněte obnovu správně.</p>
                                    <a href="#" className="phase-btn7">
                                        Zjistit více <span aria-hidden="true">→</span>
                                    </a>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* ===== VÝSTRAHY A MONITORING ČHMÚ ===== */}
                    <section className="section7" aria-labelledby="heading-monitoring7">
                        <div className="c7">
                            <div className="monitoring-section7">
                                <div className="monitoring-header7">
                                    <h2 className="section7-title" id="heading-monitoring7">Výstrahy a monitoring ČHMÚ</h2>
                                    <p className="section7-subtitle" style={{ marginBottom: 0 }}>Operativní informace ze stránek Českého hydrometeorologického ústavu.</p>
                                </div>
                                <div className="monitoring-grid7">
                                    <a href="https://www.chmi.cz/files/portal/docs/meteo/om/vystrahy/" target="_blank" rel="noopener noreferrer" className="monitoring-tile7" aria-label="Výstrahy — aktuálně platná varování">
                                        <div className="mon-icon7 mi-warn" aria-hidden="true">⚠️</div>
                                        <h3>Výstrahy</h3>
                                        <p>Aktuálně platná varování a stupně nebezpečí meteorologických jevů.</p>
                                        <span className="mon-arrow7" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                    <a href="https://www.chmi.cz/files/portal/docs/meteo/rad/" target="_blank" rel="noopener noreferrer" className="monitoring-tile7" aria-label="Radar a srážky">
                                        <div className="mon-icon7 mi-radar" aria-hidden="true">🌧️</div>
                                        <h3>Radar a srážky</h3>
                                        <p>Srážkoměrné stanice a radarové snímky v reálném čase.</p>
                                        <span className="mon-arrow7" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                    <a href="https://hydro.chmi.cz/hpps/" target="_blank" rel="noopener noreferrer" className="monitoring-tile7" aria-label="Předpovědní služba">
                                        <div className="mon-icon7 mi-forecast" aria-hidden="true">📊</div>
                                        <h3>Předpovědní služba</h3>
                                        <p>Hlásná a předpovědní povodňová služba — průtoky a stavy.</p>
                                        <span className="mon-arrow7" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                    <a href="https://www.chmi.cz/files/portal/docs/meteo/hlaseni/index.html" target="_blank" rel="noopener noreferrer" className="monitoring-tile7" aria-label="Přívalové povodně">
                                        <div className="mon-icon7 mi-flash" aria-hidden="true">⚡</div>
                                        <h3>Přívalové povodně</h3>
                                        <p>Indikátor rizik bleskových povodní a lokálních záplav.</p>
                                        <span className="mon-arrow7" aria-hidden="true">Zobrazit →</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ===== AKTUALITY ===== */}
                    <section className="section7" aria-labelledby="heading-aktuality7">
                        <div className="c7">
                            <h2 className="section7-title" id="heading-aktuality7">Aktuality</h2>
                            <p className="section7-subtitle">Novinky ze systému POVIS2, legislativní změny a aktuální povodňové události.</p>
                            <div className="news-grid7">
                                <article className="news-main7">
                                    <img src="/images/flood-main.png" alt="Letecký pohled na zaplavené české město s rozvodněnou řekou" />
                                    <div className="news-main-body7">
                                        <time className="news-date7" dateTime="2026-02-05">5. února 2026</time>
                                        <h3><a href="#" aria-label="Přečíst článek: Aktualizace záplavových území pro oblast Moravy">Aktualizace záplavových území pro oblast Moravy</a></h3>
                                        <p>Na základě nových hydrologických modelů byly přepracovány mapy záplavových území v povodí řeky Moravy. Změny se dotknou více než 120 obcí a budou promítnuty do územních plánů.</p>
                                    </div>
                                </article>
                                <div className="news-side7">
                                    <article className="news-side-card7">
                                        <img src="/images/flood-gauge.png" alt="Hlásný profil na rozvodněné řece" />
                                        <div className="news-side-body7">
                                            <time className="news-date7" dateTime="2026-02-01">1. února 2026</time>
                                            <h4><a href="#" aria-label="Přečíst článek: Nová metodika měření hlásných profilů">Nová metodika měření hlásných profilů</a></h4>
                                            <p>ČHMÚ zavádí modernizované postupy měření na více než 500 hlásných profilech v ČR.</p>
                                        </div>
                                    </article>
                                    <article className="news-side-card7">
                                        <img src="/images/flood-sandbags.png" alt="Záchranáři při protipovodňové ochraně" />
                                        <div className="news-side-body7">
                                            <time className="news-date7" dateTime="2026-01-28">28. ledna 2026</time>
                                            <h4><a href="#" aria-label="Přečíst článek: Školení pro obce — mimořádné situace a protipovodňová ochrana">Školení pro obce — mimořádné situace a protipovodňová ochrana</a></h4>
                                            <p>Série školení pro ORP a obce ke správě povodňových plánů a zvládání mimořádných situací.</p>
                                        </div>
                                    </article>
                                    <article className="news-side-card7">
                                        <img src="/images/flood-radar.png" alt="Meteorologická radarová stanice ČHMÚ" />
                                        <div className="news-side-body7">
                                            <time className="news-date7" dateTime="2026-01-15">15. ledna 2026</time>
                                            <h4><a href="#" aria-label="Přečíst článek: Upgrade radarové sítě ČHMÚ — přesnější předpovědi">Upgrade radarové sítě ČHMÚ — přesnější předpovědi</a></h4>
                                            <p>Nové radary zvyšují přesnost předpovědí přívalových srážek o 30 %.</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* ===== FOOTER ===== */}
                <footer className="site-footer7" role="contentinfo">
                    <div className="c7">
                        <div className="footer-grid7">
                            <div>
                                <div className="footer-brand7">
                                    <img
                                        src="/images/logo-mzp-cs.svg"
                                        alt="Ministerstvo životního prostředí"
                                        className="footer-mzp-logo7"
                                    />
                                </div>
                                <h4 className="footer-heading7">POVIS2</h4>
                                <p className="footer-text7">Povodňový informační systém České republiky provozovaný Ministerstvem životního prostředí.</p>
                            </div>
                            <div>
                                <h4 className="footer-heading7">Informace</h4>
                                <a href="#" className="footer-link7">Časté dotazy (FAQ)</a>
                                <a href="#" className="footer-link7">Provozní řád</a>
                                <a href="#" className="footer-link7">Ochrana osobních údajů</a>
                            </div>
                            <div>
                                <h4 className="footer-heading7">Kontakty</h4>
                                <a href="mailto:podpora@povis.cz" className="footer-link7">podpora@povis.cz</a>
                                <a href="tel:+420123456789" className="footer-link7">+420 123 456 789</a>
                                <a href="#" className="footer-link7">Kontaktní formulář</a>
                            </div>
                            <div>
                                <h4 className="footer-heading7">Provozovatel</h4>
                                <address className="footer-text7">
                                    Ministerstvo životního prostředí<br />
                                    Vršovická 1442/65<br />
                                    100 10 Praha 10
                                </address>
                            </div>
                        </div>
                        <div className="footer-bottom7">
                            <span>© 2026 Ministerstvo životního prostředí</span>
                            <span>Systém POVIS2 v2.2.0</span>
                        </div>
                    </div>
                </footer>
            </div>

            {/* ===== LOGIN MODAL ===== */}
            {loginOpen && (
                <div className="modal-overlay7" onClick={(e) => { if (e.target === e.currentTarget) setLoginOpen(false); }}>
                    <div className="modal-card7" role="dialog" aria-modal="true" aria-labelledby="modal-title7">
                        <div className="modal-header7">
                            <h2 id="modal-title7">Přihlášení</h2>
                            <button className="modal-close7" onClick={() => setLoginOpen(false)} aria-label="Zavřít" type="button">✕</button>
                        </div>
                        <div className="modal-body7" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '200px', textAlign: 'center', padding: '2rem' }}>
                            <p style={{ fontSize: '0.95rem', color: 'var(--p-gray-500)', lineHeight: 1.6 }}>Zde bude rozlišeno přihlášení pro veřejnost / obce / odborníky</p>
                            <button className="modal-btn-filled7" type="button" style={{ marginTop: '1.5rem', width: 'auto' }} onClick={() => { setIsLoggedIn(true); setUserRole('admin'); setLoginOpen(false); }}>Přihlásit se (demo)</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Example7;
