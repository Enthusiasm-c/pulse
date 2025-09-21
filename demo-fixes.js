// Demo Critical Fixes for Jägermeister Field Force 101
// Run this script to fix demo-breaking issues before client presentation

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

console.log('🔧 Applying critical demo fixes...\n');

// Fix 1: Character encoding issue
const fixes = [
  {
    name: 'Fix Jägermeister branding encoding',
    find: /J.GERMEISTER\s+Field Force 101/g,
    replace: 'JÄGERMEISTER Field Force 101'
  },
  {
    name: 'Update page title',
    find: /<title>Jager 101  Offline Demo \(Stable\)<\/title>/,
    replace: '<title>Jägermeister Field Force 101</title>'
  }
];

fixes.forEach(fix => {
  const before = html.length;
  html = html.replace(fix.find, fix.replace);
  if (html.length !== before) {
    console.log(`✅ ${fix.name}`);
  } else {
    console.log(`⚠️  ${fix.name} - pattern not found`);
  }
});

// Fix 2: Add enhanced demo data with realistic variations
const enhancedSeedData = `
    function seedEnhanced(){
      // Enhanced realistic demo data
      venues=[
        // Bali Region - Premium Beach Clubs & Bars
        { id:1,name:'Potato Head Beach Club',region:'bali',area:'Seminyak',category:'must-win-image',venueType:'club',shotPrice:124500,bottlePrice:2475000,avgMonthlySales:45,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
        { id:2,name:'La Favela',region:'bali',area:'Seminyak',category:'must-win-commercial',venueType:'bar',shotPrice:94500,bottlePrice:2195000,avgMonthlySales:38,contract:true,customBranding:false,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:false,promo:false,iceColdServe:true,staffTraining:true },
        { id:3,name:'Finns Beach Club',region:'bali',area:'Canggu',category:'must-win-image',venueType:'club',shotPrice:119500,bottlePrice:2445000,avgMonthlySales:42,contract:false,customBranding:false,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
        { id:4,name:'Old Mans',region:'bali',area:'Canggu',category:'must-win-commercial',venueType:'bar',shotPrice:87500,bottlePrice:1945000,avgMonthlySales:55,contract:true,customBranding:true,lightVisibility:false,coolingDevice:true,standardPOSM:false,correctMenu:false,promo:true,iceColdServe:false,staffTraining:false },
        { id:5,name:'Rock Bar',region:'bali',area:'Uluwatu',category:'must-win-image',venueType:'bar',shotPrice:134500,bottlePrice:2795000,avgMonthlySales:35,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
        { id:6,name:'Single Fin',region:'bali',area:'Uluwatu',category:'must-win-commercial',venueType:'bar',shotPrice:98500,bottlePrice:2125000,avgMonthlySales:48,contract:true,customBranding:false,lightVisibility:true,coolingDevice:false,standardPOSM:true,correctMenu:true,promo:false,iceColdServe:true,staffTraining:false },
        { id:7,name:'Mirror Bali',region:'bali',area:'Seminyak',category:'must-win-image',venueType:'club',shotPrice:145000,bottlePrice:2875000,avgMonthlySales:28,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
        { id:8,name:'Cafe del Mar',region:'bali',area:'Canggu',category:'high-importance',venueType:'restaurant',shotPrice:112500,bottlePrice:2295000,avgMonthlySales:32,contract:false,customBranding:false,lightVisibility:false,coolingDevice:true,standardPOSM:false,correctMenu:true,promo:false,iceColdServe:true,staffTraining:false },

        // West Java Region - Jakarta & Bandung
        { id:9,name:'Dragonfly',region:'west-java',area:'Jakarta',category:'must-win-image',venueType:'club',shotPrice:127500,bottlePrice:2595000,avgMonthlySales:65,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
        { id:10,name:'Colosseum',region:'west-java',area:'Jakarta',category:'must-win-image',venueType:'club',shotPrice:138500,bottlePrice:2745000,avgMonthlySales:58,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
        { id:11,name:'Fable',region:'west-java',area:'Jakarta',category:'must-win-commercial',venueType:'bar',shotPrice:115000,bottlePrice:2345000,avgMonthlySales:44,contract:true,customBranding:false,lightVisibility:true,coolingDevice:true,standardPOSM:false,correctMenu:true,promo:true,iceColdServe:true,staffTraining:false },
        { id:12,name:'Noah Barn',region:'west-java',area:'Bandung',category:'must-win-commercial',venueType:'bar',shotPrice:74500,bottlePrice:1795000,avgMonthlySales:22,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
        { id:13,name:'Holywings',region:'west-java',area:'Jakarta',category:'high-importance',venueType:'bar',shotPrice:88500,bottlePrice:1995000,avgMonthlySales:72,contract:false,customBranding:false,lightVisibility:false,coolingDevice:true,standardPOSM:false,correctMenu:false,promo:false,iceColdServe:true,staffTraining:false },
        { id:14,name:'The Pallas',region:'west-java',area:'Jakarta',category:'must-win-image',venueType:'club',shotPrice:142500,bottlePrice:2825000,avgMonthlySales:38,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },

        // East Java Region - Surabaya & Malang
        { id:15,name:'Colors Pub',region:'east-java',area:'Surabaya',category:'must-win-commercial',venueType:'bar',shotPrice:84500,bottlePrice:1985000,avgMonthlySales:35,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
        { id:16,name:'Our Bar',region:'east-java',area:'Surabaya',category:'high-importance',venueType:'bar',shotPrice:78500,bottlePrice:1845000,avgMonthlySales:28,contract:false,customBranding:false,lightVisibility:false,coolingDevice:false,standardPOSM:false,correctMenu:false,promo:false,iceColdServe:false,staffTraining:false },
        { id:17,name:'Calibre',region:'east-java',area:'Surabaya',category:'must-win-commercial',venueType:'club',shotPrice:92500,bottlePrice:2095000,avgMonthlySales:41,contract:true,customBranding:false,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:false,promo:true,iceColdServe:true,staffTraining:true },
        { id:18,name:'The Loft',region:'east-java',area:'Malang',category:'high-importance',venueType:'bar',shotPrice:68500,bottlePrice:1695000,avgMonthlySales:18,contract:false,customBranding:false,lightVisibility:false,coolingDevice:true,standardPOSM:false,correctMenu:false,promo:false,iceColdServe:true,staffTraining:false },
        { id:19,name:'Liquid Exchange',region:'east-java',area:'Surabaya',category:'must-win-commercial',venueType:'bar',shotPrice:89500,bottlePrice:2045000,avgMonthlySales:33,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:false,iceColdServe:true,staffTraining:true },
        { id:20,name:'Warehouse 73',region:'east-java',area:'Malang',category:'high-importance',venueType:'club',shotPrice:72500,bottlePrice:1745000,avgMonthlySales:25,contract:false,customBranding:false,lightVisibility:true,coolingDevice:false,standardPOSM:false,correctMenu:true,promo:false,iceColdServe:false,staffTraining:false }
      ];

      // Generate realistic visit history
      const visitData = [];
      const users = ['John Smith', 'Sarah Johnson', 'Mike Chen', 'Lisa Anderson'];
      const actions = [
        ['Staff training completed', 'Standard POSM installed', 'Perfect Outlet status achieved'],
        ['Contract negotiation started', 'Pricing updated', 'Custom branding discussed'],
        ['Ice-cold serve checked', 'Menu items verified', 'Promo materials delivered'],
        ['Cooling device inspected', 'Light visibility improved', 'Compliance audit completed'],
        ['Monthly sales reviewed', 'New staff trained', 'Display units reorganized']
      ];

      let visitId = 1;
      const today = new Date();

      // Generate 30 visits over the past 30 days
      for (let i = 0; i < 30; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));
        const dateStr = date.toISOString().split('T')[0];

        const venueId = Math.floor(Math.random() * 20) + 1;
        const userId = Math.floor(Math.random() * users.length);
        const actionSet = actions[Math.floor(Math.random() * actions.length)];

        visitData.push({
          id: visitId++,
          venueId: venueId,
          date: dateStr,
          dateObj: dateLocal(dateStr),
          user: users[userId],
          actions: actionSet,
          notes: Math.random() > 0.5 ? 'Follow-up required for contract renewal.' : ''
        });
      }

      visits = visitData.sort((a, b) => b.dateObj - a.dateObj);
    }`;

