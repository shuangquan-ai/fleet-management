// ─── MOCK DATA ─────────────────────────────────────────────────────────────
const vehicles = [
  { id:'V001', plate:'SGX1234A', driver:'Ahmad Bin Hassan', status:'online', speed:42, lat:1.3521, lng:103.8198, city:'Singapore', country:'Singapore', flag:'🇸🇬', fuel:65, battery:87, signal:4, mileage:12453, model:'Toyota Vios 2022', color:'Silver', type:'petrol', immobilized:false },
  { id:'V002', plate:'WKL7823B', driver:'Rajan Pillai', status:'online', speed:67, lat:3.1390, lng:101.6869, city:'Kuala Lumpur', country:'Malaysia', flag:'🇲🇾', fuel:48, battery:92, signal:4, mileage:23100, model:'Honda City 2021', color:'White', type:'petrol', immobilized:false },
  { id:'V003', plate:'BJB3921C', driver:'Budi Santoso', status:'online', speed:28, lat:-6.2088, lng:106.8456, city:'Jakarta', country:'Indonesia', flag:'🇮🇩', fuel:62, soc:45, battery:76, signal:3, mileage:8760, model:'Toyota Corolla Cross Hybrid', color:'Black', type:'hybrid', immobilized:false },
  { id:'V004', plate:'BKK4421D', driver:'Somchai Wongsri', status:'idle', speed:0, lat:13.7563, lng:100.5018, city:'Bangkok', country:'Thailand', flag:'🇹🇭', fuel:31, battery:65, signal:2, mileage:31200, model:'Honda Jazz 2020', color:'Blue', type:'petrol', immobilized:false },
  { id:'V005', plate:'HCM8812E', driver:'Nguyen Van An', status:'offline', speed:0, lat:10.8231, lng:106.6297, city:'Ho Chi Minh', country:'Vietnam', flag:'🇻🇳', soc:23, range:61, charging:false, battery:12, signal:0, mileage:17800, model:'VinFast VF8 2023', color:'Grey', type:'ev', immobilized:true, immobReason:'Overdue maintenance', immobBy:'Fleet Manager', immobTime:'Today 08:30 AM' },
  { id:'V006', plate:'MNL2233G', driver:'Juan dela Cruz', status:'online', speed:35, lat:14.5995, lng:120.9842, city:'Manila', country:'Philippines', flag:'🇵🇭', fuel:70, battery:88, signal:3, mileage:9300, model:'Toyota Wigo 2023', color:'Red', type:'petrol', immobilized:false },
  { id:'V007', plate:'SGX5512F', driver:'Li Wei Lim', status:'idle', speed:0, lat:1.2900, lng:103.8500, city:'Singapore', country:'Singapore', flag:'🇸🇬', soc:11, range:28, charging:true, chargeEta:'~1h 20m', battery:91, signal:4, mileage:20100, model:'BYD Atto 3 2023', color:'White', type:'ev', immobilized:false },
  { id:'V008', plate:'PNP9988H', driver:'Prakash Kumar', status:'online', speed:22, lat:1.3800, lng:103.7600, city:'Singapore', country:'Singapore', flag:'🇸🇬', fuel:77, battery:82, signal:4, mileage:5400, model:'Mitsubishi Attrage 2022', color:'Silver', type:'petrol', immobilized:false },
];

