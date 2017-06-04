const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
     .then(createWindowsInstaller)
     .catch((error) => {
     console.error(error.message || error)
     process.exit(1)
 })

function getInstallerConfig () {
    console.log('creating windows installer')
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'release-builds')

    return Promise.resolve({
       appDirectory: path.join(outPath, 'myip-win32-x64/'),
       authors: 'Aaron James',
       noMsi: true,
       outputDirectory: path.join(outPath, 'windows-installer'),
       exe: 'MyIP.exe',
       setupExe: 'Setup.exe',
       setupIcon: path.join(rootPath, 'src', 'myip.ico'),
   })
}
