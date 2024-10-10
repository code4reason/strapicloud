import type { Struct, Schema } from '@strapi/strapi';

export interface PropertiesName extends Struct.ComponentSchema {
  collectionName: 'components_properties_names';
  info: {
    displayName: 'name';
    description: '';
  };
  attributes: {
    navn: Schema.Attribute.String;
    lond_lat: Schema.Attribute.String;
    lond_long: Schema.Attribute.String;
    tillegg: Schema.Attribute.String;
    type: Schema.Attribute.String;
    pin: Schema.Attribute.String;
    utm: Schema.Attribute.String;
    katblad: Schema.Attribute.String;
    kart: Schema.Attribute.String;
    bredde: Schema.Attribute.String;
    lengde: Schema.Attribute.String;
    Forklaring: Schema.Attribute.Text;
    Historie: Schema.Attribute.Text;
    dato: Schema.Attribute.String;
    kilde: Schema.Attribute.String;
    lat: Schema.Attribute.String;
    long: Schema.Attribute.String;
    stripe: Schema.Attribute.Decimal;
    seksjon: Schema.Attribute.String;
    bilde: Schema.Attribute.String;
    nett: Schema.Attribute.String;
    nett_hist: Schema.Attribute.String;
    kommune: Schema.Attribute.String;
    billedtekst: Schema.Attribute.String;
    fotograf: Schema.Attribute.String;
    land: Schema.Attribute.String;
    forbokstav: Schema.Attribute.String;
  };
}

export interface GeometryType extends Struct.ComponentSchema {
  collectionName: 'components_geometry_types';
  info: {
    displayName: 'type';
    description: '';
  };
  attributes: {
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
    coordinates: Schema.Attribute.JSON;
  };
}

export interface BildeLink extends Struct.ComponentSchema {
  collectionName: 'components_bilde_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Tittel: Schema.Attribute.String;
    Beskrivelse: Schema.Attribute.Text;
    URL: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'properties.name': PropertiesName;
      'geometry.type': GeometryType;
      'bilde.link': BildeLink;
    }
  }
}
