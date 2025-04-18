# Propagation Banner Plugin (v4)

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

---

Released by **Loyd Van Horn / DX Central**
