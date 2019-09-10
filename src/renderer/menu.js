import { remote } from 'electron'

let isMac = false

const template = [
  // { role: 'appMenu' }
  ...(process.platform === 'darwin' ? [{
    label: remote.app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      {
        label: 'All Programs',
        click () {
          // do something
        }
      },
      {
        label: 'Preferences',
        click () {
          // do something
        }
      },
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  // {
  //   label: 'Edit',
  //   submenu: [
  //     { role: 'undo' },
  //     { role: 'redo' },
  //     { type: 'separator' },
  //     { role: 'cut' },
  //     { role: 'copy' },
  //     { role: 'paste' },
  //     ...(isMac ? [
  //       { role: 'pasteAndMatchStyle' },
  //       { role: 'delete' },
  //       { role: 'selectAll' },
  //       { type: 'separator' },
  //       {
  //         label: 'Speech',
  //         submenu: [
  //           { role: 'startspeaking' },
  //           { role: 'stopspeaking' }
  //         ]
  //       }
  //     ] : [
  //       { role: 'delete' },
  //       { type: 'separator' },
  //       { role: 'selectAll' }
  //     ])
  //   ]
  // },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      },
      {
        label: 'Developers',
        click () {

        }
      },
      {
        label: 'About',
        click () {
          // do something
        }
      }
    ]
  }
]

let menu = remote.Menu.buildFromTemplate(template)

export default menu
