# Propagation Banner Plugin

A plugin for the FM-DX Webserver platform that allows admins to visually notify users of active FM propagation conditions. When a propagation event is active, a draggable banner appears on the receiver UI with styling and info relevant to the event.

## ✨ Features

- Displays a clear, color-coded banner:
  - 🟥 Sporadic Es Opening Occurring
  - 🟩 Tropo Opening Occurring
  - 🟧 Meteor Shower Underway
- Tooltip includes:
  - Description of the propagation type
  - Instruction: `(Click and drag to reposition)`
- Banner can be freely moved by the user
- Only one event active at a time

## 🔧 Admin Configuration

In the file `Propagation_Banner/Propagation_Banner.js`, scroll to this section:

```js
const pluginSettings = {
    tropo: 'no',     // Options: 'yes' or 'no'
    es: 'no',       // Options: 'yes' or 'no'
    meteor: 'no'     // Options: 'yes' or 'no'
};
```

Set **only one** propagation type to `'yes'`. If all are `'no'`, no banner will be shown.

## 📁 Installation

1. Place `Propagation_Banner.js` into your `/plugins/` directory.
2. Place the folder `Propagation_Banner/` (with `Propagation_Banner.js` inside) into `/plugins/`.
3. Toggle on the plugin from the admin interface.
4. Edit the propagation mode as needed.
5. Refresh the receiver interface.

---

**Created by Loyd Van Horn / DX Central**

