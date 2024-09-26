'use strict';

/**
 * tomte-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tomte-status.tomte-status');
