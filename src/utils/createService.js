'use strict';

const { createService } = require('@micro-app/cli');
const { SKIP_TARGET, BUILT_IN } = require('../constants');

module.exports = function() {
    const service = createService({ target: SKIP_TARGET });

    const WEBPACK_PLUGIN_ID = '@micro-app/plugin-webpack';
    if (!service.hasPlugin(WEBPACK_PLUGIN_ID)) {
        // 注册 webapck 插件
        service.registerPlugin({
            id: WEBPACK_PLUGIN_ID,
            [BUILT_IN]: true,
        });
    }

    return service;
};