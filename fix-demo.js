// Fix script to enhance demo data
// Run this in browser console after opening index.html

// 1. Fix title encoding
document.title = "Jägermeister Field Force 101 - Demo";
document.querySelector('h1').textContent = "JÄGERMEISTER — Field Force 101";

// 2. Enhance login screen with visible credentials
const loginDiv = document.querySelector('#login > div');
if (loginDiv) {
  const h1 = loginDiv.querySelector('h1');
  const oldP = loginDiv.querySelector('p');

  // Create credentials box
  const credBox = document.createElement('div');
  credBox.style.cssText = 'background:linear-gradient(135deg, #e8f5e9, #c8e6c9);border:1px solid #1a5c2e;border-radius:8px;padding:10px;margin-bottom:16px';
  credBox.innerHTML = `
    <p style="font-size:12px;color:#1a5c2e;margin:0;font-weight:600">📱 Demo Credentials:</p>
    <p style="font-size:13px;color:#2e7d32;margin:4px 0 0">Email: <strong>demo@jager101.com</strong></p>
    <p style="font-size:13px;color:#2e7d32;margin:2px 0 0">Password: <strong>password</strong></p>
  `;

  // Insert after h1
  h1.after(credBox);

  // Update the description
  oldP.innerHTML = '✓ Works offline • ✓ Data saved locally • ✓ Mobile optimized';
  oldP.style.fontSize = '11px';
  oldP.style.color = '#999';
}

