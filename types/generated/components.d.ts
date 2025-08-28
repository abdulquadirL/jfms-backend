import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    displayName: 'Card Grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksContactSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_sections';
  info: {
    displayName: 'Contact Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFeaturedArticles extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_articles';
  info: {
    displayName: 'Featured Articles';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksNews extends Struct.ComponentSchema {
  collectionName: 'components_blocks_news';
  info: {
    displayName: 'News';
  };
  attributes: {
    description: Schema.Attribute.Text;
    events: Schema.Attribute.Component<'blocks.news-card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksNewsCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_news_cards';
  info: {
    displayName: 'News Card';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    newsLink: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface BlocksServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_section_s';
  info: {
    displayName: 'Service Section ';
  };
  attributes: {
    anchorLink: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    service: Schema.Attribute.Component<'blocks.services-card', true>;
    subheading: Schema.Attribute.Text;
  };
}

export interface BlocksServicesCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services_cards';
  info: {
    displayName: 'Services Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'feature.features', true>;
    icon: Schema.Attribute.Enumeration<
      [
        'TRACTOR_ICON',
        'TRUCK_ICON',
        'SETTINGS_ICON',
        'USERS_ICON',
        'WRENCH_ICON',
        'MICROPHONES_ICON',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface FeatureFeatures extends Struct.ComponentSchema {
  collectionName: 'components_feature_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    featureList: Schema.Attribute.RichText;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navitems: Schema.Attribute.Component<'shared.link', true>;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navitems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      [
        'TRACTOR_ICON',
        'HEADPHONES_ICON',
        'SETTINGS_ICON',
        'USERS_ICON',
        'WRENCH_ICON',
        'TRUCK_ICON',
      ]
    >;
    text: Schema.Attribute.Text;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card-grid': BlocksCardGrid;
      'blocks.contact-section': BlocksContactSection;
      'blocks.featured-articles': BlocksFeaturedArticles;
      'blocks.hero': BlocksHero;
      'blocks.news': BlocksNews;
      'blocks.news-card': BlocksNewsCard;
      'blocks.service-section': BlocksServiceSection;
      'blocks.services-card': BlocksServicesCard;
      'feature.features': FeatureFeatures;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.card': SharedCard;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
    }
  }
}