// ─── STREAM CHANNELS DATA ───────────────────────────────────────────────────
const streamChannels = [
  { vid:'V001', plate:'SGX1234A', driver:'Ahmad Bin Hassan', city:'Singapore', country:'Singapore', flag:'🇸🇬', speed:42, vstatus:'online', ch:'front',  chName:'Front Camera', live:true,  signal:4, fps:30, res:'1080p', camId:'KDC-SG-001-F' },
  { vid:'V001', plate:'SGX1234A', driver:'Ahmad Bin Hassan', city:'Singapore', country:'Singapore', flag:'🇸🇬', speed:42, vstatus:'online', ch:'rear',   chName:'Rear Camera',  live:true,  signal:4, fps:30, res:'1080p', camId:'KDC-SG-001-R' },
  { vid:'V001', plate:'SGX1234A', driver:'Ahmad Bin Hassan', city:'Singapore', country:'Singapore', flag:'🇸🇬', speed:42, vstatus:'online', ch:'cabin',  chName:'Cabin Camera', live:false, signal:0, fps:0,  res:'720p',  camId:'KDC-SG-001-C' },
  { vid:'V002', plate:'WKL7823B', driver:'Rajan Pillai',     city:'Kuala Lumpur', country:'Malaysia',     flag:'🇲🇾', speed:67, vstatus:'online', ch:'front',  chName:'Front Camera', live:true,  signal:4, fps:30, res:'1080p', camId:'KDC-MY-001-F' },
  { vid:'V002', plate:'WKL7823B', driver:'Rajan Pillai',     city:'Kuala Lumpur', country:'Malaysia',     flag:'🇲🇾', speed:67, vstatus:'online', ch:'rear',   chName:'Rear Camera',  live:true,  signal:3, fps:25, res:'720p',  camId:'KDC-MY-001-R' },
  { vid:'V003', plate:'BJB3921C', driver:'Budi Santoso',     city:'Jakarta',      country:'Indonesia',    flag:'🇮🇩', speed:28, vstatus:'online', ch:'front',  chName:'Front Camera', live:true,  signal:3, fps:30, res:'1080p', camId:'KDC-ID-001-F' },
  { vid:'V003', plate:'BJB3921C', driver:'Budi Santoso',     city:'Jakarta',      country:'Indonesia',    flag:'🇮🇩', speed:28, vstatus:'online', ch:'rear',   chName:'Rear Camera',  live:true,  signal:3, fps:25, res:'720p',  camId:'KDC-ID-001-R' },
  { vid:'V003', plate:'BJB3921C', driver:'Budi Santoso',     city:'Jakarta',      country:'Indonesia',    flag:'🇮🇩', speed:28, vstatus:'online', ch:'cabin',  chName:'Cabin Camera', live:true,  signal:2, fps:15, res:'480p',  camId:'KDC-ID-001-C' },
  { vid:'V004', plate:'BKK4421D', driver:'Somchai Wongsri',  city:'Bangkok',      country:'Thailand',     flag:'🇹🇭', speed:0,  vstatus:'idle',   ch:'front',  chName:'Front Camera', live:true,  signal:2, fps:15, res:'720p',  camId:'KDC-TH-001-F' },
  { vid:'V004', plate:'BKK4421D', driver:'Somchai Wongsri',  city:'Bangkok',      country:'Thailand',     flag:'🇹🇭', speed:0,  vstatus:'idle',   ch:'rear',   chName:'Rear Camera',  live:false, signal:1, fps:0,  res:'720p',  camId:'KDC-TH-001-R' },
  { vid:'V005', plate:'HCM8812E', driver:'Nguyen Van An',    city:'Ho Chi Minh',  country:'Vietnam',      flag:'🇻🇳', speed:0,  vstatus:'offline', ch:'front', chName:'Front Camera', live:false, signal:0, fps:0,  res:'1080p', camId:'KDC-VN-001-F' },
  { vid:'V005', plate:'HCM8812E', driver:'Nguyen Van An',    city:'Ho Chi Minh',  country:'Vietnam',      flag:'🇻🇳', speed:0,  vstatus:'offline', ch:'rear',  chName:'Rear Camera',  live:false, signal:0, fps:0,  res:'720p',  camId:'KDC-VN-001-R' },
  { vid:'V006', plate:'MNL2233G', driver:'Juan dela Cruz',   city:'Manila',       country:'Philippines',  flag:'🇵🇭', speed:35, vstatus:'online', ch:'front',  chName:'Front Camera', live:true,  signal:3, fps:30, res:'1080p', camId:'KDC-PH-001-F' },
  { vid:'V006', plate:'MNL2233G', driver:'Juan dela Cruz',   city:'Manila',       country:'Philippines',  flag:'🇵🇭', speed:35, vstatus:'online', ch:'cabin',  chName:'Cabin Camera', live:true,  signal:3, fps:25, res:'720p',  camId:'KDC-PH-001-C' },
  { vid:'V007', plate:'SGX5512F', driver:'Li Wei Lim',       city:'Singapore',    country:'Singapore',    flag:'🇸🇬', speed:0,  vstatus:'idle',   ch:'front',  chName:'Front Camera', live:true,  signal:4, fps:30, res:'1080p', camId:'KDC-SG-002-F' },
  { vid:'V007', plate:'SGX5512F', driver:'Li Wei Lim',       city:'Singapore',    country:'Singapore',    flag:'🇸🇬', speed:0,  vstatus:'idle',   ch:'rear',   chName:'Rear Camera',  live:true,  signal:4, fps:30, res:'1080p', camId:'KDC-SG-002-R' },
  { vid:'V008', plate:'PNP9988H', driver:'Prakash Kumar',    city:'Singapore',    country:'Singapore',    flag:'🇸🇬', speed:22, vstatus:'online', ch:'front',  chName:'Front Camera', live:true,  signal:4, fps:30, res:'1080p', camId:'KDC-SG-003-F' },
  { vid:'V008', plate:'PNP9988H', driver:'Prakash Kumar',    city:'Singapore',    country:'Singapore',    flag:'🇸🇬', speed:22, vstatus:'online', ch:'rear',   chName:'Rear Camera',  live:true,  signal:4, fps:25, res:'720p',  camId:'KDC-SG-003-R' },
  { vid:'V008', plate:'PNP9988H', driver:'Prakash Kumar',    city:'Singapore',    country:'Singapore',    flag:'🇸🇬', speed:22, vstatus:'online', ch:'cabin',  chName:'Cabin Camera', live:false, signal:1, fps:0,  res:'480p',  camId:'KDC-SG-003-C' },
];

