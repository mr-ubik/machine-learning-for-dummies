/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

require('es6-promise/auto');  // polyfill Promise on IE

import {
  PageConfig
} from '@jupyterlab/coreutils';

// eslint-disable-next-line
__webpack_public_path__ = PageConfig.getOption('publicUrl');

// This needs to come after __webpack_public_path__ is set.
require('font-awesome/css/font-awesome.min.css');

/**
 * The main entry point for the application.
 */
function main() {
  var JupyterLab = require('@jupyterlab/application').JupyterLab;

  // Get the disabled extensions.
  var disabled = { patterns: [], matches: [] };
  var disabledExtensions = [];
  try {
    var tempDisabled = PageConfig.getOption('disabledExtensions');
    if (tempDisabled) {
      disabledExtensions = JSON.parse(tempDisabled).map(function(pattern) {
        disabled.patterns.push(pattern);
        return { raw: pattern, rule: new RegExp(pattern) };
      });
    }
  } catch (error) {
    console.warn('Unable to parse disabled extensions.', error);
  }

  // Get the deferred extensions.
  var deferred = { patterns: [], matches: [] };
  var deferredExtensions = [];
  var ignorePlugins = [];
  try {
    var tempDeferred = PageConfig.getOption('deferredExtensions');
    if (tempDeferred) {
      deferredExtensions = JSON.parse(tempDeferred).map(function(pattern) {
        deferred.patterns.push(pattern);
        return { raw: pattern, rule: new RegExp(pattern) };
      });
    }
  } catch (error) {
    console.warn('Unable to parse deferred extensions.', error);
  }

  function isDeferred(value) {
    return deferredExtensions.some(function(pattern) {
      return pattern.raw === value || pattern.rule.test(value);
    });
  }

  function isDisabled(value) {
    return disabledExtensions.some(function(pattern) {
      return pattern.raw === value || pattern.rule.test(value);
    });
  }

  var register = [];

  // Handle the registered mime extensions.
  var mimeExtensions = [];
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/json-extension')) {
      disabled.matches.push('@jupyterlab/json-extension');
    } else {
      var module = require('@jupyterlab/json-extension/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/pdf-extension')) {
      disabled.matches.push('@jupyterlab/pdf-extension');
    } else {
      var module = require('@jupyterlab/pdf-extension/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/vdom-extension')) {
      disabled.matches.push('@jupyterlab/vdom-extension');
    } else {
      var module = require('@jupyterlab/vdom-extension/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/vega2-extension')) {
      disabled.matches.push('@jupyterlab/vega2-extension');
    } else {
      var module = require('@jupyterlab/vega2-extension/');
      var extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          mimeExtensions.push(plugin);
        });
      } else {
        mimeExtensions.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi

  // Handled the registered standard extensions.
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/application-extension')) {
      disabled.matches.push('@jupyterlab/application-extension');
    } else {
      module = require('@jupyterlab/application-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/apputils-extension')) {
      disabled.matches.push('@jupyterlab/apputils-extension');
    } else {
      module = require('@jupyterlab/apputils-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/codemirror-extension')) {
      disabled.matches.push('@jupyterlab/codemirror-extension');
    } else {
      module = require('@jupyterlab/codemirror-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/completer-extension')) {
      disabled.matches.push('@jupyterlab/completer-extension');
    } else {
      module = require('@jupyterlab/completer-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/console-extension')) {
      disabled.matches.push('@jupyterlab/console-extension');
    } else {
      module = require('@jupyterlab/console-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/csvviewer-extension')) {
      disabled.matches.push('@jupyterlab/csvviewer-extension');
    } else {
      module = require('@jupyterlab/csvviewer-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/docmanager-extension')) {
      disabled.matches.push('@jupyterlab/docmanager-extension');
    } else {
      module = require('@jupyterlab/docmanager-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/faq-extension')) {
      disabled.matches.push('@jupyterlab/faq-extension');
    } else {
      module = require('@jupyterlab/faq-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/filebrowser-extension')) {
      disabled.matches.push('@jupyterlab/filebrowser-extension');
    } else {
      module = require('@jupyterlab/filebrowser-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/fileeditor-extension')) {
      disabled.matches.push('@jupyterlab/fileeditor-extension');
    } else {
      module = require('@jupyterlab/fileeditor-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/help-extension')) {
      disabled.matches.push('@jupyterlab/help-extension');
    } else {
      module = require('@jupyterlab/help-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/imageviewer-extension')) {
      disabled.matches.push('@jupyterlab/imageviewer-extension');
    } else {
      module = require('@jupyterlab/imageviewer-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/inspector-extension')) {
      disabled.matches.push('@jupyterlab/inspector-extension');
    } else {
      module = require('@jupyterlab/inspector-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/launcher-extension')) {
      disabled.matches.push('@jupyterlab/launcher-extension');
    } else {
      module = require('@jupyterlab/launcher-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/mainmenu-extension')) {
      disabled.matches.push('@jupyterlab/mainmenu-extension');
    } else {
      module = require('@jupyterlab/mainmenu-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/markdownviewer-extension')) {
      disabled.matches.push('@jupyterlab/markdownviewer-extension');
    } else {
      module = require('@jupyterlab/markdownviewer-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/mathjax2-extension')) {
      disabled.matches.push('@jupyterlab/mathjax2-extension');
    } else {
      module = require('@jupyterlab/mathjax2-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/notebook-extension')) {
      disabled.matches.push('@jupyterlab/notebook-extension');
    } else {
      module = require('@jupyterlab/notebook-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/rendermime-extension')) {
      disabled.matches.push('@jupyterlab/rendermime-extension');
    } else {
      module = require('@jupyterlab/rendermime-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/running-extension')) {
      disabled.matches.push('@jupyterlab/running-extension');
    } else {
      module = require('@jupyterlab/running-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/settingeditor-extension')) {
      disabled.matches.push('@jupyterlab/settingeditor-extension');
    } else {
      module = require('@jupyterlab/settingeditor-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/shortcuts-extension')) {
      disabled.matches.push('@jupyterlab/shortcuts-extension');
    } else {
      module = require('@jupyterlab/shortcuts-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/tabmanager-extension')) {
      disabled.matches.push('@jupyterlab/tabmanager-extension');
    } else {
      module = require('@jupyterlab/tabmanager-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/terminal-extension')) {
      disabled.matches.push('@jupyterlab/terminal-extension');
    } else {
      module = require('@jupyterlab/terminal-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/theme-dark-extension')) {
      disabled.matches.push('@jupyterlab/theme-dark-extension');
    } else {
      module = require('@jupyterlab/theme-dark-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/theme-light-extension')) {
      disabled.matches.push('@jupyterlab/theme-light-extension');
    } else {
      module = require('@jupyterlab/theme-light-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi
  try {
    if (isDeferred('')) {
      deferred.matches.push('');
      ignorePlugins.push('');
    }
    if (isDisabled('@jupyterlab/tooltip-extension')) {
      disabled.matches.push('@jupyterlab/tooltip-extension');
    } else {
      module = require('@jupyterlab/tooltip-extension/');
      extension = module.default;

      // Handle CommonJS exports.
      if (!module.hasOwnProperty('__esModule')) {
        extension = module;
      }

      if (Array.isArray(extension)) {
        extension.forEach(function(plugin) {
          if (isDeferred(plugin.id)) {
            deferred.matches.push(plugin.id);
            ignorePlugins.push(plugin.id);
          }
          if (isDisabled(plugin.id)) {
            disabled.matches.push(plugin.id);
            return;
          }
          register.push(plugin);
        });
      } else {
        register.push(extension);
      }
    }
  } catch (e) {
    console.error(e);
  }
  // eslint-disable-next-line semi

  var lab = new JupyterLab({
    mimeExtensions: mimeExtensions,
    disabled: disabled,
    deferred: deferred
  });
  register.forEach(function(item) { lab.registerPluginModule(item); });
  lab.start({ ignorePlugins: ignorePlugins });

  // Expose global lab instance when in dev mode.
  if ((PageConfig.getOption('devMode') || '').toLowerCase() === 'true') {
    window.lab = lab;
  }

  // Handle a selenium test.
  var seleniumTest = PageConfig.getOption('seleniumTest');
  if (seleniumTest.toLowerCase() === 'true') {
    var caught_errors = [];
    window.onerror = function(msg, url, line, col, error) {
      caught_errors.push(String(error));
    };
    console.error = function(message) {
      caught_errors.push(String(message));
    };
    lab.restored.then(function() {
      var el = document.createElement('div');
      el.id = 'seleniumResult';
      el.textContent = JSON.stringify(caught_errors);
      document.body.appendChild(el);
    });
  }

}

window.addEventListener('load', main);
