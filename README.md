# Propagation Banner Plugin (v1.1)

This FM-DX Webserver plugin allows admins to visually alert users to active FM propagation conditions or storm-related antenna disengagement.

## ✨ Features

- Displays a floating banner for:
  - 🟥 Sporadic Es Opening Occurring
  - 🟩 Tropo Opening Occurring
  - 🟧 Meteor Shower Underway
  - ⚠ Thunderstorm Notice
- **Draggable UI** – click and drag the banner anywhere
- **Close button (✕)** – allows users to dismiss the banner
- Tooltip explains banner type and how to reposition

## 🛠 Configuration

In `/plugins/Propagation_Banner/Propagation_Banner.js`, set only **one** value to `'yes'`:

```js
const pluginSettings = {
    tropo: 'no',
    es: 'no',
    meteor: 'no',
    thunder: 'yes'
};
```

If all are `'no'`, no banner will display.

## 📁 Installation

1. Place `Propagation_Banner.js` in your `/plugins/` folder.
2. Place the `Propagation_Banner` folder with its `Propagation_Banner.js` inside the same `/plugins/` directory.
3. Enable the plugin via the admin UI.
4. Edit the `pluginSettings` in the script as needed.
5. Reload your FM-DX Webserver interface.

VERSION 1.1
1.  Added a fourth banner that allows users to indicate when they have had to unplug their antennas due to storm activity (or is that just me?!)
2.  By request from users, added an "X" that allows users of the webserver to close/disengage the banner so as not to overlap the UI - especially on mobile.

---

Released by **Loyd Van Horn / DX Central**