// ─── FLEET-WIDE STATS ──────────────────────────────────────────────────────
const fleetStats = {
  total:        68900,
  ice:          42518,
  ev:           17892,
  hybrid:        8490,
  online:       51240,
  idle:         12380,
  charging:      1824,
  lowBattery:     347,
  offline:       2814,
  immobilized:    423,
  pendingCmd:      38,
  cities:          24,
  countries:        6,
  iotTotal:    206700,
  iotOnline:   198420,
  iotOffline:    8280,
  iotFwOK:      61240,
  harshBraking:  1284,
  speeding:       847,
  geofenceEvts:  2156,
  sos:             12,
  telTotal:      4299,
  cameras:      165360,
  camsLive:     127840,
  camsOffline:   37520,
  camsVehicles:  55120,
  alerts:          47,
  telemBadge:      12,
  immobBadge:      23,
};

// helper — format large numbers with commas
const fn = n => n.toLocaleString();

const telEvents = [
  { icon:'🛑', type:'Harsh Braking', detail:'Deceleration: -0.8G on PIE Expressway', time:'09:14 AM', vehicle:'SGX1234A', severity:'high', color:'red' },
  { icon:'⚡', type:'Speeding Alert', detail:'Speed: 92 km/h (limit: 80 km/h)', time:'08:52 AM', vehicle:'WKL7823B', severity:'medium', color:'yellow' },
  { icon:'🏁', type:'Geofence Exit', detail:'Left Zone A — Industrial District', time:'08:35 AM', vehicle:'BJB3921C', severity:'low', color:'blue' },
  { icon:'🚨', type:'SOS Triggered', detail:'Driver pressed SOS button', time:'08:10 AM', vehicle:'HCM8812E', severity:'high', color:'red' },
  { icon:'⚡', type:'Rapid Acceleration', detail:'Acceleration: +0.6G from standstill', time:'07:55 AM', vehicle:'SGX1234A', severity:'medium', color:'yellow' },
  { icon:'🏁', type:'Geofence Enter', detail:'Arrived at Depot Zone B', time:'07:30 AM', vehicle:'BKK4421D', severity:'low', color:'green' },
  { icon:'🛑', type:'Harsh Braking', detail:'Deceleration: -0.7G at junction', time:'07:10 AM', vehicle:'MNL2233G', severity:'high', color:'red' },
  { icon:'⚡', type:'Speeding Alert', detail:'Speed: 98 km/h (limit: 80 km/h)', time:'06:45 AM', vehicle:'SGX5512F', severity:'high', color:'yellow' },
];

