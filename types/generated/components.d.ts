import type { Schema, Struct } from '@strapi/strapi';

export interface ClientClient extends Struct.ComponentSchema {
  collectionName: 'components_client_clients';
  info: {
    displayName: 'client';
    icon: 'emotionHappy';
  };
  attributes: {
    client: Schema.Attribute.String;
  };
}

export interface ContactItemContactItem extends Struct.ComponentSchema {
  collectionName: 'components_contact_item_contact_items';
  info: {
    displayName: 'contact-item';
    icon: 'apps';
  };
  attributes: {
    displayText: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    platform: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['social', 'email', 'phone', 'file']>;
  };
}

export interface EducationItemEducationItem extends Struct.ComponentSchema {
  collectionName: 'components_education_item_education_items';
  info: {
    description: '';
    displayName: 'education-item';
    icon: 'book';
  };
  attributes: {
    course: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    institution: Schema.Attribute.String & Schema.Attribute.Required;
    period: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ExperienceItemExperienceItem extends Struct.ComponentSchema {
  collectionName: 'components_experience_item_experience_items';
  info: {
    description: '';
    displayName: 'experience-item';
    icon: 'cog';
  };
  attributes: {
    clients: Schema.Attribute.Component<'client.client', true>;
    company: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    descriptionClient: Schema.Attribute.String;
    period: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    technologies: Schema.Attribute.Component<'technologie.technologie', true>;
  };
}

export interface GalleryGallery extends Struct.ComponentSchema {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'gallery';
    icon: 'landscape';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
  };
}

export interface IconActionIconAction extends Struct.ComponentSchema {
  collectionName: 'components_icon_action_icon_actions';
  info: {
    displayName: 'icon-action';
    icon: 'crown';
  };
  attributes: {
    actionType: Schema.Attribute.Enumeration<
      ['link', 'email', 'phone', 'modal', 'anchor']
    >;
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LanguageItemLanguageItem extends Struct.ComponentSchema {
  collectionName: 'components_language_item_language_items';
  info: {
    displayName: 'language-item';
    icon: 'seed';
  };
  attributes: {
    level: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'cloud';
  };
  attributes: {
    isActived: Schema.Attribute.Boolean;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['self', 'external']>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TechnologieTechnologie extends Struct.ComponentSchema {
  collectionName: 'components_technologie_technologies';
  info: {
    displayName: 'technologie';
    icon: 'server';
  };
  attributes: {
    technologie: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TopicTopic extends Struct.ComponentSchema {
  collectionName: 'components_topic_topics';
  info: {
    description: '';
    displayName: 'topics';
    icon: 'code';
  };
  attributes: {
    topic: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'client.client': ClientClient;
      'contact-item.contact-item': ContactItemContactItem;
      'education-item.education-item': EducationItemEducationItem;
      'experience-item.experience-item': ExperienceItemExperienceItem;
      'gallery.gallery': GalleryGallery;
      'icon-action.icon-action': IconActionIconAction;
      'language-item.language-item': LanguageItemLanguageItem;
      'link.link': LinkLink;
      'technologie.technologie': TechnologieTechnologie;
      'topic.topic': TopicTopic;
    }
  }
}
