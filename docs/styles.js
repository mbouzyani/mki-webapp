(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(MaterialIcons-Regular.eot); /* For IE6-8 */\n  src: local('Material Icons'),\n       local('MaterialIcons-Regular'),\n       url(MaterialIcons-Regular.woff2) format('woff2'),\n       url(MaterialIcons-Regular.woff) format('woff'),\n       url(MaterialIcons-Regular.ttf) format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n\n.material-icons {\r\n    font-family: \"Material Icons\";\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px; /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n    /* Support for IE. */\r\n    font-feature-settings: ‘liga’;\r\n}\n\n/* ===== DESIGN TOKENS & GLOBAL ECOSYSTEM ===== */\n\n:root {\r\n    --color-brand:        #ff7a59;\r\n    --color-brand-dark:   #ff5252;\r\n    --color-bg-dark:      #0f0c24;\r\n    --color-bg-darker:    #09061a;\r\n    --color-white:        #ffffff;\r\n    --color-text-muted:   rgba(255,255,255,0.6);\r\n    --color-border-light: rgba(255,255,255,0.08);\r\n    --gradient-brand:     linear-gradient(135deg, #ff7a59 0%, #ff5252 100%);\r\n    --gradient-glass:     linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);\r\n    --shadow-card:        0 10px 40px rgba(0,0,0,0.25);\r\n    --shadow-glow:        0 8px 25px rgba(255,122,89,0.4);\r\n    --radius-sm:          8px;\r\n    --radius-md:          14px;\r\n    --radius-lg:          24px;\r\n    --radius-pill:        50px;\r\n    --transition-base:    all 0.35s cubic-bezier(0.165,0.84,0.44,1);\r\n    --header-height:      76px;\r\n}\n\n*, *::before, *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\r\n}\n\nhtml {\r\n    scroll-behavior: smooth;\r\n}\n\nbody {\r\n    width: 100vw;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    overflow-x: hidden;\r\n    background-color: var(--color-bg-darker);\r\n}\n\n/* Custom Scrollbar */\n\n::-webkit-scrollbar {\r\n    width: 8px;\r\n}\n\n::-webkit-scrollbar-track {\r\n    background: #09061a;\r\n}\n\n::-webkit-scrollbar-thumb {\r\n    background: rgba(255, 122, 89, 0.4);\r\n    border-radius: 4px;\r\n}\n\n::-webkit-scrollbar-thumb:hover {\r\n    background: #ff7a59;\r\n}\n\n.annimateName{\r\n    position: absolute;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    background-color: #000;\r\n}\n\n.annimatedText {\r\n    position: relative;\r\n    font-family: sans-serif;\r\n    text-transform: uppercase;\r\n    font-size: 2em;\r\n    letter-spacing: 4px;\r\n    overflow: hidden;\r\n    background: linear-gradient(90deg, #000, #fff, #000);\r\n    background-repeat: no-repeat;\r\n    background-size: 80%;\r\n    -webkit-animation: animate 3s linear infinite;\r\n            animation: animate 3s linear infinite;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: rgba(255, 255, 255, 0);\r\n  }\n\n@-webkit-keyframes animate {\r\n    0% {\r\n      background-position: -500%;\r\n    }\r\n    100% {\r\n      background-position: 500%;\r\n    }\r\n  }\n\n@keyframes animate {\r\n    0% {\r\n      background-position: -500%;\r\n    }\r\n    100% {\r\n      background-position: 500%;\r\n    }\r\n  }\n\n/* =======================================================\r\n   SIGN-IN FORM — Global styles targeting app-sign-in\r\n   These bypass Angular ViewEncapsulation so they always apply\r\n   ======================================================= */\n\napp-sign-in .container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px 16px;\r\n    box-sizing: border-box;\r\n}\n\napp-sign-in form {\r\n    position: relative;\r\n    background: rgba(15, 12, 35, 0.98);\r\n    backdrop-filter: blur(28px);\r\n    -webkit-backdrop-filter: blur(28px);\r\n    border: 1px solid rgba(255, 255, 255, 0.1);\r\n    border-radius: 24px;\r\n    width: 100%;\r\n    max-width: 360px;\r\n    padding: 44px 28px 36px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-shadow: 0 28px 70px rgba(0, 0, 0, 0.6);\r\n    box-sizing: border-box;\r\n}\n\napp-sign-in form h1 {\r\n    font-size: 26px;\r\n    font-weight: 800;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    margin: 0 0 28px 0;\r\n    letter-spacing: -0.3px;\r\n}\n\n/* Inputs — comprehensive ultra-resilient selectors */\n\napp-sign-in input,\r\napp-sign-in #username,\r\napp-sign-in #password,\r\napp-sign-in form input[type=\"text\"],\r\napp-sign-in form input[type=\"password\"],\r\n#container-signIn input {\r\n    display: block !important;\r\n    width: 100% !important;\r\n    height: 48px !important;\r\n    color: #ffffff !important;\r\n    background-color: rgba(255, 255, 255, 0.08) !important;\r\n    border: 1.5px solid rgba(255, 255, 255, 0.2) !important;\r\n    border-radius: 12px !important;\r\n    font-size: 15px !important;\r\n    font-weight: 500 !important;\r\n    padding: 0 16px !important;\r\n    margin: 0 0 18px 0 !important;\r\n    outline: none !important;\r\n    box-shadow: none !important;\r\n    transition: all 0.25s ease !important;\r\n    box-sizing: border-box !important;\r\n    -webkit-appearance: none !important;\r\n    -moz-appearance: none !important;\r\n    appearance: none !important;\r\n    font-family: 'Quicksand', sans-serif !important;\r\n}\n\napp-sign-in input::-webkit-input-placeholder,\r\n#container-signIn input::-webkit-input-placeholder {\r\n    color: rgba(255, 255, 255, 0.45) !important;\r\n    opacity: 1 !important;\r\n}\n\napp-sign-in input::-moz-placeholder,\r\n#container-signIn input::-moz-placeholder {\r\n    color: rgba(255, 255, 255, 0.45) !important;\r\n    opacity: 1 !important;\r\n}\n\napp-sign-in input::-ms-input-placeholder,\r\n#container-signIn input::-ms-input-placeholder {\r\n    color: rgba(255, 255, 255, 0.45) !important;\r\n    opacity: 1 !important;\r\n}\n\napp-sign-in input::placeholder,\r\n#container-signIn input::placeholder {\r\n    color: rgba(255, 255, 255, 0.45) !important;\r\n    opacity: 1 !important;\r\n}\n\napp-sign-in input:focus,\r\n#container-signIn input:focus {\r\n    border-color: #ff7a59 !important;\r\n    background-color: rgba(255, 255, 255, 0.12) !important;\r\n    box-shadow: 0 0 0 3px rgba(255, 122, 89, 0.25) !important;\r\n}\n\n/* Password wrapper */\n\napp-sign-in .psw,\r\n#container-signIn .psw {\r\n    position: relative !important;\r\n    width: 100% !important;\r\n    display: flex !important;\r\n    align-items: center !important;\r\n    margin: 0 0 20px 0 !important;\r\n}\n\napp-sign-in .psw input,\r\n#container-signIn .psw input {\r\n    margin: 0 !important;\r\n    padding-right: 48px !important;\r\n}\n\n/* Eye toggle */\n\napp-sign-in .s-h,\r\n#container-signIn .s-h {\r\n    position: absolute !important;\r\n    right: 12px !important;\r\n    top: 50% !important;\r\n    transform: translateY(-50%) !important;\r\n    display: flex !important;\r\n    align-items: center !important;\r\n    justify-content: center !important;\r\n    width: 32px !important;\r\n    height: 32px !important;\r\n    color: rgba(255, 255, 255, 0.5) !important;\r\n    cursor: pointer !important;\r\n    z-index: 10 !important;\r\n    transition: color 0.2s ease !important;\r\n}\n\napp-sign-in .s-h:hover,\r\n#container-signIn .s-h:hover {\r\n    color: #ff7a59 !important;\r\n}\n\n/* Close button */\n\napp-sign-in .close-modal {\r\n    position: absolute;\r\n    top: 14px;\r\n    right: 18px;\r\n    width: 32px;\r\n    height: 32px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    color: rgba(255, 255, 255, 0.45);\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    transition: all 0.2s ease;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\n\napp-sign-in .close-modal:hover {\r\n    color: #ffffff;\r\n    background: rgba(255, 255, 255, 0.08);\r\n}\n\n/* Log In button */\n\napp-sign-in .button {\r\n    display: block;\r\n    width: 100%;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    background: linear-gradient(135deg, #ff7a59 0%, #ff5252 100%);\r\n    border: none;\r\n    border-radius: 50px;\r\n    padding: 14px;\r\n    margin-top: 20px;\r\n    cursor: pointer;\r\n    transition: all 0.28s cubic-bezier(0.165, 0.84, 0.44, 1);\r\n    box-shadow: 0 5px 18px rgba(255, 122, 89, 0.3);\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\n\napp-sign-in .button:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 10px 28px rgba(255, 122, 89, 0.5);\r\n    -webkit-filter: brightness(1.08);\r\n            filter: brightness(1.08);\r\n}\n\n@media screen and (max-width: 480px) {\r\n    app-sign-in form {\r\n        max-width: 100%;\r\n        padding: 36px 20px 28px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9tYXRlcmlhbC1kZXNpZ24taWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzIiwic3JjL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQ0FBbUMsRUFBRSxjQUFjO0VBQ25EOzs7O3dEQUlzRDtBQUN4RDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWUsR0FBRyx3QkFBd0I7RUFDMUMscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYzs7RUFFZCxxQ0FBcUM7RUFDckMsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQyxrQ0FBa0M7O0VBRWxDLHlCQUF5QjtFQUN6QixrQ0FBa0M7O0VBRWxDLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7O0FDakNBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFFLHdCQUF3QjtJQUN6QyxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsb0JBQW9CO0lBQ3BCLDZCQUE2QjtBQUNqQzs7QUFHQSxpREFBaUQ7O0FBQ2pEO0lBQ0ksNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QiwyQ0FBMkM7SUFDM0MsNENBQTRDO0lBQzVDLHVFQUF1RTtJQUN2RSxxR0FBcUc7SUFDckcsa0RBQWtEO0lBQ2xE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c0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixzQ0FBc0M7QUFDMUM7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBLGlCQUFpQjs7QUFDakI7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQ0FBcUM7QUFDekM7O0FBRUEsa0JBQWtCOztBQUNsQjtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDZEQUE2RDtJQUM3RCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdEQUF3RDtJQUN4RCw4Q0FBOEM7SUFDOUMseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLCtDQUErQztJQUMvQyxnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdCk7IC8qIEZvciBJRTYtOCAqL1xuICBzcmM6IGxvY2FsKCdNYXRlcmlhbCBJY29ucycpLFxuICAgICAgIGxvY2FsKCdNYXRlcmlhbEljb25zLVJlZ3VsYXInKSxcbiAgICAgICB1cmwoTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgdXJsKE1hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICB1cmwoTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7ICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlyZWN0aW9uOiBsdHI7XG5cbiAgLyogU3VwcG9ydCBmb3IgYWxsIFdlYktpdCBicm93c2Vycy4gKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC8qIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lLiAqL1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXG4gIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cbiAgLyogU3VwcG9ydCBmb3IgSUUuICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xufVxuIiwiQGltcG9ydCAnfm1hdGVyaWFsLWRlc2lnbi1pY29ucy9pY29uZm9udC9tYXRlcmlhbC1pY29ucy5jc3MnO1xyXG5cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyNHB4OyAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgLyogU3VwcG9ydCBmb3IgYWxsIFdlYktpdCBicm93c2Vycy4gKi9cclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cclxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczog4oCYbGlnYeKAmTtcclxufVxyXG5cclxuXHJcbi8qID09PT09IERFU0lHTiBUT0tFTlMgJiBHTE9CQUwgRUNPU1lTVEVNID09PT09ICovXHJcbjpyb290IHtcclxuICAgIC0tY29sb3ItYnJhbmQ6ICAgICAgICAjZmY3YTU5O1xyXG4gICAgLS1jb2xvci1icmFuZC1kYXJrOiAgICNmZjUyNTI7XHJcbiAgICAtLWNvbG9yLWJnLWRhcms6ICAgICAgIzBmMGMyNDtcclxuICAgIC0tY29sb3ItYmctZGFya2VyOiAgICAjMDkwNjFhO1xyXG4gICAgLS1jb2xvci13aGl0ZTogICAgICAgICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yLXRleHQtbXV0ZWQ6ICAgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gICAgLS1jb2xvci1ib3JkZXItbGlnaHQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XHJcbiAgICAtLWdyYWRpZW50LWJyYW5kOiAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmN2E1OSAwJSwgI2ZmNTI1MiAxMDAlKTtcclxuICAgIC0tZ3JhZGllbnQtZ2xhc3M6ICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDEpIDEwMCUpO1xyXG4gICAgLS1zaGFkb3ctY2FyZDogICAgICAgIDAgMTBweCA0MHB4IHJnYmEoMCwwLDAsMC4yNSk7XHJcbiAgICAtLXNoYWRvdy1nbG93OiAgICAgICAgMCA4cHggMjVweCByZ2JhKDI1NSwxMjIsODksMC40KTtcclxuICAgIC0tcmFkaXVzLXNtOiAgICAgICAgICA4cHg7XHJcbiAgICAtLXJhZGl1cy1tZDogICAgICAgICAgMTRweDtcclxuICAgIC0tcmFkaXVzLWxnOiAgICAgICAgICAyNHB4O1xyXG4gICAgLS1yYWRpdXMtcGlsbDogICAgICAgIDUwcHg7XHJcbiAgICAtLXRyYW5zaXRpb24tYmFzZTogICAgYWxsIDAuMzVzIGN1YmljLWJlemllcigwLjE2NSwwLjg0LDAuNDQsMSk7XHJcbiAgICAtLWhlYWRlci1oZWlnaHQ6ICAgICAgNzZweDtcclxufVxyXG5cclxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1kYXJrZXIpO1xyXG59XHJcblxyXG4vKiBDdXN0b20gU2Nyb2xsYmFyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICMwOTA2MWE7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTIyLCA4OSwgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjdhNTk7XHJcbn1cclxuXHJcblxyXG4uYW5uaW1hdGVOYW1le1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuXHJcbi5hbm5pbWF0ZWRUZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDAsICNmZmYsICMwMDApO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDNzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC01MDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBTSUdOLUlOIEZPUk0g4oCUIEdsb2JhbCBzdHlsZXMgdGFyZ2V0aW5nIGFwcC1zaWduLWluXHJcbiAgIFRoZXNlIGJ5cGFzcyBBbmd1bGFyIFZpZXdFbmNhcHN1bGF0aW9uIHNvIHRoZXkgYWx3YXlzIGFwcGx5XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuYXBwLXNpZ24taW4gLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweCAxNnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYXBwLXNpZ24taW4gZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAxMiwgMzUsIDAuOTgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI4cHgpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjhweCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICAgcGFkZGluZzogNDRweCAyOHB4IDM2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMjhweCA3MHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmFwcC1zaWduLWluIGZvcm0gaDEge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDAgMjhweCAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxufVxyXG5cclxuLyogSW5wdXRzIOKAlCBjb21wcmVoZW5zaXZlIHVsdHJhLXJlc2lsaWVudCBzZWxlY3RvcnMgKi9cclxuYXBwLXNpZ24taW4gaW5wdXQsXHJcbmFwcC1zaWduLWluICN1c2VybmFtZSxcclxuYXBwLXNpZ24taW4gI3Bhc3N3b3JkLFxyXG5hcHAtc2lnbi1pbiBmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5hcHAtc2lnbi1pbiBmb3JtIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuI2NvbnRhaW5lci1zaWduSW4gaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAwIDE4cHggMCAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UgIWltcG9ydGFudDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuYXBwLXNpZ24taW4gaW5wdXQ6OnBsYWNlaG9sZGVyLFxyXG4jY29udGFpbmVyLXNpZ25JbiBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSkgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuYXBwLXNpZ24taW4gaW5wdXQ6Zm9jdXMsXHJcbiNjb250YWluZXItc2lnbkluIGlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmN2E1OSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAxMjIsIDg5LCAwLjI1KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBQYXNzd29yZCB3cmFwcGVyICovXHJcbmFwcC1zaWduLWluIC5wc3csXHJcbiNjb250YWluZXItc2lnbkluIC5wc3cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmFwcC1zaWduLWluIC5wc3cgaW5wdXQsXHJcbiNjb250YWluZXItc2lnbkluIC5wc3cgaW5wdXQge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEV5ZSB0b2dnbGUgKi9cclxuYXBwLXNpZ24taW4gLnMtaCxcclxuI2NvbnRhaW5lci1zaWduSW4gLnMtaCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmFwcC1zaWduLWluIC5zLWg6aG92ZXIsXHJcbiNjb250YWluZXItc2lnbkluIC5zLWg6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZjdhNTkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogQ2xvc2UgYnV0dG9uICovXHJcbmFwcC1zaWduLWluIC5jbG9zZS1tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICByaWdodDogMThweDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuYXBwLXNpZ24taW4gLmNsb3NlLW1vZGFsOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxufVxyXG5cclxuLyogTG9nIEluIGJ1dHRvbiAqL1xyXG5hcHAtc2lnbi1pbiAuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmY3YTU5IDAlLCAjZmY1MjUyIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjhzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxOHB4IHJnYmEoMjU1LCAxMjIsIDg5LCAwLjMpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmFwcC1zaWduLWluIC5idXR0b246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSgyNTUsIDEyMiwgODksIDAuNSk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wOCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICBhcHAtc2lnbi1pbiBmb3JtIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMzZweCAyMHB4IDI4cHg7XHJcbiAgICB9XHJcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\CP\mki-webapp\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map