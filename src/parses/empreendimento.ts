import { parseImage } from "./common/image";
import { parseSeo } from "./common/seo";

export const parseEmpreendimento = (empreendimento) => {
  console.log(empreendimento);
  return {
    slug: empreendimento.slug,
    nome: empreendimento.nome,
    nomeBreadcrumb: empreendimento.nomeBreadcrumb,
    statusObra: empreendimento.statusObra,
    statusVenda: empreendimento.statusVenda,
    fotosTitulo: empreendimento.fotosTitulo,
    plantasTitulo: empreendimento.plantasTitulo,
    tipoEmpreendimento: empreendimento.tipoEmpreendimento,
    seo: parseSeo(empreendimento.seo),
    cidade: {
      cidade: empreendimento.cidade.cidade,
      estado: empreendimento.cidade.estado,
      slug: empreendimento.cidade.slug,
    },
    bairro: {
      bairro: empreendimento.bairro.bairro,
      slug: empreendimento.bairro.slug,
    },
    banner: {
      titulo: empreendimento.banner.titulo,
      precoInicial: empreendimento.banner.precoInicial,
      iconesDestaque: empreendimento.banner.iconesDestaque,
      background: parseImage(empreendimento.banner.background),
      iconesDestaques: empreendimento.banner.iconesDestaques,
    },
    // banner: empreendimento.banner,
    fotosItens: empreendimento.fotosItens.map((item) => {
      return {
        id: item.id,
        titulo: item.titulo,
        grupos: item.grupos.map((grupo) => {
          return {
            icone: grupo.icone,
            label: grupo.label,
            imagem: parseImage(grupo.imagem),
          };
        }),
      };
    }),
    plantasItem: empreendimento.plantasItem.map((item) => {
      return {
        categoria: item.categoria,
        titulo: item.titulo,
        subtitulo: item.subtitulo,
        destaquesIcones: item.destaquesIcones,
        imagem: parseImage(item.imagem),
      };
    }),
    financiamento: empreendimento.financiamento,
    cta: {
      id: empreendimento.cta.id,
      tipo: empreendimento.cta.tipo,
      titulo: empreendimento.cta.titulo,
      conteudo: empreendimento.cta.conteudo,
      labelBotao: empreendimento.cta.labelBotao,
      urlBotao: empreendimento.cta.urlBotao,
    },
    implantacao: {
      titulo: empreendimento.implantacao.titulo,
      imagem: parseImage(empreendimento.implantacao.imagem),
      itens: empreendimento.implantacao.itens.map((item) => {
        return item.label;
      }),
    },
    localizacao: {
      tipoEndereco: empreendimento.localizacao.tipoEndereco,
      wazeLabel: empreendimento.localizacao.wazeLabel,
      wazeLink: empreendimento.localizacao.wazeLink,
      googleMapsLabel: empreendimento.localizacao.googleMapsLabel,
      googleMapsLink: empreendimento.localizacao.googleMapsLink,
    },
    valoresStatusObra: {
      titulo: empreendimento.valoresStatusObra.titulo,
      empreendimento: empreendimento.valoresStatusObra.empreendimento,
      percentual: empreendimento.valoresStatusObra.percentual,
      previsaoConclusao: empreendimento.valoresStatusObra.previsaoConclusao,
      urlVideoYoutube: empreendimento.valoresStatusObra.urlVideoYoutube,
      fases: empreendimento.valoresStatusObra.fases,
    },
  };
};

export const parseCardEmpreendimento = (empreendimento) => {
  return {
    id: empreendimento.id,
    slug: empreendimento.slug,
    nome: empreendimento.nome,
    status: empreendimento.statusObra,
    preco: empreendimento.banner.precoInicial,
    cidade: empreendimento.cidade.cidade,
    bairro: empreendimento.bairro.bairro,
    imagem: empreendimento.banner.background,
    destaques: empreendimento.banner.iconesDestaques,
  };
};