// ─── IOT DEVICE CATALOGUE ─────────────────────────────────────────────────
const iotCatalogue = [
  {
    type: 'kartadongle',
    name: 'KartaDongle',
    icon: '🔌',
    color: 'blue',
    desc: 'OBD-II telematics · GPS tracking · Engine data · LTE connectivity',
    fwBase: 'v3.1',
    idPrefix: 'KDG',
    capabilities: ['OBD-II', 'GPS', 'LTE', 'Accelerometer', 'Engine Diagnostics'],
  },
  {
    type: 'kartadashcam',
    name: 'KartaDashCam',
    icon: '📷',
    color: 'green',
    desc: 'Multi-channel dashcam · Live streaming · Event recording · Night vision',
    fwBase: 'v2.3',
    idPrefix: 'KDC',
    capabilities: ['Front Camera', 'Rear Camera', 'Cabin Camera', 'Live Stream', 'Event Clip', 'Night Vision'],
  },
  {
    type: 'edgeaibox',
    name: 'Edge AI Box',
    icon: '🧠',
    color: 'purple',
    desc: 'On-device AI inference · Event detection · Driver monitoring · Edge compute',
    fwBase: 'v1.5',
    idPrefix: 'EAB',
    capabilities: ['Harsh Braking', 'Drowsiness Detection', 'Lane Departure', 'Collision Warning', 'Driver ID'],
  },
];

function getVehicleIotInstances(v) {
  const seed = parseInt(v.id.replace('V',''));
  return iotCatalogue.map((cat, i) => {
    const isOffline = v.status === 'offline';
    const minor = (seed + i) % 4;
    const patch = (seed * 3 + i * 7) % 10;
    const fw = `${cat.fwBase}.${patch}`;
    const deviceStatus = isOffline ? 'offline' : (cat.type === 'kartadashcam' && v.battery < 15) ? 'degraded' : 'online';
    const lastSeen = isOffline ? '2 hrs ago' : 'Just now';
    const uptime = isOffline ? '—' : `${95 + minor}%`;
    return {
      ...cat,
      vid: v.id,
      plate: v.plate,
      deviceId: `${cat.idPrefix}-${v.city.slice(0,2).toUpperCase()}-${String(seed).padStart(3,'0')}${['F','R','C'][i] || ''}`,
      fw,
      status: deviceStatus,
      lastSeen,
      uptime,
      signal: isOffline ? 0 : v.signal,
      temp: isOffline ? '—' : `${38 + seed % 8}°C`,
    };
  });
}

function getVehicleIot(vid) {
  const v = vehicles.find(x => x.id === vid);
  return v ? getVehicleIotInstances(v) : [];
}

