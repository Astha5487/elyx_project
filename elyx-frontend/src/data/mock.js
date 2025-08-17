export const member = {
  id: 'M-ELX-1024',
  name: 'Aarav Nair',
  age: 32,
  location: 'Singapore',
  chronic: 'Pre-hypertension',
  goals: ['Lose 5kg', 'Improve VO2max', 'Lower resting BP'],
  hoursCommitment: 5,
  adherence: 0.64,
  avatar: `https://ui-avatars.com/api/?background=4f46e5&color=fff&name=Aarav+Nair`,
  persona: {
    archetype: 'Busy Consultant',
    traits: ['Frequent travel', 'Data-driven', 'Night owl'],
    risks: ['Sleep debt', 'High sodium intake', 'Sedentary flights'],
    motivators: ['Visible progress', 'Gamified streaks', 'Clear rationale'],
  },
};

export const kpis = [
  { label: 'Resting HR', value: '62 bpm', delta: '-3', good: true },
  { label: 'Avg BP (7d)', value: '127/82', delta: '-5/-3', good: true },
  { label: 'Steps (7d avg)', value: '8,200', delta: '+1,100', good: true },
  { label: 'Sleep (7d avg)', value: '6h 40m', delta: '+20m', good: false },
];

export const biomarkers = [
  { name: 'HbA1c', unit: '%', current: 5.4, target: 5.2, range: [4.0, 5.6] },
  { name: 'LDL-C', unit: 'mg/dL', current: 116, target: 100, range: [0, 130] },
  { name: 'CRP', unit: 'mg/L', current: 1.8, target: 1.0, range: [0, 3] },
  { name: 'Vit D', unit: 'ng/mL', current: 26, target: 35, range: [20, 50] },
];

export const adherenceWeeks = [
  { week: 'W1', hours: 4.5, target: 5 },
  { week: 'W2', hours: 5.0, target: 5 },
  { week: 'W3', hours: 2.0, target: 5 },
  { week: 'W4', hours: 6.0, target: 5 },
];

export const journeyEvents = [
  { id: 'E1', date: '2025-01-05', title: 'Onboarding + Baseline Plan', type: 'plan', details: '12-week plan; 5h/week; cardio + resistance; sodium reduction.' },
  { id: 'E2', date: '2025-02-01', title: 'Exercise Update (bi-weekly)', type: 'exercise', details: 'Progression: Zone 2 ↑ 10%, add mobility circuit.' },
  { id: 'E3', date: '2025-03-10', title: 'Full Diagnostic Panel #1', type: 'diagnostic', details: 'CMP, lipid, HbA1c, CRP, Vit D.' },
  { id: 'E4', date: '2025-03-12', title: 'Nutrition tweak', type: 'nutrition', details: 'Swap late dinners → earlier + add potassium-rich foods.' },
  { id: 'E5', date: '2025-04-01', title: 'Therapy: Breathing Protocol', type: 'therapy', details: 'Box breathing 4-4-4-4 before bed, 10 min.' },
];

export const messages = [
  { from: 'coach', text: 'Welcome to Elyx, Aarav! How are you feeling today?', at: '09:12' },
  { from: 'member', text: 'Great! Did a 20-min jog. Flight to HK tomorrow.', at: '09:15' },
  { from: 'coach', text: 'Nice! Travel kit ready: 2x 20-min hotel circuits + stretch.', at: '09:17' },
  { from: 'member', text: 'Perfect. Can we reduce late-night meals recs on travel?', at: '09:20' },
  { from: 'coach', text: 'Done. Switching to high-protein earlier dinners this week.', at: '09:22' },
];

export const opsMetrics = {
  doctorHours: 2.5,
  coachHours: 6.0,
  specialistHours: 1.0,
  consults: 7,
  lastUpdated: '2025-08-10',
};
