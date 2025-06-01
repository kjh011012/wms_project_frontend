// scripts/build-all.js
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// 📁 배포 대상 앱 경로들
const apps = [
  { name: 'manager/dashboard', target: 'manager/dashboard' },
  { name: 'manager/inbound', target: 'manager/inbound' },
  { name: 'manager/inventory', target: 'manager/inventory' },
  { name: 'manager/logistics-main', target: 'manager/logistics-main' },
  { name: 'manager/outbound', target: 'manager/outbound' },
  { name: 'customer/dashboard', target: 'customer/dashboard' },
  { name: 'customer/inbound', target: 'customer/inbound' },
  { name: 'customer/outbound', target: 'customer/outbound' }
];

const distDir = path.resolve(__dirname, '../dist');

// dist 폴더 초기화
fse.removeSync(distDir);
fse.ensureDirSync(distDir);

// 각 앱 빌드 후 dist에 복사
apps.forEach(({ name, target }) => {
  const appPath = path.resolve(__dirname, '../', name);
  console.log(`📦 Building ${name}...`);
  execSync('npm run build', { cwd: appPath, stdio: 'inherit' });

  const from = path.join(appPath, 'build');
  const to = path.join(distDir, target);
  fse.copySync(from, to);
  console.log(`✅ Copied ${name} to dist/${target}`);
});