// ─── DAX DRIVERS ─────────────────────────────────────────────────────────────
const daxDrivers = [
  { id:'D001', name:'Ahmad Bin Hassan',  plate:'SGX1234A', vid:'V001', city:'Singapore',   country:'Singapore',  flag:'🇸🇬', daxScore:94, trips:212, hoursOnline:348, incidents:0, rating:4.9, status:'active',
    dob:'1988-03-15', gender:'Male', nationality:'Malaysian PR', phone:'+65 9123 4567', email:'ahmad.hassan@grab.com', address:'Blk 123 Ang Mo Kio Ave 3, Singapore 560123', ecName:'Fatimah Hassan', ecPhone:'+65 9888 1234',
    idType:'NRIC', idNumber:'S8812345A', idExpiry:'2030-03-15', idIssued:'2010-03-15',
    licenseNumber:'S1234567', licenseClass:'Class 3A', licenseIssued:'2010-06-01', licenseExpiry:'2028-06-30',
    onboardedDate:'2023-01-15', onboardedBy:'Fleet Manager', photoUploaded:true, idUploaded:true, licUploaded:true },
  { id:'D002', name:'Rajan Pillai',      plate:'WKL7823B', vid:'V002', city:'Kuala Lumpur', country:'Malaysia',   flag:'🇲🇾', daxScore:88, trips:195, hoursOnline:310, incidents:1, rating:4.8, status:'active',
    dob:'1990-07-22', gender:'Male', nationality:'Malaysian', phone:'+60 12-345 6789', email:'rajan.pillai@grab.com', address:'No 45, Jalan Ampang, 50450 Kuala Lumpur', ecName:'Priya Pillai', ecPhone:'+60 12-999 0000',
    idType:'MyKad', idNumber:'900722-14-5678', idExpiry:'2040-07-22', idIssued:'2010-07-22',
    licenseNumber:'MY5678901', licenseClass:'Class B (Auto)', licenseIssued:'2012-03-10', licenseExpiry:'2027-03-10',
    onboardedDate:'2023-02-20', onboardedBy:'Fleet Manager', photoUploaded:true, idUploaded:true, licUploaded:true },
  { id:'D003', name:'Budi Santoso',      plate:'BJB3921C', vid:'V003', city:'Jakarta',      country:'Indonesia',  flag:'🇮🇩', daxScore:76, trips:167, hoursOnline:278, incidents:2, rating:4.6, status:'active',
    dob:'1992-11-08', gender:'Male', nationality:'Indonesian', phone:'+62 812-3456-7890', email:'budi.santoso@grab.com', address:'Jl. Gatot Subroto No. 88, Jakarta Selatan 12930', ecName:'Sari Santoso', ecPhone:'+62 812-0000-1111',
    idType:'KTP', idNumber:'3174011108920001', idExpiry:'2027-11-08', idIssued:'2012-11-08',
    licenseNumber:'ID8765432', licenseClass:'SIM A', licenseIssued:'2013-05-15', licenseExpiry:'2026-05-15',
    onboardedDate:'2023-04-10', onboardedBy:'Regional Admin', photoUploaded:true, idUploaded:true, licUploaded:false },
  { id:'D004', name:'Somchai Wongsri',   plate:'BKK4421D', vid:'V004', city:'Bangkok',      country:'Thailand',   flag:'🇹🇭', daxScore:62, trips:130, hoursOnline:201, incidents:4, rating:4.3, status:'active',
    dob:'1985-05-30', gender:'Male', nationality:'Thai', phone:'+66 81-234-5678', email:'somchai.w@grab.com', address:'99/2 Sukhumvit Soi 22, Khlong Toei, Bangkok 10110', ecName:'Nong Wongsri', ecPhone:'+66 81-999-8888',
    idType:'National ID (Thailand)', idNumber:'3-1001-12345-67-8', idExpiry:'2035-05-30', idIssued:'2005-05-30',
    licenseNumber:'TH2345678', licenseClass:'Class 2 (Auto)', licenseIssued:'2008-09-01', licenseExpiry:'2026-09-01',
    onboardedDate:'2023-06-05', onboardedBy:'Fleet Manager', photoUploaded:true, idUploaded:true, licUploaded:true },
  { id:'D005', name:'Nguyen Van An',     plate:'HCM8812E', vid:'V005', city:'Ho Chi Minh',  country:'Vietnam',    flag:'🇻🇳', daxScore:41, trips: 88, hoursOnline:145, incidents:7, rating:3.9, status:'suspended',
    dob:'1993-09-12', gender:'Male', nationality:'Vietnamese', phone:'+84 90 123 4567', email:'nguyen.vanan@grab.com', address:'45 Nguyen Hue, Quan 1, TP.HCM', ecName:'Nguyen Thi Mai', ecPhone:'+84 90 000 1111',
    idType:'CCCD (Vietnam)', idNumber:'079093012345', idExpiry:'2033-09-12', idIssued:'2021-09-12',
    licenseNumber:'VN3456789', licenseClass:'B1 (Auto)', licenseIssued:'2015-03-20', licenseExpiry:'2025-03-20',
    onboardedDate:'2023-07-18', onboardedBy:'Regional Admin', photoUploaded:true, idUploaded:true, licUploaded:true },
  { id:'D006', name:'Juan dela Cruz',    plate:'MNL2233G', vid:'V006', city:'Manila',       country:'Philippines',flag:'🇵🇭', daxScore:85, trips:178, hoursOnline:295, incidents:1, rating:4.7, status:'active',
    dob:'1991-02-14', gender:'Male', nationality:'Filipino', phone:'+63 917 123 4567', email:'juan.delacruz@grab.com', address:'123 EDSA, Mandaluyong, Metro Manila', ecName:'Maria dela Cruz', ecPhone:'+63 917 000 9999',
    idType:'PhilSys ID', idNumber:'1234-5678-9012', idExpiry:'2031-02-14', idIssued:'2021-02-14',
    licenseNumber:'PH4567890', licenseClass:'Non-Pro', licenseIssued:'2013-08-01', licenseExpiry:'2027-08-01',
    onboardedDate:'2023-03-25', onboardedBy:'Fleet Manager', photoUploaded:true, idUploaded:true, licUploaded:true },
  { id:'D007', name:'Li Wei Lim',        plate:'SGX5512F', vid:'V007', city:'Singapore',    country:'Singapore',  flag:'🇸🇬', daxScore:91, trips:204, hoursOnline:330, incidents:0, rating:4.9, status:'active',
    dob:'1989-12-03', gender:'Female', nationality:'Singaporean', phone:'+65 8765 4321', email:'liwei.lim@grab.com', address:'Blk 45 Toa Payoh Lorong 1, Singapore 310045', ecName:'Lim Ah Kow', ecPhone:'+65 9111 2222',
    idType:'NRIC', idNumber:'S8912345B', idExpiry:'2029-12-03', idIssued:'2009-12-03',
    licenseNumber:'S9876543', licenseClass:'Class 3A', licenseIssued:'2011-04-10', licenseExpiry:'2029-04-10',
    onboardedDate:'2022-11-10', onboardedBy:'Fleet Manager', photoUploaded:true, idUploaded:true, licUploaded:true },
  { id:'D008', name:'Prakash Kumar',     plate:'PNP9988H', vid:'V008', city:'Singapore',    country:'Singapore',  flag:'🇸🇬', daxScore:79, trips:152, hoursOnline:255, incidents:2, rating:4.6, status:'active',
    dob:'1987-06-20', gender:'Male', nationality:'Singaporean PR', phone:'+65 8234 5678', email:'prakash.kumar@grab.com', address:'Blk 88 Jurong West St 21, Singapore 640088', ecName:'Kavitha Kumar', ecPhone:'+65 8234 0000',
    idType:'NRIC', idNumber:'S8712348C', idExpiry:'2027-06-20', idIssued:'2007-06-20',
    licenseNumber:'S7654321', licenseClass:'Class 3', licenseIssued:'2009-10-15', licenseExpiry:'2027-10-15',
    onboardedDate:'2023-05-02', onboardedBy:'Fleet Manager', photoUploaded:true, idUploaded:false, licUploaded:true },
  { id:'D009', name:'Siti Rahma',        plate:'WXY3312J', vid:null,   city:'Kuala Lumpur', country:'Malaysia',   flag:'🇲🇾', daxScore:55, trips:110, hoursOnline:182, incidents:5, rating:4.1, status:'active',
    dob:'1994-04-18', gender:'Female', nationality:'Malaysian', phone:'+60 11-2345 6789', email:'siti.rahma@grab.com', address:'No 12, Jalan Duta, 50480 Kuala Lumpur', ecName:'Ahmad Rahma', ecPhone:'+60 11-0000 1234',
    idType:'MyKad', idNumber:'940418-14-1234', idExpiry:'2040-04-18', idIssued:'2012-04-18',
    licenseNumber:'MY3456789', licenseClass:'Class B (Auto)', licenseIssued:'2014-07-01', licenseExpiry:'2026-07-01',
    onboardedDate:'2023-08-12', onboardedBy:'Regional Admin', photoUploaded:true, idUploaded:true, licUploaded:true },
  { id:'D010', name:'Arief Gunawan',     plate:'B2241KLX', vid:null,   city:'Jakarta',      country:'Indonesia',  flag:'🇮🇩', daxScore:97, trips:230, hoursOnline:375, incidents:0, rating:5.0, status:'active',
    dob:'1986-08-25', gender:'Male', nationality:'Indonesian', phone:'+62 811-2345-6789', email:'arief.gunawan@grab.com', address:'Jl. Sudirman No. 55, Jakarta Pusat 10220', ecName:'Dewi Gunawan', ecPhone:'+62 811-0000-2222',
    idType:'KTP', idNumber:'3171012508860001', idExpiry:'2026-08-25', idIssued:'2006-08-25',
    licenseNumber:'ID6543210', licenseClass:'SIM A', licenseIssued:'2010-01-10', licenseExpiry:'2028-01-10',
    onboardedDate:'2022-09-01', onboardedBy:'Fleet Manager', photoUploaded:true, idUploaded:true, licUploaded:true },
  { id:'D011', name:'Malee Siriporn',    plate:'กข1234',   vid:null,   city:'Bangkok',      country:'Thailand',   flag:'🇹🇭', daxScore:83, trips:174, hoursOnline:284, incidents:1, rating:4.7, status:'active',
    dob:'1995-01-09', gender:'Female', nationality:'Thai', phone:'+66 82-345-6789', email:'malee.s@grab.com', address:'22 Siam Sq, Pathum Wan, Bangkok 10330', ecName:'Somsak Siriporn', ecPhone:'+66 82-111-0000',
    idType:'National ID (Thailand)', idNumber:'3-1001-23456-78-9', idExpiry:'2035-01-09', idIssued:'2015-01-09',
    licenseNumber:'TH3456789', licenseClass:'Class 2 (Auto)', licenseIssued:'2015-06-01', licenseExpiry:'2027-06-01',
    onboardedDate:'2023-01-30', onboardedBy:'Fleet Manager', photoUploaded:true, idUploaded:true, licUploaded:true },
  { id:'D012', name:'Maria Santos',      plate:'MNL8841K', vid:null,   city:'Manila',       country:'Philippines',flag:'🇵🇭', daxScore:38, trips: 72, hoursOnline:118, incidents:9, rating:3.7, status:'suspended',
    dob:'1997-03-27', gender:'Female', nationality:'Filipino', phone:'+63 918 234 5678', email:'maria.santos@grab.com', address:'45 Commonwealth Ave, Quezon City, Metro Manila', ecName:'Jose Santos', ecPhone:'+63 918 000 0001',
    idType:'PhilSys ID', idNumber:'9876-5432-1098', idExpiry:'2031-03-27', idIssued:'2021-03-27',
    licenseNumber:'PH5678901', licenseClass:'Non-Pro', licenseIssued:'2018-05-10', licenseExpiry:'2026-05-10',
    onboardedDate:'2023-09-14', onboardedBy:'Regional Admin', photoUploaded:true, idUploaded:true, licUploaded:false },
];