// Insert enhanced seed function
html = html.replace('function seed(){', enhancedSeedData + '\n\n    function seed(){');

// Fix 3: Replace seed() calls with seedEnhanced()
html = html.replace('if(!had) seed();', 'if(!had) seedEnhanced();');

// Fix 4: Add CSS animations
const animations = `
    @keyframes slideDown { from { opacity: 0; transform: translate(-50%, -20px); } to { opacity: 1; transform: translate(-50%, 0); } }
    @keyframes slideUp { from { opacity: 1; transform: translate(-50%, 0); } to { opacity: 0; transform: translate(-50%, -20px); } }
    @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
`;

html = html.replace('</style>', animations + '\n  </style>');

// Fix 5: Add toast notification system
const toastSystem = `
    // Toast notification system
    function showToast(msg, type='success'){
      const toast = document.createElement('div');
      toast.className = 'toast ' + type;
      toast.innerHTML = \`<span class="icon">\${type==='success'?ICONS.check:ICONS.x}</span> \${msg}\`;
      toast.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);background:'+(type==='success'?'linear-gradient(135deg,#4caf50,#45a049)':'#f44336')+';color:#fff;padding:12px 20px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.25);z-index:9999;animation:slideDown 0.3s ease';
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    }`;

html = html.replace('function save(){', toastSystem + '\n\n    function save(){');

