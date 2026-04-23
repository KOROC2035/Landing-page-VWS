import React from 'react';
import { 
  MessageCircle, Utensils, Hotel, ShoppingCart, 
  ChevronRight, Zap, CheckCircle, TrendingUp, 
  ShieldCheck, Clock, Star, Smartphone, Database, Cpu, ArrowRight 
} from 'lucide-react';

function App() {
  const phoneNumber = "2250719366007"; 
  const defaultMessage = "Bonjour Vision Web Studio, je souhaite obtenir un audit gratuit pour la digitalisation de mon activité.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Navbar mise à jour avec le logo */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          {/* Utilisation de l'image du logo */}
          <img 
            src="/logo.png" 
            alt="Logo Vision Web Studio" 
            className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
          />
          <span className="text-xl lg:text-2xl font-bold text-slate-800 tracking-tight">
            Vision Web Studio
          </span>
        </div>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Parlons de votre projet
        </a>
      </nav>

      {/* 2. Hero Section avec Image de fond (Visible sans scroller) */}
      <section className="relative flex items-center min-h-[calc(100vh-80px)] overflow-hidden text-white">
        
        {/* L'image de fond (Tu pourras remplacer l'URL par une photo de ton choix) */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            // Image d'illustration (commerce/tech/moderne)
            backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Le filtre assombrissant (Overlay) pour garantir la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-10 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Colonne Gauche : Le Texte Ajusté */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 mb-4 lg:mb-6 px-4 py-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full text-sm font-semibold text-blue-400 shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Spécialiste Web & Intelligence Artificielle
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4 lg:mb-6 leading-[1.15]">
                Votre commerce mérite une <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">technologie de pointe</span>.
              </h1>
              
              <p className="text-base lg:text-lg text-slate-300 mb-6 lg:mb-8 max-w-xl leading-relaxed">
                De la prise de commande ultra-rapide à l'automatisation de vos réservations. Nous construisons les outils sur mesure qui font exploser le chiffre d'affaires des restaurants, hôtels et supermarchés.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-slate-950 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-full font-extrabold transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                >
                  <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />
                  Demander un Audit
                </a>
                
                {/* Preuve sociale compacte */}
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-slate-300">JD</div>
                    <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-slate-200">MR</div>
                    <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-white"><Star className="w-3 h-3 fill-current" /></div>
                  </div>
                  <div className="leading-tight text-xs lg:text-sm">
                    <div className="font-bold text-white flex items-center gap-1">5.0 <Star className="w-3 h-3 text-yellow-400 fill-current"/></div>
                    Recommandé par les pros
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Droite : Le Mockup Visuel (Légèrement réduit pour s'adapter à l'écran) */}
            <div className="relative hidden lg:block h-[350px] xl:h-[400px] w-full">
              {/* Carte Principale : Dashboard */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-sm xl:max-w-md bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden z-20 transform hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-slate-950/80 px-4 py-2.5 border-b border-slate-800 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono ml-4">admin.vision-web-studio.ci</div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-base">Tableau de bord</h3>
                    <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded">En direct</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                      <div className="text-xs text-slate-400 mb-1">Commandes du jour</div>
                      <div className="text-xl font-bold text-white flex items-end gap-2">
                        142 <span className="text-xs text-green-400 font-normal mb-0.5">+24%</span>
                      </div>
                    </div>
                    <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                      <div className="text-xs text-slate-400 mb-1">Chiffre d'affaires</div>
                      <div className="text-xl font-bold text-white flex items-end gap-2">
                        845,000 F <span className="text-xs text-green-400 font-normal mb-0.5">+12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Flottante : Notification IA */}
              <div className="absolute -left-6 bottom-10 bg-slate-800/95 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-2xl z-30 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Agent IA Actif</div>
                    <div className="text-[10px] text-slate-300">2 réservations traitées auto.</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Problème / Agitation (Design plus élégant et percutant) */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Vos défis actuels vous coûtent des clients</h2>
            <p className="text-lg text-slate-600">Gérer un commerce physique est complexe. Vos outils digitaux ne devraient pas l'être.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 hover:border-red-300 transition-colors">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Perte de temps</h3>
              <p className="text-slate-600">Prise de commandes fastidieuse au téléphone et gestion manuelle des réservations qui épuisent vos équipes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 hover:border-orange-300 transition-colors">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Manque à gagner</h3>
              <p className="text-slate-600">Une visibilité en ligne obsolète qui laisse vos concurrents capter la clientèle locale et les touristes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-slate-400 transition-colors">
              <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Dépendance toxique</h3>
              <p className="text-slate-600">Vous sacrifiez une marge énorme en payant des commissions abusives aux plateformes de livraison ou de réservation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solutions par Cible (Cartes Premium) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
              Des écosystèmes digitaux <br className="hidden md:block" /> pensés pour <span className="text-blue-600">votre métier</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Nous ne créons pas de simples sites vitrines, nous développons des machines de vente automatisées.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Restaurant */}
            <div className="relative group rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Restaurants</h3>
              <ul className="space-y-4 text-slate-600 mb-8">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> <span>Prise de commande 100% sans commission tierce</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> <span>Menus digitaux interactifs par QR Code</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> <span>Automatisation des réservations de tables</span></li>
              </ul>
            </div>

            {/* Hotel */}
            <div className="relative group rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Hotel className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Hôtels & Séjours</h3>
              <ul className="space-y-4 text-slate-600 mb-8">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> <span>Moteur de réservation direct intégré au site</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> <span>Expérience client fluide et haut de gamme</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> <span>Gestion simplifiée des disponibilités</span></li>
              </ul>
            </div>

            {/* Supermarché */}
            <div className="relative group rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-8">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Supermarchés</h3>
              <ul className="space-y-4 text-slate-600 mb-8">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> <span>Plateforme E-commerce de proximité robuste</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> <span>Système de Click & Collect ultra-rapide</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> <span>Synchronisation et gestion intelligente des stocks</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. L'Avantage Technologique (Mode Sombre pour souligner l'expertise technique) */}
      <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
        {/* Cercles de fond pour le style */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-800 rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-700 rounded-full opacity-50 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">Notre ADN Technique</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">La puissance des grands, <br/>accessible aux PME.</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Une belle vitrine ne suffit pas. Vos clients exigent de la rapidité, et votre entreprise nécessite une fiabilité à toute épreuve. Nous construisons vos solutions sur les technologies les plus modernes du marché.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-900/50 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Interfaces Ultra-Rapides</h4>
                  <p className="text-slate-400 text-sm">Développement frontend optimisé (React & Vite) pour des chargements instantanés sur mobile.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-900/50 border border-green-500/30 flex items-center justify-center shrink-0">
                  <Database className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Backends Robustes</h4>
                  <p className="text-slate-400 text-sm">Architectures solides (Python & FastAPI) capables de gérer vos bases de données sans faille lors des pics de commandes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-900/50 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Intelligence Artificielle</h4>
                  <p className="text-slate-400 text-sm">Intégration d'agents IA (LangChain, LLMs) pour automatiser votre relation client et vos processus internes.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bloc de statistiques / Réassurance */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl relative">
            <div className="absolute -top-5 -right-5 bg-blue-600 w-24 h-24 rounded-full blur-2xl opacity-40"></div>
            <h3 className="text-2xl font-bold mb-8 text-center">L'impact d'une technologie optimisée</h3>
            <div className="space-y-6">
              <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-700/50 text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">x3</div>
                <div className="text-slate-300 font-medium">Conversions par rapport à un site lent</div>
              </div>
              <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-700/50 text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-2">0%</div>
                <div className="text-slate-300 font-medium">De commissions versées à des tiers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Processus (Timeline visuelle) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Un accompagnement clair de A à Z</h2>
            <p className="text-lg text-slate-600">Pas de jargon, pas de surprises. Voici comment nous collaborons.</p>
          </div>
          
          <div className="relative">
            {/* Ligne connectrice (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto -mt-14 mb-6 border-4 border-slate-50 shadow-lg">1</div>
                <h3 className="text-xl font-bold mb-3">L'Audit Gratuit</h3>
                <p className="text-slate-600 text-sm">On analyse vos processus actuels lors d'un appel rapide pour identifier précisément vos pertes de revenus.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto -mt-14 mb-6 border-4 border-slate-50 shadow-lg">2</div>
                <h3 className="text-xl font-bold mb-3">Développement Sur Mesure</h3>
                <p className="text-slate-600 text-sm">Nous créons votre outil en vous tenant informé à chaque étape. Vous validez le design avant le code.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto -mt-14 mb-6 border-4 border-slate-50 shadow-lg">3</div>
                <h3 className="text-xl font-bold mb-3">Déploiement & Formation</h3>
                <p className="text-slate-600 text-sm">Mise en ligne de vos plateformes et formation de vos équipes pour une autonomie totale et immédiate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer CTA (Design Impactant) */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24 px-6 text-center relative overflow-hidden">
        {/* Motifs de fond */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Prêt à dominer votre marché local ?</h2>
          <p className="text-slate-300 mb-10 text-xl max-w-2xl mx-auto">
            Arrêtez de laisser la technologie freiner votre croissance. Laissez Vision Web Studio construire les outils de votre succès.
          </p>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-slate-950 px-8 py-5 rounded-full font-extrabold text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.3)] w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            Lancer mon projet sur WhatsApp
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <p className="mt-6 text-sm text-slate-400 font-medium">Réponse garantie dans les 15 minutes.</p>
        </div>
      </section>
      
      {/* 8. Footer Clean */}
      <footer className="bg-slate-950 text-slate-500 py-10 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-6 h-6 opacity-50 grayscale" />
            <span className="font-semibold text-slate-400">Vision Web Studio</span>
          </div>
          <p className="text-sm">© 2026 Vision Web Studio. Abidjan, Côte d'Ivoire. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;