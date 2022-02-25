// This the singular GTM interface. v1.0.9

(function singularGtmMain() {
    if (!window.singularSdkQueue) {
        console.log("Singular Data Layer is null");
    } else {
        var queue = window.singularSdkQueue;

        if (!window.singularSdk && !window.isSingularSdkInitializing) {
            initSingularSdkScript(queue);
        } else {
            if (window.isSingularSdkInitializing) {
                waitForInit(queue, 1);
            } else {
                executeCall(queue);
            }
        }
    }

    function waitForInit(queue, retryCounter) {
        if (retryCounter > 100) {
            return;
        }

        setTimeout(function () {
            if (window.isSingularSdkInitializing) {
                retryCounter++;
                waitForInit(queue, retryCounter);
            } else {
                executeCall(queue);
            }
        }, 10);
    }

    function executeCall(queue) {
        if (queue.length === 0) {
            return;
        }

        // The retry mechanism is embedded in the Singular SDK, so there is no need to add it here, thus clearing the queue
        var data = queue.shift();
        window.singularSdkQueue = queue;

        switch (data.trackType) {
            case "init": {
                initSDK(data);
                break;
            }
            case "login": {
                login(data);
                break;
            }
            case "logout": {
                logout();
                break;
            }
            case "conversion": {
                sendConversionEvent(data);
                break;
            }
            case "custom": {
                sendCustomEvent(data);
                break;
            }
            case "revenue": {
                sendRevenueEvent(data);
                break;
            }
            case "pageVisit": {
                sendPageVisit();
                break;
            }
            case "setDeviceCustomUserId": {
                sendDeviceCustomUserId(data);
                break;
            }
            default: {
                break;
            }
        }
    }

    function initSDK(data) {
        // Product Id used to be called packageName
        if (data.packageName) {
            data.productId = data.packageName;
        }

        var config = new SingularConfig(data.apikey, data.secret, data.productId).withLogLevel(data.logLevel);

        if (data.customUserId) {
            config.withCustomUserId(data.customUserId);
        }

        if (data.sessionTimeout) {
            config.withSessionTimeoutInMinutes(data.sessionTimeout);
        }

        if (data.subDomainTracking) {
            if (data.subDomainTrackingMode === 'simple') {
                config.withAutoPersistentSingularDeviceId(data.domain);
            } else {
                config.withPersistentSingularDeviceId(data.singularDeviceId);
            }
        }

        window.singularSdk.init(config);

        if (data.logLevel >= 2) {
            console.log("Singular Web SDK is initialized");
        }
    }

    function login(data) {
        window.singularSdk.login(data.customUserId);
    }

    function logout() {
        window.singularSdk.logout();
    }

    function sendConversionEvent(data) {
        if (data.customUserId) {
            window.singularSdk.login(data.customUserId);
        }

        window.singularSdk.conversionEvent(data.eventName, data.attributes);
    }

    function sendCustomEvent(data) {
        if (data.customUserId) {
            window.singularSdk.login(data.customUserId);
        }

        window.singularSdk.event(data.eventName, data.attributes);
    }

    function sendRevenueEvent(data) {
        if (data.customUserId) {
            window.singularSdk.login(data.customUserId);
        }

        window.singularSdk.revenue(data.eventName, data.currency, data.revenue, data.attributes);
    }

    function sendPageVisit() {
        window.singularSdk.pageVisit();
    }

    function sendDeviceCustomUserId(data) {
        if (!data.customUserId) {
            return;
        }

        window.singularSdk.setDeviceCustomUserId(data.customUserId);
    }

    function initSingularSdkScript(queue) {
        window.isSingularSdkInitializing = true;
        loadScript('https://web-sdk-cdn.singular.net/singular-sdk/latest/singular-sdk.js', function () {
            if (!window.singularSdk) {
                console.log("Unable to load Singular's Web SDK");
                window.isSingularSdkInitializing = false;
            } else {
                executeCall(queue);
                window.isSingularSdkInitializing = false;
            }
        });
    }

    function loadScript(url, callback) {
        var head = document.head;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = callback;

        // Fire the loading
        head.appendChild(script);
    }
})();
