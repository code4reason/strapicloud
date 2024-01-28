import type { Schema, Attribute } from '@strapi/strapi';

export interface GeometryType extends Schema.Component {
  collectionName: 'components_geometry_types';
  info: {
    displayName: 'type';
    description: '';
  };
  attributes: {
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
    coordinates: Attribute.JSON;
  };
}

export interface PropertiesName extends Schema.Component {
  collectionName: 'components_properties_names';
  info: {
    displayName: 'name';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    lond_lat: Attribute.String;
    lond_long: Attribute.String;
    tillegg: Attribute.String;
    type: Attribute.String;
    pin: Attribute.String;
    utm: Attribute.String;
    katblad: Attribute.String;
    kart: Attribute.String;
    bredde: Attribute.String;
    lengde: Attribute.String;
    forklaring: Attribute.Text;
    historie: Attribute.Text;
    dato: Attribute.String;
    kilde: Attribute.String;
    lat: Attribute.String;
    long: Attribute.String;
    stripe: Attribute.Decimal;
    seksjon: Attribute.String;
    bilde: Attribute.String;
    nett: Attribute.String;
    nett_hist: Attribute.String;
    kommune: Attribute.String;
    billedtekst: Attribute.String;
    fotograf: Attribute.String;
    land: Attribute.String;
    forbokstav: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'geometry.type': GeometryType;
      'properties.name': PropertiesName;
    }
  }
}
