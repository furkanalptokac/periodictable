module.exports = {
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
      config: {
      }
    },
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32']
    },
    {
      name: '@electron-forge/maker-deb',
      platforms: ['linux']
    },
    /*
    {
      name: '@electron-forge/maker-rpm',
      platforms: ['linux']
    }
    */
  ]
}
