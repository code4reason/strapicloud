import type { Attribute, Schema } from '@strapi/strapi';

export interface BildeLink extends Schema.Component {
  collectionName: 'components_bilde_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Beskrivelse: Attribute.Text;
    Tittel: Attribute.String;
    URL: Attribute.String;
  };
}

export interface GeometryType extends Schema.Component {
  collectionName: 'components_geometry_types';
  info: {
    description: '';
    displayName: 'type';
  };
  attributes: {
    coordinates: Attribute.JSON;
    type: Attribute.Enumeration<
      [
        'Point',
        'MultiPoint',
        'LineString',
        'MultiLineString',
        'Polygon',
        'MultiPolygon',
        'GeometryCollection'
      ]
    >;
  };
}

export interface PropertiesName extends Schema.Component {
  collectionName: 'components_properties_names';
  info: {
    description: '';
    displayName: 'name';
  };
  attributes: {
    bilde: Attribute.String;
    billedtekst: Attribute.String;
    bredde: Attribute.String;
    dato: Attribute.String;
    forbokstav: Attribute.String;
    Forklaring: Attribute.Text;
    fotograf: Attribute.String;
    Historie: Attribute.Text;
    kart: Attribute.String;
    katblad: Attribute.String;
    kilde: Attribute.String;
    kommune: Attribute.String;
    land: Attribute.String;
    lat: Attribute.String;
    lengde: Attribute.String;
    lond_lat: Attribute.String;
    lond_long: Attribute.String;
    long: Attribute.String;
    navn: Attribute.String;
    nett: Attribute.String;
    nett_hist: Attribute.String;
    pin: Attribute.String;
    seksjon: Attribute.String;
    stripe: Attribute.Decimal;
    tillegg: Attribute.String;
    type: Attribute.String;
    utm: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'bilde.link': BildeLink;
      'geometry.type': GeometryType;
      'properties.name': PropertiesName;
    }
  }
}
