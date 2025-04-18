// Frontend for Propagation Banner Plugin
(function () {
    const BANNER_ID = 'propagationBanner';
    const TOOLTIP_ID = 'propagationTooltip';

    // Admin-controlled toggles (set one to 'yes')
    const pluginSettings = {
        tropo: 'yes',     // Options: 'yes' or 'no'
        es: 'no',        // Options: 'yes' or 'no'
        meteor: 'no',    // Options: 'yes' or 'no'
        thunder: 'no'   // Options: 'yes' or 'no'
    };

    const bannerStyles = {
        base: `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            font-weight: bold;
            color: white;
            border-radius: 10px;
            padding: 8px 40px 8px 16px;
            font-size: 16px;
            opacity: 0.7;
            text-align: center;
            box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
            cursor: move;
            user-select: none;
        `,
        tropo: 'background-color: rgba(0, 128, 0, 0.8);',
        es: 'background-color: rgba(220, 20, 60, 0.8);',
        meteor: 'background-color: rgba(255, 140, 0, 0.8);',
        thunder: 'background-color: rgba(0, 0, 0, 0.85);'
    };

    const bannerInfo = {
        tropo: 'Tropo is a form of tropospheric ducting that can allow FM signals to travel hundreds of miles due to temperature inversions or weather fronts.',
        es: 'Sporadic E-skip is caused by ionized patches in the E-layer of the ionosphere, allowing signals to bounce over 1,000+ miles.',
        meteor: 'Meteor scatter DXing uses the ionized trails left by meteors to reflect signals briefly across long distances.',
        thunder: '(Click and drag to reposition)'
    };

    function showBanner(type) {
        removeBanner();

        const banner = document.createElement('div');
        banner.id = BANNER_ID;
        banner.innerText = getLabel(type);
        banner.setAttribute('style', bannerStyles.base + bannerStyles[type]);

        // Add close (X) button
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '✕';
        closeBtn.setAttribute('style', `
            position: absolute;
            top: 4px;
            right: 10px;
            cursor: pointer;
            font-size: 18px;
            color: white;
        `);
        closeBtn.addEventListener('click', () => {
            removeBanner();
        });
        banner.appendChild(closeBtn);

        banner.addEventListener('mouseenter', () => showTooltip(bannerInfo[type]));
        banner.addEventListener('mouseleave', removeTooltip);

        makeDraggable(banner);
        document.body.appendChild(banner);
    }

    function showTooltip(text) {
        const tooltip = document.createElement('div');
        tooltip.id = TOOLTIP_ID;
        tooltip.innerText = text;
        tooltip.setAttribute('style', `
            position: fixed;
            top: 120px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10000;
            background-color: rgba(0, 0, 0, 0.85);
            color: white;
            padding: 10px;
            border-radius: 8px;
            font-size: 14px;
            max-width: 300px;
            text-align: center;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
            white-space: pre-line;
        `);
        document.body.appendChild(tooltip);
    }

    function removeTooltip() {
        const tip = document.getElementById(TOOLTIP_ID);
        if (tip) tip.remove();
    }

    function removeBanner() {
        const existing = document.getElementById(BANNER_ID);
        if (existing) existing.remove();
        removeTooltip();
    }

    function getLabel(type) {
        switch (type) {
            case 'tropo': return '⚠ DX ALERT: Tropo Opening Occurring ⚠';
            case 'es': return '⚠ DX ALERT: Sporadic Es Opening Occurring ⚠';
            case 'meteor': return 'Meteor Shower Underway';
            case 'thunder': return '⚠ NOTICE: Due to thunderstorm activity in our area, the antenna for this receiver is currently disengaged. Once it is safe to reconnect, signals should return to normal levels. We apologize for any inconvenience. ⚠';
            default: return '';
        }
    }

    function makeDraggable(el) {
        let offsetX = 0, offsetY = 0, isDragging = false;

        el.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - el.offsetLeft;
            offsetY = e.clientY - el.offsetTop;
            el.style.transition = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                el.style.left = `${e.clientX - offsetX}px`;
                el.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            el.style.transition = '';
        });
    }

    window.addEventListener('load', () => {
        if (pluginSettings.tropo === 'yes') {
            showBanner('tropo');
        } else if (pluginSettings.es === 'yes') {
            showBanner('es');
        } else if (pluginSettings.meteor === 'yes') {
            showBanner('meteor');
        } else if (pluginSettings.thunder === 'yes') {
            showBanner('thunder');
        } else {
            removeBanner();
        }
    });
})();