// ─── PAYMENT DATA ────────────────────────────────────────────────────────────
const paymentData = [
  { id:'PAY001', driver:'Ahmad Bin Hassan',  plate:'SGX1234A', country:'Singapore',  flag:'🇸🇬', trips:212, gross:3180.50, deductions:318.05, period:'May 2026', method:'Bank Transfer', status:'completed', date:'2026-05-07' },
  { id:'PAY002', driver:'Rajan Pillai',      plate:'WKL7823B', country:'Malaysia',   flag:'🇲🇾', trips:195, gross:2210.00, deductions:221.00, period:'May 2026', method:'GrabPay Wallet', status:'completed', date:'2026-05-07' },
  { id:'PAY003', driver:'Budi Santoso',      plate:'BJB3921C', country:'Indonesia',  flag:'🇮🇩', trips:167, gross:1875.00, deductions:187.50, period:'May 2026', method:'Bank Transfer', status:'processing', date:'2026-05-08' },
  { id:'PAY004', driver:'Somchai Wongsri',   plate:'BKK4421D', country:'Thailand',   flag:'🇹🇭', trips:130, gross:1450.00, deductions:145.00, period:'May 2026', method:'PromptPay',     status:'pending',    date:'—' },
  { id:'PAY005', driver:'Nguyen Van An',     plate:'HCM8812E', country:'Vietnam',    flag:'🇻🇳', trips: 88, gross: 892.00, deductions:133.80, period:'May 2026', method:'MoMo Wallet',  status:'failed',     date:'2026-05-06' },
  { id:'PAY006', driver:'Juan dela Cruz',    plate:'MNL2233G', country:'Philippines',flag:'🇵🇭', trips:178, gross:2080.00, deductions:208.00, period:'May 2026', method:'GCash',        status:'completed',  date:'2026-05-07' },
  { id:'PAY007', driver:'Li Wei Lim',        plate:'SGX5512F', country:'Singapore',  flag:'🇸🇬', trips:204, gross:3060.00, deductions:306.00, period:'May 2026', method:'Bank Transfer', status:'completed',  date:'2026-05-07' },
  { id:'PAY008', driver:'Prakash Kumar',     plate:'PNP9988H', country:'Singapore',  flag:'🇸🇬', trips:152, gross:2280.00, deductions:228.00, period:'May 2026', method:'Bank Transfer', status:'pending',    date:'—' },
  { id:'PAY009', driver:'Siti Rahma',        plate:'WXY3312J', country:'Malaysia',   flag:'🇲🇾', trips:110, gross:1243.00, deductions:124.30, period:'May 2026', method:'GrabPay Wallet', status:'pending',   date:'—' },
  { id:'PAY010', driver:'Arief Gunawan',     plate:'B2241KLX', country:'Indonesia',  flag:'🇮🇩', trips:230, gross:2590.00, deductions:259.00, period:'May 2026', method:'Bank Transfer', status:'processing', date:'2026-05-08' },
  { id:'PAY011', driver:'Malee Siriporn',    plate:'กข1234',   country:'Thailand',   flag:'🇹🇭', trips:174, gross:1940.00, deductions:194.00, period:'May 2026', method:'PromptPay',    status:'completed',  date:'2026-05-07' },
  { id:'PAY012', driver:'Maria Santos',      plate:'MNL8841K', country:'Philippines',flag:'🇵🇭', trips: 72, gross: 728.00, deductions:109.20, period:'May 2026', method:'GCash',        status:'failed',     date:'2026-05-05' },
];

