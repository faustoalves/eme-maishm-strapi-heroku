import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBairroBairro extends Schema.CollectionType {
  collectionName: 'bairros';
  info: {
    singularName: 'bairro';
    pluralName: 'bairros';
    displayName: '-- Bairros';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    bairro: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    slug: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bairro.bairro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bairro.bairro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCentralAtendimentoCentralAtendimento
  extends Schema.SingleType {
  collectionName: 'central_atendimentos';
  info: {
    singularName: 'central-atendimento';
    pluralName: 'central-atendimentos';
    displayName: ' - Central de Atendimento';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    botoes: Attribute.Component<'central.botoes-central', true>;
    cta: Attribute.Relation<
      'api::central-atendimento.central-atendimento',
      'oneToOne',
      'api::cta.cta'
    >;
    telefones: Attribute.Component<'central.telefone-central'>;
    tituloRedesSociais: Attribute.String;
    tituloAssessoria: Attribute.String;
    grupoAssessoria: Attribute.Component<'central.assessoria-central', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::central-atendimento.central-atendimento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::central-atendimento.central-atendimento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCidadeCidade extends Schema.CollectionType {
  collectionName: 'cidades';
  info: {
    singularName: 'cidade';
    pluralName: 'cidades';
    displayName: '-- Cidades';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cidade: Attribute.String;
    estado: Attribute.Enumeration<['MG', 'SP']> &
      Attribute.Required &
      Attribute.DefaultTo<'SP'>;
    slug: Attribute.String;
    empreendimentos: Attribute.Relation<
      'api::cidade.cidade',
      'oneToMany',
      'api::empreendimento.empreendimento'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cidade.cidade',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cidade.cidade',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCtaCta extends Schema.CollectionType {
  collectionName: 'ctas';
  info: {
    singularName: 'cta';
    pluralName: 'ctas';
    displayName: '- CTAs';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    nome: Attribute.String & Attribute.Required;
    tipo: Attribute.Enumeration<
      ['central', 'mcmv', 'financiamento', 'fale-com-a-eme']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'central'>;
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    labelBotao: Attribute.String;
    urlBotao: Attribute.String;
    icone: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::cta.cta', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::cta.cta', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiDemonstrativoFinanceiroDemonstrativoFinanceiro
  extends Schema.SingleType {
  collectionName: 'demonstrativo_financeiros';
  info: {
    singularName: 'demonstrativo-financeiro';
    pluralName: 'demonstrativo-financeiros';
    displayName: '- Demonstrativo Financeiro';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    seo: Attribute.Component<'common.seo'> & Attribute.Required;
    titulo: Attribute.String;
    conteudo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    lista: Attribute.Component<'common.download-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::demonstrativo-financeiro.demonstrativo-financeiro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::demonstrativo-financeiro.demonstrativo-financeiro',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmpreendimentoEmpreendimento extends Schema.CollectionType {
  collectionName: 'empreendimentos';
  info: {
    singularName: 'empreendimento';
    pluralName: 'empreendimentos';
    displayName: '- Empreendimento';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    slug: Attribute.String;
    nome: Attribute.String;
    nomeBreadcrumb: Attribute.String;
    marca: Attribute.String &
      Attribute.CustomField<
        'plugin::custom-enum.custom-enum',
        {
          enumType: 'marcas';
        }
      >;
    tipoEmpreendimento: Attribute.String &
      Attribute.CustomField<
        'plugin::custom-enum.custom-enum',
        {
          enumType: 'tipo-empreendimento';
        }
      >;
    statusObra: Attribute.String &
      Attribute.CustomField<
        'plugin::custom-enum.custom-enum',
        {
          enumType: 'status-obra';
        }
      >;
    statusVenda: Attribute.String &
      Attribute.CustomField<
        'plugin::custom-enum.custom-enum',
        {
          enumType: 'status-venda';
        }
      >;
    cidade: Attribute.Relation<
      'api::empreendimento.empreendimento',
      'manyToOne',
      'api::cidade.cidade'
    >;
    bairro: Attribute.Relation<
      'api::empreendimento.empreendimento',
      'oneToOne',
      'api::bairro.bairro'
    >;
    seo: Attribute.Component<'common.seo'> & Attribute.Required;
    bot: Attribute.Component<'empreendimento.bot'> & Attribute.Required;
    banner: Attribute.Component<'empreendimento.banner-empreendimento'> &
      Attribute.Required;
    fotosTitulo: Attribute.String & Attribute.Required;
    fotosItens: Attribute.Component<'empreendimento.fotos', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    plantasTitulo: Attribute.String & Attribute.Required;
    plantasItem: Attribute.Component<'empreendimento.plantas', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    financiamento: Attribute.Component<'empreendimento.financiamento'> &
      Attribute.Required;
    cta: Attribute.Relation<
      'api::empreendimento.empreendimento',
      'oneToOne',
      'api::cta.cta'
    >;
    implantacao: Attribute.Component<'empreendimento.implantacao'> &
      Attribute.Required;
    localizacao: Attribute.Component<'empreendimento.localizacao'> &
      Attribute.Required;
    valoresStatusObra: Attribute.Component<'empreendimento.status-obra'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::empreendimento.empreendimento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::empreendimento.empreendimento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEnvioSucessoEnvioSucesso extends Schema.SingleType {
  collectionName: 'envio_sucessos';
  info: {
    singularName: 'envio-sucesso';
    pluralName: 'envio-sucessos';
    displayName: '-- EnvioSucesso';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    titulo: Attribute.String;
    conteudo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    labelVoltar: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::envio-sucesso.envio-sucesso',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::envio-sucesso.envio-sucesso',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEstelarEstelar extends Schema.SingleType {
  collectionName: 'estelars';
  info: {
    singularName: 'estelar';
    pluralName: 'estelars';
    displayName: '-- CTA Estelar';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    conteudo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    tituloFormulario: Attribute.String;
    labelUsuario: Attribute.String;
    labelSenha: Attribute.String;
    labelEsqueciSenha: Attribute.String;
    labelQueroCadastrar: Attribute.String;
    labelLogin: Attribute.String;
    labelAcessar: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::estelar.estelar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::estelar.estelar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: '- Home';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    seo: Attribute.Component<'common.seo'> & Attribute.Required;
    banner: Attribute.Component<'home.banner-principal'> & Attribute.Required;
    ondeMorar: Attribute.Component<'home.onde-morar'> & Attribute.Required;
    ctas: Attribute.Relation<'api::home.home', 'oneToMany', 'api::cta.cta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiHomeEmpreendimentoHomeEmpreendimento
  extends Schema.SingleType {
  collectionName: 'home_empreendimentos';
  info: {
    singularName: 'home-empreendimento';
    pluralName: 'home-empreendimentos';
    displayName: '- Home Empreendimentos';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    seo: Attribute.Component<'common.seo'> & Attribute.Required;
    ctas: Attribute.Relation<
      'api::home-empreendimento.home-empreendimento',
      'oneToMany',
      'api::cta.cta'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-empreendimento.home-empreendimento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-empreendimento.home-empreendimento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMcmvMcmv extends Schema.SingleType {
  collectionName: 'mcmvs';
  info: {
    singularName: 'mcmv';
    pluralName: 'mcmvs';
    displayName: '- MCMV';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    seo: Attribute.Component<'common.seo'> & Attribute.Required;
    vantagens: Attribute.Component<'mcmv.vantagens-mcmv'> & Attribute.Required;
    banner: Attribute.Component<'mcmv.banner-mcmv'> & Attribute.Required;
    simulacao: Attribute.Component<'mcmv.simulacao-mcmv'> & Attribute.Required;
    faixas: Attribute.Component<'mcmv.faixas-mcmv'>;
    taxasJuros: Attribute.Component<'mcmv.taxas-juros-mcmv'>;
    duvidas: Attribute.Component<'mcmv.duvidas-mcmv'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::mcmv.mcmv', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::mcmv.mcmv', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiNavegacaoNavegacao extends Schema.SingleType {
  collectionName: 'navegacaos';
  info: {
    singularName: 'navegacao';
    pluralName: 'navegacaos';
    displayName: '-- Navegacao';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    whatsAppLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Precisa de ajuda?'>;
    searchLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Pesquise por <strong>apartamentos, financiamento</strong>...'>;
    navbarItens: Attribute.Component<'navegacao.navbar-item', true>;
    footerItens: Attribute.Component<'navegacao.footer-item', true> &
      Attribute.Required;
    socialItens: Attribute.Component<'navegacao.social-item', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::navegacao.navegacao',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::navegacao.navegacao',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNotFoundNotFound extends Schema.SingleType {
  collectionName: 'not_founds';
  info: {
    singularName: 'not-found';
    pluralName: 'not-founds';
    displayName: '-- NotFound';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titulo: Attribute.String;
    conteudo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    imagem: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::not-found.not-found',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::not-found.not-found',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPerguntasFrequentePerguntasFrequente
  extends Schema.SingleType {
  collectionName: 'perguntas_frequentes';
  info: {
    singularName: 'perguntas-frequente';
    pluralName: 'perguntas-frequentes';
    displayName: '- Perguntas Frequentes';
    description: 'Perguntas Frequentes';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    seo: Attribute.Component<'common.seo'> & Attribute.Required;
    titulo: Attribute.String;
    conteudo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    grupos: Attribute.Component<'perguntas-frequentes.grupo', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    cta: Attribute.Relation<
      'api::perguntas-frequente.perguntas-frequente',
      'oneToOne',
      'api::cta.cta'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::perguntas-frequente.perguntas-frequente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::perguntas-frequente.perguntas-frequente',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPoliticaPolitica extends Schema.SingleType {
  collectionName: 'politicas';
  info: {
    singularName: 'politica';
    pluralName: 'politicas';
    displayName: '- Politicas, Relat. Notas';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    seo: Attribute.Component<'common.seo'> & Attribute.Required;
    titulo: Attribute.String;
    conteudo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    lista: Attribute.Component<'common.download-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    cta: Attribute.Relation<
      'api::politica.politica',
      'oneToOne',
      'api::cta.cta'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::politica.politica',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::politica.politica',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPromoRegulamentoPromoRegulamento extends Schema.SingleType {
  collectionName: 'promo_regulamentos';
  info: {
    singularName: 'promo-regulamento';
    pluralName: 'promo-regulamentos';
    displayName: '- Promo & Regulamentos';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    seo: Attribute.Component<'common.seo'> & Attribute.Required;
    titulo: Attribute.String;
    conteudo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    lista: Attribute.Component<'common.download-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    cta: Attribute.Relation<
      'api::promo-regulamento.promo-regulamento',
      'oneToOne',
      'api::cta.cta'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::promo-regulamento.promo-regulamento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::promo-regulamento.promo-regulamento',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSearchSearch extends Schema.SingleType {
  collectionName: 'searches';
  info: {
    singularName: 'search';
    pluralName: 'searches';
    displayName: '-- Search';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    items: Attribute.Component<'search.search-item', true> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::search.search',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::search.search',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSejaUmFornecedorSejaUmFornecedor extends Schema.SingleType {
  collectionName: 'seja_um_fornecedors';
  info: {
    singularName: 'seja-um-fornecedor';
    pluralName: 'seja-um-fornecedors';
    displayName: '-- Seja um Fornecedor';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    titulo: Attribute.String;
    conteudo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    cta: Attribute.Relation<
      'api::seja-um-fornecedor.seja-um-fornecedor',
      'oneToOne',
      'api::cta.cta'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seja-um-fornecedor.seja-um-fornecedor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seja-um-fornecedor.seja-um-fornecedor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSobreSobre extends Schema.SingleType {
  collectionName: 'sobres';
  info: {
    singularName: 'sobre';
    pluralName: 'sobres';
    displayName: '- Sobre';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    seo: Attribute.Component<'common.seo'> & Attribute.Required;
    banner: Attribute.Component<'sobre.banner-sobre'> & Attribute.Required;
    historia: Attribute.Component<'sobre.historia-sobre'> & Attribute.Required;
    ondeEstamos: Attribute.Component<'sobre.onde-estamos-sobre'> &
      Attribute.Required;
    tecnologia: Attribute.Component<'sobre.tecnologia-sobre'> &
      Attribute.Required;
    sustentabilidade: Attribute.Component<'sobre.sustentabilidade-sobre'> &
      Attribute.Required;
    meioAmbiente: Attribute.Component<'sobre.meio-ambiente-sobre'> &
      Attribute.Required;
    premios: Attribute.Component<'sobre.premios-sobre'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sobre.sobre',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sobre.sobre',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVendaSuaAreaVendaSuaArea extends Schema.SingleType {
  collectionName: 'venda_sua_areas';
  info: {
    singularName: 'venda-sua-area';
    pluralName: 'venda-sua-areas';
    displayName: '-- Venda sua \u00C1rea';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    titulo: Attribute.String;
    conteudo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    cta: Attribute.Relation<
      'api::venda-sua-area.venda-sua-area',
      'oneToOne',
      'api::cta.cta'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::venda-sua-area.venda-sua-area',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::venda-sua-area.venda-sua-area',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::bairro.bairro': ApiBairroBairro;
      'api::central-atendimento.central-atendimento': ApiCentralAtendimentoCentralAtendimento;
      'api::cidade.cidade': ApiCidadeCidade;
      'api::cta.cta': ApiCtaCta;
      'api::demonstrativo-financeiro.demonstrativo-financeiro': ApiDemonstrativoFinanceiroDemonstrativoFinanceiro;
      'api::empreendimento.empreendimento': ApiEmpreendimentoEmpreendimento;
      'api::envio-sucesso.envio-sucesso': ApiEnvioSucessoEnvioSucesso;
      'api::estelar.estelar': ApiEstelarEstelar;
      'api::home.home': ApiHomeHome;
      'api::home-empreendimento.home-empreendimento': ApiHomeEmpreendimentoHomeEmpreendimento;
      'api::mcmv.mcmv': ApiMcmvMcmv;
      'api::navegacao.navegacao': ApiNavegacaoNavegacao;
      'api::not-found.not-found': ApiNotFoundNotFound;
      'api::perguntas-frequente.perguntas-frequente': ApiPerguntasFrequentePerguntasFrequente;
      'api::politica.politica': ApiPoliticaPolitica;
      'api::promo-regulamento.promo-regulamento': ApiPromoRegulamentoPromoRegulamento;
      'api::search.search': ApiSearchSearch;
      'api::seja-um-fornecedor.seja-um-fornecedor': ApiSejaUmFornecedorSejaUmFornecedor;
      'api::sobre.sobre': ApiSobreSobre;
      'api::venda-sua-area.venda-sua-area': ApiVendaSuaAreaVendaSuaArea;
    }
  }
}
