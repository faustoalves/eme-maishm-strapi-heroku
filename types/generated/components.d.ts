import type { Schema, Attribute } from '@strapi/strapi';

export interface CentralAssessoriaCentral extends Schema.Component {
  collectionName: 'components_central_assessoria_centrals';
  info: {
    displayName: 'AssessoriaCentral';
    description: '';
  };
  attributes: {
    empresa: Attribute.String;
    itens: Attribute.Component<'central.item-empresa-assessoria', true>;
  };
}

export interface CentralBotoesCentral extends Schema.Component {
  collectionName: 'components_central_botoes_centrals';
  info: {
    displayName: 'BotoesCentral';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    icone: Attribute.String &
      Attribute.CustomField<
        'plugin::custom-enum.custom-enum',
        {
          enumType: 'destaque-produtos';
        }
      >;
  };
}

export interface CentralItemEmpresaAssessoria extends Schema.Component {
  collectionName: 'components_central_item_empresa_assessorias';
  info: {
    displayName: 'itemEmpresaAssessoria';
  };
  attributes: {
    nome: Attribute.String;
    email: Attribute.String;
    telefone: Attribute.String;
  };
}

export interface CentralTelefoneCentral extends Schema.Component {
  collectionName: 'components_central_telefone_centrals';
  info: {
    displayName: 'TelefoneCentral';
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
    telefonePrincipalNumero: Attribute.String;
    telefonePrincipalInformacao: Attribute.String;
    telefoneSecundarioNumero: Attribute.String;
    telefoneSecundarioInformacao: Attribute.String;
    escritorioLabel: Attribute.String;
    escritorioLocal: Attribute.String;
    escritorioEndereco: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface CommonBotao extends Schema.Component {
  collectionName: 'components_common_botaos';
  info: {
    displayName: 'Botao';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface CommonDownloadItem extends Schema.Component {
  collectionName: 'components_common_download_items';
  info: {
    displayName: 'downloadItem';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface CommonIconeLabel extends Schema.Component {
  collectionName: 'components_common_icone_labels';
  info: {
    displayName: 'IconeLabel';
  };
  attributes: {
    icone: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::custom-enum.custom-enum',
        {
          enumType: 'destaque-produtos';
        }
      >;
    label: Attribute.String & Attribute.Required;
  };
}

export interface CommonImageIconeLabel extends Schema.Component {
  collectionName: 'components_common_image_icone_labels';
  info: {
    displayName: 'ImageIconeLabel';
    description: '';
  };
  attributes: {
    icone: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::custom-enum.custom-enum',
        {
          enumType: 'destaque-produtos';
        }
      >;
    label: Attribute.String & Attribute.Required;
    imagem: Attribute.Media & Attribute.Required;
  };
}

export interface CommonLabel extends Schema.Component {
  collectionName: 'components_common_labels';
  info: {
    displayName: 'Label';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
  };
}

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    canonical: Attribute.String;
    indexFollow: Attribute.Enumeration<
      ['indexFollow', 'indexNoFollow', 'noIndexFollow', 'noIndexNoFollow']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'indexFollow'>;
    shareImage: Attribute.Media & Attribute.Required;
  };
}

export interface EmpreendimentoBannerEmpreendimento extends Schema.Component {
  collectionName: 'components_empreendimento_banner_empreendimentos';
  info: {
    displayName: 'BannerEmpreendimento';
    description: '';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    iconesDestaques: Attribute.Component<'common.icone-label', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 2;
        max: 2;
      }>;
    precoInicial: Attribute.String;
    background: Attribute.Media & Attribute.Required;
    logoEmpreendimento: Attribute.Media;
  };
}

export interface EmpreendimentoBot extends Schema.Component {
  collectionName: 'components_empreendimento_bot';
  info: {
    displayName: 'Bot Empreendimento';
  };
  attributes: {
    info: Attribute.String;
  };
}

export interface EmpreendimentoFinanciamento extends Schema.Component {
  collectionName: 'components_empreendimento_financiamento';
  info: {
    displayName: 'FinanciamentoEmpreendimento';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    tituloValorInicial: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'<strong>Apartamentos</strong> a partir de'>;
    valorPrecoInicial: Attribute.String;
    tituloRendaFamiliar: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'<strong>Renda familiar</strong> a partir de'>;
    valorRendaFamiliar: Attribute.String & Attribute.Required;
    observacao: Attribute.String &
      Attribute.DefaultTo<'*Consulte condi\u00E7\u00F5es com a equipe HM.'>;
    botoes: Attribute.Component<'common.botao', true> &
      Attribute.SetMinMax<{
        min: 1;
        max: 3;
      }>;
    imagem: Attribute.Media & Attribute.Required;
  };
}

export interface EmpreendimentoFotos extends Schema.Component {
  collectionName: 'components_empreendimento_fotos';
  info: {
    displayName: 'Fotos Empreendimento';
  };
  attributes: {
    titulo: Attribute.String;
    grupos: Attribute.Component<'common.image-icone-label', true> &
      Attribute.Required;
  };
}

export interface EmpreendimentoImplantacao extends Schema.Component {
  collectionName: 'components_empreendimento_implantacaos';
  info: {
    displayName: 'Implantacao Empreendimento';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    imagem: Attribute.Media & Attribute.Required;
    itens: Attribute.Component<'common.label', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface EmpreendimentoLocalizacaoEndereco extends Schema.Component {
  collectionName: 'components_empreendimento_localizacao_enderecos';
  info: {
    displayName: 'Localizacao Endereco';
  };
  attributes: {
    tipoEndereco: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Endere\u00E7o do <strong>empreendimento e decorado</strong>'>;
    endereco: Attribute.String & Attribute.Required & Attribute.DefaultTo<''>;
    wazeLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Waze'>;
    wazeLink: Attribute.String;
    googleMapsLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'google maps'>;
    googleMapsLink: Attribute.String;
  };
}

export interface EmpreendimentoLocalizacao extends Schema.Component {
  collectionName: 'components_empreendimento_localizacaos';
  info: {
    displayName: 'Localizacao Empreendimento';
  };
  attributes: {
    titulo: Attribute.String;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    enderecos: Attribute.Component<
      'empreendimento.localizacao-endereco',
      true
    > &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    imagem: Attribute.Media & Attribute.Required;
  };
}

export interface EmpreendimentoPlantas extends Schema.Component {
  collectionName: 'components_empreendimento_plantas';
  info: {
    displayName: 'Plantas Empreendimento';
  };
  attributes: {
    categoria: Attribute.String;
    titulo: Attribute.String;
    subtitulo: Attribute.String;
    destaquesIcones: Attribute.Component<'common.icone-label', true> &
      Attribute.Required;
    imagem: Attribute.Media & Attribute.Required;
  };
}

export interface EmpreendimentoStatusObraItem extends Schema.Component {
  collectionName: 'components_empreendimento_status_obra_items';
  info: {
    displayName: 'StatusObraItem';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    percentual: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }>;
  };
}

export interface EmpreendimentoStatusObra extends Schema.Component {
  collectionName: 'components_empreendimento_status_obras';
  info: {
    displayName: 'StatusObra';
  };
  attributes: {
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'confira o <strong>andamento da obra</strong>'>;
    empreendimento: Attribute.String;
    percentual: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }>;
    previsaoConclusao: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Previs\u00E3o de conclus\u00E3o: <strong>00/00/0000</strong>'>;
    fases: Attribute.Component<'empreendimento.status-obra-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    urlVideoYoutube: Attribute.String;
  };
}

export interface EmpreendimentosJeitoMorarItem extends Schema.Component {
  collectionName: 'components_empreendimentos_jeito_morar_items';
  info: {
    displayName: 'jeitoMorarItem';
  };
  attributes: {
    marca: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::custom-enum.custom-enum',
        {
          enumType: 'marcas';
        }
      >;
    imagemTopo: Attribute.Media & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    destaques: Attribute.Component<'common.icone-label', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface EmpreendimentosJeitoMorar extends Schema.Component {
  collectionName: 'components_empreendimentos_jeito_morars';
  info: {
    displayName: 'JeitoMorar';
    description: '';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    labelVerIMoveis: Attribute.String & Attribute.Required;
  };
}

export interface HomeBannerPrincipalItem extends Schema.Component {
  collectionName: 'components_home_banner_principal_items';
  info: {
    displayName: 'BannerPrincipalItem';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    mobileImage: Attribute.Media & Attribute.Required;
    desktopImage: Attribute.Media & Attribute.Required;
  };
}

export interface HomeBannerPrincipal extends Schema.Component {
  collectionName: 'components_home_banner_principals';
  info: {
    displayName: 'BannerPrincipal';
  };
  attributes: {
    lista: Attribute.Component<'home.banner-principal-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }>;
  };
}

export interface HomeOndeMorar extends Schema.Component {
  collectionName: 'components_home_onde_morars';
  info: {
    displayName: 'OndeMorar';
  };
  attributes: {
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Onde voc\u00EA quer morar?'>;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    labelSelecione: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Selecione uma cidade'>;
    labelPesquisar: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'pesquisar'>;
  };
}

export interface McmvBannerMcmv extends Schema.Component {
  collectionName: 'components_mcmv_banner_mcmvs';
  info: {
    displayName: 'BannerMCMV';
    description: '';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    imagem: Attribute.Media & Attribute.Required;
    botoes: Attribute.Component<'common.botao', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface McmvDuvidasMcmv extends Schema.Component {
  collectionName: 'components_mcmv_duvidas_mcmvs';
  info: {
    displayName: 'duvidasMCMV';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    lista: Attribute.Component<'perguntas-frequentes.item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    botao: Attribute.Component<'common.botao'> & Attribute.Required;
  };
}

export interface McmvFaixaItemsMcmv extends Schema.Component {
  collectionName: 'components_mcmv_faixa_items_mcmvs';
  info: {
    displayName: 'FaixaItemsMCMV';
  };
  attributes: {
    faixa: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface McmvFaixasMcmv extends Schema.Component {
  collectionName: 'components_mcmv_faixas_mcmvs';
  info: {
    displayName: 'FaixasMCMV';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    lista: Attribute.Component<'mcmv.faixa-items-mcmv', true>;
    botao: Attribute.Component<'common.botao'> & Attribute.Required;
  };
}

export interface McmvSimulacaoMcmv extends Schema.Component {
  collectionName: 'components_mcmv_simulacao_mcmvs';
  info: {
    displayName: 'SimulacaoMCMV';
  };
  attributes: {
    imagem: Attribute.Media & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    botao: Attribute.Component<'common.botao'> & Attribute.Required;
  };
}

export interface McmvTaxasJurosMcmv extends Schema.Component {
  collectionName: 'components_mcmv_taxas_juros_mcmvs';
  info: {
    displayName: 'TaxasJurosMCMV';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    tabela: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    botao: Attribute.Component<'common.botao'> & Attribute.Required;
  };
}

export interface McmvVantagensMcmv extends Schema.Component {
  collectionName: 'components_mcmv_vantagens_mcmvs';
  info: {
    displayName: 'VantagensMCMV';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    lista: Attribute.Component<'mcmv.vatagens-item-mcmv', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 3;
      }>;
  };
}

export interface McmvVatagensItemMcmv extends Schema.Component {
  collectionName: 'components_mcmv_vatagens_item_mcmvs';
  info: {
    displayName: 'VatagensItemMCMV';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    icone: Attribute.Media & Attribute.Required;
  };
}

export interface NavegacaoFooterItem extends Schema.Component {
  collectionName: 'components_navegacao_footer_items';
  info: {
    displayName: 'footerItem';
  };
  attributes: {
    desktopCol: Attribute.Enumeration<['col1', 'col2', 'col3', 'col4']> &
      Attribute.Required &
      Attribute.DefaultTo<'col1'>;
    label: Attribute.String & Attribute.Required;
    sublabel: Attribute.String;
    link: Attribute.String;
    itens: Attribute.Component<'navegacao.navbar-sub-item', true>;
  };
}

export interface NavegacaoNavbarItem extends Schema.Component {
  collectionName: 'components_navegacao_navbar_items';
  info: {
    displayName: 'navbarItem';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String;
    items: Attribute.Component<'navegacao.navbar-sub-item', true>;
  };
}

export interface NavegacaoNavbarSubItem extends Schema.Component {
  collectionName: 'components_navegacao_navbar_sub_items';
  info: {
    displayName: 'navbarSubItem';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface NavegacaoSocialItem extends Schema.Component {
  collectionName: 'components_navegacao_social_items';
  info: {
    displayName: 'socialItem';
  };
  attributes: {
    network: Attribute.Enumeration<
      ['whatsapp', 'facebook', 'instagram', 'youtube', 'pinterest', 'linkedin']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'whatsapp'>;
    link: Attribute.String;
  };
}

export interface PerguntasFrequentesGrupo extends Schema.Component {
  collectionName: 'components_perguntas_frequentes_grupos';
  info: {
    displayName: 'PerguntasFrequentesGrupo';
    description: '';
  };
  attributes: {
    icone: Attribute.String &
      Attribute.CustomField<
        'plugin::custom-enum.custom-enum',
        {
          enumType: 'perguntas-frequentes';
        }
      >;
    titulo: Attribute.String & Attribute.Required;
    items: Attribute.Component<'perguntas-frequentes.item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface PerguntasFrequentesItem extends Schema.Component {
  collectionName: 'components_perguntas_frequentes_items';
  info: {
    displayName: 'PerguntasFrequentesItem';
    description: '';
  };
  attributes: {
    pergunta: Attribute.String & Attribute.Required;
    resposta: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface SearchSearchItem extends Schema.Component {
  collectionName: 'components_search_search_items';
  info: {
    displayName: 'searchItem';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    href: Attribute.String;
    keyword: Attribute.Text;
  };
}

export interface SobreBannerSobreDestaques extends Schema.Component {
  collectionName: 'components_sobre_banner_sobre_destaques';
  info: {
    displayName: 'BannerSobreDestaques';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.Text & Attribute.Required;
  };
}

export interface SobreBannerSobre extends Schema.Component {
  collectionName: 'components_sobre_banner_sobres';
  info: {
    displayName: 'BannerSobre';
    description: '';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    destaques: Attribute.Component<'sobre.banner-sobre-destaques', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    desktopBackground: Attribute.Media & Attribute.Required;
    mobileBackground: Attribute.Media;
  };
}

export interface SobreBlocoTransformacao extends Schema.Component {
  collectionName: 'components_sobre_bloco_transformacaos';
  info: {
    displayName: 'blocoTransformacao';
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
    botao: Attribute.Component<'common.botao'>;
    destaques: Attribute.Component<'sobre.banner-sobre-destaques', true> &
      Attribute.SetMinMax<{
        min: 1;
        max: 2;
      }>;
  };
}

export interface SobreHistoriaItemSobre extends Schema.Component {
  collectionName: 'components_sobre_historia_item_sobres';
  info: {
    displayName: 'HistoriaItemSobre';
  };
  attributes: {
    imagem: Attribute.Media & Attribute.Required;
    data: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface SobreHistoriaSobre extends Schema.Component {
  collectionName: 'components_sobre_historia_sobres';
  info: {
    displayName: 'HistoriaSobre';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    fatos: Attribute.Component<'sobre.historia-item-sobre', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface SobreInovacaoSobre extends Schema.Component {
  collectionName: 'components_sobre_inovacao_sobres';
  info: {
    displayName: 'InovacaoSobre';
  };
  attributes: {
    titluo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    imagem: Attribute.Media & Attribute.Required;
  };
}

export interface SobreMeioAmbienteItemSobre extends Schema.Component {
  collectionName: 'components_sobre_meio_ambiente_item_sobres';
  info: {
    displayName: 'MeioAmbienteItemSobre';
  };
  attributes: {
    imagem: Attribute.Media & Attribute.Required;
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface SobreMeioAmbienteSobre extends Schema.Component {
  collectionName: 'components_sobre_meio_ambiente_sobres';
  info: {
    displayName: 'MeioAmbienteSobre';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    lista: Attribute.Component<'sobre.meio-ambiente-item-sobre', true> &
      Attribute.Required;
  };
}

export interface SobreOndeEstamosSobre extends Schema.Component {
  collectionName: 'components_sobre_onde_estamos_sobres';
  info: {
    displayName: 'OndeEstamosSobre';
    description: '';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    desktopBackground: Attribute.Media & Attribute.Required;
    mobileBackground: Attribute.Media & Attribute.Required;
  };
}

export interface SobrePremiosItemSobre extends Schema.Component {
  collectionName: 'components_sobre_premios_item_sobres';
  info: {
    displayName: 'PremiosItemSobre';
  };
  attributes: {
    categoria: Attribute.Enumeration<['certificacoes', 'premios']> &
      Attribute.Required &
      Attribute.DefaultTo<'certificacoes'>;
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    imagem: Attribute.Media & Attribute.Required;
  };
}

export interface SobrePremiosSobre extends Schema.Component {
  collectionName: 'components_sobre_premios_sobres';
  info: {
    displayName: 'PremiosSobre';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    lista: Attribute.Component<'sobre.premios-item-sobre', true> &
      Attribute.Required;
  };
}

export interface SobreSustentabilidadeSobreItens extends Schema.Component {
  collectionName: 'components_sobre_sustentabilidade_sobre_itens';
  info: {
    displayName: 'SustentabilidadeSobreItens';
  };
  attributes: {
    nome: Attribute.String;
    imagem: Attribute.Media & Attribute.Required;
  };
}

export interface SobreSustentabilidadeSobre extends Schema.Component {
  collectionName: 'components_sobre_sustentabilidade_sobres';
  info: {
    displayName: 'SustentabilidadeSobre';
    description: '';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    itens: Attribute.Component<'sobre.sustentabilidade-sobre-itens', true>;
  };
}

export interface SobreTecnologiaSobre extends Schema.Component {
  collectionName: 'components_sobre_tecnologia_sobres';
  info: {
    displayName: 'TecnologiaSobre';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    conteudo: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    desktopBackground: Attribute.Media & Attribute.Required;
    mobileBackground: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'central.assessoria-central': CentralAssessoriaCentral;
      'central.botoes-central': CentralBotoesCentral;
      'central.item-empresa-assessoria': CentralItemEmpresaAssessoria;
      'central.telefone-central': CentralTelefoneCentral;
      'common.botao': CommonBotao;
      'common.download-item': CommonDownloadItem;
      'common.icone-label': CommonIconeLabel;
      'common.image-icone-label': CommonImageIconeLabel;
      'common.label': CommonLabel;
      'common.seo': CommonSeo;
      'empreendimento.banner-empreendimento': EmpreendimentoBannerEmpreendimento;
      'empreendimento.bot': EmpreendimentoBot;
      'empreendimento.financiamento': EmpreendimentoFinanciamento;
      'empreendimento.fotos': EmpreendimentoFotos;
      'empreendimento.implantacao': EmpreendimentoImplantacao;
      'empreendimento.localizacao-endereco': EmpreendimentoLocalizacaoEndereco;
      'empreendimento.localizacao': EmpreendimentoLocalizacao;
      'empreendimento.plantas': EmpreendimentoPlantas;
      'empreendimento.status-obra-item': EmpreendimentoStatusObraItem;
      'empreendimento.status-obra': EmpreendimentoStatusObra;
      'empreendimentos.jeito-morar-item': EmpreendimentosJeitoMorarItem;
      'empreendimentos.jeito-morar': EmpreendimentosJeitoMorar;
      'home.banner-principal-item': HomeBannerPrincipalItem;
      'home.banner-principal': HomeBannerPrincipal;
      'home.onde-morar': HomeOndeMorar;
      'mcmv.banner-mcmv': McmvBannerMcmv;
      'mcmv.duvidas-mcmv': McmvDuvidasMcmv;
      'mcmv.faixa-items-mcmv': McmvFaixaItemsMcmv;
      'mcmv.faixas-mcmv': McmvFaixasMcmv;
      'mcmv.simulacao-mcmv': McmvSimulacaoMcmv;
      'mcmv.taxas-juros-mcmv': McmvTaxasJurosMcmv;
      'mcmv.vantagens-mcmv': McmvVantagensMcmv;
      'mcmv.vatagens-item-mcmv': McmvVatagensItemMcmv;
      'navegacao.footer-item': NavegacaoFooterItem;
      'navegacao.navbar-item': NavegacaoNavbarItem;
      'navegacao.navbar-sub-item': NavegacaoNavbarSubItem;
      'navegacao.social-item': NavegacaoSocialItem;
      'perguntas-frequentes.grupo': PerguntasFrequentesGrupo;
      'perguntas-frequentes.item': PerguntasFrequentesItem;
      'search.search-item': SearchSearchItem;
      'sobre.banner-sobre-destaques': SobreBannerSobreDestaques;
      'sobre.banner-sobre': SobreBannerSobre;
      'sobre.bloco-transformacao': SobreBlocoTransformacao;
      'sobre.historia-item-sobre': SobreHistoriaItemSobre;
      'sobre.historia-sobre': SobreHistoriaSobre;
      'sobre.inovacao-sobre': SobreInovacaoSobre;
      'sobre.meio-ambiente-item-sobre': SobreMeioAmbienteItemSobre;
      'sobre.meio-ambiente-sobre': SobreMeioAmbienteSobre;
      'sobre.onde-estamos-sobre': SobreOndeEstamosSobre;
      'sobre.premios-item-sobre': SobrePremiosItemSobre;
      'sobre.premios-sobre': SobrePremiosSobre;
      'sobre.sustentabilidade-sobre-itens': SobreSustentabilidadeSobreItens;
      'sobre.sustentabilidade-sobre': SobreSustentabilidadeSobre;
      'sobre.tecnologia-sobre': SobreTecnologiaSobre;
    }
  }
}
