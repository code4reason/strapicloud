import type { Schema, Struct } from '@strapi/strapi';

export interface BildeLink extends Struct.ComponentSchema {
  collectionName: 'components_bilde_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Beskrivelse: Schema.Attribute.Text;
    Tittel: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface GeometryType extends Struct.ComponentSchema {
  collectionName: 'components_geometry_types';
  info: {
    description: '';
    displayName: 'type';
  };
  attributes: {
    coordinates: Schema.Attribute.JSON;
    type: Schema.Attribute.Enumeration<
      [
        'Point',
        'MultiPoint',
        'LineString',
        'MultiLineString',
        'Polygon',
        'MultiPolygon',
        'GeometryCollection',
      ]
    >;
  };
}

export interface PropertiesName extends Struct.ComponentSchema {
  collectionName: 'components_properties_names';
  info: {
    description: '';
    displayName: 'name';
  };
  attributes: {
    bilde: Schema.Attribute.String;
    billedtekst: Schema.Attribute.String;
    bredde: Schema.Attribute.String;
    dato: Schema.Attribute.String;
    forbokstav: Schema.Attribute.String;
    Forklaring: Schema.Attribute.Text;
    fotograf: Schema.Attribute.String;
    Historie: Schema.Attribute.Text;
    kart: Schema.Attribute.String;
    katblad: Schema.Attribute.String;
    kilde: Schema.Attribute.String;
    kommune: Schema.Attribute.String;
    land: Schema.Attribute.String;
    lat: Schema.Attribute.String;
    lengde: Schema.Attribute.String;
    lond_lat: Schema.Attribute.String;
    lond_long: Schema.Attribute.String;
    long: Schema.Attribute.String;
    navn: Schema.Attribute.String;
    nett: Schema.Attribute.String;
    nett_hist: Schema.Attribute.String;
    pin: Schema.Attribute.String;
    seksjon: Schema.Attribute.String;
    stripe: Schema.Attribute.Decimal;
    tillegg: Schema.Attribute.String;
    type: Schema.Attribute.String;
    utm: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bilde.link': BildeLink;
      'geometry.type': GeometryType;
      'properties.name': PropertiesName;
    }
  }
}