// 3. Enhanced venue data with more realistic variety
const enhancedVenues = [
  // Bali - Seminyak (Premium Area)
  { id:1,name:'Potato Head Beach Club',region:'bali',area:'Seminyak',category:'must-win-image',venueType:'club',shotPrice:125000,bottlePrice:2500000,avgMonthlySales:45,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
  { id:2,name:'La Favela',region:'bali',area:'Seminyak',category:'must-win-commercial',venueType:'bar',shotPrice:95000,bottlePrice:2200000,avgMonthlySales:38,contract:true,customBranding:false,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:false,promo:false,iceColdServe:true,staffTraining:true },
  { id:9,name:'Ku De Ta',region:'bali',area:'Seminyak',category:'must-win-image',venueType:'club',shotPrice:145000,bottlePrice:2800000,avgMonthlySales:52,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
  { id:10,name:'Mirror Bali',region:'bali',area:'Seminyak',category:'high-importance',venueType:'club',shotPrice:110000,bottlePrice:2300000,avgMonthlySales:28,contract:false,customBranding:false,lightVisibility:false,coolingDevice:true,standardPOSM:false,correctMenu:true,promo:false,iceColdServe:true,staffTraining:false },

  // Bali - Canggu (Trendy Area)
  { id:3,name:'Finns Beach Club',region:'bali',area:'Canggu',category:'must-win-image',venueType:'club',shotPrice:120000,bottlePrice:2450000,avgMonthlySales:42,contract:false,customBranding:false,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
  { id:4,name:'Old Mans',region:'bali',area:'Canggu',category:'must-win-commercial',venueType:'bar',shotPrice:85000,bottlePrice:1950000,avgMonthlySales:55,contract:true,customBranding:true,lightVisibility:false,coolingDevice:true,standardPOSM:false,correctMenu:false,promo:true,iceColdServe:false,staffTraining:false },
  { id:11,name:'The Lawn',region:'bali',area:'Canggu',category:'high-importance',venueType:'bar',shotPrice:90000,bottlePrice:2100000,avgMonthlySales:33,contract:true,customBranding:false,lightVisibility:true,coolingDevice:false,standardPOSM:true,correctMenu:false,promo:true,iceColdServe:false,staffTraining:true },
  { id:12,name:'Sand Bar',region:'bali',area:'Canggu',category:'high-importance',venueType:'bar',shotPrice:75000,bottlePrice:1750000,avgMonthlySales:18,contract:false,customBranding:false,lightVisibility:false,coolingDevice:false,standardPOSM:false,correctMenu:false,promo:false,iceColdServe:false,staffTraining:false },

  // Bali - Uluwatu (Luxury Area)
  { id:5,name:'Rock Bar',region:'bali',area:'Uluwatu',category:'must-win-image',venueType:'bar',shotPrice:135000,bottlePrice:2800000,avgMonthlySales:35,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
  { id:13,name:'Omnia Dayclub',region:'bali',area:'Uluwatu',category:'must-win-image',venueType:'club',shotPrice:150000,bottlePrice:3200000,avgMonthlySales:48,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
  { id:14,name:'Single Fin',region:'bali',area:'Uluwatu',category:'must-win-commercial',venueType:'bar',shotPrice:95000,bottlePrice:2000000,avgMonthlySales:41,contract:true,customBranding:false,lightVisibility:true,coolingDevice:true,standardPOSM:false,correctMenu:true,promo:false,iceColdServe:true,staffTraining:false },

  // West Java - Jakarta (Capital)
  { id:6,name:'Dragonfly',region:'west-java',area:'Jakarta',category:'must-win-image',venueType:'club',shotPrice:125000,bottlePrice:2600000,avgMonthlySales:65,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
  { id:15,name:'Immigrant',region:'west-java',area:'Jakarta',category:'must-win-commercial',venueType:'club',shotPrice:115000,bottlePrice:2400000,avgMonthlySales:58,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:false,promo:true,iceColdServe:true,staffTraining:true },
  { id:16,name:'Jenja',region:'west-java',area:'Jakarta',category:'must-win-image',venueType:'club',shotPrice:140000,bottlePrice:2900000,avgMonthlySales:71,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
  { id:17,name:'Fable',region:'west-java',area:'Jakarta',category:'high-importance',venueType:'bar',shotPrice:105000,bottlePrice:2200000,avgMonthlySales:29,contract:false,customBranding:false,lightVisibility:false,coolingDevice:true,standardPOSM:false,correctMenu:false,promo:false,iceColdServe:true,staffTraining:false },

  // West Java - Bandung
  { id:7,name:'Noah Barn',region:'west-java',area:'Bandung',category:'must-win-commercial',venueType:'bar',shotPrice:75000,bottlePrice:1800000,avgMonthlySales:22,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
  { id:18,name:'Shelter',region:'west-java',area:'Bandung',category:'high-importance',venueType:'club',shotPrice:70000,bottlePrice:1650000,avgMonthlySales:19,contract:true,customBranding:false,lightVisibility:true,coolingDevice:false,standardPOSM:true,correctMenu:false,promo:true,iceColdServe:false,staffTraining:true },
  { id:19,name:'Maja House',region:'west-java',area:'Bandung',category:'high-importance',venueType:'restaurant',shotPrice:65000,bottlePrice:1500000,avgMonthlySales:12,contract:false,customBranding:false,lightVisibility:false,coolingDevice:false,standardPOSM:false,correctMenu:false,promo:false,iceColdServe:false,staffTraining:false },

  // East Java - Surabaya
  { id:8,name:'Colors Pub',region:'east-java',area:'Surabaya',category:'must-win-commercial',venueType:'bar',shotPrice:85000,bottlePrice:2000000,avgMonthlySales:35,contract:true,customBranding:true,lightVisibility:true,coolingDevice:true,standardPOSM:true,correctMenu:true,promo:true,iceColdServe:true,staffTraining:true },
  { id:20,name:'Our Bar',region:'east-java',area:'Surabaya',category:'must-win-commercial',venueType:'bar',shotPrice:80000,bottlePrice:1900000,avgMonthlySales:31,contract:true,customBranding:false,lightVisibility:true,coolingDevice:true,standardPOSM:false,correctMenu:true,promo:false,iceColdServe:true,staffTraining:true },
  { id:21,name:'Calibar',region:'east-java',area:'Surabaya',category:'high-importance',venueType:'bar',shotPrice:75000,bottlePrice:1750000,avgMonthlySales:24,contract:false,customBranding:false,lightVisibility:false,coolingDevice:true,standardPOSM:false,correctMenu:false,promo:false,iceColdServe:false,staffTraining:false },

  // East Java - Malang
  { id:22,name:'Taman Indie',region:'east-java',area:'Malang',category:'high-importance',venueType:'restaurant',shotPrice:60000,bottlePrice:1400000,avgMonthlySales:15,contract:false,customBranding:false,lightVisibility:false,coolingDevice:false,standardPOSM:false,correctMenu:false,promo:false,iceColdServe:false,staffTraining:false },
  { id:23,name:'Bukit Delight',region:'east-java',area:'Malang',category:'high-importance',venueType:'restaurant',shotPrice:55000,bottlePrice:1300000,avgMonthlySales:8,contract:false,customBranding:false,lightVisibility:false,coolingDevice:false,standardPOSM:false,correctMenu:false,promo:false,iceColdServe:false,staffTraining:false }
];

// 4. Generate 30 days of visit history
function generateVisitHistory() {
  const visits = [];
  const users = ['John Smith', 'Sarah Johnson', 'Michael Chen', 'Lisa Anderson', 'David Wong'];
  const actions = [
    ['Staff training done', 'Standard POSM placed'],
    ['Contract signed', 'Custom branding installed'],
    ['Light visibility improved', 'Cooling device checked'],
    ['Menu updated', 'Promo materials distributed'],
    ['Ice-cold serve training', 'Perfect Outlet audit'],
    ['Competitor analysis', 'Price negotiation'],
    ['Stock count', 'Display optimization']
  ];

  let visitId = 1;
  const today = new Date();

  // Generate visits for last 30 days
  for (let d = 0; d < 30; d++) {
    const date = new Date(today);
    date.setDate(date.getDate() - d);
    const dateStr = date.toISOString().split('T')[0];

    // 2-4 visits per day
    const visitsPerDay = Math.floor(Math.random() * 3) + 2;

    for (let v = 0; v < visitsPerDay; v++) {
      const venueId = Math.floor(Math.random() * 23) + 1;
      const userIdx = Math.floor(Math.random() * users.length);
      const actionIdx = Math.floor(Math.random() * actions.length);

      visits.push({
        id: visitId++,
        venueId: venueId,
        date: dateStr,
        dateObj: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12),
        user: users[userIdx],
        actions: actions[actionIdx],
        notes: Math.random() > 0.5 ? 'Follow-up required next week.' : 'All objectives met.'
      });
    }
  }

  return visits;
}

// Save enhanced data to localStorage
const enhancedVisits = generateVisitHistory();

// Update localStorage
localStorage.setItem('j101_state', JSON.stringify({
  venues: enhancedVenues,
  visits: enhancedVisits
}));

console.log('✅ Demo enhancements applied!');
console.log('📊 Stats:');
console.log(`- ${enhancedVenues.length} venues loaded`);
console.log(`- ${enhancedVisits.length} visits generated`);
console.log(`- ${enhancedVenues.filter(v => v.contract).length} venues with contracts`);
console.log(`- ${enhancedVenues.filter(v => v.lightVisibility && v.coolingDevice && v.standardPOSM && v.correctMenu && v.promo && v.iceColdServe && v.staffTraining).length} perfect outlets`);
console.log('\n🔄 Refresh the page to see the changes!');