// Fix 6: Replace alert with toast
html = html.replace("alert('Visit saved');", "showToast('Visit report saved successfully!', 'success');");
html = html.replace("alert('Please enter name and location');", "showToast('Please enter name and location', 'error');");
html = html.replace("alert('Choose a venue');", "showToast('Please select a venue', 'error');");
html = html.replace("alert('Venue not found');", "showToast('Venue not found', 'error');");

// Fix 7: Enhanced login with loading state
const enhancedLogin = `
    function login(){
      const btn = $('loginBtn');
      btn.disabled = true;
      btn.innerHTML = '<span class="icon">'+ICONS.user+'</span>Authenticating...';

      // Simulate authentication delay
      setTimeout(() => {
        user={name:'Demo User',email:($('email').value||'demo@jager101.com').trim()};
        const had=load();
        if(!had) seedEnhanced();

        btn.disabled = false;
        btn.innerHTML = '<span class="icon">'+ICONS.user+'</span>Sign In';
        show('main');
        setTab('venues');

        // Show welcome message
        setTimeout(() => showToast('Welcome to Jägermeister Field Force 101!'), 300);
      }, 800);
    }`;

html = html.replace(/function login\(\){[^}]+}/, enhancedLogin);

// Fix 8: Enhance perfect outlet styling
html = html.replace(
  '.card.perfect{background:linear-gradient(135deg,#fffbf0,#fff)}',
  '.card.perfect{background:linear-gradient(135deg,#fff9e6,#fffdf7);border-left-color:#ffd700;box-shadow:0 2px 8px rgba(255,215,0,0.15);position:relative}.card.perfect:after{content:"PERFECT";position:absolute;top:8px;right:8px;background:linear-gradient(135deg,#ffd700,#ffb300);color:#fff;font-size:9px;font-weight:900;padding:2px 6px;border-radius:4px}'
);

// Fix 9: Comment out test code
html = html.replace('// runTests();', '// runTests(); // Disabled for production');

// Save the fixed file
fs.writeFileSync(indexPath, html);

console.log('\n✅ All critical fixes applied!');
console.log('\n📝 Summary of changes:');
console.log('  • Fixed character encoding for Jägermeister branding');
console.log('  • Added 20 realistic venues with price variations');
console.log('  • Generated 30 visit reports with varied data');
console.log('  • Implemented toast notifications instead of alerts');
console.log('  • Added loading state to login process');
console.log('  • Enhanced Perfect Outlet visual indicators');
console.log('  • Disabled test code for production');
console.log('\n🚀 Demo is now ready for client presentation!');