const deductionCategories = [
  { name:'Platform Commission (10%)', pct:10, color:'#00B14F', icon:'💼' },
  { name:'Insurance Premium',         pct:3,  color:'#3B82F6', icon:'🛡️' },
  { name:'Vehicle Lease Repayment',   pct:5,  color:'#8B5CF6', icon:'🚗' },
  { name:'Traffic Fines',             pct:1,  color:'#EF4444', icon:'🚦' },
  { name:'Cash Advance Repayment',    pct:1,  color:'#F97316', icon:'💵' },
];

// ─── USERS ────────────────────────────────────────────────────────────────────
const USERS = [
  { email:'superadmin@grab.com', password:'super123', name:'Super Admin', initials:'SA', role:'super_admin', roleLabel:'Super Admin', fleet:'all' },
  { email:'fleetadmin@grab.com', password:'fleet123', name:'Fleet Admin SG', initials:'FA', role:'fleet_admin', roleLabel:'Fleet Admin', fleet:'Singapore' },
  { email:'viewer@grab.com',     password:'view123',  name:'Viewer SG',     initials:'VS', role:'viewer',      roleLabel:'Fleet Viewer', fleet:'Singapore' },
];

let managedUsers = [
  { name:'Super Admin',    email:'superadmin@grab.com', role:'super_admin', fleet:'all',         status:'active' },
  { name:'Fleet Admin SG', email:'fleetadmin@grab.com', role:'fleet_admin', fleet:'Singapore',   status:'active' },
  { name:'Viewer SG',      email:'viewer@grab.com',     role:'viewer',      fleet:'Singapore',   status:'active' },
  { name:'Ahmad Viewer',   email:'ahmad@grab.com',      role:'viewer',      fleet:'Malaysia',    status:'active' },
  { name:'Siti Admin',     email:'siti@grab.com',       role:'fleet_admin', fleet:'Malaysia',    status:'active' },
  { name:'Nguyen Viewer',  email:'nguyen@grab.com',     role:'viewer',      fleet:'Vietnam',     status:'inactive' },
];

const ROLE_LABELS = { super_admin:'Super Admin', fleet_admin:'Fleet Admin', viewer:'Fleet Viewer' };
const ROLE_CHIP_CLASS = { super_admin:'super-admin', fleet_admin:'fleet-admin', viewer:'viewer' };
