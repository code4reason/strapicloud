'use strict';

/**
 * kommune service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kommune.kommune');
