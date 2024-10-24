'use strict';

/**
 * oppgave service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::oppgave.oppgave');
